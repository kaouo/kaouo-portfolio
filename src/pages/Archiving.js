import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/Archiving.css";
import { FaGithub, FaPen, FaRegStickyNote } from "react-icons/fa";

// GSAP 애니메이션을 위한 ScrollTrigger 플러그인 등록
gsap.registerPlugin(ScrollTrigger);

function Archiving() {
  // 섹션에 애니메이션 적용을 위한 참조 생성
  const archivingRef = useRef(null);

  useEffect(() => {
    // 스크롤이 특정 위치에 도달하면 나타나는 애니메이션 효과 적용
    gsap.fromTo(
      archivingRef.current,
      { opacity: 0, y: 50, filter: "blur(10px)" },
      {
        opacity: 1, // 점점 선명하게 표시
        y: 0, // 원래 위치로 이동
        filter: "blur(0px)", // 블러 효과 제거
        duration: 1.5, // 애니메이션 지속 시간
        ease: "power2.out", // 부드러운 애니메이션 효과
        scrollTrigger: {
          trigger: archivingRef.current, // 해당 섹션이 보일 때 실행
          start: "top 75%", // 화면의 75% 지점에서 애니메이션 시작
          toggleActions: "play none none reverse", // 스크롤 방향에 따라 실행 및 되돌리기
        },
      }
    );
  }, []);

  // 각 박스를 클릭하면 해당 URL로 이동하는 함수
  const handleBoxClick = (url) => {
    window.open(url, "_blank"); // 새 창에서 열기
  };

  return (
    <section id="archiving" className="archiving-container" ref={archivingRef}>
      {/* 섹션 제목 */}
      <h2 className="section-title">
        <span className="section-number">04.</span>
        <span className="section-text">Archiving</span>
        <span className="title-line"></span>
      </h2>

      <div className="archiving-content">
        {/* GitHub */}
        <div
          className="archiving-box"
          onClick={() => handleBoxClick("https://github.com/kaouo")}
        >
          <div className="archiving-title">
            <FaGithub className="archiving-icon" />
            <h3>GitHub</h3>
          </div>
          <p>소스 코드 저장소입니다.</p>
          <ul>
            <li>개인 프로젝트 소스 코드</li>
            <li>학기 중 진행한 프로젝트 소스 코드</li>
            <li>스터디 관련 학습 자료 및 예제 코드</li>
          </ul>
        </div>

        {/* Velog */}
        <div
          className="archiving-box"
          onClick={() => handleBoxClick("https://velog.io/@kaouoi")}
        >
          <div className="archiving-title">
            <FaPen className="archiving-icon" />
            <h3>Velog</h3>
          </div>
          <p>스터디 및 지식 공유 목적으로 운영하는 블로그입니다.</p>
          <ul>
            <li>배운 내용을 정리하면서 스스로 이해를 높이기 위해 작성</li>
            <li>더 나은 개발자로 성장하기 위한 과정</li>
            <li>지식을 공유하고 피드백을 받을 수 있는 공간</li>
          </ul>
        </div>

        {/* Notion */}
        <div
          className="archiving-box"
          onClick={() =>
            window.open(
              "https://iridescent-engine-d99.notion.site/1b6adbc00ab280908d64f2e57f8bcb47?pvs=4",
              "_blank"
            )
          }
        >
          <div className="archiving-title">
            <FaRegStickyNote className="archiving-icon" />
            <h3>Notion</h3>
          </div>
          <p>노션으로 정리한 이력서입니다.</p>
        </div>
      </div>
    </section>
  );
}

export default Archiving;
