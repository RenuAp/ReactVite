import { useState } from "react";

const Trial = () => {
  const [count, setCount] = useState(0);

  const handleSubtract = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      console.log("data must greater than 0");
    }
  };

  return (
    <>
      <div className="parent">
        <div className="child">
          <h1>This is the 1st page</h1>
          <p>{count}</p>
          <br/>
          <button
            onClick={() => {
              setCount(count + 1);
            }}
          >
            Add
          </button>
          <button onClick={handleSubtract}>Minus</button>
        </div>
      </div>
    </>
  );
};

export default Trial;
