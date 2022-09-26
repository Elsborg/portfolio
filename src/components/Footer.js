import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
    const links = [
        {
          id: 1,
          child: (
            <>
            <FaLinkedin size={30} />
            </>
          ),
          href: "https://www.linkedin.com/in/martin-elsborg-227942179/",
          style: "rounded-tr-md",
        },
        {
          id: 2,
          child: (
            <>
            <FaGithub size={30} />
            </>
          ),
          href: "https://github.com/Elsborg",
        },
        {
          id: 3,
          child: (
            <>
            <HiOutlineMail size={30} />
            </>
          ),
          href: "mailto:foo@gmail.com",
        }
        
      ];
  return (
    <footer class=" flex flex-col items-center text-white bg-gradient-to-b w-full from-gray-800 to-black">
      <div className="">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={"inline-block px-8" +
              " " +
              style
            }
          >
            <a
              href={href}
              className=" text-white"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>


  <div class="text-center text-gray-500 p-4 font-bold">
    © 2022 Copyright:
    <a class="text-gray-700" href="https://martinelsborg.dk/"> Martin Elsborg</a>
  </div>
</footer>
  )
}

export default Footer