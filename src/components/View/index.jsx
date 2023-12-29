"use client";
import React, { useLayoutEffect, useRef } from "react";
import styles from "./style.module.css";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Index() {
  const background = useRef(null);
  const introImage = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: true,
        start: "bot",
        end: "+=300px",
      },
    });

    timeline
      .from(background.current, { clipPath: `inset(15%)` })
      .to(introImage.current, { height: "200px" }, 0);
  }, []);

  return (
    <div className={styles.homeHeader}>
      <div className={styles.backgroundImage} ref={background}>
        <Image
src='https://scontent.fdad2-1.fna.fbcdn.net/v/t31.18172-8/14524450_1390294237665804_5506503368185518266_o.jpg?_nc_cat=107&ccb=1-7&_nc_sid=4dc865&_nc_ohc=eQ_YnHUKwSgAX9-Bos4&_nc_ht=scontent.fdad2-1.fna&oh=00_AfBQFVBmzbBMJR9patvjNHz0ulc1d5rpdnItOXpwnQmAmQ&oe=65B5D5C3'
          fill={true}
          alt="background image"
          priority={true}
        />
      </div>
      <div className={styles.intro}>
        <div
          ref={introImage}
          data-scroll
          data-scroll-speed="0.3"
          className={styles.introImage}
        >
          {/* <Image
          src='https://scontent.fdad2-1.fna.fbcdn.net/v/t39.30808-6/344549423_158649693567077_7701483282113438514_n.jpg?stp=cp6_dst-jpg&_nc_cat=108&ccb=1-7&_nc_sid=3635dc&_nc_ohc=Ltch1eIAbaUAX--oOTS&_nc_ht=scontent.fdad2-1.fna&oh=00_AfAHL1MwhRV8XpW2jwtInO-2vtRD7BaznCLCfa0Vgvaeig&oe=659161B6'
            alt="intro image"
            fill={true}
            priority={true}
          /> */}
        </div>
        <h1 data-scroll data-scroll-speed="0.7">
          SONG HỶ
        </h1>
      </div>
    </div>
  );
}
