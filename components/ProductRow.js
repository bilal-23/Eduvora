import { useRef } from 'react';
import ProductItem from './ProductItem';
import classes from './ProductRow.module.css';

export default function ProductRow({ product }) {
    const rowRef = useRef();
    const scrollLeftHandler = () => {
        rowRef.current.scrollLeft -= 450;
    }
    const scrollRightHandler = () => {
        rowRef.current.scrollLeft += 450;

    }

    return (
        <div className={classes.products_wrapper} >
            <h2>{product.brand}</h2>
            <div className={classes.product_row}>
                <div className={classes.product_row_wrapper} ref={rowRef}>
                    <div className={`${classes.scroll__button} ${classes.left__button}`} onClick={scrollLeftHandler}><img src="/leftarrow.svg" alt="Scroll left" /></div>
                    <div className={`${classes.scroll__button} ${classes.right__button}`} onClick={scrollRightHandler}><img src="/rightarrow.svg" alt="Scroll right" /></div>
                    {product?.products?.map((item, index) => {
                        return (
                            <ProductItem key={index} brand={item.brand_name} product={item.product_name} time={item.time} price={item.price} description={item.discription} location={item.address} image={item.image} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}