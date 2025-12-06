import React, { FC, useEffect, useState } from "react";

interface PasswordValidationStatusProps {
  password?: string;
  confirmPassword?: string;
  mode: "rules" | "match";
}

type ValidationStatus = "idle" | "checking" | "valid" | "invalid";

const PasswordValidationStatus: FC<PasswordValidationStatusProps> = ({ password, confirmPassword, mode }) => {
  const [status, setStatus] = useState<ValidationStatus>("idle");

  useEffect(() => {
    if (mode === "rules") {
      if (!password) return setStatus("idle");
      setStatus("checking");

      const timeout = setTimeout(() => {
        const isValid =
          password.length >= 8 &&
          /[A-Z]/.test(password) &&
          /[a-z]/.test(password) &&
          /[0-9]/.test(password) &&
          /[^A-Za-z0-9]/.test(password);

        setStatus(isValid ? "valid" : "invalid");
      }, 400);

      return () => clearTimeout(timeout);
    }

    if (mode === "match") {
      if (!confirmPassword) return setStatus("idle");
      setStatus(password === confirmPassword ? "valid" : "invalid");
    }
  }, [password, confirmPassword, mode]);

  if (status === "idle") return null;

  return (
    <div className="pl-1 flex items-center">
      {status === "checking" && (
        <i className="icon-refresh text-2xl animate-spin text-(--gray-60)" />
      )}
      {status === "valid" && (
        <i className="icon-check_circle text-2xl text-(--notifications-success-100)" />
      )}
      {status === "invalid" && (
        <div className="flex justify-center items-center border rounded-full w-[18px] h-[18px] ml-1 border-(--notifications-error-100)">
          <i className="icon-close text-xs leading-thin text-(--notifications-error-100)" />
        </div>
      )}
    </div>
  );
};

export default PasswordValidationStatus;
