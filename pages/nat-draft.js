import Layout from "../components/Layout";
import Topbar from "../components/Topbar";

import Link from 'next/link'
import CallToActionOne from "../components/CallToActionOne";
import CourseCategoryNatalie from "../components/CourseCategoryNatalie";
import CourseCategoryNatalieImproved from "../components/CourseCategoryNatalieImproved";

//link makes you navigate between pages

const Nat = () => (
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
     
       <CallToActionOne/>
      
       <p><style jsx>{`color:green`}</style>from within the page</p>
   </div>
   </Layout>
);
export default Nat;