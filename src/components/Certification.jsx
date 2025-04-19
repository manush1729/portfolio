import React from 'react';
import data from '../data/data.json'
import { TbExternalLink } from "react-icons/tb";

function Certification() {

  return (
    <section id="certification" className="py-20 px-10 bg-[#0a192f] text-[#ccd6f6]">
      <h2 className="text-3xl font-bold text-[#64ffda] mb-10 flex items-center gap-4">
        Certifications
        <span className="flex-1 h-px bg-[#e2e3e3]"></span>
      </h2>
      <div className="space-y-8">
        {
          data.certifications.map((cert, index) => (<div key={index} className="relative p-6 bg-[#112240] rounded-lg border border-[#64ffda]/20 flex flex-col md:flex-row items-center gap-6">
           {
            cert.image &&
            <img
            src={ '/assets/certificates/' + cert.image }
            alt="CCNA Certification"
            className="w-32 h-32 md:w-40 md:h-40 object-contain rounded-md shadow-lg"
          />
           }
            <div>
              <h3 className="text-2xl font-semibold mb-2">{cert.name}</h3>
              <p className="text-[#64ffda] mb-2">{cert.institution}</p>
             <section className='flex gap-2 align-middle mb-2'>
             {
                cert.id &&
                <p>
                  Credential Id: <span className='text-[#64ffda] '>
                    {cert.id}  </span>                    
                </p>
              }
              <a href={cert.link} target="_blank">
              <TbExternalLink className='text-2xl text-[#edff75] ' />
              </a>
             </section>
              <p className="absolute top-0 right-0 bg-[#64ffda]/10 text-[#64ffda] text-md px-2 py-1 rounded-tr-md border border-[#64ffda]/50"> {cert.year}</p>
              <p className="text-[#8892b0]">
                {cert.description}
              </p>
            </div>
          </div>
          ))
        }

      </div>
    </section>
  );
}

export default Certification;
