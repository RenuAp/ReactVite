import Card from "./components/Card"

const TailwindProps = () => {
  const laptops = {
    name1:"macbook",
    name2:"dell",
    name3:"HP"

  }
 const Mobile={
  name1:"Samsung",
  name2:"Redmi",
  name3:"Apple"
 }

 
  return (
    <>
    <span className="bg-purple-400 text-sm text-white p-5 rounded-xl mb-10">Tailwind Propsss</span>
    <Card device="Macbook" values={laptops}/>
    <Card  values={Mobile}/>

    
    </>
  )
}

export default TailwindProps
