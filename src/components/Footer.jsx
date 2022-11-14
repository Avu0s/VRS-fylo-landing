function Footer() {
  return (
    <footer>
      <div className="wrapper">
        <div className="logo">
          <img src="../images/wlogo.svg" alt="Fylo logo" />
        </div>

        <div className="footer-items">
          <div className="contact">
            <div>
              <div className="icon">
                <img src="../images/icon-phone.svg" alt="" />
              </div>
              <span>Phone: +1-543-123-4567</span>
            </div>
            <div>
              <div className="icon">
                <img src="../images/icon-email.svg" alt="" />
              </div>
              <span>example@fylo.com</span>
            </div>
          </div>

          <ul>
            <li>About Us</li>
            <li>Jobs</li>
            <li>Press</li>
            <li>Blog</li>
          </ul>

          <ul>
            <li>Contact Us</li>
            <li>Terms</li>
            <li>Privacy</li>
          </ul>

          <div class="socials">
            <a href="#" className="fa fa-facebook"></a>
            <a href="#" className="fa fa-twitter"></a>
            <a href="#" className="fa fa-instagram"></a>
          </div>
        </div>
      </div>
      <hr />
      <small className="bold">Built with Vite, React & SASS.</small>
    </footer>
  );
}
export default Footer;
