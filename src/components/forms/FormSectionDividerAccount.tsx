const FormSectionDividerAccount = ({ title, hasDivider=false }: { title: string, hasDivider?: boolean }) => (
  <div className="w-full mt-6">
    {hasDivider && <hr />}
    <p className="font-semibold text-2xl text-(--spg-primary)1">{title}</p>
  </div>
);

export default FormSectionDividerAccount;