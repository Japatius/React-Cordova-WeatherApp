import React from 'react';

class Weather extends React.Component {
    render() {
        return (
            <div className="weather-data">
                {
                    this.props.country && this.props.city &&
                    <p>Location:
                        <span className="weather__value">  {this.props.city}, {this.props.country}</span>
                    </p>
                }
                {
                    this.props.temperature &&
                    <p>Temperature:
                        <span>  {this.props.temperature} °C</span>
                    </p>
                }
                {
                    this.props.humidity &&
                    <p>Humidity:
                        <span>  {this.props.humidity} %</span>
                    </p>
                }
                {
                    this.props.description &&
                    <p>Conditions:
                        <span>  {this.props.description}</span>
                    </p>
                }
                {
                    this.props.error &&
                    <p>
                        {this.props.error}
                    </p>
                }
            </div>
        );
    }
}

export default Weather;