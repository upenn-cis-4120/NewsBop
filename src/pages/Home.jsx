import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import PageLayout from '../components/layout/PageLayout';
import UserAvatar from '../components/common/UserAvatar';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();
  const { categoryStreaks } = useApp();

  const categories = [
    { id: 'pop', name: 'POP' },
    { id: 'politics', name: 'POLITICS' },
    { id: 'finance', name: 'FINANCE' }
  ];

  return (
    <PageLayout>
      <h1 className="title">News BOP!</h1>

      <div className="user-profile">
        <div className="user-container">
          <UserAvatar size="large" />
          <div className="username">NewsNerd_007</div>
        </div>
      </div>

      <div className="quick-actions">
        <a onClick={() => navigate('/leaderboard')} className="action-button">
          <i className="fas fa-medal icon"></i>
          {/* <div className="action-label">Leaderboard</div> */}
        </a>
        <a onClick={() => navigate('/friends')} className="action-button">
          <i className="fas fa-users icon"></i>
          {/* <div className="action-label">Friends</div> */}
        </a>
      </div>

      <div className="category-grid">
        {categories.map(category => (
          <div
            key={category.id}
            className="category"
            onClick={() => navigate(`/quiz/${category.id}`)}
          >
            <i className="fas fa-fire"></i>
            <div>{category.name}</div>
            <div className="streak-counter">
              {categoryStreaks[category.id] || 0} DAY{categoryStreaks[category.id] !== 1 ? 'S' : ''}
            </div>
          </div>
        ))}
      </div>
    </PageLayout>
  );
};

export default Home;
