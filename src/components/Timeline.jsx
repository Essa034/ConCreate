import React from 'react';
import './Timeline.css';

const days = [
  {
    id: 'day1',
    label: 'Day 1 — Jan 16',
    events: [
      { title: 'Inauguration' },
      { title: 'Level x & Hive Mind Challenge' },
      { title: 'Bridge Making & CS Event' },
      {title:'Treasure Hunt'},
      {title:'Astra Night'},
      { title: 'Creovate' },
      { title: 'Civil Expo' },
      { title: 'Informal Event and Dinner' },
    ],
  },
  {
    id: 'day2',
    label: 'Day 2 — Jan 17',
    events: [
      { title: 'Ideathon Presentation' },
      { title: 'Prize Distribution' },
    ],
  },
];

const Timeline = () => {
  return (
    <section className="timeline-section" id="events">
      <div className="overlay" />
      <h2 className="section-title">Event Timeline</h2>
      <div className="days-stack">
        {days.map((day) => (
          <React.Fragment key={day.id}>
            <div className="day-card">
              <h3 className="day-card-title">{day.label}</h3>
              <ul className="day-list">
                {day.events.map((event, index) => (
                  <li key={`${day.id}-${index}`} className="day-item">
                    {event.time && <span className="day-time">{event.time}</span>}
                    <div className="day-details">
                      <div className="day-item-title">{event.title}</div>
                      {event.description && (
                        <div className="day-item-desc">{event.description}</div>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            {/* connector removed as requested */}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Timeline;