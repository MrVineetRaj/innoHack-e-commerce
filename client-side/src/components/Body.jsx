import { useState } from "react";
import SideBar from "./SideBar";
import style from "./component-css/Body.module.css"
import ContentCard from "./ContentCardd";
import AuthenticNess from "./AuthenticNess";
const Body = ({ data }) => {

  console.log(data.length)
  const [catagory, setCatagory] = useState("smartphones")
  const [itemForAuthentication, setItemForAuthentication] = useState('')

  const handelSetCatagory = (catagory) => {
    setCatagory(catagory);
    setItemForAuthentication('')
  }
  if (data.length === 0) {
    return (
      <>
        <h1>Loading</h1>
      </>
    )
  }

  console.log(itemForAuthentication);
  return (
    <>
      <div style={{ width: "85%" }} className={`${style.body}`}>
        <div className={`${style.sideBar}`}>
          <SideBar handelSetCatagory={handelSetCatagory} />
        </div>

        <div className={`${style.content}`}>
          <h1>{itemForAuthentication ? itemForAuthentication.title : catagory}</h1>

          <div className="container text-center">
            {
              itemForAuthentication && <AuthenticNess item= {itemForAuthentication} />
            }
            <div className="row">
              {
                !itemForAuthentication && data.length > 0 && data.map(item => item.category === catagory && <>
                  <div className="col">
                    <ContentCard item={item}
                      setItemForAuthentication={setItemForAuthentication}
                      image={item.thumbnail} title={item.title} description={item.description} />
                  </div>
                </>
                )
              }

            </div>
          </div>

        </div>

      </div >

    </>
  )
}

export default Body;