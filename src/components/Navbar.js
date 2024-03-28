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
      <div id="navbar" className={`${(pathname === '/project' || pathname === '/gallery') && scrollY <= 0 ? 'text-white ' : 'text-secondary'} ${scrollY <= 0 ? 'bg-opacity-0' : 'bg-opacity-100 shadow-xl'} bg-white fixed top-0 transition-all ease-in-out flex h-fit w-full align-middle rounded-b-[45px] justify-between z-50 items-center`}>
          <Link href={'/'}> 
            <Image
              src={(pathname === '/project' || pathname === '/gallery') && scrollY <= 0 ? "/Primary Logo (white).png" : "/primary-logo-2-tone.png"}
              width={160}
              height={160}
              alt="Terra Segara"
              className={`object-cover ${(pathname === '/project' || pathname === '/gallery') && scrollY <= 0 ? '-translate-y-4' : ''}`}
            />
          </Link>
          <div className="gap-5 flex mx-10 text-[34px]">
            <Link href={'about-us'} className={`px-2 transition-all ${pathname === '/about-us' ? 'text-primary font-bold border-b-4 border-primary brightness-125' : ''}`}>About Us</Link>
            <Link href={'project'} className={`px-2 transition-all ${pathname === '/project' ? 'text-primary font-bold border-b-4 border-primary brightness-125' : ''}`}>Project</Link>
            <Link href={'join-us'} className={`px-2 transition-all ${pathname === '/join-us' ? 'text-primary font-bold border-b-4 border-primary brightness-125' : ''}`}>Join Us</Link>
            <Link href={'donate'} className={`px-2 transition-all ${pathname === '/donate' ? 'text-primary font-bold border-b-4 border-primary brightness-125' : ''}`}>Donate</Link>
            <Link href={'gallery'} className={`px-2 transition-all ${pathname === '/gallery' ? 'text-primary font-bold border-b-4 border-primary brightness-125' : ''}`}>Gallery</Link>
          </div> 
      </div>
  )
}