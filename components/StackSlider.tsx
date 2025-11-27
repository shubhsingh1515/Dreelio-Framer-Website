"use client";

import React from "react";
import Marquee from "react-fast-marquee";

export function StackSlider() {
  return (
    <div className="py-5 lg:py-10 ">
      <p className="text-center text-gray-600 mb-12 text-sm md:text-base">
        Be part of the 100+ businesses transforming their digital presence.
      </p>
      <Marquee gradient={false} speed={80} pauseOnHover={true}>
        <img
          src="/communityLogo/dev_to.webp"
          alt="techStack 1"
          className="h-16 mx-8"
        />
        <img src="/techStack/n8n.svg" alt="techStack 2" className="h-16 mx-8" />
        <img
          src="/communityLogo/github_logo.png"
          alt="techStack 3"
          className="h-16 mx-8"
        />
        <img
          src="/communityLogo/linkedIn_Icon.svg"
          alt="techStack 4"
          className="h-16 mx-8"
        />
        <img
          src="/communityLogo/product_hunt.png"
          alt="techStack 3"
          className="h-16 mx-8"
        />
        <img
          src="/communityLogo/Reddit_Logo.webp"
          alt="techStack 3"
          className="h-16 mx-8"
        />
        <img
          src="/communityLogo/Slack_logo.png"
          alt="techStack 3"
          className="h-16 mx-8"
        />
        <img
          src="/communityLogo/Stack_Overflow.png"
          alt="techStack 3"
          className="h-16 mx-8"
        />
        <img
          src="/communityLogo/x_logo.png"
          alt="techStack 3"
          className="h-16 mx-8"
        />
        <img
          src="/communityLogo/linkedin.webp"
          alt="techStack 3"
          className="h-16 mx-8"
        />
      </Marquee>
    </div>
  );
}

export default StackSlider;
