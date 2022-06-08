import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap"
import './App.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from "./components/Card/Card";

function App() {

  const [fetchedData, setFetchedData] = useState([]);
  console.log("data", fetchedData);

  let api = `https://rickandmortyapi.com/api/character/?page=1`;

  const getAllCharacter = async () => {
    const response = await axios.get(api);
    setFetchedData(response.data.results);
  }

  useEffect(() => {
    getAllCharacter();
  }, [])

  return (
    <div className='.container'>
      <h1 className="text-center">Rick & Morty <span className="text-danger">Wiki</span></h1>
      <div className="row align-items-start">
        <div className="row">
          This space is for filter components
          <div className="col-lg-8 col-12">
            <div className="row"> 
              <Card fetchedData={fetchedData}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
