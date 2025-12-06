interface FormSectionDividerProps {
  title: string;
  showLine?: boolean;
}

const FormSectionDivider = ({ title, showLine = true }: FormSectionDividerProps) => (
  <div className="w-full">
    {showLine && <hr className="mb-2" />}
    <p className="text-(--aqua-100) text-sm font-bold mb-1">{title}</p>
  </div>
);

export default FormSectionDivider;