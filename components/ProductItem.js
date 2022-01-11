import classes from './ProductItem.module.css';

const ProductItem = ({ brand, product, price, location, description, time, image }) => {
    const date = new Date(time);
    const day = date.getDay();
    const month = date.getMonth();
    const year = date.getFullYear();

    return (
        <div className={classes.product_card}>
            <div className={classes.card_top}>
                <div className={classes.card_img}>
                    <img src={image} alt={product} />
                </div>
                <div className={classes.top_details}>
                    <p className={classes.product_name}>{product}</p>
                    <p className={classes.brand_name}>{brand}</p>
                    <p className={classes.price}><span>$</span> {price}</p>
                </div>
            </div>
            <div className={classes.card_bottom}>
                <div className={classes.loc_date}>
                    <p>{location.city}, {location.state}</p>
                    <p>Date: {day + 1}:{month + 1}:{year}</p>
                </div>
                <div className={classes.description}>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}
export default ProductItem;