import React from 'react';
import { connect } from 'react-redux';
// var categories= ['category1','category2','category3','category4','category5','category6','category7','category8','category9','category10','category11']

const mapStateToProps = state => {
  return {
      categories: state.categories,
  };
};

class CourseCategoryNatalieImprovedRedux extends React.Component {
 
  render() {
    const { isLoading, categories } = this.state;
    return (
      <React.Fragment>
          <div>
          <ul className="list-group list-group-horizontal-md" style={{textAlign: "center"}}>

          {!isLoading ? (
            categories.map(post => {
              const { _id, text } = post;
              return (
                <li key={_id} className="list-group-item list-group-item-action list-group-item-info">
                  <h2>{text[0].name}</h2>
                </li>
              );
            })
          ) : (
            <p>Loading...</p>
          )}
          </ul>
        </div>
      </React.Fragment>
    );
  }
}
export default connect(mapStateToProps, null)(CourseCategoryNatalieImprovedRedux);