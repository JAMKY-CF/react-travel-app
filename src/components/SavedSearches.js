import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

class SavedSearches extends React.Component {


  arrayOfAccordions = (data, idx) => {
    return (
      <Accordion key={idx} >
        <Accordion.Item eventKey={idx}>
          <Accordion.Header>data.cityName</Accordion.Header>
          <Accordion.Body>
            <p>
              {data.cityName} for the date of {data.date}
            </p>
            <img src={data.imgURL} alt={data.cityName} />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    );
  };



  render() {

    //if Auth0 authenticated
    let searchAccordions = this.props.searchData.map((data, idx) => {
      return this.arrayOfAccordions(data, idx);
    });

    return (
      <>
        <h2>Your destination search results: </h2>
        <div className='savedSearchDiv'>
          {searchAccordions}
        </div>
      </>
    );

  }
}
export default SavedSearches;
