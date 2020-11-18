import React ,{Component} from 'react';
import './App.css';
import "weather-icons/css/weather-icons.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import Weather from './Component/Weather';
import Form from './Component/Form'


const API_Key = "1f3f90c383463be1b48f8db4e2c6ec14"


class App extends Component{
  constructor(){
    super();
    this.state={
      city:undefined,
      country:undefined,
      temp:0,
      temp_min:0,
      temp_max:0,
      desc:undefined,
      icon:undefined
    };
    

    this.weatherIcon = {
      Thunderstorm: "wi-thunderstorm",
      Drizzle: "wi-sleet",
      Rain: "wi-storm-showers",
      Snow: "wi-snow",
      Atmosphere: "wi-fog",
      Clear: "wi-day-sunny",
      Clouds: "wi-day-fog"
    };

  }
  get_WeatherIcon(icons, rangeId) {
    switch (true) {
      case rangeId >= 200 && rangeId < 232:
        this.setState({ icon: icons.Thunderstorm });
        break;
      case rangeId >= 300 && rangeId <= 321:
        this.setState({ icon: icons.Drizzle });
        break;
      case rangeId >= 500 && rangeId <= 521:
        this.setState({ icon: icons.Rain });
        break;
      case rangeId >= 600 && rangeId <= 622:
        this.setState({ icon: icons.Snow });
        break;
      case rangeId >= 701 && rangeId <= 781:
        this.setState({ icon: icons.Atmosphere });
        break;
      case rangeId === 800:
        this.setState({ icon: icons.Clear });
        break;
      case rangeId >= 801 && rangeId <= 804:
        this.setState({ icon: icons.Clouds });
        break;
      default:
        this.setState({ icon: icons.Clouds });
    }
  }
  celsius =(temp)=> Math.floor(temp-273.15);
  capitalize =(s) =>s && s[0].toUpperCase() + s.slice(1);
  
  weatherdata = async(e)=>{
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const fetch_data = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_Key}`)
    const data= await fetch_data.json();
    console.log(data)
    this.setState({city:data.name})
    this.setState({country:data.sys.country})
    this.setState({temp_min:this.celsius(data.main.temp_min)})
    this.setState({temp_max:this.celsius(data.main.temp_max)})
    this.setState({temp:this.celsius(data.main.temp_max)})
    this.setState({desc:this.capitalize(data.weather[0].description)})
    this.get_WeatherIcon(this.weatherIcon, data.weather[0].id);
  }
  render(){
    return(
      <div className="App">
        <Form loadWeather={this.weatherdata}/>
        <Weather 
          city={this.state.city} 
          country={this.state.country} 
          desc={this.state.desc}  
          temp={this.state.temp} 
          min={this.state.temp_min} 
          max={this.state.temp_max}
          weatherIcon ={this.state.icon}/>
      </div>
    )
  }
}




export default App;
