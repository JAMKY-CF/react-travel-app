import React from 'react';
import SearchForm from './SearchForm';
import '../css/Home.css';
import '../css/eventDisplay.css';
import '../css/savedSearches.css';
import '../css/weatherDisplay.css';
//import { Auth0Client } from '@auth0/auth0-spa-js';
import { withAuth0 } from '@auth0/auth0-react';
import WeatherDisplay from './WeatherDisplay';
import SavedSearches from './SavedSearches';
import EventDisplay from './eventDisplay';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasSearched: false,
    };
  }

  handleSearchResults = () => {
    // receive results from search from to server call or make server call here to display
    // results to the home page. should populate weather and eventdata

  };


  render() {
    let searchData=[{cityName:'Seattle',date:'2022-07-09',imgURL:'abc.jpg'},{cityName:'Seattle',date:'2022-07-09',imgURL:'abc.jpg'},{cityName:'Seattle',date:'2022-07-09',imgURL:'abc.jpg'}];
    let weatherData=[{date:'2022-07-09',description:'A wonderful day'},{date:'2022-07-09',description:'A wonderful day'},{date:'2022-07-09',description:'A wonderful day'}];
    let eventData=[{name:'Sounders Game',description:'A soccer match at a stadium.',url:'./#'},{name:'Sounders Game',description:'A soccer match at a stadium.',url:'./#'},{name:'Sounders Game',description:'A soccer match at a stadium.',url:'./#'}];


    return (
      <div id='home'>
        <h1>THIS IS THE HOME PAGE. WELCOME.</h1>
        {/* {this.props.auth0.isAuthenticated && !this.state.hasSearched ? */}
        <>
          <SearchForm />
          <SavedSearches searchData={searchData}/>
          <EventDisplay eventData={eventData}/>
          <WeatherDisplay weatherData={weatherData}/>
        </>
        {/* : <SearchForm />
        } */}

      </div>
    );
  }
}

export default withAuth0(Home);
