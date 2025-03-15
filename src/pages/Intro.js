import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/Intro.css";
import profileImage from "../assets/images/memoji.png";
import { FaGithub, FaBlogger, FaPen, FaRegStickyNote } from "react-icons/fa";

// GSAP ScrollTrigger 플러그인 등록
gsap.registerPlugin(ScrollTrigger);

function Intro() {
  // introRef를 사용하여 특정 DOM 요소를 참조 (애니메이션 대상)
  const introRef = useRef(null);

  // 컴포넌트가 마운트될 때 GSAP 애니메이션 실행
  useEffect(() => {
    gsap.fromTo(
      introRef.current, // 애니메이션을 적용할 대상 요소
      {
        opacity: 1, // 초기 투명도 (완전 보이는 상태
        filter: "blur(0px)", // 초기 블러 효과 없음
      },
      {
        opacity: 0, // 스크롤 시 투명해짐
        filter: "blur(10px)", // 스크롤 시 블러 효과 증가
        duration: 1.5, // 애니메이션 지속 시간 (초 단위)
        ease: "power2.out", // 부드러운 감속 효과 적용
        scrollTrigger: {
          trigger: introRef.current, // 스크롤 이벤트를 감지할 요소
          start: "top top", // 요소의 상단이 뷰포트 상단에 닿을 때 시작
          end: "bottom top", // 요소의 하단이 뷰포트 상단에 닿을 때 종료
          scrub: true, // 부드러운 전환 효과
        },
      }
    );
  }, []); // 빈 배열을 전달하여 컴포넌트가 처음 렌더링될 때 한 번만 실행

  return (
    <div className="intro-container" ref={introRef}>
      {/* 텍스트 영역: 인트로 페이지의 주요 타이틀 및 설명 */}
      <div className="intro-content">
        <h1 className="intro-title">
          <span className="intro-highlight">Front-End Portfolio</span>
        </h1>
        <h1 className="intro-title">HONG GA YOUNG</h1>
        <p className="intro-subtitle">
          사용자 경험을 디자인하고 더 나은 웹을 만듭니다 :)
        </p>
      </div>

      {/* 프로필 이미지 */}
      <div className="profile-wrapper">
        <img src={profileImage} alt="Kaouo" className="intro-profile" />
      </div>

      {/* 소셜 아이콘 */}
      <div className="social-icons">
        {/* 깃허브 */}
        <a
          href="https://github.com/kaouo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="social-icon" />
        </a>
        {/* 티스토리 */}
        <a
          href="https://kaouo.tistory.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaBlogger className="social-icon" />
        </a>
        {/* 벨로그 */}
        <a
          href="https://velog.io/@kaouoi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaPen className="social-icon" />
        </a>
        {/* 노션 */}
        <a
          href="https://iridescent-engine-d99.notion.site/1b6adbc00ab280908d64f2e57f8bcb47?pvs=4"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaRegStickyNote className="social-icon" /> {/* 노션 아이콘 추가 */}
        </a>
      </div>

      {/* 스크롤 안내 아이콘 */}
      <div className="scroll-down">↓</div>
    </div>
  );
}

export default Intro;
