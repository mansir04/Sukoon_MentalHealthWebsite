import React, { useEffect, useRef } from 'react';

const MentalHealthInitiative = ({ text, image, link, isTextOnLeft, backgroundColor }) => {
  const elementRef = useRef(null);

  const renderFormattedText = () => {
    const parts = text.split("[italic]");
    return (
      <>
        {parts.map((part, index) =>
          index % 2 === 0 ? (
            <span key={index}>{part}</span>
          ) : (
            <span key={index} style={{ fontStyle: 'italic' }}>
              <a href={link} target="_blank" rel="noopener noreferrer">
                {part}
              </a>
            </span>
          )
        )}
      </>
    );
  };

  const textStyle = {
    fontSize: '22px',
    fontWeight: 'bold',
    color: '#2a2450',
  };

  return (
    <div
      className={`grid-row`}
      style={{ backgroundColor, width: '100%' }}
    >
      <div className={`grid-text`} ref={elementRef} style={textStyle}>
        {renderFormattedText()}
              <button className="initiative-link-button" onClick={() => window.open(link, '_blank')}>
                Visit Website
              </button>
      </div>
      <div className={`grid-image`} ref={elementRef} style={{ width: '100%' }}>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img src={image} alt="Initiative" />
        </a>
      </div>
    </div>
  );
};

export default MentalHealthInitiative;