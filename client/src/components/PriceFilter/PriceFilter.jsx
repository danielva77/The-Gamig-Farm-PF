// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { setFilterPrice, setPriceRange } from '../../redux/actions';

// const PriceFilter = () => {
//     const dispatch = useDispatch();
//     const [minPrice, setMinPrice] = useState('');
//     const [maxPrice, setMaxPrice] = useState('');

//     const handleSubmit = e => {
//         e.preventDefault();
//         dispatch(setFilterPrice())
//         dispatch(setPriceRange({ min: minPrice, max: maxPrice }));
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <label htmlFor="min-price">Min Price:</label>
//             <input
//                 type="number"
//                 id="min-price"
//                 value={minPrice}
//                 onChange={e => setMinPrice(e.target.value)}
//             />
//             <label htmlFor="max-price">Max Price:</label>
//             <input
//                 type="number"
//                 id="max-price"
//                 value={maxPrice}
//                 onChange={e => setMaxPrice(e.target.value)}
//             />
//             <button type="submit">Filter</button>
//         </form>
//     );
// };

// export default PriceFilter;