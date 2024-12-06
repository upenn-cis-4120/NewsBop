import { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export function AppProvider({ children }) {
  const [friends, setFriends] = useState(() => {
    return JSON.parse(localStorage.getItem('friends')) || [];
  });
  
  const [categoryStreaks, setCategoryStreaks] = useState(() => {
    return JSON.parse(localStorage.getItem('categoryStreaks')) || {};
  });

  const [favoriteCategories, setFavoriteCategories] = useState(() => {
    return JSON.parse(localStorage.getItem('favoriteCategories')) || ['pop', 'politics', 'finance'];
  });

  // Calculate user streak based on maximum category streak
  const userStreak = Math.max(0, ...Object.values(categoryStreaks));

  // Update localStorage when state changes
  useEffect(() => {
    localStorage.setItem('friends', JSON.stringify(friends));
  }, [friends]);

  useEffect(() => {
    localStorage.setItem('favoriteCategories', JSON.stringify(favoriteCategories));
  }, [favoriteCategories]);

  const toggleFavoriteCategory = (categoryId) => {
    setFavoriteCategories(prev => {
      if (prev.includes(categoryId)) {
        return prev.filter(id => id !== categoryId);
      } else {
        return [...prev, categoryId];
      }
    });
  };

  useEffect(() => {
    localStorage.setItem('categoryStreaks', JSON.stringify(categoryStreaks));
  }, [categoryStreaks]);

  const addFriend = (username) => {
    setFriends(prev => {
      if (!prev.find(f => f.username === username)) {
        return [...prev, {
          username,
          dateAdded: new Date().toISOString(),
          streak: 0
        }];
      }
      return prev;
    });
  };

  const updateCategoryStreak = (category, correct) => {
    setCategoryStreaks(prev => ({
      ...prev,
      [category]: correct ? (prev[category] || 0) + 1 : 0
    }));
  };

  const value = {
    friends,
    categoryStreaks,
    userStreak, // This is now the maximum of all category streaks
    addFriend,
    updateCategoryStreak,
    favoriteCategories,
    toggleFavoriteCategory
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
