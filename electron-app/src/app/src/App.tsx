import React from 'react';
import { MemoryRouter, Route, Routes, useNavigate } from 'react-router-dom';
import { Wrapper } from '../components';
import { About, Home } from '../pages';


function App() {
  return (
    <Wrapper>
      <MemoryRouter basename='/'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </MemoryRouter>
    </Wrapper>
  );
}

export default App;
