import Layout from "../components/Layout";
import Topbar from "../components/Topbar";

import Link from 'next/link'
import CallToActionOne from "../components/CallToActionOne";
import CourseCategoryNatalie from "../components/CourseCategoryNatalie";
import CourseCategoryNatalieImproved from "../components/CourseCategoryNatalieImproved";
import {useDispatch, useSelector} from 'react-redux'
// import {fetchposts} from '../store/actions/postAction';
import {fetchcategories} from '../store/actions/categoryAction';
import {useEffect} from 'react'

//link makes you navigate between pages

export default function Nat () {
    const dispatch= useDispatch();
    // const {posts} = useSelector(state=>state.post);

    // useEffect(()=> {
    //     dispatch(fetchposts());
    // }, [])
    const {categories} = useSelector(state=>state.categories);

    useEffect(()=> {
        dispatch(fetchcategories());
    }, [])

    return(
    <Layout pageTitle="Nat the queen">
        <Topbar/>
       
       {/* <NatCompFake/> */}
   <div>
   {/* <CourseCategoryNatalie/> */}
   <CourseCategoryNatalieImproved/>
       <ul>
            <li><Link href="/"><a>Home</a></Link></li>
            <li><Link href="/about"><a>About</a></Link></li>
        </ul>
        
            <p>hello-top</p>    
            { categories.map(category => {
              return (
                <div key={category._id}>
                  {category.text[0].name}
                </div>
              )
            })
          }
                       {/* <p>{categories}</p>  */}
        <p>hello-bottom</p>   
       
       <CallToActionOne/>
      
       <p><style jsx>{`color:green`}</style>from within the page</p>
   </div>
   </Layout>
)};