import './App.css';

import React, { useState } from 'react'
import Navbar from './component/Navbar';
import News from './component/News';
// import NewsItem from './component/NewsItem';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import LoadingBar from 'react-top-loading-bar';

const App =(props)=> {
 const pageSize = 5;
 const apiKey = "bb08befa6d16487dab4e92c7290ef29b"
 //This Api is not secure in Client side.
 const [progress, setProgress] = useState(0)

    return (
     
      <div>
      <Router>
          <Navbar/>
          <LoadingBar
          height={4}
          color ="#f11946"
          progress={progress}
         
         
          />

          <Routes>
            <Route exact path={"/"} element={<News setProgress={setProgress}  apiKey={apiKey} key="business" pageSize={pageSize} country="in" category="Business"/>}></Route>
            <Route exact path={"/general"} element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="General"/>}></Route>
            <Route exact path={"/entertainment"} element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="in" category="Entertainment"/>}></Route>
            <Route exact path={"/science"} element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country="in" category="Science"/>}></Route>
            <Route exact path={"/health"} element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="in" category="Health"/>}></Route>
            <Route exact path={"/technology"} element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="in" category="Technology"/>}></Route>
            <Route exact path={"/sports"} element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country="in" category="Sports"/>}></Route>
        </Routes>
       </Router>
      </div>
    )
  
}
export default App;