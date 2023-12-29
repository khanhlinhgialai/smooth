import React, { useState, useLayoutEffect, useRef } from "react";
import styles from "./style.module.css";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const projects = [
  {
    title: "Hoa Cưới",
    src: 'https://scontent.fdad1-4.fna.fbcdn.net/v/t31.18172-8/14570552_1390296494332245_3255561212257182516_o.jpg?_nc_cat=105&ccb=1-7&_nc_sid=4dc865&_nc_ohc=NFYpmjRKJZoAX-KY1B3&_nc_ht=scontent.fdad1-4.fna&oh=00_AfDD4AxnGQCfK5a7NB5fCU3rkFP9Gv7Es-bv_dUftaU3gA&oe=65B602B1'
  },
  {
    title: "Nến Cưới",
    src: 'https://scontent.fdad1-3.fna.fbcdn.net/v/t31.18172-8/14543777_1390296484332246_6761547185368731166_o.jpg?_nc_cat=104&ccb=1-7&_nc_sid=4dc865&_nc_ohc=EBbxmtxai_4AX_WwlCN&_nc_ht=scontent.fdad1-3.fna&oh=00_AfBSHcIbOEvb_ool4PJXrcG8lCuPTnWikje00hC-0A8BHQ&oe=65B5F84B'
  },


  {
    title: "Bàn Tiệc",
    src: 'https://scontent.fdad1-3.fna.fbcdn.net/v/t31.18172-8/14524546_1390296337665594_7839848453101802054_o.jpg?_nc_cat=110&ccb=1-7&_nc_sid=4dc865&_nc_ohc=628F6_3MRboAX-rrgUU&_nc_ht=scontent.fdad1-3.fna&oh=00_AfBfW1cZvSl-QTJ9FnGBSgWkz5Xg6cSDnmzFCTsbfZ3I2A&oe=65B60447'
  },
  {
    title: "Sảnh Cưới",
    src: 'https://scontent.fdad1-4.fna.fbcdn.net/v/t31.18172-8/14500306_1390296664332228_6639836045608826643_o.jpg?_nc_cat=103&ccb=1-7&_nc_sid=4dc865&_nc_ohc=ZdcBtinYwq4AX9Y6Faw&_nc_ht=scontent.fdad1-4.fna&oh=00_AfABJfEJ80265S9JHsf2InKclRSQDPLdO-G_lldQCb5SdQ&oe=65B5F626'
  },
  {
    title: "Quầy Tiếp Khách",
    src: 'https://scontent.fdad1-1.fna.fbcdn.net/v/t31.18172-8/14480476_1390295857665642_6780420416340771151_o.jpg?_nc_cat=109&ccb=1-7&_nc_sid=4dc865&_nc_ohc=CrECom0mHSYAX_Sj9A8&_nc_oc=AQl4s6lluIXv5-WsUt93S77u2JGQNL13jl-LbdmDH4fCV1BZYNCpFuFXVZOhxgue4wc&_nc_ht=scontent.fdad1-1.fna&oh=00_AfDXKX_zUlayUtqyk-5VpedBDB-06P8YmRRWMrOsGvXoag&oe=65B60FA2'
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
