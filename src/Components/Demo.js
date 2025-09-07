import React, { useState, useMemo } from "react";
import { findPrime } from "../utils/helper";
const Demo = () => {
  const [text, setText] = useState(0);
  const [dark, setDark] = useState(false);

  console.log("rendering");
  // heavy operation - i can memoize that heavy operation
  const prime = useMemo(() => findPrime(text), [text]);
  const v = 10;

  return (
    <div
      className={
        "mt-20 ml-20 p-2 w-96 h-96 border border-black " +
        (dark && "bg-gray-900 text-white")
      }
    >
      <div>
        <button
          className="m-10 p-2 bg-green-200"
          onClick={() => setDark(!dark)}
        >
          Toggle{v}
        </button>
      </div>
      <div>
        <input
          className="border border-black w-72 px-2"
          value={text}
          type="number"
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div>
        <h1 className="mt-4 font-bold text-xl ">nth Prime :{prime}</h1>
      </div>
    </div>
  );
};

export default Demo;
