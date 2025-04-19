import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import data from '../data/data.json'

export default function SocialMedia() {
  return (
    <div className='flex gap-8 ml-2 mt-4' >
        <a href={data.social_media[0].url} target="_blank" rel="noopener noreferrer">
        <FaLinkedin className='scale-[2]' />
        </a>
        <a href={data.social_media[1].url}  target="_blank" rel="noopener noreferrer">
        <FaGithub className='scale-[2]'  />
        </a>
        <a href={data.social_media[2].url}  target="_blank" rel="noopener noreferrer">
        <FaInstagram className='scale-[2]'  />
        </a>
        </div>
  )
}