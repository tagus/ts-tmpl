import React from 'react';
import { createRoot } from 'react-dom/client';

import Hello from '@/components/Hello';

document.addEventListener('DOMContentLoaded', () => {
  const [element] = document.getElementsByClassName('react-root');
  const root = createRoot(element);

  root.render(
    <React.StrictMode>
      <Hello name="Dwight Schrute" />
    </React.StrictMode>,
  );
});
