import { useState } from 'react';
import style from './component-css/Headerr.module.css'
import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
const Header = () => {

  const [displayMenu,setDisplayMenue] = useState(false);

  const handleDisplay = ()=>{
    setDisplayMenue(!displayMenu)
  }

  return (
    <center style={{position:"relative"}}>
      <div className={` ${style.header} container  text-center row` }>
          <div className={`col-5 ${style.left}`}>
            <h4>eCOMMERCE</h4>
          </div>
          <div className={`col-7 ${style.right}`}>
            <div className={`${style.searchDiv}`}>
              <input type="text" placeholder='Search Items'/>
              <FaSearch/>
            </div>

            {displayMenu && <GiHamburgerMenu onClick ={handleDisplay}/>}
            {!displayMenu && <ImCross  onClick ={handleDisplay}/>}
        </div>
      </div>
    </center>
  )
}

export default Header;