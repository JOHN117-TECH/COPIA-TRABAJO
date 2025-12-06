"useClient";

import "./account-information.css";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { useMeQuery } from "@/graphql/user/queries/me.generated";
import { Button, ButtonIcon, ButtonText } from "@/components/Button";
import { UpdateUserDocument } from "@/graphql/user/mutations/updateUser.generated";

import ButtonType from "@/models/buttonType";
import AccountInformationSkeleton from "./AccountInformationSkeleton";
import DynamicFormWrapper from "@/components/forms/DynamicFormWrapper";
import FormSectionDividerAccount from "@/components/forms/FormSectionDividerAccount";

//TODO: Migrar a DynamicFormWrapper
const AccountInformation = () => {
  const formId = "Q29udGFjdEZvcm1Ob2RlOjk=";
  const { data, loading, error, refetch } = useMeQuery();
  const tdf = useTranslations("DynamicFormsFields");
  const t = useTranslations("Account.AccountInformation");
  
  const [isEdit, setIsEdit] = useState(false);
  
  if (loading) return <AccountInformationSkeleton />;
  if (error) return <p>Error loading form</p>;

  const sectionDividers = {
    firstName: { component: <FormSectionDividerAccount title={t("profile")} /> },
    company: { component: <FormSectionDividerAccount title={t("companyDetails")} hasDivider /> },
    countryId: { component: <FormSectionDividerAccount title={t("location")} hasDivider /> },
    zipCode: { component: <FormSectionDividerAccount title={t("address")} hasDivider /> },
  };

  const handleSubmit = (response: any) => {
    setIsEdit(false);
    refetch();
  }

  const initialData = {
    firstName: data?.me?.firstName,
    lastName: data?.me?.lastName,
    phone: data?.me?.profile?.phone,
    company: data?.me?.profile?.company,
    countryId: data?.me?.profile?.city?.country?.id,
    zipCode: data?.me?.profile?.zipCode,
    address: data?.me?.profile?.address,
    position: data?.me?.profile?.position
  }

  return (
    <div className="md:px-[15%]">
      {
        !isEdit ? 
        <div className="account-form-group flex flex-col w-full m-auto gap-2">
          <div className="flex justify-between items-center w-full">
            <FormSectionDividerAccount title={t("profile")} />
            <Button 
              design={ButtonType.LINK_GREEN_SMALL}
              onClick={() => setIsEdit(true)}
            >
              <ButtonText text={t("edit")} />
              <ButtonIcon className="icon-edit" />
            </Button>
          </div>

          {/* Profile section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <section>
              <p>{tdf("firstName")}</p>
              <p className="text-(--spg-text-dark-secondary)">{data?.me?.firstName}</p>
            </section>
            <section>
              <p>{tdf("lastName")}</p>
              <p className="text-(--spg-text-dark-secondary)">{data?.me?.lastName}</p>
            </section>
            <section>
              <p>{tdf("phone")}</p>
              <p className="text-(--spg-text-dark-secondary)">{data?.me?.profile?.phone}</p>
            </section>
          </div>
          <hr className="border-(--spg-link) my-5 border-t-[1px] w-full"/>

          {/* Company section */}
          <FormSectionDividerAccount title={t("companyDetails")} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <section>
              <p>{tdf("companyName")}</p>
              <p className="text-(--spg-text-dark-secondary)">{data?.me?.profile?.company}</p>
            </section>
            <section>
              <p>{tdf("position")}</p>
              <p className="text-(--spg-text-dark-secondary)">{data?.me?.profile?.position}</p>
            </section>
            <section>
              <p>{tdf("companyType")}</p>
              <p className="text-(--spg-text-dark-secondary)">{data?.me?.profile?.companyType?.name}</p>
            </section>
          </div>

          {/* Location section */}
          <FormSectionDividerAccount title={t("location")} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <section>
              <p>{tdf("country")}</p>
              <p className="text-(--spg-text-dark-secondary)">{data?.me?.profile?.city?.country?.name}</p>
            </section>
            <section>
              <p>{tdf("state")}</p>
              <p className="text-(--spg-text-dark-secondary)">{data?.me?.profile?.city?.region?.name}</p>
            </section>
            <section>
              <p>{tdf("city")}</p>
              <p className="text-(--spg-text-dark-secondary)">{data?.me?.profile?.city?.name}</p>
            </section>
          </div>

          {/* Address section */}
          <FormSectionDividerAccount title={t("address")} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <section>
              <p>{tdf("zipCode")}</p>
              <p className="text-(--spg-text-dark-secondary)">{data?.me?.profile?.zipCode}</p>
            </section>
            <section>
              <p>{tdf("mainAddress")}</p>
              <p className="text-(--spg-text-dark-secondary)">{data?.me?.profile?.address}</p>
            </section>
          </div>
        </div>
        :
        <DynamicFormWrapper
          formId={formId}
          formQuery={UpdateUserDocument}
          onSubmit={handleSubmit} 
          sectionDividers={sectionDividers}
          extraVariables={{ userId: data?.me?.id }}
          className="bg-transparent! p-4 rounded shadow-none"
          initialData={initialData}
        >
          <section className="flex justify-between">
            <Button 
              onClick={() => setIsEdit(false)} 
              design={ButtonType.LINK_GREEN_MEDIUM}
            >
              <ButtonText text={t("cancel")} className="underline"/>
            </Button>
            <Button type="submit" design={ButtonType.FILLED_MEDIUM}>
              <ButtonText text={t("save")}/>
            </Button>
          </section>
        </DynamicFormWrapper>
      }
    </div>
  );
};

export default AccountInformation;
