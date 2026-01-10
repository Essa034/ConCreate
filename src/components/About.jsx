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
            CONCREATE ’26, organized by ASCE MACE,ICI MACE and BAI is a dynamic two-day technical fest that blends innovation, creativity, and pure excitement. Taking place on 16th & 17th January, CONCREATE brings together curious minds and passionate builders for a series of thrilling challenges.


          </p>
          <p className="about__lede">
            From brainstorming bold ideas at the Ideathon and tackling real-world problems in the Sustainable Design Challenge, to racing through clues in the Treasure Hunt, testing teamwork in Bridge Making, and outsmarting opponents in Capture the Flag, there’s something for everyone.
          </p>
          <p className="about__lede">
            Whether you’re here to compete, collaborate, or simply enjoy the vibe, CONCREATE ’26 promises energy, learning, fun, and memories that last.
          </p>
          <p className="about__lede">
            Outthink. Outbuild. Outlast. 
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
