import React from 'react';
import ReactDOM from 'react-dom';

import { Hello } from '@/index';

document.addEventListener('DOMContentLoaded', () => {
	const root = document.getElementById('react-root');
	ReactDOM.render(<Hello name="Dwight Schrute" />, root);
});
