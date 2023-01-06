import StoreItems from "../StoreItems/StoreItems"
import Filter from "../Filter/Filter"
import NavBar from "../NavBar/NavBar";
import "./Home.css"

export function Home() {
  return (
    <>
    
      <NavBar/>
      <div className="Home">
      <Filter />
      <StoreItems />
      </div>
    </>
  )
}
export default Home;
