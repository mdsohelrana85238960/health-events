import { useLoaderData, useParams } from "react-router-dom";



const EventDetails = () => {
  const {id:eventId} = useParams();
  const events = useLoaderData();
  const oneEvent = events.find(item => item.id == eventId)
    const {name,img,details, price,description } = oneEvent;
    return (
              <div className=" ">

              <img className="h-[650px] mx-auto" src={img} alt="" />

              <h1 className="text-xl leading-[2.6rem]"> {details} </h1>

              </div>
      
    );
};

export default EventDetails;