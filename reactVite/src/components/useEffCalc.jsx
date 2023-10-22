import  { useState } from 'react'

const useEffCalc = () => {
    const [count, setCount] = useState(0);
    const Increment = () =>{
        setCount(count+1);
    }
    const Decrement = () =>{
        setCount(count-1);
    }

  return (
    <div>
        {count}
        <button onClick={Increment}>Add +</button>
        <button onClick={Decrement}>Minus -</button>
      
    </div>
  )
}

export default useEffCalc
