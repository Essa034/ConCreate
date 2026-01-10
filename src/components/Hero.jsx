// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useRef, useEffect } from "react";
import logo from "../assets/logo.png";
import "./Hero.css";

function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    const setSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drawBaseGrid();
    };

    const gridSize = 120; // large cubes
    const baseAlpha = 0.08; // faint overlay
    let baseGridCanvas = document.createElement("canvas");
    let baseGridCtx = baseGridCanvas.getContext("2d");
    let clearHighlightId = null;

    const drawBaseGrid = () => {
      baseGridCanvas.width = canvas.width;
      baseGridCanvas.height = canvas.height;
      baseGridCtx.clearRect(0, 0, baseGridCanvas.width, baseGridCanvas.height);

      for (let y = 0; y < baseGridCanvas.height; y += gridSize) {
        for (let x = 0; x < baseGridCanvas.width; x += gridSize) {
          baseGridCtx.fillStyle = `rgba(255, 255, 255, ${baseAlpha})`;
          baseGridCtx.fillRect(x, y, gridSize - 1, gridSize - 1);
        }
      }
    };

    const drawScene = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(baseGridCanvas, 0, 0);
    };

    const drawProximityHighlights = (mouseX, mouseY) => {
      // Draw base first
      drawScene();

      const threshold = 24; // px distance where highlight is visible
      const range = gridSize * 2; // highlight a local area around cursor

      // Nearest grid lines
      const nearestV = Math.round(mouseX / gridSize) * gridSize;
      const nearestH = Math.round(mouseY / gridSize) * gridSize;

      const drawVertical = (xLine) => {
        const dx = Math.abs(mouseX - xLine);
        if (dx > threshold) return;
        const alpha = (1 - dx / threshold) * 0.9; // stronger near the line; higher to show through overlay
        ctx.strokeStyle = `rgba(255,255,255,${alpha})`;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(xLine + 0.5, Math.max(0, mouseY - range));
        ctx.lineTo(xLine + 0.5, Math.min(canvas.height, mouseY + range));
        ctx.stroke();
      };

      const drawHorizontal = (yLine) => {
        const dy = Math.abs(mouseY - yLine);
        if (dy > threshold) return;
        const alpha = (1 - dy / threshold) * 0.9;
        ctx.strokeStyle = `rgba(255,255,255,${alpha})`;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(Math.max(0, mouseX - range), yLine + 0.5);
        ctx.lineTo(Math.min(canvas.width, mouseX + range), yLine + 0.5);
        ctx.stroke();
      };

      // Draw nearest lines and neighbors for a subtle cross highlight
      [nearestV - gridSize, nearestV, nearestV + gridSize].forEach(drawVertical);
      [nearestH - gridSize, nearestH, nearestH + gridSize].forEach(drawHorizontal);
    };

    const onMove = (e) => {
      drawProximityHighlights(e.clientX, e.clientY);
      if (clearHighlightId) clearTimeout(clearHighlightId);
      clearHighlightId = setTimeout(() => {
        drawScene(); // back to just the faint grid
      }, 180);
    };

    window.addEventListener("resize", setSize);
    window.addEventListener("mousemove", onMove);
    setSize();

    return () => {
      window.removeEventListener("resize", setSize);
      window.removeEventListener("mousemove", onMove);
      if (clearHighlightId) clearTimeout(clearHighlightId);
    };
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
    <div className="hero" id="home">
      <header className="hero-header">
        <div className="header-left">
          <img src={logo} alt="ConCreate logo" className="logo-img" />
        </div>
        <nav className="header-nav">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#events">Events</a></li>
          </ul>
        </nav>
      </header>
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
            <motion.span 
              key={index} 
              variants={letter}
              className={index === 0 || index === 3 ? 'big-c' : ''}
            >
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
          <motion.a
            href="https://forms.gle/hvjCGmGstpTUpd2S8"
            target="_blank"
            rel="noopener noreferrer"
            className="primary-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Register Now
          </motion.a>
        </div>

        <motion.p
          className="cta-note"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 0.8 }}
        >
          Free Tshirts and other goodies 
        </motion.p>
      </div>
    </div>
  );
}

export default Hero;
