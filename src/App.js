import './App.css';
import React,{useState, useEffect} from 'react';
import Country from './Country';

function App() {

  const [cases,setCases]=useState([]);

  const getData = async ()=>{
    const response=await fetch('https://restcountries.eu/rest/v2/all');
    setCases(await response.json());
    console.log(cases);
  }

  useEffect(() => {
    getData();
    
  }, [])
  return (
    <div className="App">
      
      <div className="heading">
        Countries
      </div>
      <div className="countries">
        {
          
          cases.map((curEle)=>{
            {/* console.log(curEle); */}
            return <Country name={curEle.name} 
                    flag={curEle.flag} 
                    currency={curEle.currencies[0].name} 
                    population={curEle.population} 
                    domain={curEle.topLevelDomain} 
                    capital={curEle.capital} />
          })
        }
        
      </div>
    </div>
  );
}

export default App;
