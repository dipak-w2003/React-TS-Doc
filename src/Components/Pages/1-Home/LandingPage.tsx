import React from "react";
const LandingPage: React.FC = () => {
  return (
    <main
      className={`after-nav w-[120vw] h-[100vh]  flex items-center justify-between overflow-hidden  *:h-full   relative bg-[url(./home.webp)] bg-no-repeat bg-cover  `}
    >
      <section className="w-[50%]">
        <div className="wrapper h-full w-full relative">
          {/* <div className="blur-xl w-full h-[160px] bg-cyan-600 absolute bottom-[35%] "></div>
          <h2 className="absolute bottom-[37%] text-4xl font-serif text-center font-extrabold text-white">
            React + TypeScript: Perfect Combination for Modern Web Development
          </h2> */}
        </div>
        {/* ? section 2 */}
      </section>
      <section className=" articles w-[50%] text-white flex flex-col items-center justify-center font-serif relative z-10 ">
        <article className="p-10  ">
          <h2 className="text-2xl underline">What is React?</h2>
          <p>
            React is a popular JavaScript library for building interactive and
            dynamic user interfaces (UIs).
          </p>
          <ul className="list-disc">
            <li>
              Developed by Facebook, it allows developers to create reusable UI
              components.
            </li>
            <li>
              Core Concept: Declarative programming that makes UI updates
              efficient and predictable.
            </li>
          </ul>
        </article>

        <article className="p-10">
          <h2 className="text-2xl underline">What is TypeScript?</h2>
          <p>
            TypeScript is a strongly-typed programming language that builds on
            JavaScript, adding static type definitions.
          </p>
          <li>
            Developed by Microsoft, it enhances code maintainability and
            scalability.
          </li>
          <br />
          <ol className="list-decimal ">
            <h2 className="text-lg underline">Key Features of TypeScript:</h2>
            <li>
              Static Typing : Catching errors during development, reducing
              runtime issues
            </li>
            <li>
              Improved IDE Support: Autocompletion, refactoring, and type
              checking.
            </li>
            <li>
              Compatibility : Works seamlessly with JavaScript libraries like
              React.
            </li>
          </ol>
        </article>
      </section>
      <div className=" blur-md opacity-90  absolute w-[50%] h-full  bg-gradient-to-tl from-cyan-900 via-purple-900 to-pink-900  right-0 "></div>
    </main>
  );
};

export default LandingPage;
