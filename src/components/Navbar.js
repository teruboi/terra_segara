'use client'

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [path, setPath] = useState('')  
    
  useEffect(() =>{
    if (window !== undefined){
      setPath(window.location.pathname)
    }

    let prevScrollPos = window.scrollY;
      window.onscroll = function() {
          let currScrollPos = window.scrollY
          if (prevScrollPos > currScrollPos) {
            document.getElementById("navbar").style.top = "0";
          } else {
            document.getElementById("navbar").style.top = "-100%";
          }
          prevScrollPos = currScrollPos;
      }
  });

  return(
      <div id="navbar" className={`${() => {path === '/' ? 'bg-opacity-0' : 'bg-white'}} bg-white fixed top-0 transition-all ease-in-out flex h-40 w-full text-[#000000] align-middle rounded-b-[45px] justify-between`}>
          <Link href={'/'}> 
            <Image
              src="/primary-logo-2-tone.png"
              width={196}
              height={196}
              alt="Terra Segara"
            />
          </Link>
          <div className="my-auto gap-16 flex mx-10 text-[34px] text-secondary">
            <Link href={'about-us'}>About Us</Link>
            <Link href={'project'}>Project</Link>
            <Link href={'join-us'}>Join Us</Link>
            <Link href={'donate'}>Donate</Link>
            <Link href={'gallery'}>Gallery</Link>
          </div> 
      </div>
  )
}