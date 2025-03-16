import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/About.css";

// GSAP ScrollTrigger 플러그인 등록
gsap.registerPlugin(ScrollTrigger);

function About() {
  // 특정 DOM 요소를 참조하기 위한 useRef
  const aboutRef = useRef(null);

  // 스크롤 시 애니메이션 효과 적용
  useEffect(() => {
    gsap.fromTo(
      aboutRef.current, // 애니메이션 적용 대상
      { opacity: 0, y: 50, filter: "blur(10px)" }, // 초기 상태
      {
        opacity: 1, // 점점 선명하게 나타남
        y: 0, // 원래 위치로 이동
        filter: "blur(0px)", // 블러 효과 제거
        duration: 1.5, // 애니메이션 지속 시간
        ease: "power2.out", // 부드러운 감속 효과 적용
        scrollTrigger: {
          trigger: aboutRef.current, // 해당 요소가 화면에 보일 때 실행
          start: "top 75%", // 화면의 75% 위치에서 애니메이션 시작
          toggleActions: "play none none reverse", // 스크롤 방향에 따라 실행
        },
      }
    );
  }, []);

  return (
    <section id="about" className="about-container" ref={aboutRef}>
      {/* 섹션 제목: 01. About Me */}
      <h2 className="section-title">
        <span className="section-number">01.</span>
        <span className="section-text">About Me</span>
        <span className="title-line"></span> {/* 구분선 */}
      </h2>

      {/* About Me 내용 */}
      <div className="about-content">
        <div className="about-text">
          {/* 첫 번째 섹션 */}
          <h3>🔎 호기심이 이끄는 탐구</h3>
          <p>
            `"왜 이렇게 동작할까?", "더 나은 방법은 없을까?"
            {`
          어려서부터 사소한 것에도 끊임없이 질문을 던지며 성장해왔습니다.
개발을 시작하면서 이 호기심은 더욱 깊어졌고 코드 한 줄 한 줄이 제게는 퍼즐처럼 느껴졌습니다.
새로운 기술을 배우고 작은 아이디어도 직접 구현해보는 과정에서 배우는 즐거움을 발견합니다.
          `}
          </p>

          {/* 두 번째 섹션 */}
          <h3>👥 개발자이기 전에 사용자</h3>
          <p>
            {`"내가 만든 서비스가 누군가에게 도움이 될까?"`}
            {`
기능을 만드는 것보다 더 중요한 것은 그것이 어떻게 쓰일지 고민하는 것입니다.
사용자의 입장에서 한 걸음 더 깊이 들어가면 버튼 하나, 애니메이션의 흐름 하나에도 이유가 필요해집니다.
코드 한 줄과 디자인 한 픽셀까지도 의미를 담아 정리하고 싶습니다.`}
          </p>

          {/* 세 번째 섹션 */}
          <h3>🤝🏻 기술과 소통이 만나는 지점</h3>
          <p>
            {`"좋은 서비스는 혼자가 아니라 함께 만들어가는 과정에서 완성된다."`}
            {`
            프론트엔드 개발은 단순히 화면을 그리는 작업이 아닙니다.
            디자이너, 백엔드 개발자, 기획자 등 다양한 팀원들과 협업하며 완성도를 높이는 과정입니다.
각자의 아이디어가 조화를 이룰 때 비로소 사용자에게 완성된 경험을 전달할 수 있다고 믿습니다.
개발뿐만 아니라 원활한 소통과 협업을 통해 함께 성장하는 개발자가 되고 싶습니다.`}
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
