import React from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import CourseCatOne from "../components/CourseCatOne";
import Footer from "../components/Footer";
import Courses from "../components/Courses";
import CourseCategoryNatalieImproved from "../components/CourseCategoryNatalieImproved";
import CoursesRefined from "../components/CoursesRefined";

const CoursesPage = () => {
    return (
        <Layout pageTitle="Kipso | Courses">
            <NavOne />
            <PageHeader title="Courses" />
            <CourseCategoryNatalieImproved/>
            {/* <CourseCatOne/> */}
            <CoursesRefined/>
            {/* <Courses /> */}
            <Footer />
        </Layout>
    );
};

export default CoursesPage;
