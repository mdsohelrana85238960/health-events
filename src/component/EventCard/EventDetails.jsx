import { useLoaderData, useParams } from "react-router-dom";



const EventDetails = () => {
  const {id:eventId} = useParams();
  const events = useLoaderData();
  const oneEvent = events.find(item => item.id == eventId)
    const {img,details,  } = oneEvent;
    return (
              <div className=" ">
                <h1 className="text-xl leading-[2.6rem]"> Our health information is fine . Please follow out rouls .if you follow our rols so fine your health .Here are some key aspects of yoga  Pranayama refers to the practice of controlling one's breath. It involves various breathing exercises that can help</h1>
              <img className="h-[650px] mx-auto" src={img} alt="" />

              <h1 className="text-xl leading-[2.6rem]"> {details} </h1>

              </div>
      
    );
};

export default EventDetails;