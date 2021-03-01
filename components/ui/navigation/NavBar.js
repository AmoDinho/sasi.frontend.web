import React from "react";
import { useRouter, Router } from "next/router";
import Image from "next/image";
import Logo from "../../../assets/sasi-logo.svg";
import HeadingOne from "../Typography/HeadingOne";

const NavBar = () => {
  const router = useRouter();

  return (
    <header className="border-top bg-transparent flex justify-center flex-wrap p-6">
      <div
        className="flex items-center flex-no-shrink text cursor-pointer"
        onClick={() => router.push("/")}
      >
        <Image src={Logo} alt="Sasi logo" height={100} width={40} />
        <HeadingOne className="  text-white  text-center">SASI</HeadingOne>
      </div>
    </header>
  );
};

export default NavBar;
