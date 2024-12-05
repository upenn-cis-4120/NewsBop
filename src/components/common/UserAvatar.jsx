import './UserAvatar.css';

const UserAvatar = ({ size = 'large' }) => {
  return (
    <div className={`user-avatar ${size}`}>
      <img 
        src="/avatar2.png" 
        alt="User" 
        className="avatar-image"
      />
    </div>
  );
};

export default UserAvatar;
