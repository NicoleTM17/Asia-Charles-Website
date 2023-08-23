import { HashLink as Link } from 'react-router-hash-link';
import '../styles/About.css';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp} from '@fortawesome/free-solid-svg-icons';

function About(){

  return(
    <div id='about'>

      <div className='chevron-container' style={{position:'sticky', top: 10}}>
        <Link className='chevron-up sticky' to='#home' smooth><FontAwesomeIcon icon={faChevronUp}/></Link>
      </div>

      <div className='about-me'>
        <img className='flower-border' src='images/flower-border.png' alt='border'/>
        <div className='about-text'>
          <h1 className='welcome-txt'><span style={{fontSize: '3.5em', color: '#var(--grass-green-color)'}}>W</span><span className='move-txt' style={{marginLeft: '-0.5em'}}>elcome, I'm Asia</span></h1>
          <p style={{textAlign: 'center', fontSize: '2em', color: 'var(--licorice-black-color'}}>⋆｡°✩</p>
          <p className='welcome-content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <Link to='#services' smooth style={{textDecoration: 'none'}}><div className='services-btn'>Check out my services</div></Link>
        </div>

        <div className='about-collage'>
          <img className='collage-one' src='images/about-img.png' alt='about-img'/>
        </div>

      </div>


    </div>
  );
};


export default About;
