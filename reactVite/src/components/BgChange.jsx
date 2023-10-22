import { useState,useCallback } from "react";

const BgChange = () => {
  const [colour, setColour] = useState(["pink", "purple", "blue","gray","white","black"]);
  const [currentColor, setCurrentColor] = useState("pink");

  const changeBackgroundColor = (newColor) => {
    //console.log(newColor);
    setCurrentColor(newColor);
  };
  //using usecallback
  // const changeBackgroundColor = useCallback((newColor) => {
  //   setCurrentColor(newColor);
  // }, []);

  return (
    <div>
      <div className="fixed w-full h-screen duration-200" style={{ backgroundColor: currentColor }}>
        {colour.map((color, i) => (
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: color }}
            key={i}
            onClick={() => changeBackgroundColor(color)}
          >
            {color}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BgChange;




