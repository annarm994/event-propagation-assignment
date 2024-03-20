import React from 'react';

const NestedButtons = () => {
  const handleOuterClick = () => {
    alert('Outer button clicked!');
  };

  const handleInnerClick = (e) => {
    e.stopPropagation(); // Stop event propagation
    alert('Inner button clicked!');
  };

  return (
    <div>
      <button onClick={handleOuterClick}>Outer Button</button>
      <button onClick={handleInnerClick} style={{ marginLeft: '10px' }}>
        Inner Button
      </button>
    </div>
  );
};

export default NestedButtons;