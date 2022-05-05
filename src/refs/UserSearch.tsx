import React, { useState, useRef, useEffect } from 'react';

type User = {
  name: string;
  age: number;
};

export const users: User[] = [
  { name: 'Florentino', age: 1043 },
  { name: 'Shikimori', age: 17 },
  { name: 'Gon', age: 12 },
];

const UserSearch: React.FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [name, setName] = useState('');
  const [user, setUser] = useState<User | undefined>();

  useEffect(() => {
    if (!inputRef.current) {
      return () => {};
    }
    inputRef.current.focus();
  }, []);

  const handleSearch = () => {
    setName('');
    const foundUser = users.find((user) => user.name === name);
    setUser(foundUser);
  };

  const displayUser = (user: User) => {
    return (
      <div>
        <p>Name: {user.name}</p>
        <p>Age: {user.age}</p>
      </div>
    );
  };

  const handleEnter = () => {
    handleSearch();
  };

  return (
    <div>
      <>
        <h3>Find User</h3>
        <input
          ref={inputRef}
          placeholder='Search for users...'
          onKeyDown={(e) => e.key === 'Enter' && handleEnter()}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={handleSearch}>Find</button>
        <h3>User Details</h3>
        <div>{user ? displayUser(user) : 'User not found'}</div>
      </>
    </div>
  );
};

export default UserSearch;
