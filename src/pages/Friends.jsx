import { useState } from 'react';
import { useApp } from '../context/AppContext';
import PageLayout from '../components/layout/PageLayout';
import UserAvatar from '../components/common/UserAvatar';
import './Friends.css';

const Friends = () => {
  const { friends, addFriend } = useApp();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newFriendUsername, setNewFriendUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newFriendUsername.trim()) {
      addFriend(newFriendUsername.trim());
      setNewFriendUsername('');
      setIsDialogOpen(false);
    }
  };

  return (
    <PageLayout>
      <h1 className="title">Friends</h1>

      <div className="friends-container">
        {friends.map((friend, index) => (
          <div key={index} className="friend-entry">
            <UserAvatar size="small" />
            <div className="username">{friend.username}</div>
          </div>
        ))}
      </div>

      {/* Add Friend Dialog */}
      <dialog 
        className="friend-dialog" 
        open={isDialogOpen}
      >
        <form onSubmit={handleSubmit}>
          <h3>Add Friend</h3>
          <input
            type="text"
            placeholder="Enter username"
            value={newFriendUsername}
            onChange={(e) => setNewFriendUsername(e.target.value)}
            required
          />
          <div className="dialog-buttons">
            <button 
              type="button" 
              className="dialog-button button-cancel"
              onClick={() => setIsDialogOpen(false)}
            >
              Cancel
            </button>
            <button 
              type="submit" 
              className="dialog-button button-submit"
            >
              Add
            </button>
          </div>
        </form>
      </dialog>

      {/* Bottom Tools */}
      <div className="bottom-tools">
        <i className="fas fa-qrcode"></i>
        <i 
          className="fas fa-plus" 
          onClick={() => setIsDialogOpen(true)}
        ></i>
      </div>
    </PageLayout>
  );
};

export default Friends;
