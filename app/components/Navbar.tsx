"use client";
import React, { useEffect, useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/Navbar-menu";
import { cn } from "@/utils/cn";
import Image from "next/image";
import Link from "next/link";

export function NavbarDemo() {
  return (

    <div className="mb-20 w-full flex items-center justify-center ">
      <Navbar />
    </div>

  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    setScroll(window.scrollY > 20);
  };

  return (
    <div
      className={cn(
        "fixed top-0 inset-x-0 flex mx-auto z-50",
        className,
        scroll && "shadow-sm bg-gray-100 text-white"
      )}
    >
      <Menu setActive={setActive} >
        <div className="justify-start flex">
          <h2 className="bg-clip-text text-xl md:text-3xl font-bold  text-transparent bg-gradient-to-r from-neutral-900 to-purple-900 bg-opacity-100">
            Panversity
          </h2>
        </div>
        <Link
          href="/"
          className="text-purple-600 hover:opacity-[0.9] cursor-pointer"
        >
          Home
        </Link>
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/aritificial Intelligence">
              Aritficial Intelligence
            </HoveredLink>
            <HoveredLink href="/machine-learning">Machine Learning</HoveredLink>
            <HoveredLink href="/gen-ai">GEN AI</HoveredLink>
            <HoveredLink href="/metaverse">MetaVerse</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Products">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Algochurn"
              href="https://algochurn.com"
              src="https://assets.aceternity.com/demos/algochurn.webp"
              description="Prepare for tech interviews like never before."
            />
            <ProductItem
              title="Tailwind Master Kit"
              href="https://tailwindmasterkit.com"
              src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
              description="Production ready Tailwind css components for your next project"
            />
            <ProductItem
              title="Moonbeam"
              href="https://gomoonbeam.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
              description="Never write from scratch again. Go from idea to blog in minutes."
            />
            <ProductItem
              title="Rogue"
              href="https://userogue.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="More">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Hobby</HoveredLink>
            <HoveredLink href="/individual">Individual</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}

export default Navbar;
