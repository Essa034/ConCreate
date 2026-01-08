import "./About.css"

const highlightCards = [
  {
    title: "Indian Concrete Institute (ICI)",
    body:
      "ICI unites engineers, academicians, researchers, and industry leaders to advance concrete technology. Through seminars, workshops, publications, and programs, it bridges academics with real-world practice while championing quality, durability, and sustainability.",
  },
  {
    title: "ASCE",
    body:
      "ASCE is where bold ideas learn the language of steel and stone—where concepts rise into bridges, roads, and cities. It nurtures young minds, builds leaders, and helps shape the future of our built world.",
  },
]

function About() {
  return (
    <section className="about" id="about">
      <h2 className="section-title">About</h2>
      <div className="about__container">
        <div className="about__intro">
          
          <p className="about__lede">
            The Indian Concrete Institute (ICI) is a premier professional body dedicated to advancing
            concrete technology in civil engineering. It brings together engineers, academicians,
            researchers, and industry leaders to drive innovation and excellence in construction. ICI
            promotes the exchange of technical knowledge through seminars, workshops, publications, and
            professional programs while helping bridge academic learning with real-world engineering
            practice. With a focus on quality, durability, and sustainability, ICI nurtures skill
            development, ethics, and leadership—building stronger minds behind stronger structures.
          </p>
          <p className="about__lede">
            ASCE is where dreams learn the language of steel and stone—where ideas rise gently into
            bridges, roads, and cities. It ignites bold thinking and turns it into iconic structures,
            fostering young minds, building leaders, and shaping the future of our built world.
          </p>
        </div>

        <div className="about__cards">
          {highlightCards.map((item) => (
            <article key={item.title} className="about__card">
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
