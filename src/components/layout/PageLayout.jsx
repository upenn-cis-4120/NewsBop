import { useNavigate } from 'react-router-dom';
import './PageLayout.css';

const PageLayout = ({ children, hideBottomNav = false }) => {
    const navigate = useNavigate();
  
    return (
      <div className="phone-container">
        <div className="top-bar">
          <img 
            src="/quizbop_logo_c.png" 
            alt="Quiz BOP Logo" 
            className="logo"
            onClick={() => navigate('/')}
          />
          <div className="right-icons">
            <i className="fas fa-question-circle icon"></i>
            <i className="fas fa-user icon"></i>
          </div>
        </div>
        
        {children}
  
        {!hideBottomNav && (
          <nav className="bottom-nav">
            <i className="fa-solid fa-money-check-dollar" onClick={() => navigate('/quiz/finance')}></i>
            <i className="fas fa-landmark-dome" onClick={() => navigate('/')}></i>
            <i className="fas fa-earth-americas" onClick={() => navigate('/quiz/politics')}></i>
            <i className="fas fa-guitar" onClick={() => navigate('/quiz/pop')}></i>
            <i className="fas fa-plus"></i>
          </nav>
        )}
      </div>
    );
  };

export default PageLayout;
