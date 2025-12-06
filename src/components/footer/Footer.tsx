"use client"; 

import SPGLink from "@/components/Link";
import { GetSocialMediaQuery, useGetSocialMediaQuery } from "@/graphql/socialMedia/getSocialMedia.generated";
import Image from "next/image";
import { useTranslations } from 'next-intl';
import GetCurrentInstance from "@/hooks/useGetCurrentInstance";
import { Button, ButtonIcon, ButtonText } from "@/components/Button";
import ButtonType from "@/models/buttonType";

const Footer = () => {
  const t = useTranslations("Footer");
  const { data, loading, error } = useGetSocialMediaQuery({
    variables: {
      instanceId: GetCurrentInstance()
    },
  });
  const socialData: GetSocialMediaQuery["instance"] = data?.instance; 
  
  return (
    <footer className="bg-(--spg-primary) text-white py-10 rounded-t-3xl relative z-10 -mt-12">
      <div className="container mx-auto">
        <div className="pb-10">
          <SPGLink path={"/"}>
            <Image
              src={"/Logo.svg"}
              className="w-[260px] cursor-pointer lg:w-[260px]"
              alt="Spradling Group"
              title="Spradling Group"
              width={260}
              height={80}
            />
          </SPGLink>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          <div>
            <h2 className="text-white text-sm mb-4">{t("productCatalog")}</h2>
            <div className="flex flex-col gap-y-2">
              <SPGLink path="/sustainability" className="mb-2">
                <Button className="p-0!" design={ButtonType.LINK_WHITE_SMALL}>
                  <ButtonText className="underline font-medium" text={t("sustainability")}/>
                </Button>
              </SPGLink>
              <SPGLink path="/where-to-buy" className="mb-2">
                <Button className="p-0!" design={ButtonType.LINK_WHITE_SMALL}>
                  <ButtonText className="underline font-medium" text={t("whereToBuy")}/>
                </Button>
              </SPGLink>
              <SPGLink path="/contact" className="mb-2">
                <Button className="p-0!" design={ButtonType.LINK_WHITE_SMALL}>
                  <ButtonText className="underline font-medium" text={t("contact")}/>
                </Button>
              </SPGLink>
            </div>
          </div>
          <div>
            <h2 className="text-white text-sm mb-4">{t("knowledgeCenter")}</h2>
            <div className="flex flex-col gap-y-2">
              <SPGLink path="/resources" className= "mb-2">
                <Button className="p-0!" design={ButtonType.LINK_WHITE_SMALL}>
                  <ButtonText className="underline font-medium" text={t("resources")}/>
                </Button>
              </SPGLink>
              <SPGLink path="/faqs" className="mb-2">
                <Button className="p-0!" design={ButtonType.LINK_WHITE_SMALL}>
                  <ButtonText className="underline font-medium" text={t("faqs")}/>
                </Button>
              </SPGLink>
              <SPGLink path="/news" className="mb-2">
                <Button className="p-0!" design={ButtonType.LINK_WHITE_SMALL}>
                  <ButtonText className="underline font-medium" text={t("news")}/>
                </Button>
              </SPGLink>
            </div>
          </div>
          <div>
            <h2 className="text-white text-sm mb-4">{t("about")}</h2>
            <div className="flex flex-col gap-y-2">
              <SPGLink path="/about" className="mb-2">
                <Button className="p-0!" design={ButtonType.LINK_WHITE_SMALL}>
                  <ButtonText className="underline font-medium" text={t("weAreSpradling")}/>
                </Button>
              </SPGLink>
              <SPGLink path="/about/why-choose-spradling" className="mb-2">
                <Button className="p-0!" design={ButtonType.LINK_WHITE_SMALL}>
                  <ButtonText className="underline font-medium" text={t("whyChooseUs")}/>
                </Button>
              </SPGLink>
              <SPGLink path="/about/our-production-units" className="mb-2">
                <Button className="p-0!" design={ButtonType.LINK_WHITE_SMALL}>
                  <ButtonText className="underline font-medium" text={t("productionUnits")}/>
                </Button>
              </SPGLink>
              <SPGLink path="/about/our-technologies" className="mb-2">
                <Button className="p-0!" design={ButtonType.LINK_WHITE_SMALL}>
                  <ButtonText className="underline font-medium" text={t("ourTechnologies")}/>
                </Button>
              </SPGLink>
              <SPGLink path="/about/spradling-group" className="mb-2">
                <Button className="p-0!" design={ButtonType.LINK_WHITE_SMALL}>
                  <ButtonText className="underline font-medium mr-1" text={"Spradling® Group"}/>
                  <ButtonIcon className="icon-arrow-outward text-white text-xl"/>
                </Button>
              </SPGLink>
            </div>
          </div>
          <div>
            <h2 className="text-white text-sm mb-4">{t("otherSites")}</h2>
            <div className="flex flex-col gap-y-2">
              <SPGLink path="https://spradling.latam" className="mb-2">
                <Button className="p-0!" design={ButtonType.LINK_WHITE_SMALL}>
                  <ButtonText className="underline font-medium mr-1" text={"Spradling® LATAM"}/>
                  <ButtonIcon className="icon-arrow-outward text-white text-xl"/>
                </Button>
              </SPGLink>
              <SPGLink path="https://spradling.mexico" className="mb-2">
                <Button className="p-0!" design={ButtonType.LINK_WHITE_SMALL}>
                  <ButtonText className="underline font-medium mr-1" text={"Spradling® MEXICO"}/>
                  <ButtonIcon className="icon-arrow-outward text-white text-xl"/>
                </Button>
              </SPGLink>
              <SPGLink path="https://spradling.usa" className="mb-2">
                <Button className="p-0!" design={ButtonType.LINK_WHITE_SMALL}>
                  <ButtonText className="underline font-medium mr-1" text={"Spradling® USA"}/>
                  <ButtonIcon className="icon-arrow-outward text-white text-xl"/>
                </Button>
              </SPGLink>
              <SPGLink path="https://spradling.europe" className="mb-2">
                <Button className="p-0!" design={ButtonType.LINK_WHITE_SMALL}>
                  <ButtonText className="underline font-medium mr-1" text={"Spradling® EUROPE"}/>
                  <ButtonIcon className="icon-arrow-outward text-white text-xl"/>
                </Button>
              </SPGLink>
            </div>
          </div>
        </div>
        <hr className="my-8 border border-(--gray-60)" />
        <div className="flex flex-col lg:flex-row justify-between items-center text-sm gap-4">
          <div className="flex items-center justify-center gap-3">
            <SPGLink path={socialData?.facebookUrl || "#"} className="mb-2">
              <Button className="p-0!" design={ButtonType.FILLED_AQUA_BIG_SQUARE}>
                <ButtonIcon className="icon-facebook text-2xl"/>
              </Button>
            </SPGLink>
            <SPGLink path={socialData?.linkedinUrl || "#"} className="mb-2">
              <Button className="p-0!" design={ButtonType.FILLED_AQUA_BIG_SQUARE}>
                <ButtonIcon className="icon-linkedin text-2xl"/>
              </Button>
            </SPGLink>
            <SPGLink path={socialData?.instagramUrl || "#"} className="mb-2">
              <Button className="p-0!" design={ButtonType.FILLED_AQUA_BIG_SQUARE}>
                <ButtonIcon className="icon-instagram text-2xl"/>
              </Button>
            </SPGLink>
          </div>
          <div className="flex flex-col items-start lg:flex-row text-sm text-white gap-2 lg:gap-0">
            <div className="flex flex-wrap pt-3 lg:pt-0 lg:justify-start lg:flex-nowrap text-left">
              <span className="font-normal">Copyright © 2025 Spradling</span>
              <span className="border-l border-gray-500 h-3 mx-2"></span>
              <span className="font-normal">{t("allRightsReserved")}</span>
            </div>
            <span className="hidden lg:block border-l border-gray-500 h-4 mx-4"></span>
            <div className="flex flex-nowrap pt-2 lg:pt-0 lg:justify-start">
              <SPGLink path="/privacy-policy" className="text-sm text-white font-medium">
                <Button className="p-0!" design={ButtonType.LINK_WHITE_SMALL}>
                  <ButtonText className="underline font-medium" text={t("privacyPolicy")}/>
                </Button>
              </SPGLink>
              <span className="border-l border-gray-500 h-4 mx-3"></span>
              <SPGLink path="/cookies-policy" className="text-sm text-white font-medium">
                <Button className="p-0!" design={ButtonType.LINK_WHITE_SMALL}>
                  <ButtonText className="underline font-medium" text={t("cookiesPolicy")}/>
                </Button>
              </SPGLink>
              <span className="border-l border-gray-500 h-4 mx-3"></span>
              <SPGLink path="/terms-of-sale" className="text-sm text-white font-medium">
                <Button className="p-0!" design={ButtonType.LINK_WHITE_SMALL}>
                  <ButtonText className="underline font-medium" text={t("termsOfSale")}/>
                </Button>
              </SPGLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;