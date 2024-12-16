import ProductCard from './ProductCard';
import PropTypes from "prop-types";
import "./ProductsContainer.css";

const ProductsContainer = ({ products, loading, error, onAddToCart}) => {

    if (loading) {
        return <div>Loading...</div>;
  }
  if (error) {
        return <div>Error...</div>;
    }

    return (
          <div>
            <div className="products-grid">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
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
