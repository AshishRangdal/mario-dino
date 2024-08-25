import "./Footer.css";

const Footer = () => {
  return (
    <div className="copyright">Copyright © {new Date().getFullYear()} {" "}
      <a href="https://ashish-rangdal-portfolio.netlify.app/" target="_blank" rel="noreferrer" className="copyright-link">Ashish Rangdal</a>
    </div>
  )
}
export default Footer