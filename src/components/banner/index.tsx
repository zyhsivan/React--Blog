import React, { memo } from "react";
import { Carousel } from "antd";
import { BannerWrapper } from "./style";

export default memo(function ZBanner() {
  return (
    <BannerWrapper>
      <Carousel
        effect="fade"
        className="banner"
        autoplay
        autoplaySpeed={5000}
        dotPosition="bottom"
      >
        <div className="c1"></div>
        <div className="c2"></div>
        <div className="c3"></div>
      </Carousel>
    </BannerWrapper>
  );
});
