import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../css/SearchForm.css';
// import axios from 'axios';


class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    let currentDate=new Date();
    let day = currentDate.getDate();
    let month = currentDate.getMonth() + 1;
    let year = currentDate.getFullYear();
    if (month < 10)
      month = '0' + month;
    if (day < 10)
      day = '0' + day;
    this.state = {
      cityInput: '',
      todaysDate: `${year}-${month}-${day}`,
      selectedDate: '',
    };
    console.log('constructor set todays date to: ', this.state.todaysDate);
  }

  handleSubmitClick = async (e) => {
    e.preventDefault();
    //console.log('This is the value of the submitted city text input: ', this.state.cityInput);
    //console.log('The date selected: ', this.state.selectedDate);
    // api call to 3001 server at path '3001
    // or call function at home to populate wx display and event display
    //<WeatherDisplay cityName=cityfrom Form/>
  };

  handleOnInput = (e) => {
    this.setState({
      cityInput: e.target.value,
    });
    console.log('Handled change : ', this.state.cityInput);
  };

  handleDate = (e) => {
    this.setState({
      selectedDate: e.target.value
    });
    console.log('Date Updated: ', this.state.selectedDate);
  };


  render() {

    return (
      <div className='searchFromDiv'>
        <Form className="searchForm">
          <Form.Group controlId="formCityName">
            <Form.Label>Destination City</Form.Label>
            <Form.Control type="text" placeholder="Enter city..." onChange={this.handleOnInput} />
          </Form.Group>
          <Form.Group  controlId="formDate">
            <Form.Label>Date</Form.Label>
            <Form.Control type="date" min={this.state.todaysDate} max='2022-12-31' defaultValue={this.state.todaysDate} onChange={this.handleDate} />
          </Form.Group>

          <Button className='formSubmitBtn' variant="primary" type="submit" onClick={this.handleSubmitClick}>
            Search
          </Button>
        </Form>
      </div>

    );
  }
}

export default SearchForm;
