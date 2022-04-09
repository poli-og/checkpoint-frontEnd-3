import "./styles.css";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn, FaReact } from "react-icons/fa";


function Footer() {

   const mybtn = document.getElementById("scroll-top");

    window.onscroll = function() {scrollFunction()};
    
    const scrollFunction = () => {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybtn.style.display = "block";
      } else {
        mybtn.style.display = "none";
      }
    }
    
    const topFunction = () => {
      document.documentElement.scrollTop = 0; 
    }
    
    return (
        <footer>
            <div id="footer">
                <ul className="social">
                <li><a href="https://github.com/poli-og"> <AiFillGithub size={40} color="white" /></a></li>
                <li><a href="https://linkedin.com/poli-og"><FaLinkedinIn size={40} color="white" /></a></li>
                <li><a href="https:instagram.com/poli.anices"><AiFillInstagram size={40}  color="white" /></a></li>
                </ul>
            </div>
                <p className="copywright">
                    <h3>Feito com 💜 e <FaReact size={20} /> por Poliana Gomes </h3>
                </p>
                <button className="scroll-top" id="scroll-top" onClick={topFunction}><svg  className="btn-top" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" /></svg></button>
        </footer>
    );
}

export default Footer;