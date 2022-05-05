import { useState } from 'react';

const GuestList: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [guests, setGuests] = useState<string[]>([]);

  const handleClick = (): void => {
    setName('');
    setGuests([...guests, name]);
  };

  const handleChange = (value: string) => {
    setName(value);
  };

  return (
    <div>
      <h3>Guest List</h3>
      <ul>
        {guests.map((guest) => {
          return <li key={Math.random()}>{guest}</li>;
        })}
      </ul>
      <input
        value={name}
        onChange={(e) => handleChange(e.target.value)}
        placeholder={'Name of the guest...'}
      />
      <button onClick={handleClick}>Add Guest</button>
    </div>
  );
};

export default GuestList;
