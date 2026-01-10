import { useRef } from "react"
import "./Events.css"

const events = [
  [
    
    {
      title: "Bridge Making Competition",
    
      body:
["Time Limit: 1 hour 30 minutes (on-site construction).",

"Team Size: Maximum 4 members.",

"Materials: Use only provided materials and permitted adhesives.",

"Glue Usage: Apply to joints only; excessive glue will be penalized.",

"Design: Must be free-standing (no external supports or anchoring).",

"Dimensions: * Span: 30 cm to 60 cm.",

"Width: Maximum 10 cm.",

"Judging Criteria: Structural efficiency, stability, and aesthetics"]   },
  ],
  [
    {
      title: "Creovate",
      
      body:
["Theme will be provided at the venue.Participants must choose any topic under the theme. No topics outside the theme are allowed.",

"Teams of 3–5 members; no swapping of members is permitted.",

"Open to all students from any department and year.",

"Ideathon runs 9:00 PM – 9:00 AM. All submissions and presentations must be completed within this time; no extra time will be given.",

"Evaluation based on depth of analysis, clarity, feasibility, and practical implementation.",

"Ideas must be sustainable, feasible, and implementable. Judges’ decisions are final.",

"Participants must collaborate actively and use time efficiently.  "]   },
   
  ],
  [
    {
      title: "Hive Mind Challenge",
      body: [
        "Three hour competition.",
        "Design problem will be provided at the start of the competition.",
        "The team of 3 or 4 members will have the next 2 hours and 45 minutes to prepare a PowerPoint presentation.",
        "The key points to be included in the design will be discussed at the time of the competition.",
        "The last 15 minutes are allotted for the presentation of the prepared design.",
        "The presentation should consist of a maximum of five slides.",
        "There will be a viva voce based on the proposed design.",
        "Evaluation will be based on sustainability and environmental impact of the solution.",
        "Feasibility and practical implementation of the design will be assessed.",
        "Quality of presentation and communication skills will be evaluated.",
        "Confidence and clarity during the viva voce will be considered."
      ]
    }
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
			<h2 className="section-title">Events Guidelines</h2>

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
									{Array.isArray(ev.body) ? (
										<ul className="events__card-list">
											{ev.body.map((point, idx) => (
												<li key={idx} className="events__card-list-item">• {point}</li>
											))}
										</ul>
									) : (
										<p className="events__card-body">{ev.body}</p>
									)}
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

