import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/Skills.css";

// 아이콘 이미지 불러오기
import htmlIcon from "../assets/images/html.png";
import cssIcon from "../assets/images/css.png";
import jsIcon from "../assets/images/js.png";
import reactIcon from "../assets/images/react.png";
import pythonIcon from "../assets/images/python.png";

// GSAP 스크롤 애니메이션 플러그인 등록
gsap.registerPlugin(ScrollTrigger);

function Skills() {
  // 스킬 섹션을 참조하는 useRef
  const skillsRef = useRef(null);

  // 스크롤 트리거를 사용한 애니메이션 효과 적용
  useEffect(() => {
    gsap.fromTo(
      skillsRef.current, // 대상 요소
      { opacity: 0, y: 50, filter: "blur(10px)" }, // 초기 상태
      {
        opacity: 1, // 서서히 나타남
        y: 0, // 원래 위치로 이동
        filter: "blur(0px)", // 블러 효과 제거
        duration: 1.5, // 애니메이션 지속 시간
        ease: "power2.out", // 부드러운 감속 효과 적용
        scrollTrigger: {
          trigger: skillsRef.current, // 특정 요소가 화면에 나타날 때 실행
          start: "top 75%", // 화면의 75% 위치에서 애니메이션 시작
          toggleActions: "play none none reverse", // 다시 스크롤 시 효과 되돌리기
        },
      }
    );
  }, []);

  return (
    <section id="skills" className="skills-container" ref={skillsRef}>
      {/* 스킬 섹션 제목 */}
      <h2 className="section-title">
        <span className="section-number">02. </span>
        <span className="section-text">Skills</span>
        <span className="title-line"></span> {/* 구분선 */}
      </h2>

      {/* 스킬 리스트 */}
      <div className="skills-list">
        {/* HTML */}
        <div className="skill-item">
          <img src={htmlIcon} alt="HTML" className="skill-icon" />
          <div>
            <h4>HTML5</h4>
            <p>웹 페이지의 구조를 설계하고 다양한 태그를 활용할 수 있습니다.</p>
          </div>
        </div>

        {/* CSS */}
        <div className="skill-item">
          <img src={cssIcon} alt="CSS" className="skill-icon" />
          <div>
            <h4>CSS</h4>
            <p>
              CSS를 이용해 스타일을 적용하고 반응형 레이아웃을 만들 수 있습니다.
            </p>
          </div>
        </div>

        {/* JavaScript */}
        <div className="skill-item">
          <img src={jsIcon} alt="JavaScript" className="skill-icon" />
          <div>
            <h4>JavaScript</h4>
            <p>ES6+ 문법을 활용하여 동적인 웹 기능을 구현할 수 있습니다.</p>
          </div>
        </div>

        {/* React */}
        <div className="skill-item">
          <img src={reactIcon} alt="React" className="skill-icon" />
          <div>
            <h4>React</h4>
            <p>
              컴포넌트 기반의 개발 방식으로 UI를 설계하고 상태를 효과적으로
              관리할 수 있습니다.
            </p>
          </div>
        </div>

        {/* Python */}
        <div className="skill-item">
          <img src={pythonIcon} alt="Python" className="skill-icon" />
          <div>
            <h4>Python</h4>
            <p>
              학기 중 Pandas와 NumPy를 사용해 다양한 데이터셋을 다뤄 보았습니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
