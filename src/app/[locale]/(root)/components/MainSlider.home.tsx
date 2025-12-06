'use client';

import useMediaQuery from '@/hooks/useMediaQuery';
import { SLIDES_BANNER_HOME } from '../assets/constants/constants';
import HomeSlider from '@/components/slider/Slider-Test-2';

const MainSlider = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  return (
    <>
      <HomeSlider items={SLIDES_BANNER_HOME} />
    </>
  );
};

export default MainSlider;
