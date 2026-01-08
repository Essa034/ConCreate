import { useRef } from "react"
import "./Events.css"

const events = [
  [
    {
      title: "Capture the Flag",
      time: "Jan 16, 2:00 PM",
      body:
        "A Coding Competition done in collaboration with ENCIDE MACE - participants will be required to solve a series of challenges that test their logical thinking and problem-solving abilities. Each challenge will contain hidden flags that participants must identify and submit according to the instructions provided. It will also have two pre-event competitions – one for typing and one for prompting. Students are required to bring a laptop and have some prerequisite knowledge on the above. Meet you there on 16th January at 2PM!",
    },
    {
      title: "Bridge Making Competition",
      time: "Jan 16, 2:00 PM",
      body:
        "A Bridge Making Competition where teams put their engineering skills to the test by designing and constructing a free-standing bridge within a limited time using only the materials provided. Working against the clock, participants must balance creativity, structural efficiency, and aesthetics while ensuring stability and adherence to given dimensions. With precision, teamwork, and smart design choices, teams aim to build the strongest and most visually appealing bridge, making the event an exciting hands-on challenge that celebrates innovation and practical engineering. Build with us on 16th January at 2PM!",
    },
  ],
  [
    {
      title: "12 Hour Ideathon",
      time: "Jan 16, 10:00 PM – Jan 17, 10:00 AM",
      body:
        "A 12-Hour Ideathon on a particular theme, where student teams come together for an overnight innovation sprint packed with ideas, creativity, and problem-solving. Participants will tackle real-world challenges affecting Indian infrastructure and brainstorm smart, practical solutions that can make systems stronger and safer. With mentors to guide them and the clock ticking through the night, teams will shape bold ideas into impactful concepts and pitch them to judges, making the event an exciting mix of innovation, teamwork, and all-night energy. Stay awake with us from January 16th 10PM to January 17th 10AM!",
    },
    {
      title: "Treasure Hunt",
      time: "Jan 16, 5:00 PM",
      body:
        "A Treasure Hunt where teams of four embark on an exciting adventure packed with clever clues, hidden hints, and engaging challenges. Participants progress by solving each clue in sequence, testing their logical thinking, problem-solving skills, and teamwork along the way. Guided by volunteers and coordinators, teams race against time to reach the final clue and uncover the treasure. The first team to find the treasure wins, making the event a thrilling mix of strategy, speed, and smart thinking! Join us in the fun at 5PM on January 16!",
    },
  ],
  [
    {
      title: "Hive Mind Challenge (Sustainable)",
      time: "Date/Time TBA",
      body:
        "Hive Mind Challenge is where big ideas meet green thinking! This sustainability powered event brings creative minds together to brainstorm, design, and pitch bold, eco-friendly solutions that can shape a better future. From smart materials to build-ready concepts, participants turn imagination into impact through teamwork, innovation, and collective problem-solving. Fast-paced, idea-driven, and full of fresh perspectives, Hive Mind Challenge celebrates collaboration, creativity, and the power of thinking sustainably - together.",
    },
  ],
]

function Events() {
	const trackRef = useRef(null)

	const scrollByCard = (dir) => {
		const el = trackRef.current
		if (!el) return
		const card = el.querySelector(".events__card")
		const delta = card ? card.clientWidth + 16 : el.clientWidth * 0.9
		el.scrollBy({ left: dir * delta, behavior: "smooth" })
	}

	return (
		<section className="events" id="events">
			<h2 className="section-title">Events</h2>

			<div className="events__viewport">
				<button className="events__nav events__nav--left" onClick={() => scrollByCard(-1)} aria-label="Previous events">
					‹
				</button>
				<div className="events__track" ref={trackRef}>
					{events.map((group, idx) => (
						<article className="events__card" key={idx}>
							{group.map((ev) => (
								<div className="events__card-event" key={ev.title}>
									<h3 className="events__card-title">{ev.title}</h3>
									<p className="events__card-time">{ev.time}</p>
									<p className="events__card-body">{ev.body}</p>
								</div>
							))}
						</article>
					))}
				</div>
				<button className="events__nav events__nav--right" onClick={() => scrollByCard(1)} aria-label="Next events">
					›
				</button>
			</div>
		</section>
	)
}

export default Events

