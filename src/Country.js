import React from 'react';
import './Country.css';
const Country = (props) => {
    return (
        <>   
            <div className="card">
                <div className="flag"><img src={props.flag} alt='Country Image' /></div>
                <div className="name"><h1>{props.name}</h1></div>
                <div className="capital"><h1>Capital: {props.capital}</h1></div>
                <div className="other-info">
                    <div className="currency"> <p className='head'>Currency:</p>  <p className='tail'>{props.currency}</p></div>
                    <div className="population"><p className='head'>Population:</p> <p className='tail'>{props.population}</p></div>
                    <div className="domain"><p className='head'>Domain:</p> <p className='tail'>{props.domain}</p></div>
                </div>
            </div>
        </>
    )
}

export default Country;
