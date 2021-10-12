import React, { useState } from "react";
import "./App.css";
import Loading from "./component/loading/Loading";
import View from "./pages/View";

function App() {
  const [isLoading, setisLoading] = useState(true);
  setTimeout(() => {
    setTimeout(() => {
      setisLoading(false);
    });
  }, 2000);
  return (
    <div className='App'>
      {isLoading && <Loading />}
      {!isLoading && <View />}
    </div>
  );
}

export default App;
