"use client"

import NewsPreviewCard from "@/components/NewsPreviewCard";
import newsImage from "@/app/[locale]/(root)/assets/images/news.png"

type NewsSliderProps = {
  //@ts-ignore
  items: NewsArticlePreview[];
  currentIndex: number;
};

const NewsSlider: React.FC<NewsSliderProps> = ({
  items,
  currentIndex,
}) => {
  const cardWidth = 260; 
  return (
    <div className="flex gap-4 transition-transform duration-500 ease-in-out"
      style={{
        transform: `translateX(-${currentIndex * cardWidth}px)`
      }}
    >
      {items.map((item, idx) => (
        <div 
          key={idx} 
          className="flex-shrink-0"
          style={{
            width: `${cardWidth}px`,
          }}
        >
          <NewsPreviewCard
            //TODO: Quitar ts-ignore cuando ya no se use la imagen temporal
            //@ts-ignore
            img={newsImage}
            tag={item.tags.slice(0, 2)}
            title={item.title}
            summary={item.summary}
            slug={item.slug}
          />
        </div>
      ))}
    </div>
  );
};

export default NewsSlider;
