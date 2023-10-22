import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(1);
  const increment = () => {
    setCount(count=>count+1);
    setCount(count=>count+1);
    setCount(count=>count+1);
    setCount(count=>count+1);
    setCount(count=>count+1);
    // setCount((count) => count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <div className="count_Container">
        <div className="content-box">
          <div className="para">
            <p>{count}</p>
            </div>
            <br/>
          
        </div>
        <div className="but">
          <button
            className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 ml-10 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 "
            onClick={increment}
          >
            Increment
          </button>
          <button
            className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            onClick={decrement}
          >
            Decrement
          </button>
          </div>
      </div>
    </div>
  );
}

export default Counter;
