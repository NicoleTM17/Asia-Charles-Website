import { HashLink as Link } from 'react-router-hash-link';
import '../styles/About.css';



function About(){

  return(
    <div id='about'>

      <div className='about-me'>
        <img className='flower-border' src='images/flower-border.png' alt='border'/>
        <div className='about-text'>
          <h1 className='welcome-txt'><span style={{fontSize: '3.5em', color: '#var(--grass-green-color)'}}>W</span><span className='move-txt' style={{marginLeft: '-0.5em'}}>elcome, I'm Asia</span></h1>
          <p style={{textAlign: 'center', fontSize: '2em', color: 'var(--grass-green-color'}}>⋆｡°✩</p>
          <div className='welcome-content'>
            A passionate, creative, and playful human being here to guide you into being by coaching you on all things mindfulness, meditation, and emotional and mental well-being.
            <br/> <br/>
            As a Psychology graduate, Art Therapy trainee, and Mindfulness Coach, I have what it takes to support you in living a more authentic and peaceful life in connection to yourself and others. I have worked with a range of generations, from children to teenagers, and from young to older adults in healthcare and education, and cannot wait to support you on your journey!
            <br/> <br/>
            Having taught in both clinical and non-clinical settings, and having co-run several certified 8-week courses and compassion-focused therapy groups, I have developed my own teaching methods and techniques, which are greatly enriched and supported by my psychological and psychotherapeutic knowledge.
            <br/> <br/>
            <h2 style={{fontSize: '2.5em', fontStyle: 'italic', color: 'var(--grass-green-color', fontWeight: '200'}}>My Journey</h2>
            <br/>
            I was introduced to the practice of meditation, specifically mindfulness-based meditation, during my undergraduate studies where I attended a certified group-based 8-week MBCT and MBSR course and, soon after, began co-running mindfulness sessions for students throughout the pandemic.
            <br/><br/>
            My dedication to the 8-week course led me to a significant transformation and my initial curiosity to connect to myself and others more deeply turned into a passion.
            <br/><br/>
            <h4 style={{fontSize: '1.5em', fontStyle: 'italic', color: 'var(--grass-green-color', fontWeight: '200', textAlign: 'center'}}>The light of your awareness heals</h4>
            <br/>
            By learning to welcome my experiences with more openness and less judgment, I became more courageous and better able to navigate the waves of emotions and grief flooding into my life frequently at the time.
            <br/>
            Through my consistent and intentional mindfulness practice, I began to nurture a more genuine appreciation for life, taking in all of the small, yet golden opportunities to take in joy, and feeling more alive than ever before.<br/>
            <br/>
            I coach YOU on how to master the art of giving yourself permission to...
            <br/><br/>
            <ul style={{lineHeight: '2', fontWeight: '200'}}>
              <li>Embrace your experiences without assigning any meaning to them</li>
              <li>Question unhelpful narratives that rule your life</li>
              <li>Accept and give voice to your emotions so as to release them and reveal yet another layer of who you truly are. </li>
            </ul>

          </div>



          <Link to='#services' smooth style={{textDecoration: 'none'}}><div className='services-btn'>Check out my services</div></Link>

          {/* <img className='slogan-txt' src='images/slogan.png' alt='slogan'/> */}
        </div>

        <div className='about-collage'>
          <img className='about-page-img' src='images/asia-portrait.jpg' alt='about-img'/>
          {/* <img className='about-page-img-two' src='images/asia-portrait-2.jpg' alt='about-img'/> */}
        </div>

      </div>


    </div>
  );
};


export default About;
