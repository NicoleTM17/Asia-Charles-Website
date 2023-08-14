
import '../styles/Menu.css';

function Menu( {isOpen, onClick} ) {


  return(
    <div className={`hamburger-menu ${isOpen ? 'open' : ''}`} onClick={onClick}>
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
    </div>
  )
};


export default Menu;
