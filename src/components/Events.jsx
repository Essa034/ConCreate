import { useRef } from "react"
import "./Events.css"
import post1 from "../assets/post1.jpeg"
import post2 from "../assets/post2.jpeg"
import post3 from "../assets/post3.jpeg"
import post4 from "../assets/post4.jpeg"
import post5 from "../assets/post5.jpeg"

const posters = [
  { src: post1, alt: "Event Post 1" },
  { src: post2, alt: "Event Post 2" },
  { src: post3, alt: "Event Post 3" },
  { src: post4, alt: "Event Post 4" },
  { src: post5, alt: "Event Post 5" },
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
				<button className="events__nav events__nav--left" onClick={() => scrollByCard(-1)} aria-label="Previous event">
					‹
				</button>
				<div className="events__track" ref={trackRef}>
					{posters.map((poster, idx) => (
						<article className="events__card events__card--image" key={idx}>
							<img src={poster.src} alt={poster.alt} className="events__card-img" />
						</article>
					))}
				</div>
				<button className="events__nav events__nav--right" onClick={() => scrollByCard(1)} aria-label="Next event">
					›
				</button>
			</div>
		</section>
	)
}

export default Events

