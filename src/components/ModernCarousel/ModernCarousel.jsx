import React, { useState } from 'react';
import './ModernCarousel.css';

const ModernCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(1);

  const items = [
    {
      src: "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?q=80&w=3388&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "dog"
    },
    {
      src: "https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=3362&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "dog"
    },
    {
      src: "https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?q=80&w=2568&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "dog"
    },
    {
      src: "https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "dog"
    },
    {
      src: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "dog"
    },
    {
      src: "https://images.unsplash.com/photo-1510771463146-e89e6e86560e?q=80&w=1362&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "dog"
    },
  ];

  const prevItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  const nextItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  return (
    <div className="carousel">
      {items.map((item, index) => {
        let position = 'carousel__item';
        if (index === currentIndex) {
          position = 'carousel__item carousel__item--main';
        } else if (index === (currentIndex - 1 + items.length) % items.length) {
          position = 'carousel__item carousel__item--left';
        } else if (index === (currentIndex + 1) % items.length) {
          position = 'carousel__item carousel__item--right';
        }
        return (
          <div className={position} key={index}>
            <img src={item.src} alt={item.alt} />
            <div className="carousel__text">
              <h3>Cute Puppy</h3>
              <p>Isn't it cute?!</p>
            </div>
          </div>
        );
      })}
      <div className="carousel__btns">
        <button className="carousel__btn" id="leftBtn" onClick={prevItem}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path fill="currentColor" fillRule="evenodd" d="m15 4l2 2l-6 6l6 6l-2 2l-8-8z"/>
          </svg>
        </button>
        <button className="carousel__btn" id="rightBtn" onClick={nextItem}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path fill="currentColor" fillRule="evenodd" d="m9.005 4l8 8l-8 8L7 18l6.005-6L7 6z"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ModernCarousel;
