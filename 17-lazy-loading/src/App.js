import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Header from './Layouts/Header';

const MyComponent = lazy(() => import('./Pages/MyComponent'));

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <hr />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/my-component"
            element={
              <Suspense fallback="...Loading">
                <MyComponent />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
