import { Carousel } from "react-responsive-carousel";

export default function () {
  return (
    <Carousel autoPlay showThumbs={false} infiniteLoop>
      <img src="/public/bg.png" />
      <img src="/public/bg.png" />
      <img src="/public/bg.png" />
    </Carousel>
  );
}
