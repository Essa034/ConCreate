import { motion } from "framer-motion";
import { useRef, useEffect } from "react";
import aboutImg from "../assets/about.jpeg";
import "./Hero.css";

function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.src = aboutImg;

    const offscreenCanvas = document.createElement("canvas");
    const offscreenCtx = offscreenCanvas.getContext("2d");

    img.onload = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      offscreenCanvas.width = window.innerWidth;
      offscreenCanvas.height = window.innerHeight;
      offscreenCtx.drawImage(
        img,
        0,
        0,
        offscreenCanvas.width,
        offscreenCanvas.height
      );
    };

    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      const areaSize = 200;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(offscreenCanvas, 0, 0);

      const left = Math.max(0, x - areaSize / 2);
      const top = Math.max(0, y - areaSize / 2);
      const width = Math.min(areaSize, window.innerWidth - left);
      const height = Math.min(areaSize, window.innerHeight - top);

      const imageData = offscreenCtx.getImageData(left, top, width, height);
      const data = imageData.data;

      for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
          if (Math.random() < 0.05) {
            let r = 0, g = 0, b = 0, a = 0, count = 0;
            for (let di = -1; di <= 1; di++) {
              for (let dj = -1; dj <= 1; dj++) {
                const ni = i + di;
                const nj = j + dj;
                if (ni >= 0 && ni < height && nj >= 0 && nj < width) {
                  const idx = (ni * width + nj) * 4;
                  r += data[idx];
                  g += data[idx + 1];
                  b += data[idx + 2];
                  a += data[idx + 3];
                  count++;
                }
              }
            }
            const idx = (i * width + j) * 4;
            data[idx] = r / count;
            data[idx + 1] = g / count;
            data[idx + 2] = b / count;
            data[idx + 3] = a / count;
          }
        }
      }

      ctx.putImageData(imageData, left, top);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const text = "ConCreate";

  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  return (
    <div className="hero">
      <canvas ref={canvasRef} className="hero-canvas" />
      <div className="overlay" />

      <div className="hero-content">
        <motion.h1
          className="glitch-text"
          data-text="ConCreate"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {text.split("").map((char, index) => (
            <motion.span key={index} variants={letter}>
              {char}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
        >
          Outthink - Outbuild - Outlast
        </motion.p>

        <div className="hero-buttons">
          <motion.button
            className="primary-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>

          <motion.button
            className="secondary-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </motion.button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
