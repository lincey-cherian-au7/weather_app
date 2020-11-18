import React from 'react';
import './Weather.css'


const Weather =(props)=>{
    return(
        <div className="container">
            <div className="card" style={{color:'white'}}>
                <h1>{props.city},{props.country}</h1>
                <h5 className="py-4">
                    <i className={`wi ${props.weatherIcon} display-3`} ></i>
                </h5>
                <h1 className="py-2">
                    {props.temp}&deg;
                </h1>
                {temp(props.min,props.max)}
                <h3 className="py-3">{props.desc}</h3>
            </div>
        </div>
    )
}

function temp(min,max){
    return(
        <h3>
            <span className='px-4'>{min}&deg;</span>
            <span className='px-4'>{max}&deg;</span>
        </h3>
    )
}

export default Weather;