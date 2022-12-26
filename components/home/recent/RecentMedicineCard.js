const RecentMedicineCard = ({ medicine }) => {
  const { brand_name, form, packsize, strength, price } = medicine;
  return (
    <div className="card w-11/12 h-auto lg:w-96 xl:w-96 bg-neutral-content shadow-xl">
      <div className="card-body">
        <div className="flex justify-items-center items-center">
          <h2 className="card-title">{brand_name}</h2>
          <h4 className="mx-3 badge badge-lg">{form}</h4>
        </div>
        <div className="grid gap-2 grid-cols-1 md:grid-cols-3 lg:grid-cols-3 justify-items-center">
          {packsize === null ? (
            ""
          ) : (
            <div className="badge badge-secondary py-3">{packsize}</div>
          )}
          <div className="badge py-3">{strength}</div>
          <div className="badge badge-primary py-3">
            {Math.round(price)} BDT/Unit
          </div>
        </div>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Details</button>
        </div>
      </div>
    </div>
  );
};

export default RecentMedicineCard;
