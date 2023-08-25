"use client";
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useMediaQuery, Card, CardContent, Box, useTheme} from '@mui/material';
import Image from 'next/image';


const ImageSlider: React.FC = () => {

// Definign diferent screen sizes using simple media query using React hook
  const isMobile = useMediaQuery('(max-width:767px)');
  const isTablet = useMediaQuery('(min-width:768px) and (max-width:1023px)');
  const isWeb = useMediaQuery('(min-width:1024px)');


//use a breakpoint helper to achieve the same thing in MUI
    // const theme = useTheme(); // Get the theme
    // const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    // const isTablet = useMediaQuery(theme.breakpoints.up('md'));
    // const isWeb = useMediaQuery(theme.breakpoints.up('lg'));

  const settings: SliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 1 : isTablet ? 1 : isWeb ? 2 : 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1000,
  };

   /*
  isMobile ? 1 -  if the screen width is within the mobile range, the slidesToShow value will be 1, which means only one item will be displayed in the carousel.
  isTablet ? 2 - if the screen width is within the tablet range, the slidesToShow value will be 2, which means two items will be displayed in the carousel.
  isWeb ? 3 - if the screen width is within the web range (a wider view), the slidesToShow value will be 3, which means three items will be displayed in the carousel.
  5 is the fallback value. If none of the conditions above are met, the slidesToShow value will be set to 5, which means five items will be displayed in the carousel.
  */

  const cardStyles: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'white', // Set the border color to white
    borderWidth: '0px', // Set border width to 0
    borderRadius: '0px', // Set border radius to 0
    boxShadow: 'none', // Remove any box shadow
  };

  const images = [
    '/images/rooms/room1.jpg',
    '/images/rooms/room2.jpg',
    '/images/rooms/room3.jpg',
    '/images/rooms/room4.jpg',
    '/images/rooms/room5.jpg',
];

  const getImageSize = () => {
    if (isMobile) {
        return { width: 300, height: 160 }; // Adjust the size for mobile
    } else if (isTablet) {
        return { width: 550, height: 340 }; // Adjust the size for tablet
    } else if (isWeb) {
        return { width: 900, height: 480 }; // Adjust the size for web
    } else {
        return { width: 300, height: 200 }; // Default size
    }
};

  return (
    <Slider {...settings}>
      <Box>
        <Card style={cardStyles}>
        <Image
                            src="/images/rooms/room1.jpg"
                            alt="Image 1"
                            width={getImageSize().width}
                            height={getImageSize().height}
                        />
        </Card>
      </Box>
      <Box>
        <Card style={cardStyles}>
        <Image
                            src="/images/rooms/room2.jpg"
                            alt="Image 1"
                            width={getImageSize().width}
                            height={getImageSize().height}
                        />
        </Card>
      </Box>
      <Box>
        <Card style={cardStyles}>
        <Image
                            src="/images/rooms/room3.jpg"
                            alt="Image 1"
                            width={getImageSize().width}
                            height={getImageSize().height}
                        />
        </Card>
      </Box>
      <Box>
        <Card style={cardStyles}>
        <Image
                            src="/images/rooms/room4.jpg"
                            alt="Image 1"
                            width={getImageSize().width}
                            height={getImageSize().height}
                        />
        </Card>
      </Box>
      <Box>
        <Card style={cardStyles}>
        <Image
                            src="/images/rooms/room5.jpg"
                            alt="Image 1"
                            width={getImageSize().width}
                            height={getImageSize().height}
                        />
        </Card>
      </Box>
    </Slider>
  );
};

interface SliderSettings {
  dots: boolean;
  infinite: boolean;
  speed: number;
  slidesToShow: number;
  slidesToScroll: number;
  autoplay: boolean;
  autoplaySpeed: number;
}

export default ImageSlider;
