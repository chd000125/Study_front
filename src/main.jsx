import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // ✨ 이거 import
import App from './App.jsx';
import './style/test.css';
import "./style/index.css"; // 또는 test.css, tailwind.css 등

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter> {/* ✨ 이렇게 감싸야 함 */}
            <App />
        </BrowserRouter>
    </React.StrictMode>
);
