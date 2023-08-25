import Image from 'next/image'
import LogoImageSlider from '../components/LogoImageSlider';
import ImageSlider from '../components/ImageSlider';

export default function Home() {
  return (
    <div>
      <h1>Responsive Logo Image Slider</h1>
      <LogoImageSlider />
      <h1>Responsive Image Slider</h1>
      <ImageSlider />
    </div>
  )
}
