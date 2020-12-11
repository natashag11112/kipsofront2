import React from 'react';
var border = { border: '2px solid #3A5FCD' };
const items = []
import axios from 'axios';
import Link from 'next/link';

// var categories= ['category1','category2','category3','category4','category5','category6','category7','category8','category9','category10','category11']

class CourseNatalieSquare extends React.Component {
  state = {
    posts: [],
    errors: null
  };
  // Now we're going to make a request for data using axios
  getPosts() {
    axios
      // This is where the data is hosted
      .get("https://api.jsonbin.io/b/5fd1100682e9306ae6ff82e8")
      // Once we get a response and store data, let's change the loading state
      .then(response => {
        this.setState({
          posts: response.data,
          
        });
      })
      // If we catch any errors connecting, let's update accordingly
      .catch(error => this.setState({ error }));
  }
  // Let's our app know we're ready to render the data
  componentDidMount() {
    this.getPosts();
  }
  // Putting that data to use
  render() {
    const { posts } = this.state;
    return (
      <React.Fragment>
          
          
          {(
            posts.map(post => {
              const { _id, category, text } = post;
              return (
                        <div key={_id} className="course-one__single">
                            <div className="course-one__image">
                                <img src="/assets/images/course-1-1.jpg" alt="" />
                                    <i className="far fa-heart"></i>
                            </div>
                            <div className="course-one__content">
                                <a href="#" className="course-one__category">{category.text[0].name}</a>
                                <h2 className="course-one__title"><Link href="/course-details"><a>{text[0].name}</a></Link>
                                </h2>
                                <a href="#" className="course-one__link">See Preview</a>
                            </div>
                        </div>
               
              );
            })
          ) }
         
      
      </React.Fragment>
    );
  }
}
export default CourseNatalieSquare;