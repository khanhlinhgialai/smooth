import React, { useState, useLayoutEffect, useRef } from "react";
import styles from "./style.module.css";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const projects = [
  {
    title: "Sảnh Cưới",
    src: 'https://scontent.fdad1-2.fna.fbcdn.net/v/t39.30808-6/353621194_819929756300013_6074812785109650289_n.jpg?stp=cp6_dst-jpg&_nc_cat=102&ccb=1-7&_nc_sid=3635dc&_nc_ohc=MnLMwDZLaBUAX8zwL9r&_nc_ht=scontent.fdad1-2.fna&oh=00_AfAT5RHIQAwivW1DYcDgI2S2Oun8--0BTWwFV0z6pCVP0A&oe=6594065E'
  },
  {
    title: "Bàn Tiệc Cưới",
    src: 'https://scontent.fdad1-3.fna.fbcdn.net/v/t39.30808-6/353625303_819929679633354_8987634794328894957_n.jpg?stp=cp6_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=3635dc&_nc_ohc=au8S2EMsezYAX82iV8X&_nc_ht=scontent.fdad1-3.fna&oh=00_AfCxzCthY1VdTfcYEvsbdaOjS0r5ANPeIL13LX4-fSnMTg&oe=6594143E'
  },


  {
    title: "Bàn Đòn Khách",
    src: 'https://scontent.fdad1-4.fna.fbcdn.net/v/t39.30808-6/353613757_819929529633369_5156938264742083587_n.jpg?stp=cp6_dst-jpg&_nc_cat=100&ccb=1-7&_nc_sid=3635dc&_nc_ohc=4CK1HYvEtRQAX-pnzwX&_nc_ht=scontent.fdad1-4.fna&oh=00_AfCo_yIiJpz6MTZF1NpafH67snZ-B5A6eFuVeZVjRM19Xg&oe=65939DC5'
  },
  {
    title: "Khu Tiếp Khách",
    src: 'https://scontent.fdad1-1.fna.fbcdn.net/v/t39.30808-6/353628053_819929506300038_6900391089931758755_n.jpg?stp=cp6_dst-jpg&_nc_cat=109&ccb=1-7&_nc_sid=3635dc&_nc_ohc=vsfI1p0FVTgAX_dSEtM&_nc_ht=scontent.fdad1-1.fna&oh=00_AfC85UuL6EsAkEkWbiX-3G6jLo4YqODVUKKcUSysjlerHQ&oe=6592ED79'
  },
  {
    title: "Tháp Rượu",
    src: 'https://scontent.fdad1-3.fna.fbcdn.net/v/t39.30808-6/340615528_598912388962797_7260481534873098850_n.jpg?stp=cp6_dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=3635dc&_nc_ohc=9gb1FovRaucAX8MVFaS&_nc_ht=scontent.fdad1-3.fna&oh=00_AfBWrOceRCItuisNoOSdrHF3XHX0LawV7zwZComLbbS_kw&oe=6592EEE8'
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
