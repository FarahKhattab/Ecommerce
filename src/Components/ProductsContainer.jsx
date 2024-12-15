import ProductCard from './ProductCard';
import PropTypes from "prop-types";
import "./ProductsContainer.css";

const ProductsContainer = ({ products, loading, error }) => {

    if (loading) {
        console.log(products.length);
        return <div>Loading...</div>;
    }

    return (
          <div>
            <div className="products-grid">
                {products.map((product, index) => (
                    <ProductCard key={index} product={product} />
                ))}
            </div>
        </div>
    );
};

ProductsContainer.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    additionalImageUrls: PropTypes.arrayOf(PropTypes.string),
    colour: PropTypes.string.isRequired,
    brandName: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    price: PropTypes.shape({
      current: PropTypes.shape({
        value: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
      }).isRequired,
      previous: PropTypes.shape({
        value: PropTypes.number,
        text: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired)
};

export default ProductsContainer;
