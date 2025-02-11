import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";

const Loader = () => {
  const circularRef = useRef(null);
  useGSAP(() => {
    gsap.to(circularRef.current, {
      opacity: 0,
      duration: 2,
      ease: "circ.inOut",
      scale: 2,
      border: "40px solid #505050",
      transformOrigin: "center",
      // yoyo: true,
      repeat: -1,
    });
  }, []);

  useEffect(() => {
    var tl = gsap.timeline();

    tl.to(".z-line-top", {
      width: "450px",
      duration: 0.5,
      ease: "power1.inOut",
    })
      .to(".z-line-diagonal", {
        strokeDashoffset: 0,
        duration: 0.8,
        ease: "power1.inOut",
      })
      .to(".z-line-bottom", {
        strokeDashoffset: 0,
        duration: 0.5,
        ease: "power1.inOut",
      });
  }, []);

  return (
    <div className="flex flex-col w-full items-center justify-between h-screen p-5 overflow-hidden">
      <h1 className="uppercase font-general text-lg tracking-wider">
        innovation never stops
      </h1>
      {/* <div className=""> */}
      <div className="flex items-center flex-col gap-24">
        <div
          ref={circularRef}
          className="w-56 h-56 z-20 rounded-full border-[#505050] border-0 p-4 flex justify-center items-center"
        ></div>
        <h1 className="font-robert-medium text-3xl tracking-[1vw]">
          JUST DO IT
        </h1>
      </div>
      <h1 className="uppercase font-general text-lg tracking-wider">
        breaking limits
      </h1>
    </div>
  );
};

export default Loader;
