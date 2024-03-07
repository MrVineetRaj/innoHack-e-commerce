import style from './component-css/SideBarCard.module.css'

const SideBarCard = ({ items , handelSetCatagory }) => {
  return (
    <>
      <div className={`${style.sideBarCard}`} onClick={()=>{handelSetCatagory(items)}}>
        <img src={`/src/assets/${items}.jpg`}  alt="Loading..." />
        <h5>{items}</h5>
      </div>
    </>
  )
}

export default SideBarCard;