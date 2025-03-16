import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/Projects.css";
import Slider from "react-slick"; // 이미지 슬라이드 라이브러리
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// 프로젝트에 사용될 이미지 불러오기
import portfolioImage1 from "../assets/images/portfolio1.png";
import portfolioImage2 from "../assets/images/portfolio2.png";
import portfolioImage3 from "../assets/images/portfolio3.png";
import portfolioImage4 from "../assets/images/portfolio4.png";
import portfolioImage5 from "../assets/images/portfolio5.png";
import testImage1 from "../assets/images/test1.png";
import testImage2 from "../assets/images/test2.png";
import testImage3 from "../assets/images/test3.png";
import testImage4 from "../assets/images/test4.png";
import testImage5 from "../assets/images/test5.png";

// GSAP ScrollTrigger 플러그인 등록
gsap.registerPlugin(ScrollTrigger);

function Projects() {
  // 특정 DOM 요소를 참조하는 useRef
  const projectsRef = useRef(null);

  // 스크롤 애니메이션 적용
  useEffect(() => {
    gsap.fromTo(
      projectsRef.current,
      { opacity: 0, y: 50, filter: "blur(10px)" },
      {
        opacity: 1, // 점점 선명하게 나타남
        y: 0, // 원래 위치로 이동
        filter: "blur(0px)", // 블러 효과 제거
        duration: 1.5, // 애니메이션 지속 시간
        ease: "power2.out", // 부드러운 감속 효과 적용
        scrollTrigger: {
          trigger: projectsRef.current, // 특정 요소가 화면에 나타날 때 실행
          start: "top 75%", // 화면의 75% 위치에서 애니메이션 시작
          toggleActions: "play none none reverse", // 다시 스크롤 시 효과 되돌리기
        },
      }
    );
  }, []);

  // 프로젝트 데이터 배열
  const projectList = [
    {
      number: "01",
      title: "💻 개인 포트폴리오",
      description:
        "첫 번째로 제작한 포트폴리오 사이트입니다. React와 Styled-Components를 활용하여 컴포넌트 기반으로 개발했으며 GSAP을 적용해 부드러운 스크롤 애니메이션과 생동감 있는 인터랙션을 구현했습니다. 반응형 디자인을 고려하여 다양한 디바이스에서도 일관된 사용자 경험을 제공할 수 있도록 제작했으며 유지보수와 확장성을 위해 코드 구조를 정리하며 지속적인 리팩토링을 진행 중입니다.",
      images: [
        portfolioImage1,
        portfolioImage2,
        portfolioImage3,
        portfolioImage4,
        portfolioImage5,
      ], // 여러 개의 이미지 슬라이드
      features: ["React", "Styled-Components", "GSAP"],
      siteLink: "https://kaouo-portfolio.netlify.app",
      codeLink: "https://github.com/kaouo/kaouo-portfolio",
    },

    {
      number: "02",
      title: "🍔 햄부기 테스트",
      description:
        "햄버거를 테마로 한 성격 유형 테스트 웹 사이트입니다. MBTI 성격 유형을 기반으로 사용자의 선택을 분석하고 맞춤형 결과를 제공합니다. React를 활용하여 컴포넌트 기반으로 설계했으며 직관적인 UI와 귀여운 디자인을 적용하여 누구나 쉽게 참여할 수 있도록 제작했습니다.",
      images: [testImage1, testImage2, testImage3, testImage4, testImage5],
      features: ["React", "GSAP"],
      siteLink: "#",
      codeLink: "#",
    },

    {
      number: "03",
      title: "📊 블뷰(Blog-View)",
      description:
        "블로그 데이터를 분석하고 인기 순위를 제공하는 웹 서비스입니다. 사용자는 자신의 블로그를 검색하고 키워드 노출률을 분석할 수 있으며 블로그 순위를 확인할 수 있습니다. Next.js를 기반으로 개발 예정이며 더욱 정교한 블로그 트렌드 분석이 가능하도록 구현할 예정입니다.",
      images: [],
      features: ["Next.js"],
      siteLink: "#",
      codeLink: "#",
    },
  ];

  return (
    <section id="projects" className="projects-container" ref={projectsRef}>
      {/* 섹션 제목 */}
      <h2 className="section-title">
        <span className="section-number">03.</span>
        <span className="section-text">Projects</span>
        <span className="title-line"></span>
      </h2>

      {/* 프로젝트 리스트를 반복하여 렌더링 */}
      {projectList.map((project, index) => (
        <div key={index} className="project-card">
          {/* 이미지 캐러셀 */}
          <div className="project-image">
            <Slider
              dots={true} // 하단에 페이지 점 표시
              infinite={true} // 무한 루프 설정
              speed={500} // 슬라이드 전환 속도
              slidesToShow={1} // 한 번에 하나씩 표시
              slidesToScroll={1} // 한 번에 하나씩 이동
            >
              {project.images.map((img, i) => (
                <img key={i} src={img} alt={`${project.title} 이미지`} />
              ))}
            </Slider>
          </div>

          {/* 프로젝트 정보 섹션 */}
          <div className="project-info">
            <h2 className="project-title">{project.title}</h2>
            <p className="project-description">{project.description}</p>

            {/* 기술 스택 리스트 */}
            <div className="project-tech">
              {project.features.map((tech, i) => (
                <span key={i} className="tech-badge">
                  {tech}
                </span>
              ))}
            </div>

            {/* 사이트 및 코드 보기 버튼 */}
            <div className="project-buttons">
              <a
                href={project.siteLink} // 개별 프로젝트 배포 사이트 링크
                target="_blank"
                rel="noopener noreferrer"
              >
                VIEW SITE
              </a>
              <a
                href={project.codeLink} // 개별 프로젝트 GitHub 코드 링크
                target="_blank"
                rel="noopener noreferrer"
              >
                VIEW CODE
              </a>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Projects;
