"use client";
import { useEffect } from "react";
import styles from "./page.module.css";
import Intro from "../components/Intro";
import Description from "../components/Description";
import Projects from "../components/Projects";
import View from "../components/View";
import Wedding from "../components/Wedding";
import Autro from "../components/Autro";
import PhuQuy from "../components/PhuQuy";
import DesPhuQuy from "../components/DesPhuQuy";
import ProPhuQuy from "../components/ProPhuQuy";
import HoanKim from "../components/HoanKim";
import DesHoangKim from "../components/DesHoangKim";
import ProHoangKim from "../components/ProHoangKim";
import Menu from "../components/Menu";
import DesMenu from "../components/DesMenu";
import ProMenu from "../components/ProMenu";





export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <main className={styles.main}>
      <Intro />
      <Description />
      <Projects />
      <View />
      <Autro />
      <Wedding />
      <PhuQuy />
      <DesPhuQuy />
      <ProPhuQuy />
      <HoanKim />
      <DesHoangKim />
      <ProHoangKim />
      <Menu />
      <DesMenu />
      <ProMenu />

    </main>
  );
}
