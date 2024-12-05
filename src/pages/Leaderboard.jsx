import { useApp } from '../context/AppContext';
import PageLayout from '../components/layout/PageLayout';
import UserAvatar from '../components/common/UserAvatar';
import './Leaderboard.css';

const Leaderboard = () => {
  const { friends, userStreak } = useApp();

  // Combine friends and current user into entries array
  const entries = [
    ...friends.map(friend => ({
      ...friend,
      streak: friend.streak || 0
    })),
    { username: 'YOU', streak: userStreak, isCurrentUser: true }
  ].sort((a, b) => (b.streak || 0) - (a.streak || 0));

  const getTrophyInfo = (position) => {
    const icon = position <= 2 ? 'fas fa-trophy' : 'fas fa-medal';
    let className;
    switch (position) {
      case 0:
        className = 'trophy-gold';
        break;
      case 1:
        className = 'trophy-silver';
        break;
      case 2:
        className = 'trophy-bronze';
        break;
      default:
        className = 'trophy-regular';
    }
    return { icon, className };
  };

  return (
    <PageLayout>
      <h1 className="title">Leaderboard</h1>

      <div className="leaderboard-container">
        {entries.length > 0 ? (
          entries.map((entry, index) => {
            const { icon, className } = getTrophyInfo(index);
            return (
              <div key={entry.username} className="leaderboard-entry">
                <div className="trophy">
                  <i className={`${icon} ${className}`}></i>
                </div>
                <UserAvatar size="small" />
                <div className="user-info">
                  <div className="username">{entry.username}</div>
                  <div className="streak">
                    Streak: {entry.streak || 0} Day{entry.streak !== 1 ? 's' : ''}
                  </div>
                </div>
              </div>
            )
          })
        ) : (
          <div className="empty-state">
            <i className="fas fa-users"></i>
            <p>Add friends to see them on the leaderboard!</p>
          </div>
        )}
      </div>
    </PageLayout>
  );
};

export default Leaderboard;
