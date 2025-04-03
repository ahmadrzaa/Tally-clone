import React, { useEffect } from 'react';
import TopNavButtons from './TopNavButtons';
import SectionHeader from './SectionHeader';
import StartupScreen from './StartupScreen';
import RightPanel from './RightPanel';
import Footer from './Footer';
import '../styles/layout.css';

const LayoutContainer = () => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.key.toLowerCase() === 'm') {
        alert('Ctrl + M pressed');
      }

      if (e.key.toLowerCase() === 'q') {
        alert('Quit (Q) pressed');
      }

      switch (e.key) {
        case 'F1':
          alert('F1 Pressed');
          break;
        case 'F2':
          alert('F2 Pressed');
          break;
        case 'F3':
          alert('F3 Pressed');
          break;
        // Add cases for F4 to F12 as needed
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="layout-wrapper">
      <div className="left-area">
        <TopNavButtons />
        <SectionHeader />
        <StartupScreen />
        <Footer />
      </div>
      <RightPanel />
    </div>
  );
};

export default LayoutContainer;
