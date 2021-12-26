import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: 1,
    price: 6,
    title: "Book",
    description: "This is a first product - amazing!"
  },
  {
    id: 2,
    price: 1,
    title: "Pen",
    description: "This is an another product - amazing!"
  },
  {
    id: 3,
    price: 2,
    title: "Pencil",
    description: "This is the third product - amazing!"
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
