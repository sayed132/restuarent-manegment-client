
import { IoIosSearch } from "react-icons/io";
import Cart from "./Cart/Cart";
import { Category } from "../../../Data/FoodCategory";

const Home = () => {
  //   const manager = [
  //     { id: "01", name: "Showkot Hossain", mId: "sh1" },
  //     { id: "02", name: "Nahid Hossain", mId: "nh2" },
  //     { id: "03", name: "Shakil Hossain", mId: "skh3" },
  //     { id: "04", name: "Sayed Hossain", mId: "syh4" },
  //   ];
  // const product = [
  //   { id: "01", name: "Rice" },
  //   { id: "02", name: "Fish" },
  //   { id: "03", name: "Beef" },
  //   { id: "04", name: "Chicken" },
  //   { id: "05", name: "Ruti" },
  //   { id: "06", name: "Breakfast" },
  //   { id: "07", name: "Sweet" },
  // ];
  return (
    <div className="grid grid-cols-12 border gap-4">
      {/* <div className="col-span-2 border h-[100vh]">
        <div className="shadow-lg rounded-md bg-base-100 h-[60vh] overflow-y-auto">
          <h1>this is item</h1>
          <h1>this is item</h1>
          <h1>this is item</h1>
          <h1>this is item</h1>
          <h1>this is item</h1>
          <h1>this is item</h1>
          <h1>this is item</h1>
          <h1>this is item</h1>
          <h1>this is item</h1>
          <h1>this is item</h1>
          <h1>this is item</h1>
          <h1>this is item</h1>
          <h1>this is item</h1>
          <h1>this is item</h1>
          <h1>this is item</h1>
        </div>
        <div className="shadow-lg rounded-md bg-base-100 h-[15vh] overflow-y-auto">
          <h1>Discount tk</h1>
          <h1>subtotal tk</h1>
        </div>
        <div className="shadow-lg rounded-md bg-base-100 h-[15vh] overflow-y-auto">
          <h1> Hand Cash</h1>
          <h1>Bkash</h1>
          <h1>Foodpanda tk</h1>
        </div>
        <button>total</button>
      </div> */}
      <div className="col-span-4 border">
        <Cart />
      </div>

      <div className="col-span-8 mt-8">
        <div className="relative w-full rounded-lg border my-5 shadow">
          <input
            className="peer rounded-lg border w-full border-[#1B8EF8] bg-transparent px-4 py-2 text-[#1B8EF8] focus:outline-none"
            type="text"
            placeholder=""
            id="navigate_ui_input_33"
          />
          <label
            className="absolute -top-2 left-[10px] rounded-md px-2 text-xs text-slate-400 duration-300 peer-placeholder-shown:left-[14px] peer-placeholder-shown:top-3  peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:left-[10px] peer-focus:bg-sky-300 peer-focus:text-xs peer-focus:text-sky-800 dark:peer-focus:text-sky-400 dark:peer-focus:bg-[#0F172A]"
            htmlFor="navigate_ui_input_33"
          >
            <div className="flex justify-between items-center">
              <IoIosSearch /> <p className="ml-2">Search Product</p>
            </div>
          </label>
        </div>
        <div className="grid grid-cols-12 gap-3">
    {Category.map((food) => (
        // Remove console.log as it is unnecessary
        <details key={food.id} className="dropdown   col-span-3">
            <summary className=" btn w-full">{food.title}</summary>
            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                {Object.values(food.items).map((item) => (
                    <li key={item.id}>
                        <a>
                            {/* Display the name and price of each item */}
                            {item.name} - ${item.price}
                        </a>
                    </li>
                ))}
            </ul>
        </details>
    ))}
</div>

        
      </div>
    </div>
  );
};

export default Home;
