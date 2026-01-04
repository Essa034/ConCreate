import React from 'react';
import './Timeline.css';

const Timeline = () => {
  // Sample timeline events data
  const events = [
    {
      id: 1,
      date: 'JAN 10',
      title: 'Event Kickoff',
      description: 'Official start of the event with opening ceremony',
      position: 'left'
    },
    {
      id: 2,
      date: 'JAN 15',
      title: 'Workshop Series',
      description: 'Interactive workshops with industry experts',
      position: 'right'
    },
    {
      id: 3,
      date: 'JAN 20',
      title: 'Hackathon',
      description: '48-hour coding competition with exciting prizes',
      position: 'left'
    },
    {
      id: 4,
      date: 'JAN 25',
      title: 'Final Showcase',
      description: 'Project demos and award ceremony',
      position: 'right'
    },
    {
      id: 5,
      date: 'JAN 30',
      title: 'Closing',
      description: 'Wrap-up and farewell session',
      position: 'left'
    }
  ];

  return (
    <section className="timeline-section">
      <h2 className="section-title">Event Timeline</h2>
      <div className="timeline-container">
        <svg className="timeline-path" viewBox="0 0 2 100" preserveAspectRatio="none">
          <path 
            d="M1 0 V100" 
            fill="none" 
            stroke="#78458c" 
            strokeWidth="2" 
            strokeDasharray="5,5"
          />
        </svg>
        
        <div className="events-wrapper">
          {events.map((event, index) => (
            <div 
              key={event.id} 
              className={`timeline-event ${event.position}`}
              style={{ '--i': index }}
            >
              <div className="event-dot"></div>
              <div className="event-card">
                <div className="event-date">{event.date}</div>
                <h3 className="event-title">{event.title}</h3>
                <p className="event-description">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;