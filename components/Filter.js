import classes from './Filter.module.css';
import Select from 'react-select'



export default function Filter({ products, states, cities }) {
    console.log(products);
    return (
        <div className={classes.filters}>
            <h2>Filters</h2>
            <div className={classes.dropDown}>
                <div className={classes.selects}>
                    <select name="product" placeholder="product" required >
                        <option value="" disabled selected>Products</option>
                        {products?.map((item, index) => { return <option key={index} value={item.product_name}>{item.product_name}</option> })}
                    </select>
                </div>
                <div className={classes.selects}>
                    <select name="states" placeholder="State" required >
                        <option value="" disabled selected>State</option>
                        {states.map((item, index) => <option key={index} value={item} >{item}</option>)}
                    </select>
                </div>
                <div className={classes.selects}>
                    <select name="city" placeholder="city" required >
                        <option value="" disabled selected>City</option>
                        {cities.map((item, index) => <option key={index} value={item}>{item}</option>)}
                    </select>
                </div>
            </div>
        </div>
    )
}