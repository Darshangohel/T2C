import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hotel from './pages/Hotel';
import './index.css';
import Login from './pages/Login';
import Event from './pages/Event';
import Dashboard from './pages/Dashboard';
import CreateEvent from './pages/CreateEvent';
import HotelSelection from './pages/HotelSelection';
import HotelDetail from './pages/HotelDetail';
import EventDetail from './pages/EventDetail';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/hotel" element={<Hotel />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/event" element={<Event />} />
        <Route path='/create-event' element={<CreateEvent/>} />
        <Route path='/hotel-selection' element={<HotelSelection/>} />
        <Route path='/event-detail' element={<EventDetail/>} />
        <Route path='/hotel-detail' element={<HotelDetail/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);