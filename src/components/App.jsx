import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './layout';


const Main = () => {
  return (
    <div>main</div>
  )
}

const Sub = () => {
  return (
    <div>sub</div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="main" element={<Main />} />
        <Route path="sub" element={<Sub />} />
      </Route>
    </Routes>
  );
}
