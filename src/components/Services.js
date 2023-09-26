import {  useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Services.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUp } from '@fortawesome/free-solid-svg-icons';

function Services() {

  const handleClick = () => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  };

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []);

  return(
    <div id='services'>
      {/* PERSONALISED GUIDED MEDITATIONS */}

      <div className='services-details' style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)), url(https://images.unsplash.com/photo-1499346030926-9a72daac6c63?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', color:'var(--licorice-black-color)'}}>
        <Link to='/' className='back-btn' style={{textDecoration: 'none'}}><span>← </span><span>Go back</span></Link>
        <h2 className='services-slogan'>I write the meditations keeping you in mind, using my knowledge, experience, intuition, and creativity.</h2>

        <br/><br/>
        <h2 className='services-header' style={{fontSize: '2em', fontStyle: 'italic', fontWeight: 'bold', marginBottom: '.5em'}}>Personalised guided meditations</h2>
        <p>I absolutely love creating guided meditations (which I also upload on my YouTube channel, which you can check out <a style={{fontWeight: 'bold', color: 'var(--licorice-color)'}} href="https://www.youtube.com/@justlovemeditations" target='_blank' rel="noreferrer">here</a>)</p>
        <p>Through your custom-made guided meditation, I support you in...</p>
        <ul className='aims-list'>
          <li>Connecting to yourself</li>
          <li>Cultivating deeper presence and awareness</li>
          <li>Relaxing and unwinding</li>
          <li>Fulfilling your intention/s through guided imagery</li>
        </ul>

        <br/>
        <h2 className='services-subheader' style={{fontSize: '2em', fontStyle: 'italic', fontWeight: '200'}}>My approach</h2>
        <p>I combine mindfulness to foster an awareness of the present with relaxation techniques and guided imagery. I like to include a loving kindness prayer at the end to support your intention/s.
        You get to choose the length, background music (or not), and the format (audio or video). My voice will be recorded using a professional microphone.</p>

        {/* <div className='click-btn'>Click here to see how it works</div> */}

        <p className='book'><Link style={{color: 'var(--licorice-black-color)', textUnderlineOffset: '.75em'}} to='/?id=contact'>BOOK NOW</Link></p>
      </div>

      <div className='how-it-works'>
        <h2 className='services-subheader' style={{fontSize: '2em', fontStyle: 'italic', fontWeight: '200', marginBottom: '.5em'}}>How it works - Personalised guided meditations</h2>
        <p>Get in touch by <Link style={{color: 'var(--licorice-black)'}} to='/?id=contact'>here</Link>, and I will get back to you to schedule a free consultation. Following this, I will send you an invoice and ask you to make the full payment.</p>
        <p>During our consultation, I will listen to your current situation, needs, desires, and intentions in a non-judgmental, kind, and compassionate way, asking open-ended questions. The duration of the consultation may vary between 30 and 60 minutes.</p>
        <p>I will then get back to you with a script draft. Once you have approved it, I will record the meditation and send you the final product.</p>
        <p>You must be 18+. This is not counselling or therapy.</p>
        <br/>
      </div>

    {/* LIVE GUIDED MEDITATIONS */}
    <div className='services-details' style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)), url(https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', color:'var(--licorice-black-color)'}}>
      <h2 className='services-header' style={{fontSize: '2em', fontStyle: 'italic', fontWeight: 'bold', marginBottom: '.5em'}}>Live guided meditations</h2>
      <p>I love to guide people into beingness, whether the meditations are pre-recorded or live. Along with offering you pre-recorded personalised guided meditations, I also run 1-hour 1:1 live sessions, in which I use a mindfulness-based approach to...</p>
      <ul className='aims-list'>
        <li>Support you in your meditation practice</li>
        <li>Provide you with guidance and a general understanding of how to practise mindfulness and meditate, if this is new to you</li>
        <li>Cater the session to your specific needs, desires, and intentions</li>
      </ul>
      {/* <div className='click-btn'>Click here to see how it works</div> */}

      <p className='book'><Link style={{color: 'var(--licorice-black-color)', textUnderlineOffset: '.75em'}} to='/?id=contact'>BOOK NOW</Link></p>

    </div>

      <div className='how-it-works'>
        <h2 className='services-subheader' style={{fontSize: '2em', fontStyle: 'italic', fontWeight: '200', marginBottom: '.5em'}}>How it works - Live guided meditations</h2>
        <p>The session will take place online.</p>
        <p>Once you have expressed your interest <Link style={{color: 'var(--licorice-black)'}} to='/?id=contact'>here</Link>, I will get back to you to schedule a session or a series of sessions, depending on your individual needs.</p>
        <p>I will then send you an invoice and ask you to make the payment.</p>
        <p>I have a 24-hour cancellation policy and you must be 18+. This is not counselling or therapy.</p>
        <br/>
      </div>

    {/* MINDFULNESS AND WELLBEING WORKSHOPS */}
    <div className='services-details' style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)), url(https://images.unsplash.com/photo-1536623975707-c4b3b2af565d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', color:'var(--licorice-black-color)'}}>
      <h2 className='services-header' style={{fontSize: '2em', fontStyle: 'italic', fontWeight: 'bold', marginBottom: '.5em'}}>Mindfulness and Well-being workshops</h2>
      <p>Having taught mindfulness to children, teenagers, and young and older adults in education and healthcare, I run psychoeducational group workshops (online and in-person) for any age group on mindfulness and well-being*.</p>
      <p>Some of the topics we might explore and discuss during the workshops include:</p>
      <ul className='aims-list'>
        <li>What mindfulness is and why it is crucial to slow down </li>
        <li>Some neuroscience and the role of mindfulness in emotion regulation</li>
        <li>Navigating emotions</li>
        <li>Mindfulness-based techniques to emotionally regulate</li>
        <li>The importance of connecting to our bodies</li>
        <li>Common misconceptions about mindfulness </li>
        <li>Autopilot and <em>the stress response</em></li>
        <li>Cultivating joy by harnessing the power of the present</li>
        <li>Learning to respond rather than react</li>
        <li>Developing resilience</li>
        <li>The idea that <em>thoughts are not facts</em></li>
        <li>Mindfulness practises and how to integrate them into our daily lives</li>
        <li>Breathing Spaces</li>
        <li>The attitudinal foundations of mindfulness</li>
        <li>The negativity bias and cultivating gratitude</li>
      </ul>
      <h2 className='services-subheader' style={{fontSize: '2em', fontStyle: 'italic', fontWeight: '200'}}>My approach</h2>
        <p>When working with groups, I tend to establish ground rules and allow the space to check in, check out, and ask questions. This is an inclusive, growth-oriented, kind, and compassionate space.</p>
        <p>I like to use metaphors, stories, games, poetry, and real-life applications to illustrate certain concepts.</p>
        {/* <div className='click-btn'>Click here to see how it works</div> */}

        <p className='book'><Link style={{color: 'var(--licorice-black-color)', textUnderlineOffset: '.75em'}} to='/?id=contact'>BOOK NOW</Link></p>

    </div>

    <div className='how-it-works'>
        <h2 className='services-subheader' style={{fontSize: '2em', fontStyle: 'italic', fontWeight: '200', marginBottom: '.5em'}}>How it works - Mindfulness and Well-being workshops</h2>
        <p>Contact me <Link style={{color: 'var(--licorice-black)'}} to='/?id=contact'>here</Link>, and we will schedule a call to discuss your requisites, including the frequency, date/s, duration, mode of delivery, and content catered to the needs of the specific context in which you would like me to teach.</p>
        <p>Once we have agreed on this, I will send you an invoice and ask you to make the full payment.</p>
        <p>This is not counselling or therapy.</p>
        <br/>
    </div>

    {/* MINDFULNESS AND WELLBEING SESSIONS */}
    <div className='services-details' style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)), url(https://images.unsplash.com/photo-1439405326854-014607f694d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', color:'var(--licorice-black-color)'}}>
      <h2 className='services-header' style={{fontSize: '2em', fontStyle: 'italic', fontWeight: 'bold', marginBottom: '.5em'}}>Mindfulness and Well-being sessions</h2>
      <p>I run 1:1 mindfulness and well-being* sessions for adults.</p>
      <p>I teach you any of the topics listed above, including mindfulness-based tools and techniques to support you in developing resilience, cultivating joy, presence, and peace, and gaining a deeper understanding of yourself.</p>
      <h2 className='services-subheader' style={{fontSize: '2em', fontStyle: 'italic', fontWeight: '200'}}>Outcomes</h2>
      <ul className='outcomes-list'>
        <li>A mindfulness practice that works for you</li>
        <li>A toolkit of techniques to support your emotional and mental well-being*</li>
        <li>Greater awareness of your inner self</li>
        <li>Ability to cultivate joy and peace daily</li>
        <li>Increased resilience in the face of life's difficulties</li>
      </ul>
      {/* <div className='click-btn'>Click here to see how it works</div> */}

      <p style={{marginTop: '2em'}} className='book'><Link style={{color: 'var(--licorice-black-color)', textUnderlineOffset: '.75em'}} to='/?id=contact'>BOOK NOW</Link></p>

    </div>

    <div className='how-it-works'>
        <h2 className='services-subheader' style={{fontSize: '2em', fontStyle: 'italic', fontWeight: '200', marginBottom: '.5em'}}>How it works - Mindfulness and Well-being sessions</h2>
        <p>If you are interested, contact me <Link style={{color: 'var(--licorice-black)'}} to='/?id=contact'>here</Link>, and I will get back to you to schedule our first session together.</p>
        <p>During the first session, we will get to know each other, define your growth and learning outcomes, and establish the frequency and number of our sessions.</p>
        <p>Commitment to your home practice is essential for any meaningful and lasting changes, and it involves only a few minutes of mindfulness daily.</p>
        <p>It is also crucial to bring an attitude of kindness and compassion to yourself if, for whatever reason, you cannot practise.</p>
        <p>I request that you make the payment before each session.</p>
        <p>The 24-hour cancellation policy applies to these sessions.</p>
        <p>This is not counselling or therapy.</p>
    </div>

    <div className='disclaimer-section'>
      <div className='disclaimer'>
        <h5>DISCLAIMER</h5>
        <p style={{fontSize: '.75em', opacity: '0.8'}}>*The terms mental health and well-being tend to be used interchangeably. While they are connected, they are also conceptually distinct (Keller, 2020). I do not have the training to support people with any mental health issue.</p>
      </div>
    </div>

    <div onClick={handleClick} className='services-circle-up'><FontAwesomeIcon icon={faCircleUp}/></div>

    </div>
  )
};

export default Services;




// style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)), url(https://images.unsplash.com/photo-1607931042290-dcc5d8da1c7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}
