"use client";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

type SpotlightProps = {
  gradientFirst?: string;
  gradientSecond?: string;
  gradientThird?: string;
  translateY?: number | string;
  width?: number | string;
  height?: number | string;
  smallWidth?: number | string;
  duration?: number;
  xOffset?: number | string;
};

export const Spotlight = ({
  gradientFirst = "radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(210, 100%, 85%, .08) 0, hsla(210, 100%, 55%, .02) 50%, hsla(210, 100%, 45%, 0) 80%)",
  gradientSecond = "radial-gradient(50% 50% at 50% 50%, hsla(210, 100%, 85%, .06) 0, hsla(210, 100%, 55%, .02) 80%, transparent 100%)",
  gradientThird = "radial-gradient(50% 50% at 50% 50%, hsla(210, 100%, 85%, .04) 0, hsla(210, 100%, 45%, .02) 80%, transparent 100%)",
  translateY,
  width,
  height,
  smallWidth,
  duration = 7,
  xOffset,
}: SpotlightProps = {}) => {
  const [dimensions, setDimensions] = useState({
    translateY: -350,
    width: 560,
    height: 1380,
    smallWidth: 240,
    xOffset: 100,
  });

  useEffect(() => {
    const handleResize = () => {
      const isSmallScreen = window.innerWidth < 768;
      setDimensions({
        translateY: isSmallScreen ? -150 : -350,
        width: isSmallScreen ? window.innerWidth * 0.8 : 560,
        height: isSmallScreen ? window.innerHeight * 1.5 : 1380,
        smallWidth: isSmallScreen ? window.innerWidth * 0.4 : 240,
        xOffset: isSmallScreen ? window.innerWidth * 0.1 : 100,
      });
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Use values from state or props
  const finalTranslateY = translateY ?? dimensions.translateY;
  const finalWidth = width ?? dimensions.width;
  const finalHeight = height ?? dimensions.height;
  const finalSmallWidth = smallWidth ?? dimensions.smallWidth;
  const finalXOffset = xOffset ?? dimensions.xOffset;

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="pointer-events-none absolute inset-0 h-full w-full"
    >
      <motion.div
        animate={{
          x: [0, finalXOffset, 0],
        }}
        transition={{
          duration,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute left-0 top-0 z-40 h-screen w-screen"
      >
        <div
          style={{
            transform: `translateY(${finalTranslateY}px) rotate(-45deg)`,
            background: gradientFirst,
            width:
              typeof finalWidth === "number" ? `${finalWidth}px` : finalWidth,
            height:
              typeof finalHeight === "number"
                ? `${finalHeight}px`
                : finalHeight,
          }}
          className={`absolute left-0 top-0`}
        />

        <div
          style={{
            transform: "rotate(-45deg) translate(5%, -50%)",
            background: gradientSecond,
            width:
              typeof finalSmallWidth === "number"
                ? `${finalSmallWidth}px`
                : finalSmallWidth,
            height:
              typeof finalHeight === "number"
                ? `${finalHeight}px`
                : finalHeight,
          }}
          className={`absolute left-0 top-0 origin-top-left`}
        />

        <div
          style={{
            transform: "rotate(-45deg) translate(-180%, -70%)",
            background: gradientThird,
            width:
              typeof finalSmallWidth === "number"
                ? `${finalSmallWidth}px`
                : finalSmallWidth,
            height:
              typeof finalHeight === "number"
                ? `${finalHeight}px`
                : finalHeight,
          }}
          className={`absolute left-0 top-0 origin-top-left`}
        />
      </motion.div>

      <motion.div
        animate={{
          x: [
            0,
            typeof finalXOffset === "number"
              ? -finalXOffset
              : `-${finalXOffset}`,
            0,
          ],
        }}
        transition={{
          duration,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute right-0 top-0 z-40 h-screen w-screen"
      >
        <div
          style={{
            transform: `translateY(${finalTranslateY}px) rotate(45deg)`,
            background: gradientFirst,
            width:
              typeof finalWidth === "number" ? `${finalWidth}px` : finalWidth,
            height:
              typeof finalHeight === "number"
                ? `${finalHeight}px`
                : finalHeight,
          }}
          className={`absolute right-0 top-0`}
        />

        <div
          style={{
            transform: "rotate(45deg) translate(-5%, -50%)",
            background: gradientSecond,
            width:
              typeof finalSmallWidth === "number"
                ? `${finalSmallWidth}px`
                : finalSmallWidth,
            height:
              typeof finalHeight === "number"
                ? `${finalHeight}px`
                : finalHeight,
          }}
          className={`absolute right-0 top-0 origin-top-right`}
        />

        <div
          style={{
            transform: "rotate(45deg) translate(180%, -70%)",
            background: gradientThird,
            width:
              typeof finalSmallWidth === "number"
                ? `${finalSmallWidth}px`
                : finalSmallWidth,
            height:
              typeof finalHeight === "number"
                ? `${finalHeight}px`
                : finalHeight,
          }}
          className={`absolute right-0 top-0 origin-top-right`}
        />
      </motion.div>
    </motion.div>
  );
};
