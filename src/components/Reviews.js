
import '../styles/Reviews.css';

function Reviews(){

  const reviews = [

    {author: '<strong>Caitlain Caine</strong>', text: "<em>'Asia is truly an amazing teacher, she's helped me develop a passion for meditation through her dedicated sessions. I look forward to going to more of her sessions in the future!'<em>"},
    {author: '<strong>Elan Sang</strong>', text: "<em>'Asia is one of those teachers you can only hope to meet, open, honest, and genuinely empathetic. You, like me, previously insecure and severely lacking in confidence, can change your story for the better with a highly regarded mindfulness coach of the highest calibre, that is, someone who is naturally gifted and aware.'</em>"},
    {author: '<strong>Mattia Dervasi</strong>', text: "<em>'I was struggling with anxiety due to exam stress and Asia's lessons on meditation and mindfulness helped me in keeping my anxiety under control. She is a very kind and understanding person and I would totally recommend her if you are struggling to implement mindfulness in your life, because her tips and invaluable advice will definitely help you.'</em>"}
  ];



  return(
    <div id='reviews' style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.4),rgba(255,255,255,0.4)), url(https://images.unsplash.com/photo-1617957743103-310accdfb999?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>

      <div className='reviews-wrapper'>
        {reviews.map((review, index) => (
          <div style={{marginTop: '2em', marginBottom: '2em'}} className='review-section' key={index} >
            <p className='review-txt' dangerouslySetInnerHTML={{ __html: review.text }}/>
            <p className='author' dangerouslySetInnerHTML={{ __html: review.author }}/>
          </div>
        ))}
      </div>


    </div>
  )
}

export default Reviews;
