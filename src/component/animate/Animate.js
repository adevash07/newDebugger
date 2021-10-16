import React, { useLayoutEffect, useState, useRef } from "react";
import "./animate.scss";

function Animate({
  children,
  animateRight,
  animateLeft,
  animateBottom,
  animateTop,
}) {
  const [animate, setanimate] = useState({
    left: false,
    right: false,
    bottom: false,
    top: false,
  });
  const animateRef = useRef();

  useLayoutEffect(() => {
    console.log(window.innerWidth);
    if (window.innerWidth > 992) {
      const view = document.getElementById("view");
      view.addEventListener("scroll", handleScroll);
      return () => {
        view.removeEventListener("scroll", handleScroll);
      };
    } else if (window.innerWidth < 992) {
      const view = document.getElementById("view__con");
      view.addEventListener("scroll", handleScroll);
      return () => {
        view.addEventListener("scroll", handleScroll);
      };
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [window.innerWidth]);

  const handleScroll = () => {
    const topPos = animateRef.current.getBoundingClientRect().top;
    const scrollPosY = window.scrollY + window.innerHeight;
    console.log(topPos);
    if (animateRight) {
      if (topPos <= scrollPosY) {
        setanimate((prev) => {
          return { ...prev, right: true };
        });
      }
      // else {
      //   setanimate((prev) => {
      //     return { ...prev, right: false };
      //   });
      // }
    } else if (animateLeft) {
      if (topPos <= scrollPosY) {
        setanimate((prev) => {
          return { ...prev, left: true };
        });
      }
      // else {
      //   setanimate((prev) => {
      //     return { ...prev, left: false };
      //   });
      // }
    } else if (animateTop) {
      if (topPos <= scrollPosY) {
        setanimate((prev) => {
          return { ...prev, top: true };
        });
      }
      // else {
      //   setanimate((prev) => {
      //     return { ...prev, top: false };
      //   });
      // }
    } else if (animateBottom) {
      if (topPos <= scrollPosY) {
        setanimate((prev) => {
          return { ...prev, bottom: true };
        });
      }
      // else {
      //   setanimate((prev) => {
      //     return { ...prev, bottom: false };
      //   });
      // }
    }
  };

  // const onScroll = () => {
  //   const topPos = animateRef.current.getBoundingClientRect().top;
  //   console.log(topPos);
  //   if (Math.sign(topPos) === 1) {
  //     if (animateLeft) {
  //       setanimate((prev) => {
  //         return { ...prev, left: true };
  //       });
  //     } else {
  //       setanimate((prev) => {
  //         return { ...prev, left: false };
  //       });
  //     }
  //     if (animateRight) {
  //       setanimate((prev) => {
  //         return { ...prev, right: true };
  //       });
  //     } else {
  //       setanimate((prev) => {
  //         return { ...prev, right: false };
  //       });
  //     }
  //     if (animateTop) {
  //       setanimate((prev) => {
  //         return { ...prev, top: true };
  //       });
  //     } else {
  //       setanimate((prev) => {
  //         return { ...prev, top: false };
  //       });
  //     }
  //     if (animateBottom) {
  //       setanimate((prev) => {
  //         return { ...prev, bottom: true };
  //       });
  //     } else {
  //       setanimate((prev) => {
  //         return { ...prev, bottom: false };
  //       });
  //     }
  //   } else {
  //     setanimate(false);
  //   }
  // };

  return (
    <div
      ref={animateRef}
      className={`animate ${
        animate.right
          ? "slideInRight"
          : animate.left
          ? "slideInLeft"
          : animate.top
          ? "slideInTop"
          : animate.bottom
          ? "slideInBottom"
          : " "
      }`}>
      {children}
    </div>
  );
}

export default React.memo(Animate);
