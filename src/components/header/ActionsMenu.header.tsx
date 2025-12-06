import clsx from "clsx";
import SPGLink from "../Link";
import Dropdown from "../dropdown/Dropdown";
import ButtonType from "@/models/buttonType";

import { useTranslations } from "next-intl";
import { Button, ButtonIcon } from "@/components/Button";
import { spgLinkClass, textButtonClass } from "@/utilities/constants";

/**
 * HeaderActionsMenu component
 * @prop {function} toggleMobileMenu - Function to set the isMobileMenuOpen state
 * @prop {string} user - The user name
 * @prop {boolean} isLoggedUser - If the user is logged or not
 * @prop {function} handleSession - Function to set the logged user state
 * @returns {React.ReactElement} A React element
 */
const HeaderActionsMenu = () => {
  const t = useTranslations("Header");

  const iconClass: string = "text-(--gray-30) mr-1";
  const dropdownClass: string = "flex items-center px-3 py-2";

  return (
    <div className="hidden md:flex justify-end gap-2 bg-(--black) py-[4px] px-6 items-center">
      <Button>
        <ButtonIcon className={clsx("icon-search", iconClass)} />
      </Button>
      <span className="bg-(--gray-70) h-[40px] w-[1px]" />
      <SPGLink path="/contact" className={spgLinkClass}>
        <p className={textButtonClass}>{t("getInTouch")}</p>
      </SPGLink>
      <SPGLink path="/where-to-buy" className={spgLinkClass} >
        <i className={clsx("icon-location", iconClass)} />
        <p className={textButtonClass}>{t("whereToBuy")}</p>
      </SPGLink>
      <SPGLink path={"/lists"} className={spgLinkClass} >
        <i className={clsx("icon-list", iconClass)} />
        <p className={textButtonClass}>{t("lists")}</p>
      </SPGLink>
      <Dropdown>
        <Dropdown.Toggle className={(dropdownClass)}>
          <i className={clsx("icon-language", iconClass)} />
          <p className={textButtonClass}>{t("int")}</p>
          <i className={clsx("icon-chevron-down ml-1", iconClass)} />
        </Dropdown.Toggle>
        {/* <Dropdown.Menu className="absolute bg-white border-(--gray-40) rounded-md overflow-hidden py-1 px-2 z-50 w-[80px]" customClasses>
          {/* TODO: Definir y modificar manejo de idiomas o navegación a diferente instancia
          <Dropdown.Item onClick={() => {}}>
            <p className={textButtonClass}>EN</p>
          </Dropdown.Item>
          <Dropdown.Item onClick={() => {}}>
            <p className={textButtonClass}>ES</p>
          </Dropdown.Item>
        </Dropdown.Menu> */}
      </Dropdown>
    </div>
  );
};

export default HeaderActionsMenu;
