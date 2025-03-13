import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/Skills.css";
import htmlIcon from "../assets/images/html.png";
import cssIcon from "../assets/images/css.png";
import jsIcon from "../assets/images/js.png";
import reactIcon from "../assets/images/react.png";
import javaIcon from "../assets/images/java.png";

gsap.registerPlugin(ScrollTrigger);

function Skills() {
  const skillsRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      skillsRef.current,
      { opacity: 0, y: 50, filter: "blur(10px)" },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: skillsRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section id="skills" className="skills-container" ref={skillsRef}>
      <h2 className="section-title">
        <span className="section-number">03. </span>
        <span className="section-text">Skills</span>
        <span className="title-line"></span>
      </h2>

      {/* 기술 리스트 */}
      <div className="skills-list">
        <div className="skill-item">
          <img src={htmlIcon} alt="HTML" className="skill-icon" />
          <div>
            <h4>HTML5</h4>
            <p>기본적인 HTML 태그를 사용할 수 있습니다.</p>
          </div>
        </div>

        <div className="skill-item">
          <img src={cssIcon} alt="CSS" className="skill-icon" />
          <div>
            <h4>CSS</h4>
            <p>순수 CSS만을 이용하여 레이아웃을 만들 수 있습니다.</p>
          </div>
        </div>

        <div className="skill-item">
          <img src={jsIcon} alt="JavaScript" className="skill-icon" />
          <div>
            <h4>JavaScript</h4>
            <p>ES6+ 문법을 활용하여 코드를 작성할 수 있습니다.</p>
          </div>
        </div>

        <div className="skill-item">
          <img src={reactIcon} alt="React" className="skill-icon" />
          <div>
            <h4>React</h4>
            <p>컴포넌트 기반으로 UI를 설계하고 상태 관리를 할 수 있습니다.</p>
          </div>
        </div>

        <div className="skill-item">
          <img src={javaIcon} alt="Java" className="skill-icon" />
          <div>
            <h4>Java</h4>
            <p>
              2~3학년 동안 자바 프로젝트를 수행하며 프로그램을 작성했습니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
