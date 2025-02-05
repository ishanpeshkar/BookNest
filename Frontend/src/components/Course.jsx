import React from "react";
import list from "../../public/list.json";
import Cards from "./Cards";
import {Link} from "react-router-dom"
function Course() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 py=4 ">
        <div className="mt-28  items-center justify-center text-center font-extralight dark:bg-slate-900 dark:text-white">
          <h1 className="text-2xl  md:text-4xl font-extralight ">
            We are delighted to have you{" "}
            <span className="text-pink-500">on board! 😊</span>
          </h1>
          <p className="mt-12">
            Welcome to our course! We are excited to have you join us on this
            learning journey. Our course is designed to help you learn something
            new every day. sriram jay ram jay jay ram Kya hua tera wada ? woh
            kasaam woh Irada , Bhulega dlil jis din tumhe woh dil jindagi ka
            akhri din hoga.
          </p>
          <Link to="/">
            <button className="bg-pink-500 text-white px-4 py-2 rounded-md mt-8 hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
          {list.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
