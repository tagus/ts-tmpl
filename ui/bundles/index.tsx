import React from 'react';
import { createRoot } from 'react-dom/client';

import Hello from '@/components/Hello';

document.addEventListener('DOMContentLoaded', () => {
  const e = document.getElementById('react-root');
  if (!e) {
    throw new Error('react-root not found');
  }

  const root = createRoot(e);
  root.render(
    <React.StrictMode>
      <Hello name="Dwight Schrute" />
    </React.StrictMode>,
  );
});
