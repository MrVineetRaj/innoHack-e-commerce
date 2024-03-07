import SideBarCard from "./SideBarCard";

const SideBar = ({handelSetCatagory})=>{

  const catagories = ["smartphones","laptops","fragrances","skincare"]
  return (
    <>
      {catagories.map((catagory,index) =>{
        return (
          <>
          <h5></h5>
          <SideBarCard items = {catagory} handelSetCatagory={handelSetCatagory}/>
          </>
        )
      })}
    </>
  )
}

export default SideBar;