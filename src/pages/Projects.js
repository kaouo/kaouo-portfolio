import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/Projects.css"; // 스타일 파일만 import

gsap.registerPlugin(ScrollTrigger);

function Projects() {
  const projectsRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      projectsRef.current,
      { opacity: 0, y: 50, filter: "blur(10px)" },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: projectsRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section id="projects" className="projects-container" ref={projectsRef}>
      <h2 className="projects-title">
        <span className="projects-number">04.</span>
        <span className="projects-text">&nbsp;Projects</span>
        <span className="title-line"></span>
      </h2>

      <div className="projects-content">
        <div className="project-item">
          <h3>햄부기 테스트</h3>
          <p>React 기반 성격 유형 테스트</p>
        </div>

        <div className="project-item">
          <h3>포트폴리오 사이트</h3>
          <p>React와 GSAP을 활용한 개인 포트폴리오</p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
