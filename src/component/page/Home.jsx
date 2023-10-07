import { useLoaderData } from "react-router-dom";
import Footer from "../Navbar/Footer";
import Banner from "./Banner";
import EventCard from "../EventCard/EventCard";
import EventDetails from "../EventCard/EventDetails";




const Home = () => {
    const events = useLoaderData();
    return (
        <div>
            <Banner></Banner>
           <div className="text-center">
           <h2 className="text-4xl my-8">HEALTH & WELLNESS WORKSHOPS</h2>
            <p  className="text-xl leading-[2.6rem]">Promote and support physical, spiritual, mental, and financial wellness <br />

Let our certified instructors help your team achieve balance <br />

Interactive and immersive experiences for all!</p>
           </div>

<div className="   mt-20 grid gap-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
    {
        events.map(event => <EventCard key={event.id} event={event} ></EventCard> )
    }
</div>

{/* <div className="   mt-20 grid gap-16 grid-cols-1 ">
    {
        events.map(event => <EventDetails key={event.id} event={event} ></EventDetails> )
    }
</div> */}

<div className="text-center text-white py-32 my-10 bg-blue-950">
    <h2 className="text-4xl font-medium">
WHAT PEOPLE ARE SAYING</h2>
</div>
<div className=" my-24 grid items-center gap-16 grid-col md:grid-cols-3" >
    <p className="text-center text-xl leading-[2rem]"> <span className="font-bold block text-2xl mb-4">Amazon</span>“It was an awesome <br /> workout, a ton of fun and <br /> Nicole was FANTASTIC <br /> (with good music, too).” </p>
    <p className="text-center text-lg leading-[2rem]"> <span className="font-bold block text-2xl mb-4">Microsoft</span>“We had such a great <br /> experience!  Our event <br /> host was wonderful and all<br /> who attended raved about <br /> how fun the event was.  I <br /> would definitely <br /> recommend this event for <br /> a team's first team <br />-building exercise.” </p>
    <p className="text-center text-lg leading-[2rem]"> <span className="font-bold block text-2xl mb-4">ADP</span>“Amazing, we need more of <br /> these things as they really <br /> get the team engaged! </p>
   
</div>

             <Footer></Footer>
        </div>
    );
};

export default Home;