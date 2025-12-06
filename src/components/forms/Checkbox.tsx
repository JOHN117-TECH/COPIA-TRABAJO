import clsx from "clsx";
import { MouseEvent } from "react";

interface CheckboxProps {
  name: string;
  item?: any;
  type?: string;
  quantity?: number;
  checked: boolean;
  className?: string;
  onClick?: (event: MouseEvent<HTMLElement>) => void;
}

const Checkbox = ({
  name,
  checked,
  quantity,
  type='',
  item,
  className = "",
  onClick = () => {},
}: CheckboxProps) => {

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
          className="overflow-hidden w-[85%] text-nowrap text-ellipsis flex items-center"
        >
          {type === 'colors' && 
            <div
              className={
                clsx(
                  "w-[20px] h-[20px] rounded-[30px] flex items-center justify-center mr-2",
                  {"border border-(--gray-40)":  item.value === "WHITE"}
                )}
              style={{ background: item.value == "BURGUNDY" ? "#800020" : item.value }}
            />
          }
          {name}
        </span>
        {
          quantity == 0 || quantity && 
            <span
              className="overflow-hidden text-nowrap mr-2 text-(--gray-40) font-extralight"
            >
              ({quantity})
            </span>
        }
        <input
          className="accent-(--input-checked-bg)"
          type="checkbox"
          checked={checked}
          onClick={(e) => {
            e.stopPropagation();
            onClick(e);
          }}
          onChange={() => {}}
          id={`check-${name}`}
        />
      </label>
    </div>
  );
};

export default Checkbox;
