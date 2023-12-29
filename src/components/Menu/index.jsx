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
        start: "top",
        end: "+=500px",
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
        src='https://i.pinimg.com/564x/b1/1f/b2/b11fb27ce78ccd14afdb15aaa7c9a972.jpg'
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
            src="https://scontent.fdad1-1.fna.fbcdn.net/v/t39.30808-6/405144930_926337558992565_5123645920419646263_n.jpg?stp=dst-jpg_p600x600&_nc_cat=109&ccb=1-7&_nc_sid=3635dc&_nc_ohc=g2Ot7Yd4fL8AX-4Nhy7&_nc_ht=scontent.fdad1-1.fna&oh=00_AfAbq_Vkcpm1kLaOEYggZsAPOi7P3cI8WW8ljla2Oe6cpg&oe=6590A98E"
            alt="intro image"
            fill={true}
            priority={true}
          /> */}
        </div>
        <h1 data-scroll data-scroll-speed="0.7">
          MENU WEDDING
        </h1>
      </div>
    </div>
  );
}
