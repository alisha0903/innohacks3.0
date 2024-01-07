import {useEffect, useState} from 'react';
import {FOOTER, SOCIALS, TOP_SECTION} from '../../Module/General';
import {Btn} from '../Landing/index.jsx';
import cross from './assets/cross.svg';
import DevPost from './assets/icons8-dev-post.svg';
import Dis from './assets/icons8-discord.svg';
import Insta from './assets/icons8-instagram.svg';
import Linked from './assets/icons8-linkedin-2.svg';
import Mail from './assets/icons8-mail.svg';
import Twitter from './assets/icons8-twitter.svg';
import PrivacyPolicy from './assets/Privacy policy.pdf';
import TermsOfUse from './assets/Terms of use.pdf';
//------------------------------------------------------------------
import './style.scss';

const GithubTemplate = ({hideTemplate}) => {
  return (
    <div className="template">
      <div className="template-left">
        <p>
          Join us to{' '}
          <a href={TOP_SECTION.HACKERS_REGISTRATION_FORM_LINK}>Gear Up</a>,
          where we will be hosting PUBLIC workshops, tech talks, panel
          discussions, and career sessions!
        </p>
      </div>
      <img onClick={hideTemplate} src={cross} />
    </div>
  );
};

const Footer = () => {
  const [template, setTemplate] = useState(false);
  const [viewTemplate, setViewTemplate] = useState(true);

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);

    return () => {
      window.removeEventListener('scroll', listenScrollEvent);
    };
  }, []);

  const listenScrollEvent = e => {
    if (window.scrollY > 2800) setTemplate(true);
    else if (window.scrollY < 2800) setTemplate(false);
  };

  return (
    <div>
      <div className="footer">
        {/* <div className="social-icons-container">
          <div className="social-icon">
            <a rel="noreferrer" target="_blank" href={SOCIALS.instagram}>
              <img src={Insta} alt="" />
            </a>
          </div>
          <div className="social-icon">
            <a rel="noreferrer" target="_blank" href={SOCIALS.discord}>
              <img src={Dis} alt="" />
            </a>
          </div>
          <div className="social-icon">
            <a rel="noreferrer" target="_blank" href={SOCIALS.linkedin}>
              <img src={Linked} alt="" />
            </a>
          </div>
          <div className="social-icon">
            <a rel="noreferrer" target="_blank" href={SOCIALS.email}>
              <img src={Mail} alt="" />
            </a>
          </div>
          <div className="social-icon">
            <a rel="noreferrer" target="_blank" href={SOCIALS.twitter}>
              <img src={Twitter} alt="" />
            </a>
          </div>
        </div> */}
        <div className="Register_a">
          <a href={TOP_SECTION.HACKERS_REGISTRATION_FORM_LINK}>
            {/* <Btn type="Register" overlay="Fill the form" /> */}
            <button className="butt">
           Register Now
          <div id="clip">
              <div id="leftTop" class="corner"></div>
              <div id="rightBottom" class="corner"></div>
              <div id="rightTop" class="corner"></div>
              <div id="leftBottom" class="corner"></div>
          </div>
          <span id="rightArrow" class="arrow"></span>
          <span id="leftArrow" class="arrow"></span>
      </button>

          </a>
          {/* {FOOTER.VOLUNTEERING_FORM.required && (
            // <a href={FOOTER.VOLUNTEERING_FORM.src}>
            //   <Btn type="Volunteer" class="Volunteer" overlay="Fill the form" />
            // </a>
          )} */}
        </div>
        <div className="footer_info">
          <div className='hr'><hr></hr></div>
          <p>
            Contact us{' '}
            <a href={SOCIALS.email}>
              <em>{SOCIALS.mail}</em>
            </a>{' '}
          </p>
          <p>Made with ❤️ By team Innogeeks</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
