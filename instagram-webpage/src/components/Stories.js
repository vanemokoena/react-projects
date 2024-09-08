import React from 'react';

//stories
const Stories = () => {
  const storiesData = [
    { name: 'Vanessa', imgSrc: '/images/Vanessa.jpg' },
    { name: 'Ikho', imgSrc: '/images/ikho.jpg' },
    { name: 'Mine', imgSrc: '/images/Mine.jpg' },
    { name: 'Esona', imgSrc: '/images/Esona.jpg' },
  ];

  return (
    <div className="stories">
      {storiesData.map((story, index) => (
        <div className="story" key={index}>
          <img src={story.imgSrc} alt={story.name} />
          <p>{story.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Stories;
