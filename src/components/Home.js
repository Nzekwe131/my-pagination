import './Header.css'
import { Outlet,Link } from "react-router-dom";

function Bomb() {
  throw new Error("💥 CABOOM 💥");
}

const Home = ({explode, setExplode}) => {
  return <div className="home">Welcome to the home page
  <div>
  {explode ? <Bomb /> : null}
  <button onClick={()=>setExplode(state=>!state)}>Click Explode</button>
  </div>
  <Outlet></Outlet>
  </div>;
};
export default Home;
