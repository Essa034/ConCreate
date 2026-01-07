import { useState, useEffect, useRef } from 'react';
import './Timer.css';

const Timer = () => {
  // Target date for the event (January 16, 2026)
  const eventDate = new Date('2026-01-16T00:00:00').getTime();
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  
  const prevTimeLeft = useRef(timeLeft);
  const flipRefs = useRef({
    days: null,
    hours: null,
    minutes: null,
    seconds: null
  });
  
  // Function to handle flip animation
  const animateFlip = (key, newValue) => {
    const element = flipRefs.current[key];
    if (!element) return;
    
    // Create flip animation
    const front = element.querySelector('.flip-front');
    const back = element.querySelector('.flip-back');
    
    if (front && back) {
      const prev = prevTimeLeft.current[key];
      const oldDisplay = key === 'days' ? String(prev) : String(prev).padStart(2, '0');
      const newDisplay = key === 'days' ? String(newValue) : String(newValue).padStart(2, '0');

      // Show previous value on the front, next value on the back
      front.textContent = oldDisplay;
      back.textContent = newDisplay;
      element.classList.add('flipping');
      
      // After animation completes, remove the class
      setTimeout(() => {
        element.classList.remove('flipping');
        // Set front to the new value after flip completes
        front.textContent = newDisplay;
      }, 600);
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = eventDate - now;

      // Calculate time left
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Check each time unit and animate if changed
      if (days !== prevTimeLeft.current.days) {
        animateFlip('days', days);
      }
      if (hours !== prevTimeLeft.current.hours) {
        animateFlip('hours', hours);
      }
      if (minutes !== prevTimeLeft.current.minutes) {
        animateFlip('minutes', minutes);
      }
      if (seconds !== prevTimeLeft.current.seconds) {
        animateFlip('seconds', seconds);
      }
      
      prevTimeLeft.current = { days, hours, minutes, seconds };
      setTimeLeft({ days, hours, minutes, seconds });

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [eventDate]);

  // Render flip card for each time unit
  const renderFlipCard = (value, label, key) => {
    const displayValue = label === 'Days' ? value : value.toString().padStart(2, '0');
    
    return (
      <div className="timer-item">
        <div className="flip-container" ref={el => flipRefs.current[key] = el}>
          <div className="flip-card">
            <div className="flip-front">{displayValue}</div>
            <div className="flip-back">{displayValue}</div>
          </div>
        </div>
        <div className="timer-label">{label}</div>
      </div>
    );
  };

  return (
    <div className="timer-container">
      <div className="timer-white-band">
        <div className="timer-header">EVENT COUNTDOWN</div>
        <div className="timer-box">
          {renderFlipCard(timeLeft.days, 'Days', 'days')}
          <div className="timer-separator">:</div>
          {renderFlipCard(timeLeft.hours, 'Hours', 'hours')}
          <div className="timer-separator">:</div>
          {renderFlipCard(timeLeft.minutes, 'Minutes', 'minutes')}
          <div className="timer-separator">:</div>
          {renderFlipCard(timeLeft.seconds, 'Seconds', 'seconds')}
        </div>
      </div>
    </div>
  );
};

export default Timer;