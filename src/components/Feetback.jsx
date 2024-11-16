const Feetback = ({feed}) => {
const {name,review,userImg} = feed
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
            <div className="flex">
                <p><img className="size-11 rounded-full" src={userImg} alt="" /></p>
            <h2 className="card-title">{name}</h2>

            </div>
          <p>{review}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feetback;
