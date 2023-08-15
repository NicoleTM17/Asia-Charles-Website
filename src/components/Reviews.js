
import '../styles/Reviews.css';
import '../styles/Responsive.css'; // MOVE TO NEXT COMPONENT

function Reviews(){

  const reviews = [

    {author: '<strong>Caitlain</strong>', text: "Asia is truly an amazing tutor, she's helped me develop a <em>passion</em> for meditation through her <em>dedicated</em> sessions. I look forward to go to more of her sessions in the future!"},
    {author: '<strong>Elan</strong>', text: "Asia is one of those teachers you can only hope to meet, open, honest, and <em>genuinely empathetic</em>. You, like me, previously insecure and severely lacking in confidence, can change your story for the better with a highly regarded mindfulness coach of the highest calibre, that is, someone who is <em>naturally gifted</em> and aware."},
    {author: '<strong>Mattia</strong>', text: "I was struggling with anxiety due to exam stress and Asia's lessons on meditation an mindfulness helped me in keeping my anxiety <em>under control</em>. She is very kind and understanding person and I would totally <em>recommend</em> her if you are struggling to implement mindfulness in your life, because her tips and invaluable advice will definitely help you."}
  ];



  return(
    <div id='reviews' style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.3),rgba(255,255,255,0.3)), url(https://images.unsplash.com/photo-1604251405903-b8c4e83cdf7c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1188&q=80)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>

      <div className='my-reviews'>
        {reviews.map((review) => (
          <div className='review-section' >
            <p className='review-txt' dangerouslySetInnerHTML={{ __html: review.text }}/>
            <p className='author' dangerouslySetInnerHTML={{ __html: review.author }}/>
          </div>
        ))}
      </div>


    </div>
  )
}

export default Reviews;
