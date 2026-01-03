import { motion } from "framer-motion" // eslint-disable-line no-unused-vars
import { useRef, useEffect } from "react"
import aboutImg from '../assets/about.jpeg'
import "./Hero.css"

function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.src = aboutImg;

    const offscreenCanvas = document.createElement('canvas');
    const offscreenCtx = offscreenCanvas.getContext('2d');

    img.onload = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      offscreenCanvas.width = window.innerWidth;
      offscreenCanvas.height = window.innerHeight;
      offscreenCtx.drawImage(img, 0, 0, offscreenCanvas.width, offscreenCanvas.height);
    };

    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      const areaSize = 200; // even larger area

      // Redraw the original background
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(offscreenCanvas, 0, 0);

      // Get the image data around the mouse from offscreen canvas
      const left = Math.max(0, x - areaSize / 2);
      const top = Math.max(0, y - areaSize / 2);
      const width = Math.min(areaSize, window.innerWidth - left);
      const height = Math.min(areaSize, window.innerHeight - top);

      const imageData = offscreenCtx.getImageData(left, top, width, height);
      const data = imageData.data;

      // Apply random pixel dust - each pixel has a chance to pixelate
      for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
          if (Math.random() < 0.05) { // 5% chance for each pixel
            // Average 3x3 neighborhood
            let r = 0, g = 0, b = 0, a = 0, pixelCount = 0;
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
                  pixelCount++;
                }
              }
            }
            r = Math.floor(r / pixelCount);
            g = Math.floor(g / pixelCount);
            b = Math.floor(b / pixelCount);
            a = Math.floor(a / pixelCount);

            // Set the pixel to the averaged color
            const idx = (i * width + j) * 4;
            data[idx] = r;
            data[idx + 1] = g;
            data[idx + 2] = b;
            data[idx + 3] = a;
          }
        }
      }

      // Put the modified image data back
      ctx.putImageData(imageData, left, top);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="hero">
      <canvas 
        ref={canvasRef} 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0
        }}
      />
      <div className="overlay"></div>
      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ 
            opacity: 1, 
            y: 0,
          }}
          transition={{ 
            duration: 0.8,
            y: {
              duration: 2,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut'
            }
          }}
        >
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: 1,
              textShadow: [
                '0 0 10px rgba(255,255,255,0.1)',
                '0 0 20px rgba(255,255,255,0.3)',
                '0 0 10px rgba(255,255,255,0.1)'
              ]
            }}
            transition={{
              duration: 2,
              textShadow: {
                duration: 3,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut'
              }
            }}
          >
            ConCreate
          </motion.h1>
        </motion.div>
        <motion.p
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{
    delay: 0.6,
    duration: 0.8,
  }}
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
