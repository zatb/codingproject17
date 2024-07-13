import React from 'react';
import './FancyText.css';

const FancyText = ({ title, text, isMainTitle, color }) => {
  let className = 'fancy-text';
  if (title) {
    className += ' title';
  }
  if (isMainTitle) {
    className += ' main-title';
  }

  const style = { color };

  return (
    <div className={className} style={style}>
      {text}
    </div>
  );
};

export default FancyText;
