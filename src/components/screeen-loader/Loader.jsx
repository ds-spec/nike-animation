import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const Loader = () => {
  const circularRef = useRef(null);
  useGSAP(() => {
    gsap.to(circularRef.current, {
      opacity: 0,
      duration: 2,
      ease: "circ.inOut",
      width: "350px",
      height: "350px",
      border: "40px solid #e3e2e2",
      transformOrigin: "center",
      // yoyo: true,
      repeat: -1,
    });
  }, []);

  return (
    <div className="flex flex-col items-center justify-between h-screen p-2 overflow-hidden">
      <h1 className="uppercase font-general">innovation never stops</h1>
      <div>
        <div
          ref={circularRef}
          className="w-[250px] h-[250px] z-20 rounded-full"
        >
          {/* <img src="/img/nike-navbar.png" alt="" className="size-56" /> */}
        </div>
      </div>
      <h1 className="uppercase font-general">breaking limits</h1>
    </div>
  );
};

export default Loader;
