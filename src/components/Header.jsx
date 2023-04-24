
import {Image} from 'react-bootstrap'
function Header(){
    return(
<header style={{background: "linear-gradient(45deg, white, blue)", height: "40vh", color: "white"}}>
    <Image src='image.jpg'   style={{ width: '150px', height: '150px', cursor: 'pointer',marginTop:'8vh'}} roundedCircle/>
    <h2>Mohamed Adnane Jammoua</h2>
    <h3>Computer Science Engineer</h3>
  </header>
  )
}
export default Header;