import clsx from "clsx";
import SPGLink from "../Link";
import Image from "next/image";
import Dropdown from "../dropdown/Dropdown";
import ButtonType from "@/models/buttonType";
import GetCurrentInstance from "@/hooks/useGetCurrentInstance";

import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { Button, ButtonIcon } from "@/components/Button";
import { useGetMarketsQuery } from "@/graphql/markets/queries/getMarkets.generated";
import { iconChevronDownHeader, spgLinkClass, textButtonClass, textButtonClassHeader } from "@/utilities/constants";

interface NavigationProps {
  toggleMobileMenu: () => void;
  user: string;
  isLoggedUser: boolean;
  handleSession: (type: "login" | "logout") => void;
  isMobileMenuOpen: boolean
}

const Navigation: React.FC<NavigationProps> = ({
  toggleMobileMenu,
  user,
  isLoggedUser,
  handleSession,
  isMobileMenuOpen
}) => {
  const router = useRouter();
  const t = useTranslations("Header");
  const dropdownToggleClass = "flex items-center";
  const dropdownMenucls = "h-auto absolute! top-10 rounded-t-none!";

  const dropdownSustainability = [
    { title: t("sustainability"), link: "" },
    { title: t("environmentalImpact"), link: "/environmental-impact" },
    { title: t("socialImpact"), link: "/social-impact" },
  ];

  const dropdownAboutUs = [
    { title: t("weAreSpradling"), link: "" },
    { title: t("whyChooseSpradling"), link: "/why-choose-spradling" },
    { title: t("ourProductionUnits"), link: "/our-production-units" },
  ];

  const { data, loading, error } = useGetMarketsQuery({
    variables: {
      instanceIds: GetCurrentInstance(),
      saleable: true
    },
  });
  // TODO: Quitar data quemada de los dropdowns
  return (
    <>
      <div className="hidden md:flex bg-(--bg-header) text-(--fg-header) w-full justify-between items-center px-10 rounded-b-4xl">
        <SPGLink path={'/'}>
          <Image
            src={"/SpradlingLogoLight.svg"}
            className="header-logo w-[273px] cursor-pointer lg:w-[260px]"
            alt="Spradling Group"
            title="Spradling Group"
            width={260}
            height={80}
          />
        </SPGLink>
        <div className="flex items-center gap-x-4">
          {/* Products */}

          {/* <Dropdown hoverEnabled showAsAPopup>
            <Dropdown.Toggle hoverEnabled className={dropdownToggleClass}>
              <p className={textButtonClassHeader}>{t("products")}</p>
              <i className={iconChevronDownHeader} />
              <i className="text-(--dropdown-item-default-text) ic-chevron-down text-[10px] ml-2 relative inline-block top-[-1px] group-[.is-opened]:rotate-180 group-[.is-opened]:top-[-2px]" />
            </Dropdown.Toggle>
            <Dropdown.Menu customClasses={true} className={dropdownMenucls}>
              <Dropdown.Item>Informes</Dropdown.Item>
              <Dropdown.Item className={dropdownItemsCls}>Procesos</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown> */}
          <SPGLink path="/products" className={spgLinkClass}>
            <p className={textButtonClassHeader}>{t("products")}</p>
            <i className={iconChevronDownHeader} />
          </SPGLink>

          {/* Markets */}
          <Dropdown showAsAPopup>
            <Dropdown.Toggle className={dropdownToggleClass}>
              <p className={textButtonClassHeader}>{t("markets")}</p>
              <i className={iconChevronDownHeader} />
            </Dropdown.Toggle>
            <Dropdown.Menu className={dropdownMenucls}>
              {
                data?.markets?.edges?.map((market: any) => (
                  <SPGLink path={`/markets/${market.node.slug}`} key={market.node.id}>
                    <Dropdown.Item>{market.node.name}</Dropdown.Item>
                  </SPGLink>
                ))
              }
            </Dropdown.Menu>
          </Dropdown>

          {/* Sustainability */}
          <Dropdown showAsAPopup>
            <Dropdown.Toggle className={dropdownToggleClass}>
              <p className={textButtonClassHeader}>{t("sustainability")}</p>
              <i className={iconChevronDownHeader} />
            </Dropdown.Toggle>
            <Dropdown.Menu customClasses={true} className={dropdownMenucls}>
              {
                dropdownSustainability.map((item: any) => (
                  <SPGLink path={`/sustainability/${item.link || ""}`} key={item.link}>
                    <Dropdown.Item>{item.title}</Dropdown.Item>
                  </SPGLink>
                ))
              }
            </Dropdown.Menu>
          </Dropdown>

          {/* Knowledge Center */}
          {/* <Dropdown hoverEnabled showAsAPopup>
            <Dropdown.Toggle hoverEnabled className={dropdownToggleClass}>
              <p className={textButtonClassHeader}>{t("knowledgeCenter")}</p>
              <i className={iconChevronDownHeader} />
            </Dropdown.Toggle>
            <Dropdown.Menu customClasses={true} className={dropdownMenucls}>
              <Dropdown.Item>Informes</Dropdown.Item>
              <Dropdown.Item>Procesos</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown> */}

          {/* Inspiration */}
          {/* <Dropdown hoverEnabled showAsAPopup>
            <Dropdown.Toggle hoverEnabled className={dropdownToggleClass}>
              <p className={textButtonClassHeader}>{t("inspiration")}</p>
              <i className={iconChevronDownHeader} />
            </Dropdown.Toggle>
            <Dropdown.Menu customClasses={true} className={dropdownMenucls}>
              <Dropdown.Item>Informes</Dropdown.Item>
              <Dropdown.Item>Procesos</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown> */}

          {/* About */}
          <Dropdown showAsAPopup>
            <Dropdown.Toggle className={dropdownToggleClass}>
              <p className={textButtonClassHeader}>{t("about")}</p>
              <i className={iconChevronDownHeader} />
            </Dropdown.Toggle>
            <Dropdown.Menu customClasses={true} className={dropdownMenucls}>
              {
                dropdownAboutUs.map((item: any) => (
                  <SPGLink path={`/about/${item.link || ""}`} key={item.link}>
                    <Dropdown.Item>{item.title}</Dropdown.Item>
                  </SPGLink>
                ))
              }
            </Dropdown.Menu>
          </Dropdown>
          <span className="bg-(--divider-header) h-[60px] w-[1px]" />
          <section className="flex">
            <SPGLink path={"/cart"} className={spgLinkClass}>
              <i className="icon-cart text-(--icons-mobile-header) text-2xl mr-2" />
            </SPGLink>
            {isLoggedUser ? (
              <div className="w-10">
                <Dropdown className="absolute" hoverEnabled>
                  <Dropdown.Toggle className="text-spg-text rounded-full bg-(--background) h-10 w-10! flex items-center justify-center">
                    <p className={clsx(textButtonClass, "text-(--spg-link)")}>{user}</p>
                  </Dropdown.Toggle>
                  <Dropdown.Menu 
                    className="left-[-80%]"
                  >
                    <Dropdown.Item onClick={() => router.push("/account")}>
                      {t("myAccount")}
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => handleSession("logout")}>
                      {t("logout")}
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            ) : (
              <SPGLink path="/login" className={clsx(spgLinkClass, "pl-0")}>
                <span className="flex gap-x-2 rounded-full border border-(--icons-mobile-header) items-center justify-center py-[10px] px-4">
                  <i className="icon-user text-(--icons-mobile-header) text-2xl" />
                </span>
              </SPGLink>
            )}
          </section>
        </div>
      </div>
      <div className={clsx("md:hidden", isMobileMenuOpen ? "bg-(--background)" : "bg-transparent")}>
      <div className="md:hidden flex justify-between items-center bg-(--bg-header) text-(--fg-header) pl-6 rounded-b-4xl h-[72px]">
        <SPGLink path={'/'} onClick={toggleMobileMenu}>
          <Image
            src={"/SpradlingLogoLight.svg"}
            className="header-logo w-[222px] cursor-pointer"
            alt="Spradling Group"
            title="Spradling Group"
            width={260}
            height={80}
          /> 
        </SPGLink>
        <div className="flex items-center">
          <Button
            design={ButtonType.LINK_GREEN_BIG}
            className={"pl-2 pr-2"}
            // onClick={() => {toggleMobileMenu()}}
          >
            <ButtonIcon className={"icon-search mr-2 text-(--icons-mobile-header) text-xl"} />
          </Button>
          <span className="bg-(--divider-header) h-[70px] w-[1px]" />
          {
            isMobileMenuOpen ? (
              <Button
                design={ButtonType.LINK_GREEN_BIG}
                className={"pl-3 pr-2"}
                onClick={toggleMobileMenu}
              >
                <ButtonIcon className={"icon-close mr-2 text-(--icons-mobile-header) text-xl"} />
              </Button>
            ):(
              <Button
                design={ButtonType.LINK_GREEN_BIG}
                className={"pl-3 pr-2"}
                onClick={toggleMobileMenu}
              >
                <ButtonIcon className={"icon-menu mr-2 text-(--icons-mobile-header) text-xl"} />
              </Button>
            )
          }
        </div>
      </div>
      </div>
    </>
  );
};

export default Navigation;
