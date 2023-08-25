import React, {useState } from 'react';
import NavBar from './components/NavBar';
import Maincontent from './components/Maincontent';
import LoadingBar from 'react-top-loading-bar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App=()=>{
 const apikey= process.env.REACT_APP_NEWS_MONKEY

  // setProgress = (progress = 10) => {
  //   setState({ progress: progress });
  // };

  // state={
  //   progress:0
  // }
  const [progress,setprogress]=useState(0)
   const newProgress=(progress)=>{
    setprogress(progress)
  }

 
    return (
      <div>
       
        <Router>
          <NavBar />
          <LoadingBar color='#f11946' progress={progress}    />
          <Routes>
            <Route path="/" element={<Maincontent apikey={apikey} setprogress={newProgress} category="general" country="in" />}  />
            <Route path="/entertainment" element={<Maincontent apikey={apikey} setprogress={newProgress} category="entertainment" country="in" />} key="entertainment" />
            <Route path="/sports" element={<Maincontent apikey={apikey} setprogress={newProgress} category="sports" country="in" />} key="sports" />
            <Route path="/general" element={<Maincontent apikey={apikey} setprogress={newProgress} category="general" country="in" />} key="general" />
            <Route path="/health" element={<Maincontent apikey={apikey} setprogress={newProgress} category="health" country="in" />} key="health" />
            <Route path="/technology" element={<Maincontent apikey={apikey} setprogress={newProgress} category="technology" country="in" key="technology" />} />
            <Route path="/science" element={<Maincontent apikey={apikey} setprogress={newProgress} category="science" country="in" key="science" />} />
            <Route path="/business" element={<Maincontent apikey={apikey} setprogress={newProgress} category="business" country="in" key="business" />} />
          </Routes>
        </Router>
      </div>
    );
  }
  export default App

