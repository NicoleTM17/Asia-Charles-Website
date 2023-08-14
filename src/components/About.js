
import '../styles/About.css';

import '../styles/Responsive.css'; // MOVE TO NEXT COMPONENT

function About(){

  return(
    <div id='about'>
      <div className='about-me'>
        <img className='flower-border' src='images/flower-border.png' alt='border'/>
        <div className='about-text'>
          <h1 className='welcome-txt'><span style={{fontSize: '3.5em'}}>W</span>elcome, I'm Asia</h1>
          <p style={{textAlign: 'center', fontSize: '2em'}}>⋆｡°✩</p>
          <p className='welcome-content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>

        <div className='about-collage'>
          <img className='collage-one' src='images/collage1.png' alt='collage-1'/>
        </div>

      </div>

    </div>
  );
};


export default About;
