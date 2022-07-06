
import React from 'react';
//import ReactDOM from 'react-dom/client';
import SearchForm from './SearchForm';
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDate :new Date(),
    };
  }
  render() {
    return (
      <>
        <h1>THIS IS THE HOME PAGE. WELCOME.</h1>
        <p>{this.state.currentDate.getFullYear()}/{this.state.currentDate.getMonth()}/{this.state.currentDate.getDate()}</p>
        <SearchForm
          currentDate={this.state.currentDate}
        />

      </>
    );
  }
}

export default Home;
