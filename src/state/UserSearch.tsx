import { useState } from 'react';

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
  const [name, setName] = useState('');
  const [user, setUser] = useState<User | undefined>();

  const handleClick = () => {
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
  return (
    <div>
      <>
        <h3>Find User</h3>
        <input
          placeholder='Search for users...'
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={handleClick}>Find</button>
        <h3>User Details</h3>
        <div>{user ? displayUser(user) : 'User not found'}</div>
      </>
    </div>
  );
};

export default UserSearch;
