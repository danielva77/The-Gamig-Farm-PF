import React from "react";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../../redux/actions";


const Details = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const productInfo = useSelector((state) => state.productDetail);
  

  const [loading, setloading] = useState(true);

  useEffect(() => {
    dispatch(getDetail(params.id)).then(() => setloading(false));
  }, [params.id]);
  console.log(productInfo);
  return (
    <div className="All-Container">
      <Link to='/home'><button className="anashe">Regresar</button></Link>
      {loading ? (
        <span>Loading...</span>
      ) : (
        <div className="Info-Container">
          <img src={productInfo.img} alt="Producto" width="476px" height="400px"/>
          <h2 className="name">{productInfo.tittle}</h2>                 
          <h3 className="price">Precio: {productInfo.price}$</h3>               
          <h4 className="description">{productInfo.description}</h4>               
          <h4 className="category">{productInfo.category}</h4>  
          <h5 className="rating">{productInfo[0].rating}</h5>
        </div>
        
      )}
    </div>
  );
};

export default Details;