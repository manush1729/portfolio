import data from "../data/data.json";

function Education() {
  return (
    <section id="education" className="py-20 px-10 bg-[#0a192f] text-[#ccd6f6]">
      <h2 className="text-3xl font-bold text-[#64ffda] mb-8">Education
     
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {
          data.education.map((edu, index) => (
            <div key={index} className="p-6 hover:scale-105 duration-150 bg-[#112240] rounded-lg border border-[#64ffda]/20">
              <h3 className="text-xl font-semibold text-[#64ffda] mb-2">{edu.degree}</h3>
              <p className="text-[#8892b0]">{edu.institution}</p>
              <p className="text-[#8892b0] italic">{edu.year} | {edu.type}: <span className="text-[#64ffda]">{edu.marks}</span></p>
            </div>
          ))
        }
      </div>
    </section>
  );
}

export default Education;
