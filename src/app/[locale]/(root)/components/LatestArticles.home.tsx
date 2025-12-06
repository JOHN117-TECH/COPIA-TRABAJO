"use client";

import ButtonType from "@/models/buttonType";
import PostCardSkeleton from "./PostCardSkeleton";
import NewsPreviewCard from "@/components/NewsPreviewCard";
import GetCurrentInstance from "@/hooks/useGetCurrentInstance";

import { useTranslations } from "next-intl";
import { Button, ButtonIcon, ButtonText } from "@/components/Button";
import { NewsArticlePreview } from "@/models/NewsArticlePreview.model";
import { usePostsQueryQuery } from "@/graphql/news/queries/getPosts.generated";
import useMediaQuery from "@/hooks/useMediaQuery";
import { Slider } from "@/components/slider/Slider";
import NewsSlider from "./NewsSlider";
import clsx from "clsx";
import newsImage from "@/app/[locale]/(root)/assets/images/news.png"

const LatestArticles = () => {
  const t = useTranslations("HomePage.latestArticles");
  const tmpImg = newsImage;

  const isTablet = useMediaQuery("(max-width: 768px)");
  const isSmallDesktop = useMediaQuery("(max-width: 1024px)");

  const { data, loading } = usePostsQueryQuery({
    variables: { first: 8, instances: GetCurrentInstance() },
  });

  const news = data?.posts?.edges.flatMap((item: any) => item.node);
  const sliceNews = news?.slice(1, 4)

  if (loading) return <PostCardSkeleton />;

  const isMobile = isSmallDesktop;

  let slidesToShow = 1.1;
  if (isTablet) slidesToShow = 1.6;
  if (isSmallDesktop && !isTablet) slidesToShow = 2.2;

  const splitText = (text: string, index: number) => {
    return (
      <div className="flex flex-col">
        <span className="block md:inline">{text.slice(0, index)}</span>
        <span className="block md:inline">{text.slice(index)}</span>
      </div>
    );
  };

  return (
    <div className="w-full mt-20">
      <div className={clsx("container mx-auto space-y-2", isMobile && "mb-8")}>
        <h2 className={clsx("font-normal", isMobile && "text-center text-3xl")}>{isMobile ? splitText(t("title"), 17) : t("title")}</h2>
      </div>

      {isMobile ? (
        <div className="relative w-full overflow-hidden pb-12">
          <Slider
            items={news ?? []}
            showDots
            hasExternalDots
            rounded
            allowOverflow
            showArrows={false}
          >
            <Slider.Custom isGroup slidesToShow={slidesToShow}>
              {/* @ts-ignore */}
              <NewsSlider />
            </Slider.Custom>
          </Slider>
        </div>
      ) : (
        <div className="container mx-auto my-10 grid gap-y-6 gap-x-8 lg:grid-cols-3">
          {sliceNews?.map((item: NewsArticlePreview, idx: number) => (
            <NewsPreviewCard
              key={`news-${idx}`}
              //TODO: Quitar ts-ignore cuando ya no se use la imagen temporal
              //@ts-ignore
              img={tmpImg}
              tag={item.tags.slice(0, 2)}
              title={item.title}
              summary={item.summary}
              slug={item.slug}
            />
          ))}
        </div>
      )}

      <section className={clsx("container mx-auto flex", isMobile ? "justify-center mt-8 mb-12" : "flex-1")}>
        <Button design={ButtonType.OUTLINED_MEDIUM} className="mx-auto border-(--aqua-130)">
          <ButtonText text={t("exploreAllNews")} className="mr-1 font-medium text-(--aqua-130)" />
          <ButtonIcon className="icon-arrow-outward text-2xl" />
        </Button>
      </section>
    </div>
  );
};


export default LatestArticles;
