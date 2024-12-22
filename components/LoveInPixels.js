// components/LoveInPixels.jsx
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const LoveInPixels = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section
      className="bg-white flex items-center justify-center min-h-screen p-4"
      ref={ref}
    >
      <motion.div
        className="text-center"
        initial="hidden"
        animate={controls}
        variants={variants}
      >
        <h1 className="text-9xl md:text-5xl font-bold text-gray-800 mb-4">
          Love in Pixels Only
        </h1>
        <p className="text-lg md:text-2xl text-gray-600">Bookings Open</p>
      </motion.div>
    </section>
  );
};

export default LoveInPixels;
