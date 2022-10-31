import {  Route,Link,Routes } from "react-router-dom";
import Users from "../Users/Users";

function Bomb() {
  throw new Error("💥 CABOOM 💥");
}

const Home = ({explode, setExplode}) => {
  return <div className="home">
  <p>Welcome to our team</p>
 <Link to='/users' className="nested-link">Staffs</Link>
 <Routes>
 <Route path="/users" element={<Users/>}></Route>
 </Routes>
  <div>
  {explode ? <Bomb /> : null}
  <button className='error-btn' onClick={()=>setExplode(state=>!state)}>Click Explode</button>
  </div>
  </div>;
};
export default Home;
