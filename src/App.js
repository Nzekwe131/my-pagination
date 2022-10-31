import React, { useState } from "react";
import { Routes, Route, } from "react-router-dom";
import Header from "./components/page/Header";
import Home from "./components/page/Home";
import Service from "./components/page/Service";
import Users from "./components/Users/Users";
import { ErrorBoundary } from "react-error-boundary";
import Error from "./components/page/Error";

// export const UsersContext = React.createContext([]);

const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <div className="error-container">
      <p>Something went wrong:</p>
      <p>{error.message}</p>
      <button onClick={resetErrorBoundary}>Reset App</button>
    </div>
  );
};

const App = () => {
  // const [Data, setData] = useState([]);
  const [explode, setExplode] = useState(false);
  return (
    <div>
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => setExplode(false)}
        resetKeys={[explode]}
      >
        <Header />
        <Routes>
        <Route  path="/"
            element={<Home explode={explode} setExplode={setExplode} />} />
       <Route
           path="service"
            element={<Service />} />


          <Route
            path="/users"
            element={<Users/>}
  
          />
          <Route path="*" element={<Error/>} />
        </Routes>
      </ErrorBoundary>
    </div>
  );
};

export default App;

