import React from 'react';
//import ReactDOM from 'react-dom/client';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    let day = this.props.currentDate.getDate();
    let month = this.props.currentDate.getMonth() + 1;
    let year = this.props.currentDate.getFullYear();
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
    console.log('This is the value of the submitted city text input: ', this.state.cityInput);
    console.log('The date selected: ', this.state.selectedDate);
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
      <>
        <Form>
          <Form.Group className="searchForm" controlId="formCityName">
            <Form.Label>Destination City</Form.Label>
            <Form.Control type="text" placeholder="Enter city..." onChange={this.handleOnInput} />
          </Form.Group>
          <Form.Group className="searchForm" controlId="formDate">
            <Form.Label>Date</Form.Label>
            <Form.Control type="date" min='2022/07/04' max='2022/12/31' defaultValue={this.state.todaysDate} onChange={this.handleDate} />
          </Form.Group>

          <Button variant="primary" type="submit" onClick={this.handleSubmitClick}>
            Search
          </Button>
        </Form>
      </>

    );
  }
}

export default SearchForm;
