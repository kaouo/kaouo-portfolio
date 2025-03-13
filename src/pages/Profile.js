import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/Profile.css";
import profileImage from "../assets/images/kaouo.png";

// GSAP ScrollTrigger 플러그인 등록
gsap.registerPlugin(ScrollTrigger);

// profileRef를 사용하여 특정 DOM 요소를 참조 (애니메이션 대상)
function Profile() {
  const profileRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      profileRef.current, // 애니메이션을 적용할 요소
      {
        opacity: 0, // 초기 투명도
        y: 50, // 아래에서 위로 이동하는 애니메이션 효과
        filter: "blur(10px)", // 초기에 블러 처리
      },
      {
        opacity: 1, // 최종적으로 완전 보이게 설정
        y: 0, // 원래 위치로 이동
        filter: "blur(0px)", // 블러 효과 제거
        duration: 1, // 애니메이션 지속 시간 (1초)
        ease: "power2.out", // 부드러운 감속 효과 적용
        scrollTrigger: {
          trigger: profileRef.current, // 스크롤 이벤트를 감지할 요소
          start: "top 75%", // 조금 더 빨리 나타나도록 조정
          toggleActions: "play none none reverse", // 스크롤 방향에 따라 애니메이션 실행/역방향 실행
        },
      }
    );
  }, []);

  return (
    <section id="profile" className="profile-container" ref={profileRef}>
      {/* 섹션 타이틀 */}
      <h2 className="section-title">
        <span className="section-number">01. </span>
        <span className="section-text">&nbsp;Profile</span>
        <span className="title-line"></span> {/* 타이틀 아래 구분선 */}
      </h2>

      {/* 프로필 내용 영역 */}
      <div className="profile-content">
        {/* 텍스트 정보 영역 */}
        <div className="profile-text">
          {/* 경력 정보 */}
          <div className="profile-category">
            <h3>📊 Career</h3>
            <ul className="profile-list">
              <li>영남이공대학교 소프트웨어콘텐츠계열 (2021.03 - 2025.02)</li>
              <li>영남이공대학교 소프트웨어콘텐츠학과 (2025.02 - 현재)</li>
            </ul>
          </div>

          {/* 수상 경력 */}
          <div className="profile-category">
            <h3>🏆 Prize</h3>
            <ul className="profile-list">
              <li>
                영남이공대학교 공학센터 주관 창의코딩 경진대회 입상 (2024.12)
              </li>
              <li>영남이공대학교 디지텍 캡스톤 대회 디지텍상 (2023.11)</li>
              <li>영남이공대학교 캡스톤 디자인 경진 대회 최우수상 (2023.10)</li>
            </ul>
          </div>

          {/* 활동 정보 */}
          <div className="profile-category">
            <h3>🚀 Activity</h3>
            <ul className="profile-list">
              <li>멋쟁이사자처럼 대학 12기 중앙 해커톤 참여 (2024.08)</li>
              <li>멋쟁이사자처럼 대학 12기 아이디어톤 참여 (2024.05)</li>
            </ul>
          </div>

          {/* 자격증 정보 */}
          <div className="profile-category">
            <h3>📜 Certification</h3>
            <ul className="profile-list">
              <li>정보처리기사 필기 (2025.02)</li>
              <li>SQLD | SQL개발자 (2024.12.13)</li>
              <li>ADsP | 데이터분석준전문가 (2024.06.07)</li>
            </ul>
          </div>
        </div>

        {/* 프로필 이미지 영역 */}
        <div className="profile-image-wrapper">
          <img
            src={profileImage}
            alt="홍가영 프로필"
            className="profile-image"
          />
        </div>
      </div>
    </section>
  );
}

export default Profile;
