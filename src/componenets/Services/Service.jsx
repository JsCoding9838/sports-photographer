import { Link } from "react-router-dom";

const Service = ({ service, serviceHandler }) => {
  return (
    <div className="border-4 p-4  bg-black text-white rounded border-dotted  border-[rgb(184,19,134)]  shadow-2xl flex flex-col items-center justify-center">
      <div className="w-full">
        <img className="rounded w-full" src={service.img} alt="" />
      </div>
      <div className="text-justify ">
        <h1 className="lg:text-2xl font-semibold py-2">{service.name}</h1>
        <p>{service.description}</p>
      </div>
      <div className="flex w-full justify-between items-center py-4">
        <Link
          to="/checkout"
          onClick={()=> serviceHandler(service)}
          className="lg:px-4 px-2  font-semibold lg:py-2 py-1 rounded-full bg-[rgb(184,19,134)] hover:bg-[rgb(154,15,112)] lg:shadow-2xl uppercase"
        >
          check out
        </Link>
        <h2 className="font-semibold">$ <span className="text-[hsl(318,95%,39%)]">{service.price}</span></h2>
      </div>
    </div>
  );
};

export default Service;
