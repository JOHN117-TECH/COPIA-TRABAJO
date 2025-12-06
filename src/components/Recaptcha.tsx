"use client";
import React, { useRef } from "react";
//@ts-ignore
import ReCAPTCHA from "react-google-recaptcha";

interface RecaptchaProps {
  onVerify: (token: string | null) => void;
  className?: string;
}

const Recaptcha: React.FC<RecaptchaProps> = ({ onVerify, className }) => {
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleChange = (token: string | null) => {
    onVerify(token);
  };

  return (
    <div className={`flex justify-center ${className || ""}`}>
      <ReCAPTCHA
        ref={recaptchaRef}
        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string}
        onChange={handleChange}
        onErrored={() => onVerify(null)}
        onExpired={() => onVerify(null)}
        theme="light"
      />
    </div>
  );
};

export default Recaptcha;
