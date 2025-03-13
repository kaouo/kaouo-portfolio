import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/About.css";

// GSAP ScrollTrigger 플러그인 등록
gsap.registerPlugin(ScrollTrigger);

function About() {
  // 특정 DOM 요소를 참조하기 위한 useRef
  const aboutRef = useRef(null);

  // 컴포넌트가 마운트될 때 GSAP 애니메이션 실행
  useEffect(() => {
    gsap.fromTo(
      aboutRef.current, // 애니메이션을 적용할 요소
      { opacity: 0, y: 50, filter: "blur(10px)" },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section id="about" className="about-container" ref={aboutRef}>
      <h2 className="section-title">
        <span className="section-number">02.</span>
        <span className="section-text">&nbsp;About Me</span>
        <span className="title-line"></span>
      </h2>

      {/* About Me 내용 */}
      <div className="about-content">
        <div className="about-text">
          {/* 첫 번째 섹션 */}
          <h3>[사용자를 이해하는 개발자]</h3>
          <p>{`프론트엔드 개발자는 단순히 화면을 구현하는 것이 아니라 사용자의 경험을 설계하는 역할을 합니다.
            디자인이 아무리 아름다워도 사용자가 불편함을 느낀다면 좋은 UI/UX가 아닙니다.
            어떤 요소가 직관적이고 어떤 기능이 더 편리한지 끊임없이 고민하며,
            사용자 중심의 인터페이스를 구현하는 것이 프론트엔드 개발자로서의 핵심 덕목입니다.
            또한, 웹 접근성과 반응형 디자인을 고려하여 누구나 편리하게 사용할 수 있는 환경을 구축하는 것도 중요한 역할 중 하나입니다.
          `}</p>

          {/* 두 번째 섹션 */}
          <h3>[끊임없이 배우고 성장하는 자세]</h3>
          <p>{`기술은 빠르게 변하고 있으며, 새로운 프레임워크와 패턴이 끊임없이 등장합니다.
            배움에 대한 열정을 가지고, 꾸준히 새로운 기술을 익히며 더 나은 사용자 경험을 제공하는 것을 목표로 합니다.
            이전 프로젝트에서 얻은 경험을 바탕으로 더 효율적인 코드와 구조를 고민하며 발전해 나갑니다.
          `}</p>

          {/* 세 번째 섹션 */}
          <h3>[끊이지 않는 마음]</h3>
          <p>
            {`프론트엔드 개발은 혼자만의 작업이 아닙니다.
            디자이너, 백엔드 개발자, 기획자 등 다양한 팀원들과 협업해야 하고
            의도를 정확히 이해하고 원활하게 소통하는 능력이 중요합니다.
            백엔드와의 API 협업에서는 명확한 데이터 구조와 요청 방식에 대해 논의하고
            디자이너와는 UI/UX 개선을 위해 피드백을 주고받으며
            기획자와는 사용자의 요구사항을 고려한 기능을 설계하는 등 
            각 역할과 조화를 이루며 최적의 결과물을 만들어내는 것이 목표입니다.
            개발뿐만 아니라, 협업의 가치를 알고 팀의 성장을 함께 이끄는 개발자가 되고 싶습니다.`}
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
