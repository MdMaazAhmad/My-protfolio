"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { scrollToSection, scrollToTop } from "@/utils";

export default function Header() {
  const router = useRouter();
  const links = [
    { href: "/", label: "Home" },
    { href: "/#about", label: "About", id: "about" },
    { href: "/#skills", label: "Skills", id:"skills" },
    { href: "/Qualification", label: "Qualification" , id:"qualification"},
    { href: "/Portfolio", label: "Projects" },
    { href: "/Contact", label: "Contact" },
  ];

  const handleClick = (e, href, id) => {
    e.preventDefault();

    // If it's the home link, scroll to top
    if (href === "/") {
      scrollToTop();
      router.push("/");
      return;
    }

    // If it's a section on the current page (starts with #)
    if (href.startsWith("/#") && id) {
      scrollToSection(id);
      return;
    }

  };

  return (
    <div className="py-8 w-full  font-sans fixed z-10 flex items-center justify-between  bg-white shadow-md">
      <div className="flex w-[80%] mx-auto justify-between text-[#1d1e20] text-base font-semibold leading-6">
        <div>Ahmad</div>
        <div className="flex gap-4 cursor-pointer">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[#1d1e20] no-underline"
              onClick={(e) => handleClick(e, link.href, link.id)}
            >
              <div>{link.label}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
