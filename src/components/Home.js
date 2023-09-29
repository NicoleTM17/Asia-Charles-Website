
import Banner from './Banner.js';
import About from './About.js';
import Quote from './Quote.js';
import Reviews from './Reviews.js';
import Contact from './Contact.js';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
// import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import { animateScroll as scroll, scroller } from 'react-scroll';

function Home() {

  const[SearchParams] = useSearchParams();
  var navId =(SearchParams.get('id'));


  useEffect(() => {
    // console.log('hello');
    if(navId){
      scroller.scrollTo(navId, {
        duration: 800,
        delay: 10,
        smooth: true,
        });
    }
  }, [navId]);

  return (
    <>
      <Banner />
      <About/>
      <Reviews/>
      <Quote/>
      <Contact/>
    </>
  );
}

export default Home;
