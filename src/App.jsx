import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import PageList from './PageList';
import { motion } from 'framer-motion';

const App = () => {
  const [mousePosition, setMousePosition] = React.useState({
    x: 0,
    y: 0
  });

  React.useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }
    window.addEventListener("mousemove", mouseMove)

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    }
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16
    }
  }

  return (
    <>
      <Router>
        <PageList />
      </Router>
      <motion.div
        style={{
          width: '32px',
          height: '32px',
          position: 'fixed',
          top: 0,
          left: 0,
          pointerEvents: 'none'
        }}
        variants={variants}
        animate="default"
        >
          🍑
        </motion.div>
    </>
  );
}

export default App;
