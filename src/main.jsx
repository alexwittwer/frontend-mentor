import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import QR from './components/QR/QR';
import "./index.css"

const router = createBrowserRouter([
  { path: '/', element: <App />, children: [
    {path: "/qr", element: <QR />}
  ] },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
