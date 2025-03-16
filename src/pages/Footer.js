import "../styles/Footer.css";

function Footer() {
  return (
    <>
      {/* 페이지 사이 구분선 추가 */}
      <hr className="footer-divider" />

      <footer className="footer-container">
        <h3>HONG GA YOUNG</h3>
        <div className="footer-info">
          <p>PHONE : 010.5454.4121</p>
          <p>E-MAIL : iamkaouo@gmail.com</p>
        </div>
        <p className="copyright">© YOUNG REACT PORTFOLIO 2025</p>
      </footer>
    </>
  );
}

export default Footer;
