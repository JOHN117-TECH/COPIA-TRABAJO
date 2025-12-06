'use client';

import useMediaQuery from '@/hooks/useMediaQuery';

import { Slider } from '@/components/slider/Slider';
import { SLIDES_BANNER_HOME } from '../assets/constants/constants';

import MixedCarousel from '@/components/slider/Slider-Test';
import HomeSlider from '@/components/slider/Slider-Test-2';

const items = SLIDES_BANNER_HOME.map((slide) => ({
  type: slide.type as 'image' | 'video',
  src: slide.src,
  //description: slide.description,
  //vimeoId: slide.vimeoId,
}));
const MainSlider = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  //console.log('ITEMS: ' + items);
  return (
    <>
      {/* <Slider 
      whiteDots
      whiteArrows 
      fullWidthDots 
      showArrows={!isMobile}
      items={SLIDES_BANNER_HOME} 
    >
      <Slider.Simple hasTranslation customHeight="h-[90vh]"/>
    </Slider> */}
      <div>
        {/* <MixedCarousel items={items} /> */}
        <HomeSlider items={SLIDES_BANNER_HOME} />
      </div>
    </>
  );
};

export default MainSlider;
