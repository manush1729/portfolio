import React from 'react';
import data from '../data/data.json'

function Skills() {
  return (
    <section id="skills" className="py-20 px-10 bg-[#0a192f] text-[#ccd6f6]">
      <h2 className="text-3xl font-bold text-[#64ffda] mb-8">Skills
    
      </h2>
      <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {data.skills.map((skill, index) => (
          <li
            key={index}
            className="bg-[#112240] text-center py-3 rounded-md text-[#8892b0] hover:bg-[#64ffda] hover:text-[#0a192f] transition"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
