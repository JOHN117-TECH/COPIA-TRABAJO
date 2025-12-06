"use client";
import { useRef, useState } from "react";
import { useTranslations } from "next-intl";
import ButtonType from "@/models/buttonType";
import WhereToBuyMap from "./WhereToBuyMap.home";
import { OfficeNode } from "@/graphql/generated/types";
import { Button, ButtonText } from "@/components/Button";
import { FilterOfficesToMap } from "@/hooks/FilterOfficesToMap";
import { useGetStoresByInstanceQuery } from "@/graphql/stores/queries/getStoresByInstance.generated";
import GetCurrentInstance from "@/hooks/useGetCurrentInstance";
import useMediaQuery from "@/hooks/useMediaQuery";
import clsx from "clsx";

const WhereToBuy = () => {
  const t = useTranslations("WhereToBuy");
  const [postalCode, setPostalCode] = useState<string | undefined>();
  const inputRef = useRef<HTMLInputElement>(null);
  const isMobile = useMediaQuery("(max-width: 900px)")
  const { data, loading, error } = useGetStoresByInstanceQuery({
    variables: {
      instanceId: GetCurrentInstance(),
      active: true
    }
  });

  return (
    <section className={clsx("flex content-center bg-(--aqua) w-full relative bottom-[-15px] py-16", !isMobile && "py-0")}>
      <div className={clsx("where-to-buy container w-full flex gap-[80px] text-white mx-auto min-h-[500px]", 
        isMobile ? "flex-col" : "flex-row"
      )}>
        <div className={clsx("flex flex-col justify-center", !isMobile && "w-[45%]")}>
          <h2 className="text-white font-normal">{t("title")}</h2>
          <p className="text-white pt-3">{t("description")}</p>

          <form className="mt-5" noValidate>
            <label htmlFor="search" className="mb-2 text-sm sr-only">
              Search
            </label>
            <div className="relative">
              <input
                type="search"
                id="search"
                ref={inputRef}
                className="block w-full font-light py-2 text-base border-b border-(--white) text-(--white) focus:border-b focus:border-(--white)"
                placeholder={t("searchPlaceholder")}
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
                maxLength={6}
                required
              />
              { postalCode && postalCode.length > 0 && (
                <button
                  type="button"
                  className="absolute right-1 top-1/5 -translate-y-1/2 text-white"
                  onClick={() => { 
                    setPostalCode("")
                    inputRef.current?.focus();
                  }}
                >
                  <i className="icon-close text-white text-lg"></i>
                </button>
              )}
              <Button design={ButtonType.OUTLINED_WHITE_MEDIUM} className={"font-medium mt-6"}>
                <ButtonText text={t("find")} />
              </Button>
            </div>
          </form>
        </div>
        <div className={clsx("flex justify-center items-center", !isMobile && "w-[55%] py-6 pl-6")}>
          <div className="w-full max-w-[650px] h-[380px] rounded-4xl overflow-hidden shadow-lg relative">    
            <WhereToBuyMap 
              postalCode={postalCode} 
              offices={
                FilterOfficesToMap(
                  data?.stores?.edges?.map(e => e?.node) as (OfficeNode | null | undefined)[]
                )
              } 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhereToBuy;
