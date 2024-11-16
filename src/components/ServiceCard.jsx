import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { treatment, image, cost, description } = service;
  return (
    <div>
      <div className="card bg-base-100  shadow-xl">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {treatment}
            <div className="badge badge-secondary">{cost}</div>
          </h2>
          <p title={description}>{description.slice(0, 200)}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">
              <button>Check More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
