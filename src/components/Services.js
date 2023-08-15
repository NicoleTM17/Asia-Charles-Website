
import '../styles/Services.css';
import '../styles/Responsive.css'; // MOVE TO NEXT COMPONENT

function Services() {
  return(
    <div id='services' style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.3),rgba(255,255,255,0.3)), url(https://images.unsplash.com/photo-1607931042290-dcc5d8da1c7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>

      <div className='my-service'>
        <h2 className='my-services-quote'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</h2>
        <p className='my-services-text'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      </div>

      <div className='services-wrapper'>
        <div className='boxes'>
          <div className='lesson-plans'>
            <h3 className='lesson-plan'>LESSON PLAN</h3>
            <div className='lesson-plan-boxes-one'>
              <div className='lesson-box'>
                <p className='number'>1.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </div>

              <div className='lesson-box'>
                <p className='number'>2.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </div>

              <div className='lesson-box'>
                <p className='number'>3.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </div>
            </div>
          </div>

          <div className='lesson-plans'>
            <div className='lesson-plan-boxes-two'>
              <div className='lesson-box'>
                <p className='number'>4.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </div>

              <div className='lesson-box'>
                <p className='number'>5.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </div>

              <div className='lesson-box'>
                <p className='number'>6.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </div>
            </div>
          </div>
        </div>


        <div className='outcomes'>
          <h3 className='lesson-outcomes-header'>LESSON OUTCOMES</h3>
          <ul className='lesson-outcomes'>
            <li className='outcome'>Lorem ipsum dolor sit amet, consectetur adipiscing</li>
            <li className='outcome'>Lorem ipsum dolor sit amet, consectetur adipiscing</li>
            <li className='outcome'>Lorem ipsum dolor sit amet, consectetur adipiscing</li>
            <li className='outcome'>Lorem ipsum dolor sit amet, consectetur adipiscing</li>
            <li className='outcome'>Lorem ipsum dolor sit amet, consectetur adipiscing</li>
            <li className='outcome'>Lorem ipsum dolor sit amet, consectetur adipiscing</li>
          </ul>
        </div>
      </div>


    </div>
  )
};

export default Services;
