import classes from './Filter.module.css';
import Select from 'react-select'
import { useState } from 'react';



export default function Filter({ products, states, cities, allProducts }) {
    const [productNames, setProductNames] = useState(products);
    const [IndianStates, setIndianStates] = useState([]);
    const [city, setCity] = useState([]);
    const [allProductsArray, setAllProductsArray] = useState(allProducts);

    function productSelectHandler(e) {
        const states = [];
        const sortedProducts = [];
        allProducts.forEach((item) => {
            if (item.product_name === e.target.value.trim()) {
                if (!states.includes(item.address.state)) {
                    states.push(item.address.state)
                }
            }
        })
        setIndianStates(states);


        allProducts.forEach((item) => {
            if (item.product_name === e.target.value.trim()) {
                sortedProducts.push(item)
            }
        })
        setAllProductsArray(sortedProducts);
    }

    function stateSelectHandler(e) {
        const citiesArray = [];
        allProductsArray.forEach((item) => {
            if (item.address.state === e.target.value.trim()) {
                if (!citiesArray.includes(item.address.city)) {
                    citiesArray.push(item.address.city)
                }
            }
        })
        setCity(citiesArray);
    }

    return (
        <div className={classes.filters}>
            <h2>Filters</h2>
            <div className={classes.dropDown}>
                <div className={classes.selects}>
                    <select name="product" placeholder="product" required onChange={productSelectHandler}>
                        <option value="" disabled selected >Products</option>
                        {products?.map((item, index) => { return <option key={index} value={item}>{item}</option> })}
                    </select>
                </div>
                <div className={classes.selects}>
                    <select name="states" placeholder="State" required onChange={stateSelectHandler}>
                        <option value="" disabled selected>State</option>
                        {IndianStates.map((item, index) => <option key={index} value={item} >{item}</option>)}
                        {/* {states.map((item, index) => <option key={index} value={item} >{item}</option>)} */}
                    </select>
                </div>
                <div className={classes.selects}>
                    <select name="city" placeholder="city" required >
                        <option value="" disabled selected>City</option>
                        {city.map((item, index) => <option key={index} value={item}>{item}</option>)}
                        {/* {cities.map((item, index) => <option key={index} value={item}>{item}</option>)} */}
                    </select>
                </div>
            </div>
        </div>
    )
}