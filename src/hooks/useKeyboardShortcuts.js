// src/hooks/useKeyboardShortcuts.js

import { useEffect } from 'react';

const useKeyboardShortcuts = (shortcuts) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      const key = event.key;

      if (shortcuts[key]) {
        shortcuts[key](); // call the matched function
      }

      // Optional: handle special cases
      if (key === 'Enter' && shortcuts['ENTER']) {
        shortcuts['ENTER']();
      } else if (key === 'Escape' && shortcuts['ESCAPE']) {
        shortcuts['ESCAPE']();
      } else if (key === 'ArrowUp' && shortcuts['ArrowUp']) {
        shortcuts['ArrowUp']();
      } else if (key === 'ArrowDown' && shortcuts['ArrowDown']) {
        shortcuts['ArrowDown']();
      } else if (key === 'ArrowLeft' && shortcuts['ArrowLeft']) {
        shortcuts['ArrowLeft']();
      } else if (key === 'ArrowRight' && shortcuts['ArrowRight']) {
        shortcuts['ArrowRight']();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [shortcuts]);
};

export default useKeyboardShortcuts;
