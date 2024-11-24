import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Login from './pages/Login';

import './index.css';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<div className="app">
			<Login />
		</div>
	</StrictMode>
);

//https://excalidraw.com/#room=f2c6183127dc7d118f38,4YdCJIs-xr0K8qRsu5Wtkw
