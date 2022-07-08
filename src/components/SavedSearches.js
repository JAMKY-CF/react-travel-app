import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

class SavedSearches extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      accordions: '',
    };
  }


  handleSearchDelete = async (id) => {
    try {
      let url = `${process.env.REACT_APP_SERVER_URL}/search/${id}`;
      await axios.delete(url);
    } catch (error) {
      console.log('get delete search error', error);
    }
    // ?maybe?
    //this.getSavedSearches();
  };

  arrayOfAccordions = (data, idx) => {
    return (
      <Accordion key={idx} >
        <Accordion.Item eventKey={idx}>
          <Accordion.Header>{data.location}</Accordion.Header>
          <Accordion.Body>
            <p>
              {data.location} for the date of {data.date}
            </p>
            <Button type='submit' variant='primary' onSubmit={this.handleSearchDelete(data._id)}>Delete Search</Button>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    );
  };


  getSavedSearches = async () => {
    try {
      let url = `${process.env.REACT_APP_SERVER_URL}/search`;
      let savedSearches = await axios.get(url);
      savedSearches = savedSearches.data;
      console.log('saved searches : ', savedSearches);
      let searchAccordions = savedSearches.map((data, idx) => {
        return this.arrayOfAccordions(data, idx);
      });
      this.setState({
        accordions: searchAccordions,
      });
    } catch (error) {
      console.log('get saved search error', error);
    }
  };


  render() {

    this.getSavedSearches();

    return (
      <>
        <h2>Your destination search results: </h2>
        <div className='savedSearchDiv'>
          {this.state.accordions}
        </div>
      </>
    );

  }
}
export default SavedSearches;
