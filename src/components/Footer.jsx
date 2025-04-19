import data from '../data/data.json';
function Footer() {
  return (
    <footer className="bg-[#112240] py-10 text-center">
      <div className="text-[#64ffda] text-2xl mb-2 font-bold">{data.name}</div>
      <p className="text-[#8892b0] text-sm">Designed & Built by {data.name}</p>
      <div className="mt-5">
        <a
          href="#about"
          className="text-[#ccd6f6] mx-3 hover:text-[#64ffda] transition"
        >
          About
        </a>
        <a
          href="#projects"
          className="text-[#ccd6f6] mx-3 hover:text-[#64ffda] transition"
        >
          Projects
        </a>
        <a
          href="#contact"
          className="text-[#ccd6f6] mx-3 hover:text-[#64ffda] transition"
        >
          Contact
        </a>
      </div>
    </footer>
  );
}

export default Footer;
