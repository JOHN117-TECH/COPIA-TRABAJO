import clsx from "clsx";
import { useContext } from "react";
import SelectContext from "@/hooks/SelectContext";
import CheckOptionProps from "@/models/checkOption.model";

const CheckOption = ({
  name,
  value,
  className = "",
  onClick = () => {},
}: CheckOptionProps) => {
  const context = useContext(SelectContext);

  return (
    <div
      className={clsx({
        "flex justify-between gap-1": true,
        [className]: className.length > 0,
      })}
    >
      <label
        className={clsx({
          "cursor-pointer text-sm justify-between flex w-full": true,
        })}
        htmlFor={`check-${name}`}
      >
        <span
          className="overflow-hidden w-[80%] text-nowrap text-ellipsis"
        >
          {name}
        </span>
        <input
          className="accent-(--input-checked-bg)"
          type="checkbox"
          checked={context?.value.has(value)}
          onClick={(e) => {
            context?.updateSelectValue(value);
            onClick(e);
          }}
          onChange={() => {}}
          id={`check-${name}`}
        />
      </label>
    </div>
  );
};

export default CheckOption;
