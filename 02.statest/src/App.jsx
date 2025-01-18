import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [firstName , setFirstName] = useState("Shola")
  // burada firstName baslangic deyerdir. setFirstName ise sonradan verceyemiz deyerdir
 
  const [ad , setAd] = useState("Nigar")

  const [array , setArray] = useState(["Shola", "Lale" , "Sevgi", "Nermin"])

  const [obj , setObj] = useState({name: "Xadica" , password: "1222"})

  const [count, setCount] = useState("0")

  const handleChange = () =>{
    if (ad === "Nigar") {
      setAd("Elsad")
    }else{
      setAd("Nigar")
    }
  }

  const artir = () =>{
    setCount(+count + 1)
  }
const azalt = () =>{
  setCount(+count - 1g)
}
  return (
    <>
      <h2>{firstName}</h2>
      <button onClick={() => {if (firstName === "Shola") {
        setFirstName("Farid")
      }else{
        setFirstName("Shola")
      }
      }}>Change Name</button>

      <hr />

<h2>{ad}</h2>
<button onClick={handleChange}>Adi Deyisdir</button>

<hr />
 {/* burada array uzerinde map ilde donduk */}
{array.map((name , index) => (
  <h2 key={index}>{name}</h2>
 
  
) )}

<hr />

<h2>{obj.name} {obj.password}</h2>

<hr />
<h2>{count}</h2>
<button onClick={artir}>Artir</button>
<button onClick={azalt}>Azalt</button>

    </>
  )
}

export default App
