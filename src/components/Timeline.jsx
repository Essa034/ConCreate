import React, { useState } from 'react';
import './Timeline.css';

const days = [
  {
    id: 'day1',
    label: 'Day 1 — Jan 16',
    events: [
      { title: 'Inauguration', description: 'Opening ceremony and welcome to ConCreate event' },
      { title: 'Level x & Hive Mind Challenge', description: 'Level x: The Ultimate Levelling Challenge tests your precision and teamwork in levelling tasks, happening at MACE Campus on 16th January at 10:00 AM. Hive Mind Challenge brings creative minds together to brainstorm and pitch bold, eco-friendly ideas. A fast-paced event driven by teamwork, innovation, and sustainable thinking.' },
      { title: 'Bridge Making ', description: 'A Bridge Making Competition where teams race against time at 2 PM on 16th January to design and build a free-standing bridge using only the given materials, blending creativity, strength, and smart engineering.' },
      { title: 'Capture The Flag', description: 'A Capture the Flag competition at MACE, happening on 16th January at 2 PM, featuring logic-based challenges, typing speed, and prompting rounds. Participants should bring a laptop and have basic knowledge of C.' },
      { title: 'Civil Expo', description: 'Exhibition showcasing civil engineering projects' },
      { title: 'Treasure Hunt', description: 'A Treasure Hunt where teams of four race through clever clues and exciting challenges, testing logic, teamwork, and speed to uncover the final treasure, happening at MACE Campus on 16th January at 5 PM.' },
      { title: 'Astra Night', description: 'Evening event with entertainment and activities' },
      { title: 'Creovate', description: 'Creovate is a 12-hour overnight Ideathon where teams brainstorm bold solutions to real world challenges like floods, earthquakes, and heatwaves affecting Indian infrastructure. With mentors, teamwork, and all night energy, ideas turn into impactful pitches.' },
    ],
  },
  {
    id: 'day2',
    label: 'Day 2 — Jan 17',
    events: [
      { title: 'Creovate Presentation', description: 'Teams present their innovation ideas to judges' },
      { title: 'Prize Distribution', description: 'Announcement of winners and award ceremony' },
    ],
  },
];

const Timeline = () => {
  const [expandedEvent, setExpandedEvent] = useState(null);

  const toggleDescription = (eventKey) => {
    setExpandedEvent(expandedEvent === eventKey ? null : eventKey);
  };

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
                {day.events.map((event, index) => {
                  const eventKey = `${day.id}-${index}`;
                  const isExpanded = expandedEvent === eventKey;
                  return (
                    <li key={eventKey} className="day-item">
                      {event.time && <span className="day-time">{event.time}</span>}
                      <div className="day-details">
                        <div 
                          className="day-item-title clickable" 
                          onClick={() => toggleDescription(eventKey)}
                        >
                          {event.title}
                        </div>
                        {event.description && (
                          <div className={`day-item-desc ${isExpanded ? 'expanded' : ''}`}>
                            {event.description}
                          </div>
                        )}
                      </div>
                    </li>
                  );
                })}
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