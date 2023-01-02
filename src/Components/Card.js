const Card = ({ menuData }) => {
  return (
    <>
      <div className=" flex flex-wrap bg-neutral-300 justify-evenly items-center  py-6 min-w-full min-h-screen ">
        {menuData.map((curElem) => {
          return (
            <div key={curElem.id} className="flex my-6 justify-center">
              <div className="rounded-lg shadow-lg bg-white max-w-sm">
                <a href="#!">
                  <img className="rounded-t-lg " src={curElem.image} alt="" />
                </a>
                <div className="p-6 ">
                  <div className="flex justify-between mx-2">
                    <h5 className="text-gray-900 text-xl font-medium mb-2">
                      {curElem.name}
                    </h5>
                    <h3 className="text-gray-900 text-xl font-medium mb-2">
                      {curElem.price}
                    </h3>
                  </div>

                  <p className="text-gray-700 text-base mb-4">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <button
                    type="button"
                    className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Order
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Card;
