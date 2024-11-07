import react from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

import Main from './components/Main';
import Player from './components/Player';
import Game from './components/Game';
import Match from './components/Match';
import Tournament from './components/Tournament';
import VideoGame from './components/VideoGame';

const App = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{duration: 0.3}}><Main /></motion.div>}
        />
        <Route
          path="/player"
          element={<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{duration: 0.3}}><Player /></motion.div>}
        />
        <Route
          path="/game"
          element={<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{duration: 0.3}}><Game /></motion.div>}
        />
        <Route
          path="/match"
          element={<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{duration: 0.3}}><Match /></motion.div>}
        />
        <Route
          path="/tournament"
          element={<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{duration: 0.3}}><Tournament /></motion.div>}
        />
        <Route
          path="/videogame"
          element={<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{duration: 0.3}}><VideoGame /></motion.div>}
        />
      </Routes>
    </AnimatePresence>
  );
}

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
}
export default AppWrapper;