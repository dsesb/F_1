import React from "react";
import Info from "./components/info";
import Form from "./components/form";
import Weather from "./components/Weather";

const API_KEY = "8ee41b59e0a137a3725b454bdcb0f1d6"

class App extends React.Component {

    state = {
        temp: undefined,
        city: undefined,
        country: undefined,
        error: undefined
    }

    gettingWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;


        if(city) {
            const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
            const data = await api_url.json();



            this.setState({
                temp: data.main.temp,
                city: data.name,
                country: data.sys.country,
                error: undefined
            });
        } else {
            this.setState({
                temp: undefined,
                city: undefined,
                country: undefined,
                error: "введите название города"
            });
        }
    }
    render () {
        return (
            <div className="wrapper">
                <div className="main">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-5 info">
                            <Info/>
                        </div>
                        <div className="col-sm-7 form">
                            <Form weatherMethod={this.gettingWeather}/>
                            <Weather
                                temp={this.state.temp}
                                city={this.state.city}
                                country={this.state.country}
                                error={this.state.error}
                            />
                        </div>
                    </div>
                </div>
                </div>
            </div>

        );
    }
}

export default App;