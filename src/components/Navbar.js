'use client'

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrollY, setScrollY] = useState(0)
  const pathname = usePathname()
  // console.log(pathname);

  useEffect(() =>{
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

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return(
      <div id="navbar" className={`${pathname === '/' && scrollY <= 0 ? 'bg-opacity-0' : 'bg-white'} max-w-[1920px] fixed top-0 transition-all ease-in-out flex h-40 w-full text-[#000000] align-middle rounded-b-[45px] justify-between`}>
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