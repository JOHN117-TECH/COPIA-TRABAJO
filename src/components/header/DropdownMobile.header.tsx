import clsx from "clsx";
import SPGLink from "../Link";
import ButtonType from "@/models/buttonType";
import DropdownMenu from "./DropdownMenu.header";
import GetCurrentInstance from "@/hooks/useGetCurrentInstance";

import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { Button, ButtonIcon, ButtonText } from "@/components/Button";
import { useGetMarketsQuery } from "@/graphql/markets/queries/getMarkets.generated";
import { iconChevronDown } from "@/utilities/constants";

interface HeaderDropdownMobileProps {
  user?: string; 
  isLoggedUser: boolean;
  toggleMobileMenu: () => void;
  handleSession: (type: "login" | "logout") => void;
  handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

/**
 * @description Header dropdown menu component for mobile devices
 * @param {object} props - The component props
 * @param {function} props.handleSearch - Function to handle search input
 * @param {boolean} props.isLoggedUser - If the user is logged or not
 * @param {function} props.handleSession - Function to set the logged user state
 * @example <HeaderDropdownMobile handleSearch={handleSearch} user="VB" isLoggedUser={isLoggedUser} handleSession={handleSession} />
 * @returns {React.ReactElement} A React element
 */
const HeaderDropdownMobile: React.FC<HeaderDropdownMobileProps> = ({
  handleSearch,
  isLoggedUser,
  handleSession,
  toggleMobileMenu
}) => {
  const t = useTranslations("Header");
  const router = useRouter();
  const { data, loading, error } = useGetMarketsQuery({
    variables: {
       instanceIds: GetCurrentInstance(),
       saleable: true
    },
  });

  const handleNavigate = (path: string) => {
    toggleMobileMenu(); 
    router.push(path);
  };
  const textButtonClass: string = "text-(--gray-60) text-sm mb-0";
  const separatorMobile: string =
    "relative after:content-[''] after:block after:w-[1px] after:h-[40%] after:bg-gray-300 after:absolute after:top-[30%] after:right-0";

  const marketsRender = ()=> {
    return data?.markets?.edges.map((edge) => edge?.node && {node: {...edge.node, url: `/markets/${edge.node.slug}`}  }) 
  }

  const sustainabilityRender = () => {
    return [{node: {url: "/sustainability", name: t("sustainability")}}]
  }

  const aboutRender = () => {
    return [{node: {url: "/about", name: t("weAreSpradling")}},
      {node: {url: "/about/why-choose-spradling", name: t("whyChooseSpradling")}},
      {node: {url: "/about/our-production-units", name: t("ourProductionUnits")}},
    ]
  }

  const menuItems = [
    { label: "products", onClick: () => handleNavigate("/products") },
    { label: "markets", dataToRender: marketsRender()},
    { label: "sustainability", dataToRender: sustainabilityRender() },
    // { label: "knowledgeCenter" },
    // { label: "inspiration" },
    { label: "about", dataToRender: aboutRender() },
  ];

  return (
    <div className="md:hidden flex flex-col bg-(--background) min-h-screen">
      <div className="flex-1 overflow-y-auto pt-3">
        <div className="flex justify-between align-center pt-3">
          <section className="flex max-w-[90%]">
            <SPGLink 
              path="/where-to-buy" 
              onClick={() => toggleMobileMenu()} 
              className="flex items-center gap-2 py-2 px-3">
              <i className="icon-location text-xl text-(--black)" />
              <p className={textButtonClass}>{t("whereToBuy")}</p>
            </SPGLink>
            <SPGLink 
              path="/lists  " 
              onClick={() => toggleMobileMenu()} 
              className="flex items-center gap-2 py-2 px-3 border-x border-(--gray-30)">
              <i className="icon-list text-xl text-(--black)" />
            </SPGLink>
            <SPGLink 
              path="/cart  " 
              onClick={() => toggleMobileMenu()} 
              className="flex items-center gap-2 py-2 px-3">
              <i className="icon-cart text-xl text-(--black)" />
            </SPGLink>
          </section>
          <Button
            design={ButtonType.LINK_GREEN_BIG}
            className="flex items-center"
            customColors={true}
            onClick={() => {}}
          >
            <ButtonIcon className={"icon-language text-(--black) mr-0"} />
            <ButtonIcon className={iconChevronDown} />
          </Button>
        </div>

        <div className="mt-4">
          <DropdownMenu data={menuItems} toggleMobileMenu={toggleMobileMenu}/>
        </div>
      </div>

      <div className="flex flex-col p-4 gap-4 fixed bottom-0 left-0 w-full">
        <SPGLink path="/login">
          <Button
            design={ButtonType.FILLED_MEDIUM}
            className="w-full"
            customColors={true}
            onClick={toggleMobileMenu}
          >
            <ButtonIcon className={"icon-user"} />
            <ButtonText text={isLoggedUser ? t("myAccount") : t("login")} />
          </Button>
        </SPGLink>
        <div className={clsx({
          "flex justify-evenly": isLoggedUser
        })}>
          <SPGLink path="/contact" onClick={toggleMobileMenu}>
            <Button 
              design={ButtonType.OUTLINED_MEDIUM}
              className={clsx({
                "w-full": !isLoggedUser,
              })}
            >
              <ButtonIcon className="icon-comment" />
              <ButtonText text={t("getInTouch")} className=""/>
            </Button>
          </SPGLink>
          {isLoggedUser && (
            <Button
              design={ButtonType.LINK_GREEN_BIG}
              onClick={() => handleSession("logout")}
              className={clsx({
                "w-[40%]": isLoggedUser
              })}
            >
              <ButtonText text={t("logout")} />
              <ButtonIcon className="icon-arrow-outward" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeaderDropdownMobile;
