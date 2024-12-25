// components/FadeInOnScroll.js
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const FadeInOnScroll = ({ children }) => {
  const { ref, inView } = useInView({
    //triggerOnce: true, // Trigger animation only once
    threshold: 0.05, // Trigger when 10% of the element is visible
  });

  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 }, // Start state
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.5, ease: 'easeOut' },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={fadeInVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
    >
      {children}
    </motion.div>
  );
};

export default FadeInOnScroll;
