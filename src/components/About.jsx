import "./About.css"

const highlightCards = [
  {title: "Concreate",
    body:
    "CONCREATE ’26, organized by ASCE MACE,ICI MACE and BAI is a dynamic two-day technical fest that blends innovation, creativity, and pure excitement. Taking place on 16th & 17th January, CONCREATE brings together curious minds and passionate builders for a series of thrilling challenges. From brainstorming bold ideas at the Ideathon and tackling real-world problems in the Sustainable Design Challenge, to racing through clues in the Treasure Hunt, testing teamwork in Bridge Making, and outsmarting opponents in Capture the Flag, there’s something for everyone. Whether you’re here to compete, collaborate, or simply enjoy the vibe, CONCREATE ’26 promises energy, learning, fun, and memories that last. Outthink. Outbuild. Outlast."
  },
  {
    title: "ASCE",
    body:
      "ASCE (American Society of Civil Engineers) is a platform for students from all disciplines who are curious about how infrastructure, technology, and planning shape everyday life. It encourages problem-solving, open discussions, and fresh thinking around development, innovation, and sustainability. You don’t have to be a civil engineer, just someone interested in understanding how the world is built and continuously improved",
  },
  {
    title: "Indian Concrete Institute (ICI)",
    body:
      "ICI (Indian Concrete Institute) offers exposure to the construction and materials side of modern development in an easy-to-understand and hands-on way. From learning how structures stand strong to exploring innovations in materials and construction processes, ICI welcomes students from all branches who are interested in real-world applications and industry practices.",
  },
  
  {
    title: "BAI",
    body:
      "BAI (Builders’ Association of India) is an open platform for students from every stream who want to explore leadership, teamwork, and the professional side of large-scale projects. It focuses on collaboration, industry awareness, and skill development that are valuable across all fields. If you’re curious about how ideas turn into reality, BAI is the place for you.",
  },
  
]

function About() {
  return (
    <section className="about" id="about">
      <h2 className="section-title">About</h2>
      <div className="about__container">
        

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
