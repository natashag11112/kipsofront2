import React from 'react';
import Link from 'next/link';
import CourseNatalieSquare from "../components/CourseNatalieSquare";

const CoursesRefined = () => {
    return (
        <section className="course-one course-page">
            <div className="container">
                <div className="row">
                <CourseNatalieSquare/>
               
                </div>
                <div className="post-pagination">
                    <a href="#"><i className="fa fa-angle-double-left"></i></a>
                    <a className="active" href="#">1</a>
                    <a href="#">2</a>
                    <a href="#">3</a>
                    <a href="#">4</a>
                    <a href="#"><i className="fa fa-angle-double-right"></i></a>
                </div>

            </div>
        </section>
    );
};

export default CoursesRefined;
