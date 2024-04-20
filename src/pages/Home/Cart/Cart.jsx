const Cart = () => {
  const manager = [
    { id: "01", name: "Showkot Hossain", mId: "sh1" },
    { id: "02", name: "Nahid Hossain", mId: "nh2" },
    { id: "03", name: "Shakil Hossain", mId: "skh3" },
    { id: "04", name: "Sayed Hossain", mId: "syh4" },
  ];
  return (
    <div className="flex flex-col max-w-md p-6 space-y-4 divide-y sm:w-96 sm:p-10 dark:divide-gray-300 dark:bg-gray-50 dark:text-gray-800 ">
        <h2 className="text-2xl font-semibold">Order items</h2>
        <ul className="flex flex-col pt-4 space-y-2 h-[40vh] overflow-y-auto pr-3">
          <li className="flex items-start justify-between">
            <h3>
              Hard taco, chicken
              <span className="text-sm dark:text-violet-600">x3</span>
            </h3>
            <div className="text-right">
              <span className="block">$7.50</span>
              <span className="text-sm dark:text-gray-600">à $2.50</span>
            </div>
          </li>
          <li className="flex items-start justify-between">
            <h3>
              Hard taco, chicken
              <span className="text-sm dark:text-violet-600">x3</span>
            </h3>
            <div className="text-right">
              <span className="block">$7.50</span>
              <span className="text-sm dark:text-gray-600">à $2.50</span>
            </div>
          </li>
          <li className="flex items-start justify-between">
            <h3>
              Hard taco, chicken
              <span className="text-sm dark:text-violet-600">x3</span>
            </h3>
            <div className="text-right">
              <span className="block">$7.50</span>
              <span className="text-sm dark:text-gray-600">à $2.50</span>
            </div>
          </li>
          <li className="flex items-start justify-between">
            <h3>
              Hard taco, beef
              <span className="text-sm dark:text-violet-600">x3</span>
            </h3>
            <div className="text-right">
              <span className="block">$8.25</span>
              <span className="text-sm dark:text-gray-600">à $2.75</span>
            </div>
          </li>
          <li className="flex items-start justify-between">
            <h3>
              Curly fries
              <span className="text-sm dark:text-violet-600">x1</span>
            </h3>
            <div className="text-right">
              <span className="block">$1.75</span>
              <span className="text-sm dark:text-gray-600">à $1.75</span>
            </div>
          </li>
          <li className="flex items-start justify-between">
            <h3>
              Large soda
              <span className="text-sm dark:text-violet-600">x2</span>
            </h3>
            <div className="text-right">
              <span className="block">$4.00</span>
              <span className="text-sm dark:text-gray-600">à $2.00</span>
            </div>
          </li>
        </ul>
        <div className="pt-4 space-y-2">
          <div>
            <div className="flex justify-between">
              <span>Discount</span>
              <div className="relative  rounded-lg">
                <input
                  className="peer rounded-lg border border-[#1B8EF8] bg-transparent px-0 py-2 text-[#1B8EF8] focus:outline-none"
                  type="text"
                  placeholder=""
                  id="navigate_ui_input_33"
                />
                <label
                  className="absolute -top-2 left-[10px] rounded-md px-2 text-xs text-slate-400 duration-300 peer-placeholder-shown:left-[14px] peer-placeholder-shown:top-3  peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:left-[10px] peer-focus:bg-sky-300 peer-focus:text-xs peer-focus:text-sky-800 dark:peer-focus:text-sky-400 dark:peer-focus:bg-[#0F172A]"
                  htmlFor="navigate_ui_input_33"
                >
                  Discount Price
                </label>
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>$21.50</span>
          </div>
        </div>
        <div className="pt-4 space-y-2">
          <select className="select select-info w-full max-w-xs">
            <option disabled selected>
              Select Cash Info
            </option>
            <option>Bkash/Nagad/Card</option>
            <option>Foodpanda</option>
            <option>Hand Cash</option>
          </select>
          <div className="space-y-6">
            <select className="select select-info w-full max-w-xs">
              <option disabled selected>
                Select Manager
              </option>
              {manager.map((mng) => (
                <option key={mng.id}>{mng.name}</option>
              ))}
            </select>
            <button
              type="button"
              className="w-full py-2 font-semibold border rounded dark:bg-violet-600 dark:text-gray-50 dark:border-violet-600"
            >
              Submit 200 Amount
            </button>
          </div>
        </div>
      </div>
  );
};

export default Cart;
