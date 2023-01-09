import React from "react";
import {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import NavBar from "../NavBar/NavBar";
import StoreItems from "../StoreItems/StoreItems"
import Filter from "../Filter/Filter"
import Paginado from "../Paginado/Paginado";
import { getAllProd } from "../../redux/actions";
import "./Home.css"
// import "../Footer/Footer.css"
import Footer from "../Footer/Footer"


export function Home() {
  const dispatch = useDispatch();
  const allVideogames = useSelector(state => state.items);
//Paginado
  const [currentPage, setCurrentPage] = useState(1);  //pag actual
  const [videogamesPerPage, setVideogamesPerPage] = useState(5);
  const [orden, setOrden] = useState("");
  const indexOfLastVideogame = currentPage * videogamesPerPage;
  const indexOfFirstVideogame = indexOfLastVideogame - videogamesPerPage;
  const currentVideogames = allVideogames.slice(indexOfFirstVideogame , indexOfLastVideogame);

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  useEffect(() =>{
    dispatch(getAllProd());
  }, [dispatch]);


  return (
    <>
    
      {/* <NavBar/> */}
      <div className="Home">
      <Filter />
      </div>
      <div>
        <Paginado
                videogamesPerPage = {videogamesPerPage}
                allVideogames = {allVideogames.length}
                paginado = {paginado}
                />
      </div>
      <div><p>Page -{currentPage}-</p></div>

      
      <StoreItems
      currentVideogames = {currentVideogames} />
      <Footer className='amdr'/> 
    </>

  )
}
export default Home;