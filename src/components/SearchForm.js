import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../css/SearchForm.css';
import axios from 'axios';
// import axios from 'axios';


class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    let currentDate = new Date();
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
  }

  handleSubmitClick = async (event) => {
    event.preventDefault();
    console.log('This is the value of the submitted city text input: ', event.target.formCityName.value);
    console.log('The date selected: ', event.target.formDate.value);
    // api call to 3001 server at path '3001
    try {
      let searchURL = `${process.env.REACT_APP_SERVER_URL}/search`;
      let searchBody = {location: event.target.formCityName.value, date: event.target.formDate.value};
      console.log('search URL', searchURL);
      console.log('search body' ,searchBody);
      let savedSearchResult = await axios.post(searchURL, searchBody);
      savedSearchResult = savedSearchResult.data;
      this.props.handleSearchResults(savedSearchResult);
    } catch (error) {
      console.log('search submit error',error);
    }
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
        <Form className="searchForm" onSubmit={this.handleSubmitClick}>
          <Form.Group controlId="formCityName">
            <Form.Label>Destination City</Form.Label>
            <Form.Control type="text" placeholder="Enter city..." onChange={this.handleOnInput} />
          </Form.Group>

          <Form.Group controlId="formDate" >
            <Form.Label>Date</Form.Label>
            <Form.Control type="date" min={this.state.todaysDate} max='2022-12-31' defaultValue={this.state.todaysDate} onChange={this.handleDate} />
          </Form.Group>
          <Button className='formSubmitBtn' variant="primary" type="submit">
            Search
          </Button>
        </Form>
      </div>

    );
  }
}

export default SearchForm;
