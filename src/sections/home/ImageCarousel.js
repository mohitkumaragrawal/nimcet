import Slider from 'react-slick';
import { useState, useRef } from 'react';
// import { Link as RouterLink } from 'react-router-dom';
// @mui
import { styled } from '@mui/system';
import { alpha, useTheme } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';

import { CarouselArrows } from '../../components/carousel';

import img1 from '../../assets/slider-images/img1.png';
import img2 from '../../assets/slider-images/img2.png';
import img3 from '../../assets/slider-images/img3.png';
import img4 from '../../assets/slider-images/img4.png';
import img5 from '../../assets/slider-images/img5.png';
import img6 from '../../assets/slider-images/img6.png';
import img7 from '../../assets/slider-images/img7.png';

const images = [img1, img2, img3, img4, img5, img6, img7];

const ImageStyle = styled('img')(({ theme }) => {
  const shadowCard = (opacity) =>
    theme.palette.mode === 'light'
      ? alpha(theme.palette.grey[500], opacity)
      : alpha(theme.palette.common.black, opacity);

  return {
    backgroundColor: 'white',
    borderRadius: '10px',
    width: '200px',
    boxShadow: `-4px 4px 8px 0 ${shadowCard(0.4)}`,
  };
});

export default function ImageCarousel() {
  const theme = useTheme();
  const carouselRef = useRef(null);

  const [selectContact, setSelectContact] = useState(0);

  const sliderSettings = {
    dots: false,
    arrows: false,
    slidesToShow: 2,
    centerMode: true,
    swipeToSlide: true,
    focusOnSelect: true,
    centerPadding: '0px',
    rtl: Boolean(theme.direction === 'rtl'),
    beforeChange: (current, next) => setSelectContact(next),
    responsive: [
      {
        breakpoint: theme.breakpoints.values.sm,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: theme.breakpoints.values.md,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: theme.breakpoints.values.xl,
        settings: {
          slidesToShow: 5,
        },
      },
    ],
  };

  const handlePrevious = () => {
    carouselRef.current?.slickPrev();
  };

  const handleNext = () => {
    carouselRef.current?.slickNext();
  };

  return (
    <Box sx={{ position: 'relative', padding: 1, margin: 7 }}>
      <CarouselArrows
        filled
        onPrevious={handlePrevious}
        onNext={handleNext}
        customIcon={'eva:arrow-ios-forward-fill'}
        sx={{
          '& .arrow': {
            mt: '-14px',
            '&.left': { left: -16 },
            '&.right': { right: -16 },
            '& button': { width: 28, height: 28, borderRadius: '50%', p: 0.75 },
          },
        }}
      >
        <Slider ref={carouselRef} {...sliderSettings}>
          {images.map((img, id) => (
            <Box key={id} padding={1} sx={{ width: '200px' }}>
              <ImageStyle src={img} alt="" sx={{ width: '200px', height: 'auto' }} width={200} height={100} />
            </Box>
          ))}
        </Slider>
      </CarouselArrows>
    </Box>
  );
}
