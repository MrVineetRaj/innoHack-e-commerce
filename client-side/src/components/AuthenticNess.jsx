import style from "./component-css/AuthenticNess.module.css"
import { MdVerified } from "react-icons/md";
import { ImCross } from "react-icons/im";
import { useState } from "react";

const AuthenticNess = ({ item }) => {
  let score= 0;

  const { isGovtVerified, title, description, thumbnail, brand, category } = item;
  if (isGovtVerified === true) {
    score += 4;
    console.log("v__",score);
  }
  if (description) {
    score += 1;
    console.log("d__",score);
  }
  if (thumbnail) {
    score += 1;
    console.log("t__",score);
  }
  if (brand) {
    score += 1;
    console.log("b__",score);
  }

  score = (score / 7) * 100;
  return (
    <>
      <div className={`${style.container}  container text-center`} >
        <div className="row" style={{ margin: "0 0 50px 0" }}>
          <div className={`${style.div1} col`}>
            <img src={`${item.thumbnail}`} className="card-img-top" alt="..." />
            <div>
              <h5>{item.description}</h5>
              {score >= 80 && <div className="alert alert-success" role="alert">
                This product is kind of authentic ! as it's score is {score} !
              </div>}
              {score >= 60 && score <80 && <div className="alert alert-warning" role="alert">
                This product is kind of authentic ! as it's score is {score} !
              </div>}
              {score <60 && <div className="alert alert-danger" role="alert">
                This product is kind of authentic ! as it's score is {score} !
              </div>}
            </div>
          </div>
        </div>
        <div className={`${style.authenticityChecks}`}>
          <h2>Authenticity Checks</h2>
          <h4 >Govt. Certified : {isGovtVerified ? <MdVerified /> : <ImCross />}</h4>
          <h4>Is Complete Info Given ? :</h4>
          <p>{`product title : ${title ? title : "NaN"}`},</p>
          <p>{`product description : ${description ? description : "NaN"}`},</p>
          <p>{`product brand : ${brand ? brand : "NaN"}`},</p>
          <p>{`product category : ${category ? category : "NaN"}`},</p>
          <p>{`product thumbnail : ${thumbnail ? thumbnail : "NaN"}`},</p>
        </div>
      </div>


    </>
  )
}

export default AuthenticNess