import React, { useState, useLayoutEffect, useRef } from "react";
import styles from "./style.module.css";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const projects = [
  {
    title: "Hoa Cưới Đẹp Mắt",
    src: 'https://scontent.fdad1-3.fna.fbcdn.net/v/t31.18172-8/14543740_1390293194332575_7637881974911344751_o.jpg?_nc_cat=111&ccb=1-7&_nc_sid=4dc865&_nc_ohc=dS9ae3FS4acAX-XQQl6&_nc_ht=scontent.fdad1-3.fna&oh=00_AfBwF4EpLfaJ_B-q47DWo22V6zapiv0yEYtc7xwk33ci6w&oe=65B5D15B'
  },
  {
    title: "Trang Trí Bàn Tiệc",
    src: 'https://scontent.fdad1-4.fna.fbcdn.net/v/t31.18172-8/14468535_1390293497665878_5897087014564944766_o.jpg?_nc_cat=100&ccb=1-7&_nc_sid=4dc865&_nc_ohc=zMY4r2i_weMAX_9tpJ8&_nc_ht=scontent.fdad1-4.fna&oh=00_AfCtIwhHvlc6z5S__073XUTjnmJ-zK7ZEH05YbKTkKFYgg&oe=65B5ED93'
  },

  {
    title: "Trang Trí Bàn Họ",
    src: 'https://scontent.fdad1-3.fna.fbcdn.net/v/t31.18172-8/14556737_1390293650999196_7308543407619169430_o.jpg?_nc_cat=110&ccb=1-7&_nc_sid=4dc865&_nc_ohc=RS8AcHjG0psAX_WKqny&_nc_ht=scontent.fdad1-3.fna&oh=00_AfBP21xtzAQFb9VkMUcJPBNUtiDVuk4EQpaO6OfH0aQXsg&oe=65B5ECD1'
  },
  {
    title: "Sảnh Tiếp Khách",
    src: 'https://scontent.fdad1-1.fna.fbcdn.net/v/t31.18172-8/14481824_1390293827665845_4295229058996317074_o.jpg?_nc_cat=109&ccb=1-7&_nc_sid=4dc865&_nc_ohc=6aFxK7B77PQAX_U1jkf&_nc_ht=scontent.fdad1-1.fna&oh=00_AfBAf785nrJdGrZG750jf4JF1pN_2Wx4PuINbceDHymJ-w&oe=65B5DB12'
  },
  {
    title: "Sảnh Tiệc Cưới",
    src: 'https://scontent.fdad1-3.fna.fbcdn.net/v/t31.18172-8/14589770_1390294204332474_597397887929146781_o.jpg?_nc_cat=111&ccb=1-7&_nc_sid=4dc865&_nc_ohc=Nly43lcxKQoAX_nVbWW&_nc_ht=scontent.fdad1-3.fna&oh=00_AfAdldk0SVP0iU2C-rQ1YeveLfZ57dqRFOQAVrkeGSCOig&oe=65B5DEE8'
  },
  {
    title: "Thực Đơn Đa Dạng",
    src: 'https://scontent.fdad1-1.fna.fbcdn.net/v/t39.30808-6/405144930_926337558992565_5123645920419646263_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=3635dc&_nc_ohc=g2Ot7Yd4fL8AX-4Nhy7&_nc_ht=scontent.fdad1-1.fna&oh=00_AfDSmJ500hhYXgqIEHX202_ZSfJl2-wZSHnjF5uMIPrUJQ&oe=6592A3CE'
  },
  {
    title: "Tổ Chức Chu Đáo",
    src: 'https://scontent.fdad1-4.fna.fbcdn.net/v/t39.30808-6/342058705_279707204419567_7876427871304327554_n.jpg?stp=cp6_dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=3635dc&_nc_ohc=8pf76_JeJlMAX_MmrOz&_nc_oc=AQntP2-mjY4MoufGT_caSsuKBXB15_UUN-3GzjtZGLEgBu2dwlBBOWq6JzlZoBsy3Rs&_nc_ht=scontent.fdad1-4.fna&oh=00_AfC-eki75j_bCyz6URINQJ90F7ffL4JBVfmRt7-7mH5r3w&oe=6592BBAB'
  },
  {
    title: "Tiện Nghi Đầy Đủ",
    src: 'https://scontent.fdad2-1.fna.fbcdn.net/v/t39.30808-6/344549423_158649693567077_7701483282113438514_n.jpg?stp=cp6_dst-jpg&_nc_cat=108&ccb=1-7&_nc_sid=3635dc&_nc_ohc=Ltch1eIAbaUAX--oOTS&_nc_ht=scontent.fdad2-1.fna&oh=00_AfAHL1MwhRV8XpW2jwtInO-2vtRD7BaznCLCfa0Vgvaeig&oe=659161B6'
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
            <p>📞 0333.26.3579</p>
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
