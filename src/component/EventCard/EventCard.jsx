
const EventCard = ({event}) => {
    const {name,id,img, price,description } = event;
    return (
        <div className=" card  card-compact  mx-auto bg-base-100 shadow-md">
  <figure><img className="h-60 w-[350px]" src= {img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title"> {name} </h2>
    <p  className="text-xl py-2"> {description} </p>
    <p  className="text-xl "> {price} </p>

    <div className="card-actions ">
      <button className="btn btn-primary">Show Details</button>
    </div>
  </div>
</div>
    );
};

export default EventCard;