import { SOCIALS } from '../../Module/General';
import { FaInstagram } from "react-icons/fa6";
import { BiLogoDiscordAlt } from "react-icons/bi";
import { CiLinkedin } from "react-icons/ci";
import { IoLogoTwitter } from "react-icons/io";
import { FaPhone } from "react-icons/fa";
import { HashLink } from 'react-router-hash-link';
import './style.scss';


const Footer = () => {

  return (
    <div className="footer new_footer_top" >
      <svg className="footer-wave-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 100" preserveAspectRatio="none">
        <path className="footer-wave-path" d="M851.8,100c125,0,288.3-45,348.2-64V0H0v44c3.7-1,7.3-1.9,11-2.9C80.7,22,151.7,10.8,223.5,6.3C276.7,2.9,330,4,383,9.8 c52.2,5.7,103.3,16.2,153.4,32.8C623.9,71.3,726.8,100,851.8,100z"></path>
      </svg>
      <div className='main-footer '>
        <div className="Register_a">
          <button className="register-button">

            <a smooth className='register-link' href='https://forms.gle/LabTKRJEHvyZuXd78' target='_blank'>
              <span>Register Now</span>
            </a>
          </button>
        </div>
        <div className='social-links'>
          <span className="single" >
            <a rel="noreferrer " target="_blank" href={SOCIALS.instagram}  >
              <FaInstagram fontSize={40} className='redBlue1' />
            </a>
          </span>
          <span className="single">
            <a rel="noreferrer" target="_blank" href="https://discord.gg/qNmEeAsuqQ">
              <BiLogoDiscordAlt fontSize={40} className='redBlue2' />
            </a>
          </span>
          <span className="single">
            <a rel="noreferrer" target="_blank" href={SOCIALS.linkedin}>
              <CiLinkedin fontSize={40} className='redBlue3' />
            </a>
          </span>
          <span className="single">
            <a rel="noreferrer" target="_blank" href={SOCIALS.twitter}>
              <IoLogoTwitter fontSize={40} className='redBlue4' />
            </a>
          </span>
          <span className="single">
            <a rel="noreferrer"  href="tel:+917669816088">
              <FaPhone fontSize={35} className='redBlue5' />
            </a>
          </span>
        </div>
      </div>
      <div className="footer-logo">
        <div className='hacks-footer-container'>
          <HashLink className="footer-logo-link" to="#" smooth>
            <img src="https://template-mail-images.s3.ap-south-1.amazonaws.com/INNOHACKS_3.0_Logo-removebg-preview+(1).png" className='hacks' width={"100%"} alt="" />
          </HashLink>
        </div>
        <div className='inno-footer-container'>
        <a className="footer-logo-link " href="https://innogeeks.in/" target='_blank'>
          <img className='inno' src="https://template-mail-images.s3.ap-south-1.amazonaws.com/inno+logo+(3).png" width={"120%"} alt="" />
        </a>
        </div>
      </div>
      <div className="footer-team">
        <h4>With 💙 by Team Innogeeks</h4>
        <p>©2024 Innogeeks™</p>
        <p><a href="mailto:innogeeks@kiet.edu">Contact us @Innogeeks™</a></p>
      </div>
      <div className="footer_bg">
      </div>
    </div>

  );
};

export default Footer;
