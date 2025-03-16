import "./styles/global.css"; // 전역 스타일 파일
import NavBar from "./components/NavBar"; // 네비게이션 바
import Intro from "./pages/Intro"; // 인트로 페이지
import About from "./pages/About"; // 자기소개 페이지
import Skills from "./pages/Skills"; // 기술 스택 페이지
import Projects from "./pages/Projects"; // 프로젝트 소개 페이지
import Archiving from "./pages/Archiving";
import Footer from "./pages/Footer";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Intro />
      <About />
      <Skills />
      <Projects />
      <Archiving />
      <Footer />
    </div>
  );
}

export default App;
