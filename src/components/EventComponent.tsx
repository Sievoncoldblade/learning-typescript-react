import React, { useState } from 'react';

const EventComponent: React.FC = () => {
  const [message, setMessage] = useState('');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  };

  const handleDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    setMessage(event.currentTarget.innerText);
  };

  const handleDragOver = (event: React.DragEvent<HTMLInputElement>) => {
    event.preventDefault();
  };

  const handleDrop = (event: React.DragEvent<HTMLInputElement>) => {
    event.preventDefault();
    event.currentTarget.placeholder = message;
  };

  return (
    <div>
      <input
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onChange={handleChange}
      ></input>
      <div draggable onDragStart={handleDragStart}>
        Drag Me!
      </div>
    </div>
  );
};

export default EventComponent;
