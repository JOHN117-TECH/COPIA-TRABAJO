"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useVerifyUserMutation } from "@/graphql/auth/signup/mutations/verifyUser.generated";

interface Props {
  params: {
    locale: string;
    uid: string;
    token: string;
  };
}

export default function VerifyEmailPage({ params }: Props) {
  const { locale, uid, token } = params;
  const router = useRouter();

  const [verifyUserMutation] = useVerifyUserMutation();

  useEffect(() => {
    if (!uid || !token) {
      router.push(`/${locale}/signup/accounts/error`);
      return;
    }

    const run = async () => {
      try {
        const response = await verifyUserMutation({
          variables: {
            uid,
            token,
          },
        });

        if (response?.data?.verifyEmail?.success) {
          router.push(`/${locale}/signup/accounts/success`);
        } else {
          router.push(`/${locale}/signup/accounts/error`);
        }
      } catch (err) {
        router.push(`/${locale}/signup/accounts/error`);
      }
    };

    run();
  }, [uid, token, verifyUserMutation, router, locale]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 p-6">
      <div>
        <div className="animate-spin h-10 w-10 border-4 border-t-transparent rounded-full mx-auto"></div>
      </div>
    </div>
  );
}

