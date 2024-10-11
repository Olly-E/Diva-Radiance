"use client";

import { Bag, Profile, Shop } from "iconsax-react";
import { usePathname } from "next/navigation";
import Hamburger from "hamburger-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import clsx from "clsx";

import { useComponentVisible } from "../hooks";

import logo from "/public/assets/images/logo.svg";

export const Navbar = () => {
  const pathname = usePathname();
  const {
    dropDownButtonRef,
    isComponentVisible: openSideNav,
    setIsComponentVisible: setOpenSideNav,
    ref,
  } = useComponentVisible();

  const NAV_LINKS = [
    {
      name: "",
      id: "1",
      icon: Shop,
      href: "/shop",
    },
    {
      name: "",
      id: "2",
      icon: Bag,
      href: "/cart",
    },
  ];

  return (
    <nav
      aria-label="Main Navigation"
      className="flex items-center justify-between transition-all fixed py-1 lg:py-6 z-[100] w-full"
    >
      <div className="flex items-center container py-4 bg-white rounded-[20px] shadow-sm justify-between transition-all px-10 text-tertiary lg:relative z-[100]">
        <Link className={clsx("")} href="/">
          <Image
            src={logo}
            alt="Vamp-logo"
            style={{ width: "90.72px", height: "auto" }}
          />
        </Link>
        <div className="hidden lg:flex text-white items-center gap-5 text-tertiary">
          {NAV_LINKS.map((link) => {
            return (
              <Link
                href={link.href}
                className="flex centered gap-4 min-w-[44px] w-[44px] rounded-full aspect-square bg-primary bg-opacity-[0.03]"
                key={link.id}
              >
                <link.icon size={24} color="#050505" variant="Bold" />
              </Link>
            );
          })}
          <div className="flex centered gap-4 min-w-[44px] w-[44px] rounded-full aspect-square bg-primary">
            <Profile size={24} color="#FAFAFA" variant="Bold" />
          </div>
        </div>
        {/* mobile navbar */}
        <div
          ref={ref}
          className={clsx(
            "fixed top-[71px] left-0 box-border delay-100 transition-all overflow-y-auto overflow-x-hidden text-primary bg-black h-[calc(100vh-71px)] lg:hidden items-center",
            openSideNav
              ? "w-screen px-[22px] xs:w-[300px] opacity-100 md:px-10"
              : "w-0 px-0 "
          )}
        >
          <div className="text-[24px]">
            {NAV_LINKS.map((link, index) => {
              return (
                <Link
                  key={link.id}
                  href={link.href}
                  onClick={() => setOpenSideNav(false)}
                  className={clsx(
                    "transition-all duration-100 block text-white-state border-b border-b-primary",
                    link.href === pathname
                      ? "text-primary pt-3"
                      : "py-3 text-white",
                    index > 0 && "mt-6",
                    openSideNav ? "opacity-100" : "opacity-0"
                  )}
                >
                  <div className="flex items-center gap-4">
                    <link.icon size={24} color="#050505" variant="Bold" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        <button
          aria-label={openSideNav ? "close navigation" : "open navigation"}
          className="top-5 bg-primary right-5 lg:hidden p-2 rounded-md ml-auto z-[100]"
          ref={dropDownButtonRef}
        >
          <Hamburger
            toggled={openSideNav}
            toggle={setOpenSideNav}
            label="Show menu"
            easing="ease-in"
            rounded
            size={28}
            color="#FAFAFA"
            duration={0.3}
          />

          {/* logo backdrop */}
        </button>
      </div>

      {/* <ContactUsModal /> */}
    </nav>
  );
};
