import React from 'react';
import './Form.css'

const Form=(props) =>{
    return (
        <div className="container">
            <form onSubmit={props.loadWeather}>
            <div className="row mt-5 mb-3">
                <div className="col-md-3 offset-md-2">
                    <input type="text" className="form-control" name="city" placeholder="City" autoComplete="off"></input>
                </div>
                <div className="col-md-3">
                <input type="text" className="form-control" name="country" placeholder="Country" autoComplete="off"></input>
                </div>
                <div className="col-md-3  ">
                    <button className="btn btn-warning">Weather</button>

                </div>

            </div>
            </form>

            
        </div>
    )
}

export default Form;