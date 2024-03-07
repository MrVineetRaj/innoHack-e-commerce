import { useEffect, useState } from 'react'
import './App.css'
import Body from './components/Body.jsx'
import Header from './components/Headerr.jsx'

function App() {
  const [products,setProducts] = useState({});
  const [repeatFetch,setRepeatFetch] = useState(0);
  let i = 0;

  // const fetchProducts = async ()=>{
  //   await fetch("http://127.0.0.1:3000/getProduct")
  //   .then(res => {
  //     console.log("Count : ",i++);
  //     const data = res.json();
  //     setProducts(data);
  //   })
  //   .catch((e)=>console.log(e));
  // }


  const fetchProducts = async () => {
    try {
      const res = await fetch("http://127.0.0.1:3000/getProduct");
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data = await res.json();
      setProducts(data);
    } catch (e) {
      console.log(e);
    }
  };
  
  useEffect(()=>{
    fetchProducts();
  },[])

  // console.log(products)
  return (
    <center>
     <Header></Header>
     <Body data={products}/>
     </center>
  )
}

export default App
