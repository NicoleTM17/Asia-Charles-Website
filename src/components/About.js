// import { HashLink as Link } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import '../styles/About.css';



function About(){

  return(
    <div id='about'>

      <div className='about-me'>
        <img className='flower-border-top' src='images/flower-border-top.png' alt='border'/>
        <div className='about-text'>
          <h4 style={{fontSize: '2.5em', fontStyle: 'italic', color: 'var(--grass-green-color', fontWeight: '200', textAlign: 'center', fontFamily: 'Text Me One, sans-serif'}}>The light of your awareness heals</h4>
          <h1 className='welcome-txt'><span style={{fontSize: '3.5em', color: '#var(--grass-green-color)'}}>W</span><span className='move-txt' style={{marginLeft: '-0.5em', fontWeight: '300'}}>elcome, I'm Asia</span></h1>
          <p style={{textAlign: 'center', fontSize: '2em', color: 'var(--grass-green-color'}}>⋆｡°✩</p>
          <div className='welcome-content'>
            A passionate, creative, and playful human being here to guide you into being by coaching you on all things mindfulness, meditation, and emotional and mental well-being.
            <br/> <br/>
            As a Psychology graduate, Art Therapy trainee, and Mindfulness Coach, I have what it takes to support you in living a more authentic and peaceful life in connection to yourself and others. I have worked with a range of generations, from children to teenagers, and from young to older adults in healthcare and education, and cannot wait to support you on your journey!
            <br/> <br/>
            Having taught in both clinical and non-clinical settings, and having co-run several certified 8-week courses and compassion-focused therapy groups, I have developed my own teaching methods and techniques, which are greatly enriched and supported by my psychological and psychotherapeutic knowledge.
            <br/> <br/>
            <h2 style={{fontSize: '2em', fontStyle: 'italic', color: 'var(--grass-green-color', fontWeight: '200', fontFamily: 'Text Me One, sans-serif'}}>My Journey</h2>
            <br/>
            I was introduced to the practice of meditation, specifically mindfulness-based meditation, during my undergraduate studies where I attended a certified group-based 8-week MBCT and MBSR course and, soon after, began co-running mindfulness sessions for students throughout the pandemic.
            <br/><br/>
            My dedication to the 8-week course led me to a significant transformation and my initial curiosity to connect to myself and others more deeply turned into a passion.
            <br/><br/>
            By learning to welcome my experiences with more openness and less judgement, I became more courageous and better able to navigate the waves of emotions and grief flooding into my life frequently at the time.
            <br/>
            Through my consistent and intentional mindfulness practice, I began to nurture a more genuine appreciation for life, taking in all of the small, yet golden opportunities to take in joy, and feeling more alive than ever before.<br/>
            <br/>
            I teach you how to master the art of being present, so that you may...
            <br/><br/>
            <ul style={{lineHeight: '2', fontWeight: '200'}}>
              <li className='about-bullets'>Embrace your experiences more openly without assigning any meaning to them and reduce suffering</li>
              <li className='about-bullets'>Cultivate joy and inner peace</li>
              <li className='about-bullets'>Develop a more authentic connection to yourself</li>
            </ul>

          </div>



          {/* <Link to='#services' smooth style={{textDecoration: 'none'}}><div className='services-btn'>Check out my services</div></Link> */}
          <br/>
          <div className='services-link'>Check out what I have to offer via my <Link to='/services' className='services-hover' smooth='true' style={{color: 'var(--grass-green-color', fontWeight: '500'}}>services</Link></div>

          {/* <img className='slogan-txt' src='images/slogan.png' alt='slogan'/> */}
        </div>

        <div className='about-collage'>
          <img className='about-page-img' src='images/portrait1.jpg' alt='about-img'/>
          <div className='about-collage-art'>

          </div>
        </div>

        <img className='flower-border-bottom' src='images/flower-border-bottom.png' alt='border'/>
      </div>


    </div>
  );
};


export default About;
