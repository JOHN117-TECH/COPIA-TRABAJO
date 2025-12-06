import ResetPassword from "./components/ResetPassword";
import { PageProps } from "../../../../../../../.next/types/app/[locale]/(auth)/password-reset/[uid]/[token]/page";

const PasswordReset = async({ params }: PageProps) => {
  const paramsValue = await params;
  const { uid, token } = paramsValue;

  return <ResetPassword uid={uid} token={token} />;
};

export default PasswordReset;
