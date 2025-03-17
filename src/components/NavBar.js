import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "../styles/NavBar.css";

function NavBar() {
  const [activeSection, setActiveSection] = useState("intro"); // 현재 활성화된 섹션 상태 저장

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section"); // 모든 섹션 요소 가져오기
      let scrollPosition = window.scrollY; // 현재 스크롤 위치 가져오기
      let currentSection = "intro"; // 기본값 설정
      sections.forEach((section) => {
        // 현재 스크롤 위치가 특정 섹션 범위 내에 있는지 확인
        if (
          section.offsetTop - 80 <= scrollPosition &&
          section.offsetTop + section.offsetHeight > scrollPosition
        ) {
          currentSection = section.id;
        } // 해당 섹션의 ID 저장
      });
      setActiveSection(currentSection); // 활성화된 섹션 상태 업데이트
    };

    window.addEventListener("scroll", handleScroll); // 스크롤 이벤트 리스너 등록
    return () => {
      window.removeEventListener("scroll", handleScroll); // 컴포넌트 언마운트 시 리스너 제거
    };
  }, []);

  return (
    <nav className="navbar">
      {/* 내비게이션 로고 */}
      <div
        className="nav-logo"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        LOGING
      </div>
      <div className="nav-menu">
        {/* 각 내비게이션 링크에 해당 섹션으로 부드럽게 스크롤 이동 */}
        <Link
          to="about"
          smooth={true}
          duration={600}
          offset={-80} // 내비게이션 높이만큼 위로 여유를 둠
          className={activeSection === "about" ? "active" : ""}
        >
          01. About
        </Link>
        <Link
          to="skills"
          smooth={true}
          duration={600}
          offset={-80} // 내비게이션 높이만큼 위로 여유를 둠
          className={activeSection === "skills" ? "active" : ""}
        >
          02. Skills
        </Link>
        <Link
          to="projects"
          smooth={true}
          duration={600}
          offset={-80} // 내비게이션 높이만큼 위로 여유를 둠
          className={activeSection === "projects" ? "active" : ""}
        >
          03. Projects
        </Link>
        <Link
          to="archiving"
          smooth={true}
          duration={600}
          offset={-80} // 내비게이션 높이만큼 위로 여유를 둠
          className={activeSection === "archiving" ? "active" : ""}
        >
          04. Archiving
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
