import React from "react";

const NavBar = () => {
  return (
    <header className="border-top bg-transparent flex items-center justify-between flex-wrap p-6">
      <div className="flex items-center flex-no-shrink text">
        <h1 className="text-yellow-500 font-bold font-display lg:text-3xl s:text-xl">
          Sasi{" "}
        </h1>
      </div>
      {/* <span>
        <a
          className="flex flex-row"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/Fullstack-Serverless-GraphQL/fullstack-serverless-graphql-docs"
        >
          <img src={Github} alt="github icon" />
        </a>
      </span> */}
    </header>
  );
};

export default NavBar;
