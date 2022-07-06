import React from 'react';
import SearchForm from './SearchForm';
import '../css/Home.css';
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDate :new Date(),
    };
  }
  render() {
    return (
      <div id='home'>
        <h1>THIS IS THE HOME PAGE. WELCOME.</h1>
        <SearchForm
          currentDate={this.state.currentDate}
        />

      </div>
    );
  }
}

export default Home;
