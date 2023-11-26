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
            <span key={index} style={{ fontWeight: 'bold', marginLeft: '-20px', marginBottom: '40px'}}>
              <a href={link} target="_blank" rel="noopener noreferrer">
                {part} <span role="img" aria-label="link icon" style={{ fontSize: '20px' }}>🔗</span>
              </a>
            </span>
          )
        )}
      </>
    );
  };

  const textStyle = {
    fontSize: '18px',
    color: '#2a2450',
  };

  return (
    <div className={`grid-row`} style={{ backgroundColor, width: '100%' }}>
      <div className={`grid-text`} ref={elementRef} style={textStyle}>
        {renderFormattedText()}
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
