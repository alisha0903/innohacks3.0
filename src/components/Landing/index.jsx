import { SOCIALS, TOP_SECTION } from '../../Module/General';
import MytypedComponent from '../Typed/index.js';
import './style.css';
import { BsDiscord } from "react-icons/bs";
const Btn = props => {
  return (
    <button className={props.class}>
      <i className={props.ico}></i>
      {props.type}
      <div className="overlay">
        <div className="overlay-text">{props.overlay}</div>
      </div>
    </button>
  );
};

const About = () => {
  const titleStyle = {
    background: 'linear-gradient(to right, #ff0000, #1E78E4)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontSize:"7rem",
    whiteSpace: "wrap"
  };
  return (
    <div className="AboutMe">
      <h2 >Join <span style={titleStyle} >InnoHacks 3.0</span></h2>
      <MytypedComponent />
    </div>
  );
};

const Myinfo = () => {
  return (
    <div className="Myinfo">
      <About />
      <p> {TOP_SECTION.SHORT_DESCRIPTION}</p>
      <div className="buttom-group">
        {/* <a href={TOP_SECTION.JUDGES_FORM_LINK}>
          {' '}
          <Btn className="sponsor_btn" type="Judges" overlay="Fill the form" />
        </a> */}
        <div className="join_dis">
          <a rel="noreferrer" target="_blank" href="https://discord.gg/qNmEeAsuqQ">
            {/* <Btn
            ico="fab fa-2x fa-discord"
            className="join_disco"
            type="Join Discord"
            overlay="Click the link"
          /> */}
            {/* <button className="animated-button">
              <svg viewBox="0 0 24 24" className="arr-2" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                ></path>
              </svg>
              <span className="text">Join Discord</span>
              <span className="circle"></span>
              <svg viewBox="0 0 24 24" className="arr-1" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                ></path>
              </svg>
            </button> */}
            <button className='anime-btn'>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 36 36"
                width="36px"
                height="36px"
              />
                <rect width="36" height="36" x="0" y="0" fill="#fdd835"></rect>
                <BsDiscord className='img' fontSize={50} color='white'/>
              <span className="now">now!</span>
              <span className="play">Join</span>
          </button>

          </a>
        </div>


        <a href='https://forms.gle/LabTKRJEHvyZuXd78' target='_blank'>

          {' '}
          <Btn
            className="register"
            type="Register "
            overlay="Now"
          />
          
        </a>
        {/* <div className='Register_button'>
        <button className="learn-more buttonR">
            <span aria-hidden="true" className="circleR">
              <span className="icon arrow"></span>
            </span>
            <span className="button-text">Learn More</span>
          </button>
        </div> */}
      </div>
    </div>
  );
};

export { Btn, Myinfo };
