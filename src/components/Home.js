import React from 'react';
import SearchForm from './SearchForm';
import '../css/Home.css';
import '../css/eventDisplay.css';
import '../css/savedSearches.css';
import '../css/weatherDisplay.css';
//import { Auth0Client } from '@auth0/auth0-spa-js';
import { withAuth0 } from '@auth0/auth0-react';
import WeatherDisplay from './WeatherDisplay';
import EventDisplay from './eventDisplay';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasSearched: false,
      city: '',
      date: '',
    };
  }

  handleSearchResults = (infoToPass) => {
    console.log('home handle search fired', infoToPass);
    // receive results from search from to server call or make server call here to display
    // results to the home page. should populate weather and eventdata
    this.setState({
      city: infoToPass.location,
      date: infoToPass.date,
      hasSearched: true,
    });
  };


  render() {
    let toBeCalled;
    console.log('LINE 36  HOME: ', this.state.city);
    if (this.state.hasSearched) {
      toBeCalled = (
        <>
          <EventDisplay cityName={this.state.city} />
          <WeatherDisplay cityName={this.state.city} />
        </>);
    } else {
      toBeCalled = '';
    }

    return (
      <div id='home'>
        <h1>Welcome To Dream Vacation!</h1>
        {/* {this.props.auth0.isAuthenticated && !this.state.hasSearched ? */}
        <SearchForm handleSearchResults={this.handleSearchResults} />
        {/* this.state.hasSearched ? (
        <>
          <EventDisplay cityName={this.state.city} />
          <WeatherDisplay cityName={this.state.city} />
        </>
        )
        : <h2>hasSearched=== false</h2> */}
        {toBeCalled}
      </div>
    );
  }
}

export default withAuth0(Home);
