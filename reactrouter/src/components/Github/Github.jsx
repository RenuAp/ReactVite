import { useEffect, useState } from "react"
import { useLoaderData } from 'react-router-dom'


const Github = () => {
    const data = useLoaderData()
        // const [data, setData] = useState([])
    // useEffect (()=>{
    // //   fetch("https://api.github.com/users/hiteshchoudhary")  
    // //   .then (respnse=>respnse.json())
    // //   .then(data=>{
    // //     console.log(data);
    // //   })
    // fetchdata();
    // },[])
    // const fetchdata = async () =>{
    //     try{
    //         const response = await fetch("https://api.github.com/users/hiteshchoudhary");
    //         const data =await response.json();
    //         setData(data);
    //     }catch(error){
    //         console.log("not data is here")
    //     }
    // }
      return (
    <div className='text-center m-4 bg-gray-600 text-white p-6 text-3xl'>
      Github Followers: {data.followers}
      <img src={data.avatar_url} alt="git_pic" width={300}/>
    </div>
  )
}

export default Github

export const GithubLoader = async ()=>{
    const response = await fetch ("https://api.github.com/users/hiteshchoudhary");
    return response.json();
}
