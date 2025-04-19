import React, { useState } from 'react';
import SocialMedia from './SocialMedia';
import data from '../data/data.json'

function Contact() {

  const [formData, setFormData] = useState({})

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  function sendData(e) {
    e.preventDefault()
    var formattedBody = `Name: ${formData.name} \nEmail: ${formData.email} \nComment: ${formData.message}`;
    var mailToLink = 'mailto:'+data.email+'?subject=Message From Portfolio👋&body=' + encodeURIComponent(formattedBody);
    window.location.href = mailToLink;
  }

  return (
    <section id="contact" className="py-20 md:px-10 px-5 bg-[#0a192f] text-[#ccd6f6]">
      <h2 className="text-3xl font-bold text-[#64ffda] mb-4">Get In Touch</h2>
      <hr className="border-t border-[#ccd6f6] mb-8" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-lg text-[#64ffda] mb-4">Let's Connect</p>
          <h3 className="text-4xl font-bold mb-4">Have a project in mind?</h3>
          <p className="text-[#8892b0] text-lg mb-6">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-4 text-xl">
              <p className='mb-4'>{data.email}</p>
            </div>

           <SocialMedia />
          </div>
        </div>
        <form
          onSubmit={sendData}
          className="bg-[#112240] md:p-8  p-2 py-3 rounded-lg border border-[#64ffda]/20"
        >
          <div className="mb-6">
            <label className="block text-[#ccd6f6] mb-2">Name</label>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              value={formData.name}
              className="w-full p-3 bg-[#0a192f] border border-[#64ffda]/20 rounded-md text-[#ccd6f6] focus:outline-none focus:ring-2 focus:ring-[#64ffda]"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-[#ccd6f6] mb-2">Email</label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              value={formData.email}
              className="w-full p-3 bg-[#0a192f] border border-[#64ffda]/20 rounded-md text-[#ccd6f6] focus:outline-none focus:ring-2 focus:ring-[#64ffda]"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-[#ccd6f6] mb-2">Message</label>
            <textarea
              name="message"
              onChange={handleChange}
              value={formData.message}
              className="w-full p-3 bg-[#0a192f] border border-[#64ffda]/20 rounded-md text-[#ccd6f6] focus:outline-none focus:ring-2 focus:ring-[#64ffda]"
              rows="5"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className={'w-full py-3 bg-[#64ffda] text-[#0a192f] rounded-md font-medium transition cursor-pointer hover:bg-[#000000] hover:text-white'}
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
