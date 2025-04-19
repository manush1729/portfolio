import data from '../data/data.json'

function About() {
  return (
    <section id="about" className="py-24 px-10 md:px-24 bg-[#112240] text-[#ccd6f6]">
      <h2 className="text-4xl font-bold text-[#64ffda] mb-10">About Me</h2>
      <p className="text-[#8892b0] text-xl">
        {data.about}
      </p>
    </section>
  );
}

export default About;
