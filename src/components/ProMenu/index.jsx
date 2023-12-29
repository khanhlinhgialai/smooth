import React, { useState, useLayoutEffect, useRef } from "react";
import styles from "./style.module.css";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const projects = [
  {
    title: "Món Tráng Miệng",
    src: 'https://i.pinimg.com/564x/34/72/6a/34726a6ddc38e0281bfb5d1a6cb645ab.jpg'
  },
  {
    title: "Tiệc Ngọt",
    src: 'https://i.pinimg.com/564x/d4/5f/73/d45f7354cfa8201442c016405837cdb8.jpg'
  },


  {
    title: "Món Khai Vị",
    src: 'https://i.pinimg.com/564x/96/c3/e5/96c3e5b69daea24be3ad4d229dc7071d.jpg'
  },
  {
    title: "Hương Vị",
    src: 'https://i.pinimg.com/564x/f9/5c/5b/f95c5b75ac159f639b13c64e7d736f19.jpg'
  },
  {
    title: "SaLat",
    src: 'https://i.pinimg.com/564x/f2/3b/a2/f23ba2569e92e03840a42b9698f28e38.jpg'
  },
  {
    title: "                                                                   ",
    src: 'https://vn112.com/wp-content/uploads/2018/04/black-1524537418p48cl.png'
  },

];

export default function Index() {
  const [selectedProject, setSelectedProject] = useState(0);
  const container = useRef(null);
  const imageContainer = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.create({
      trigger: imageContainer.current,
      pin: true,
      start: "top-=100px",
      end: document.body.offsetHeight - window.innerHeight - 50,
    });
  }, []);

  return (
    <div ref={container} className={styles.projects}>
      <div className={styles.projectDescription}>
        <div ref={imageContainer} className={styles.imageContainer}>
          <Image
            src={projects[selectedProject].src}
            fill={true}
            alt="project image"
            priority={true}
          />
        </div>
        <div className={styles.column}>
          <p>
          🎻Thật rất vinh dự cho chúng tôi khi Hotel 𝙆𝙝𝙖́𝙣𝙝 𝙇𝙞𝙣𝙝 được lựa chọn
            là nơi lưu giữ giây phút hạnh phúc nhất của cô dâu & chú rể.
          </p>
        </div>
        <div className={styles.column}>
          <p>
            𝑲𝒉𝒂́𝒏𝒉 𝑳𝒊𝒏𝒉 𝑯𝒐𝒕𝒆𝒍 - 𝑾𝒆𝒅𝒅𝒊𝒏𝒈 - 𝑪𝒐𝒏𝒗𝒆𝒏𝒕𝒊𝒐𝒏 𝗞𝗛𝗔𝗡𝗛 𝗟𝗜𝗡𝗛 𝗛𝗢𝗧𝗘𝗟 ⭐⭐⭐
            <p>📌232 Nguyen Tat Thanh St, Phu Dong Ward, Pleiku City</p>
            <p>📞0333.26.3579</p>
            <p>☎️0269 373 5555</p>
            <p>✉️Sales@hotelkhanhlinh.vn.</p>
          </p>
        </div>
      </div>

      <div className={styles.projectList}>
        {projects.map((project, index) => {
          return (
            <div
              key={index}
              onMouseOver={() => {
                setSelectedProject(index);
              }}
              className={styles.projectEl}
            >
              <h2>{project.title}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}
