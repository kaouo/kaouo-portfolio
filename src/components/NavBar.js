import { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import "../styles/NavBar.css";

function NavBar() {
  const [activeSection, setActiveSection] = useState("intro");
  const ticking = useRef(false);
  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        ticking.current = true;

        requestAnimationFrame(() => {
          const sections = document.querySelectorAll("section");
          let scrollPosition = window.scrollY;
          let currentSection = "intro";

          sections.forEach((section) => {
            if (
              section.offsetTop - 80 <= scrollPosition &&
              section.offsetTop + section.offsetHeight > scrollPosition
            ) {
              currentSection = section.id;
            }
          });

          // 스크롤이 맨 아래에 도달하면 마지막 섹션 강제 활성화
          if (
            window.innerHeight + scrollPosition >=
            document.body.offsetHeight - 10
          ) {
            currentSection =
              sections[sections.length - 1]?.id || currentSection;
          }

          setActiveSection(currentSection);
          ticking.current = false;
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="navbar">
      <div
        className="nav-logo"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        LOGING
      </div>
      <div className="nav-menu">
        <Link
          to="about"
          smooth={true}
          duration={600}
          offset={-80}
          className={activeSection === "about" ? "active" : ""}
        >
          01. About
        </Link>
        <Link
          to="skills"
          smooth={true}
          duration={600}
          offset={-80}
          className={activeSection === "skills" ? "active" : ""}
        >
          02. Skills
        </Link>
        <Link
          to="projects"
          smooth={true}
          duration={600}
          offset={-80}
          className={activeSection === "projects" ? "active" : ""}
        >
          03. Projects
        </Link>
        <Link
          to="archiving"
          smooth={true}
          duration={600}
          offset={-80}
          className={activeSection === "archiving" ? "active" : ""}
        >
          04. Archiving
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
