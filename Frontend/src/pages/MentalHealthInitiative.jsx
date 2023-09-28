import React, { useEffect, useRef } from 'react';

const MentalHealthInitiative = ({ text, image, link, isTextOnLeft, backgroundColor }) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (element) {
      setTimeout(() => {
        element.classList.add('show-animation');
      }, 100);
    }
  }, []);

  const renderFormattedText = () => {
    const parts = text.split("[italic]");
    return (
      <p>
        {parts.map((part, index) =>
          index % 2 === 0 ? (
            part 
          ) : (
            <span style={{ fontStyle: 'italic' }}>
              <a href={link} target="_blank" rel="noopener noreferrer">
                {part}
              </a>
            </span>
          )
        )}
      </p>
    );
  };

  const textStyle = {
    fontSize: '34px',
    fontWeight: 'bold',
    color: 'darkslategray',
  };

  return (
    <div
      className={`grid-row ${isTextOnLeft ? 'text-left' : 'text-right'}`}
      style={{ backgroundColor, width: '100%' }}
    >
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
