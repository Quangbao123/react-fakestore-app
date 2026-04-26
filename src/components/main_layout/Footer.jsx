function Footer() {
  return (
    <footer>
      <div className="content">
        <div className="director">
          <p>© 2026 Nguyen Quang Bao</p>
          <div className="description">
            <p>Built with ReactJS | Data from FakeStore API</p>
            <p>This project is for learning/demo purposes</p>
          </div>
        </div>
        <div className="contact">
          <h4>Information</h4>
          <p>
            <a href="https://github.com/Quangbao123">
              <i className="fa-brands fa-github"></i> GitHub
            </a>
          </p>
          <p>
            <a href="https://www.linkedin.com/in/bao-nguyen-quang-190345352/">
              <i className="fa-brands fa-linkedin"></i> Linkedin
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
