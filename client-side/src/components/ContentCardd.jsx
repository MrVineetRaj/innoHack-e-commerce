import style from "./component-css/ContentCardd.module.css"

const ContentCard = ({item , setItemForAuthentication ,image , title , description}) => {
  return (
    <>
      <div className={`${style.card} card`} style={{width: "18rem"}}>
        <img src={`${image}`} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <button className="btn btn-primary" onClick={()=>{
              setItemForAuthentication(item)
            }}>Check Authenticity</button>
          </div>
      </div>
    </>
  )
}
export default ContentCard;