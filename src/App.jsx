import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import NavBar from './components/NavBar';
import Home from './components/Home';
import FallbackSpinner from './components/FallbackSpinner';
import { ThemeProvider } from './theme/ThemeContext';
import './App.css';

// Lazy load components
const About = React.lazy(() => import('./components/About'));
const Skills = React.lazy(() => import('./components/Skills'));
const Education = React.lazy(() => import('./components/Education'));
const Experience = React.lazy(() => import('./components/Experience'));
const Projects = React.lazy(() => import('./components/Projects'));

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
        <BrowserRouter>
          <NavBar />
          <main className="container mx-auto px-4 py-8">
            <Suspense fallback={<FallbackSpinner />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About header="About" />} />
                <Route path="/skills" element={<Skills header="Skills" />} />
                <Route path="/education" element={<Education header="Education" />} />
                <Route path="/experience" element={<Experience header="Experience" />} />
                <Route path="/projects" element={<Projects header="Projects" />} />
              </Routes>
            </Suspense>
          </main>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;