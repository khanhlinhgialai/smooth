import React, { useState, useLayoutEffect, useRef } from "react";
import styles from "./style.module.css";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const projects = [
  {
    title: "Sảnh Khách Sạn",
    src: 'https://scontent.fdad1-3.fna.fbcdn.net/v/t31.18172-8/14542544_1390311744330720_5388221631810098879_o.jpg?_nc_cat=104&ccb=1-7&_nc_sid=4dc865&_nc_ohc=lK_cTiMDiyoAX8xopek&_nc_ht=scontent.fdad1-3.fna&oh=00_AfAWragoyZRybh99VMt-xuTlTdgG1qHBriSgQLJ4dUSXjw&oe=65B47DDB'
  },
  {
    title: "Lobby Khách Sạn",
    src: 'https://scontent.fdad2-1.fna.fbcdn.net/v/t31.18172-8/14481803_1390309484330946_6519162920873729226_o.jpg?_nc_cat=108&ccb=1-7&_nc_sid=4dc865&_nc_ohc=zNqQXMT2nDEAX_PkovP&_nc_ht=scontent.fdad2-1.fna&oh=00_AfBlKYNMYmaDzYMlDKMiZ-Q0-rhsqVZS5IGDxoOUOzJLzQ&oe=65B49EDC'
  },

  {
    title: "Lobby Full",
    src: 'https://scontent.fdad1-2.fna.fbcdn.net/v/t31.18172-8/14425489_1390311314330763_9093604711071410463_o.jpg?_nc_cat=102&ccb=1-7&_nc_sid=4dc865&_nc_ohc=3yDa7rMklDEAX_O0hyx&_nc_ht=scontent.fdad1-2.fna&oh=00_AfD-ebGYEwJCtJRB8j-c7_92HlQgeXXxeHxkmrqSiMu3xA&oe=65B4981A'
  },
  {
    title: "Quầy Lễ Tân",
    src: 'https://scontent.fdad1-3.fna.fbcdn.net/v/t31.18172-8/14567465_1390309917664236_7139309937182135173_o.jpg?_nc_cat=111&ccb=1-7&_nc_sid=4dc865&_nc_ohc=NeKB6rOMPycAX_5Wy_W&_nc_ht=scontent.fdad1-3.fna&oh=00_AfDzfOUlOcXUz0IGQ5mmpOClXhtKthHz5LFo0aXOiNF19g&oe=65B493A5'
  },
  {
    title: "Dịch Vụ Đa Dạng",
    src: 'https://scontent.fdad1-3.fna.fbcdn.net/v/t31.18172-8/14500212_1390310040997557_5125520521993520258_o.jpg?_nc_cat=104&ccb=1-7&_nc_sid=4dc865&_nc_ohc=QQAmLc7K08wAX8I6M-_&_nc_ht=scontent.fdad1-3.fna&oh=00_AfCYpT7uEEu6KFqAVBIZ57bFRjodCll9YqxiW08qkwlilg&oe=65B492C2'
  },
  {
    title: "Phục Vụ Nhiệt Tình",
    src: 'https://scontent.fdad1-1.fna.fbcdn.net/v/t31.18172-8/14468535_1390310694330825_787684812301841735_o.jpg?_nc_cat=109&ccb=1-7&_nc_sid=4dc865&_nc_ohc=CjuACjzbOoYAX-PIL-b&_nc_ht=scontent.fdad1-1.fna&oh=00_AfBsPiVa6alCdMkgLh2LHPqlOSXd_6_2uAkcXJWGCfpdOw&oe=65B48A5E'
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
            🎻Thật rất vinh dự cho chúng tôi khi 
            <div>Hotel 𝙆𝙝𝙖́𝙣𝙝 𝙇𝙞𝙣𝙝</div>
            được lựa chọn
            là điểm dừng chân tại Pleiku cho du khách.
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
