import React from 'react';
var border = { border: '2px solid #3A5FCD' };
const items = []
import axios from 'axios';
// var categories= ['category1','category2','category3','category4','category5','category6','category7','category8','category9','category10','category11']

class CourseCategoryNatalieImproved extends React.Component {
  state = {
    posts: [],
    isLoading: true,
    errors: null
  };
  // Now we're going to make a request for data using axios
  getPosts() {
    axios
      // This is where the data is hosted
      .get("https://api.jsonbin.io/b/5fd0a57d516f9d12702a4ace")
      // Once we get a response and store data, let's change the loading state
      .then(response => {
        this.setState({
          posts: response.data,
          isLoading: false
        });
      })
      // If we catch any errors connecting, let's update accordingly
      .catch(error => this.setState({ error, isLoading: false }));
  }
  // Let's our app know we're ready to render the data
  componentDidMount() {
    this.getPosts();
  }
  // Putting that data to use
  render() {
    const { isLoading, posts } = this.state;
    return (
      <React.Fragment>
          <div>
          <ul className="list-group list-group-horizontal-md" style={{textAlign: "center"}}>

          {!isLoading ? (
            posts.map(post => {
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
export default CourseCategoryNatalieImproved;