import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import PageLayout from '../components/layout/PageLayout';
import './MoreTopics.css';

const MoreTopics = () => {
  const navigate = useNavigate();
  const { favoriteCategories, toggleFavoriteCategory } = useApp();

  const moreTopics = [
    { id: 'art', name: 'ART', image: '/art_news.png' },
    { id: 'finance', name: 'FINANCE', image: '/finance_news.png' },  // matches Home page ID
    { id: 'pop', name: 'POP CULTURE', image: '/pop_news.png' },     // matches Home page ID
    { id: 'politics', name: 'WORLD EVENTS', image: '/world_news.png' }  // matches Home page ID
  ];


  return (
    <PageLayout>
      <h1 className="title">More Topics</h1>

      <div className="topics-grid">
        {moreTopics.map(topic => (
          <div key={topic.id} className="topic-card">
            <div className="topic-image-container">
              <img src={topic.image} alt={topic.name} className="topic-image" />
              <i 
                className={`fas fa-heart topic-heart ${favoriteCategories.includes(topic.id) ? 'active' : ''}`}
                onClick={() => toggleFavoriteCategory(topic.id)}
              ></i>
            </div>
            <div className="topic-name">{topic.name}</div>
          </div>
        ))}
      </div>
    </PageLayout>
  );
};

export default MoreTopics;
