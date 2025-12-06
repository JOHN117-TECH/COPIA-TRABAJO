"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { toast, Toaster } from "sonner";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { useEffect, useRef, useState } from "react";
import { useNewsletterMutation } from "@/graphql/news/mutations/addSubscriber.generated";
import { Toast } from "@/components/Toast";
import { Button, ButtonText } from "@/components/Button";
import ButtonType from "@/models/buttonType";
import useMediaQuery from "@/hooks/useMediaQuery";
import clsx from "clsx";

const NewsletterForm = () => {
  const t = useTranslations("Newsletter");
  const [formDisabled, setFormDisabled] = useState(false);
  const emailRef = useRef<HTMLInputElement>(null);
  const isMobile = useMediaQuery("(max-width: 900px)");

  const [newsletterMutation, { data, loading, error }] = useNewsletterMutation();

  const schema = z.object({
    email: z.string().email({ message: "Invalid email address" }),
  });

  const { handleSubmit, register, setValue, watch, formState } = useForm<z.infer<typeof schema>>(
    {
      resolver: zodResolver(schema),
      mode: "onSubmit",
      reValidateMode: "onSubmit",
    },
  );

  const emailValue = watch("email");

  useEffect(() => {
    if (formState.submitCount > 0 && formState.errors.email) {
      Toast.error(formState.errors.email.message as string);
    }
  }, [formState.submitCount]);


  // useEffect(() => {
  //   if (formState.submitCount > 0 && formState.errors.email) {
  //     Toast.error(formState.errors.email.message as string);
  //   }
  // }, [formState.submitCount, formState.errors.email]);


  const formSubmit: SubmitHandler<z.infer<typeof schema>> = async (data) => {
    try {
      if (loading) {
        setFormDisabled(true);
        toast.loading("Sending data...");
      }

      if (error && !formState.errors.email) {
        // Toast.error("An error ocurred when sending suscription");
        setFormDisabled(false);
      }
      //TODO: Definir si el nombre es requerido
      const res = await newsletterMutation({
        variables: {
          email: data.email,
          firstName: "Test",
          lastName: "Sub test",
        },
      });

      if (res.data?.createEmailSubscriber?.success) {
        Toast.success("Newsletter subscribed with success");
      }
    } catch (err: unknown) {
      const message = (err as any)?.graphQLErrors?.[0]?.message ?? "An error ocurred when sending suscription";
      Toast.error(message);
      console.error(err);
    } finally {
      setFormDisabled(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(formSubmit)}
      className={clsx("w-full mt-5 lg:mt-0 content-center text-right flex items-start gap-4", 
        isMobile ? "flex-col" : "flex-row items-center gap-0 pl-7 w-[52%]"
      )}
      noValidate
    >
      <label htmlFor="search" className="mb-2 text-sm sr-only">
        {t("search")}
      </label>
      <div className={clsx("relative flex w-full", isMobile ? "flex-col gap-6" : "flex-row")}>
        <input
          type="search"
          id="search"
          className="block w-full font-light py-2 text-base border-b border-(--white) text-(--white) focus:border-b focus:border-(--white)"
          placeholder="Enter your email address"
          required
          {...register("email", { required: true })}
          ref={(e) => {
            register("email").ref(e);
            emailRef.current = e;
          }}
        />
        {emailValue?.length > 0 && (
          <button
            type="button"
            className="absolute right-34 top-1/2 -translate-y-1/2 text-white"
            onClick={() => {
              setValue("email", "");        
              emailRef.current?.focus();
            }}
          >
            <i className="icon-close text-white text-lg"></i>
          </button>
        )}
        <Button type="submit" disabled={formDisabled} design={ButtonType.OUTLINED_WHITE_MEDIUM} className={clsx("font-medium w-fit", !isMobile && "ml-5")}>
          <ButtonText text={t("subscribe")} />
        </Button>
      </div>
    </form>
  );
};

export default NewsletterForm;
