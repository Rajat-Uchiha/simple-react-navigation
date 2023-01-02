import "./App.css";
import { useState } from "react";
import Card from "./Components/Card";
import Menu from "./MenuApi"; //Importing menuApi
const App = () => {
  const [menuData, setMenuData] = useState(Menu);

  //*GETBREAKFASTITEMS FUNCTION
  const getBreakFastItems = (category) => {
    const updatedList = Menu.filter((currElem) => {
      return currElem.category === category;
    });
    setMenuData(updatedList);
  };

  //*getLunchItems
  const getLunchItems = (category) => {
    const updatedList = Menu.filter((currElem) => {
      return currElem.category === category;
    });
    setMenuData(updatedList);
  };
  //*getEveningItems
  const getEveningItems = (category) => {
    const updatedList = Menu.filter((currElem) => {
      return currElem.category === category;
    });
    setMenuData(updatedList);
  };
  //*getDinnerItems
  const getDinnerItems = (category) => {
    const updatedList = Menu.filter((currElem) => {
      return currElem.category === category;
    });
    setMenuData(updatedList);
  };

  //*getAllItems
  const getAllItems = () => {
    setMenuData(Menu);
  };
  return (
    <>
      <nav className="relative w-full flex  flex-wrap items-center justify-between py-6 bg-gray-100 text-gray-500 hover:text-gray-700 focus:text-gray-700 shadow-lg">
        <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
          <div className="container-fluid px-6">
            <button
              className="text-xl px-6 text-black hover:text-green-800 font-semibold hover:underline"
              onClick={() => {
                //It is recommended to use fat arrow function to avoid the repeatition of the function.
                getBreakFastItems("breakfast");
              }}
            >
              Breakfast
            </button>
            <button
              className="text-xl px-6 text-black hover:text-green-800 font-semibold hover:underline"
              onClick={() => {
                getLunchItems("lunch");
              }}
            >
              Lunch
            </button>
            <button
              className="text-xl px-6 text-black hover:text-green-800 font-semibold hover:underline"
              onClick={() => getEveningItems("evening")}
            >
              Evening
            </button>
            <button
              className="text-xl px-6 text-black hover:text-green-800 font-semibold hover:underline"
              onClick={() => getDinnerItems("dinner")}
            >
              Dinner
            </button>
            <button
              className="text-xl px-6 text-black hover:text-green-800 font-semibold hover:underline"
              onClick={() => getAllItems()}
            >
              All
            </button>
          </div>
        </div>
      </nav>

      <Card menuData={menuData} />
    </>
  );
};

export default App;
