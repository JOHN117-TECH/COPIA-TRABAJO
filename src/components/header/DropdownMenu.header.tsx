import clsx from "clsx";
import SPGLink from "../Link";
import Dropdown from "../dropdown/Dropdown";
import ButtonType from "@/models/buttonType";

import { useTranslations } from "next-intl";
import { iconChevronDown } from "@/utilities/constants";
import { Button, ButtonIcon, ButtonText } from "@/components/Button";

interface DropdownMenuItem {
  label: string;
  onClick?: () => void;
  dataToRender?: any[];
  key?: string | number; 
}

interface DropdownMenuProps {
  data: DropdownMenuItem[];
  toggleMobileMenu: () => void;
}

/**
 * @description A dropdown menu component for displaying a list of items with a toggleable sub-menu. The component takes an array of objects, each with a label and a key. When an item is clicked, the sub-menu is toggled.
 * @param {object} props - The component props.
 * @param {array} props.data - An array of objects, each with a label and a key.
 * @example <DropdownMenu data={[{ label: "Header.products"}, { label: "Header.markets"}]} />
 * @returns {React.ReactElement} A React element.
 */
export default function DropdownMenu({ data, toggleMobileMenu }: DropdownMenuProps) {
  const t = useTranslations("Header");
  const dropdownMenucls =
    "min-w-[80px] h-auto top-1 border-(--gray-10) rounded-md overflow-y-auto! py-1";
  const dropdownItemsCls =
    "bg-(--background) hover:bg-(--dropdown-item-hover-bg) hover:text-(--dropdown-item-hover-text) px-4 py-1 text-(--dropdown-item-default-text) cursor-pointer text-sm min-w-[250px]";

  return (
    <div className="flex flex-col flex-1 overflow-auto">
      {data.map((item, index) => ( 
        <div key={index} className="flex flex-col">
        {item.onClick ? 
          <Button
            className={
              clsx(
                "flex justify-between! px-7 py-[18px] text-base! rounded-none bg-white mb-[1px] text-(--gray-70)"
              )
            }
            customColors={true}
            onClick={item.onClick}
          >
            <ButtonText text={t(item.label)} />
            <ButtonIcon className={clsx(iconChevronDown, "text-(--aqua-100)")} />
          </Button>
        : 
          <Dropdown className="relative">
            <Dropdown.Toggle 
              className={
                clsx("font-300 flex justify-between items-center px-[18px] py-[18px] rounded-none bg-white mb-[1px]",
                  {
                    "border-t": (index === 0)
                  }
                )}>
              <span>{t(item.label)}</span>
              <i className={clsx(iconChevronDown, "text-(--aqua-100)")} />
            </Dropdown.Toggle>
            <Dropdown.Menu customClasses={true} className={clsx("max-h-[170px]!", dropdownMenucls)}>
              {
                item.dataToRender?.map((data: any, idx) => (
                  <SPGLink path={data.node.url} key={idx} onClick={toggleMobileMenu}>
                    <Dropdown.Item className={clsx(dropdownItemsCls, { "border-b": item.dataToRender && item.dataToRender.length - 1 === idx  })}>{data.node.name}</Dropdown.Item>
                  </SPGLink>
                ))
              }
            </Dropdown.Menu>
          </Dropdown>
          
        }
        </div>
      ))}
    </div>
  );
}
