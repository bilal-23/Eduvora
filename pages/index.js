
import Filter from '../components/Filter';
import ProductRow from '../components/ProductRow';
import classes from '../styles/index.module.css';

export default function Home({ products, allProducts, states, cities, allProductsData }) {


  return (
    <main className={classes.main}>
      <h1 className={classes.heading_mob}>Edvora</h1>
      <p className={classes.subheading_mob}>Products</p>
      <Filter products={allProducts} states={states} cities={cities} allProducts={allProductsData} />
      <div className={classes.dashboard}>
        <h1 className={classes.heading}>Edvora</h1>
        <p className={classes.subheading}>Products</p>
        {products?.map(((product, index) => {
          return (
            <ProductRow product={product} key={index} />
          )
        }))}
      </div>
    </main>
  )
}

export async function getServerSideProps() {
  const totalBrands = [];
  const totalProducts = [];
  const states = [];
  const cities = [];
  const allProducts = [];
  const res = await fetch(`https://assessment-edvora.herokuapp.com`);
  const data = await res.json();

  //Extracting Brand Names
  data.forEach((item => {
    if (!totalBrands.includes(item.brand_name)) {
      totalBrands.push(item.brand_name);
    }
  }));

  //Creating BrandNames and its products arrays
  totalBrands.forEach((item => {
    totalProducts.push({ brand: item, products: [] })
  }))

  //Grouping products into their brand object
  data.forEach((item => {
    const index = totalProducts.findIndex((d => d.brand === item.brand_name))
    totalProducts[index].products.push(item);
  }))

  //Extracting States
  data.forEach((item => {
    if (!states.includes(item.address.state.toString())) {
      states.push(item.address.state);
    }
  }))
  //Extracting Cities
  data.forEach((item => {
    if (!cities.includes(item.address.city.toString())) {
      cities.push(item.address.city);
    }
  }))

  //Extracting all products but removing duplicate one 
  data.forEach((item => {
    if (!allProducts.includes(item.product_name)) {
      allProducts.push(item.product_name);
    }
  }))

  return {
    props: {
      products: totalProducts,
      allProducts: allProducts,
      allProductsData: data,
      states: states,
      cities: cities,
    }
  }
}