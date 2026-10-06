import Featureproduct from "../assets/Pics/Featureproduct.png";
function FeaturedProducts() {
  return (
    <section className="featured-products">

      <div className="products-heading">
        <h2>Beautify Your Space</h2>

        <p>
          Make your spaces beautiful with our help. We provide services
          to make your spaces beautiful and elegant.
        </p>

        <button>View Product</button>
      </div>

      <div className="products-grid">

        <div className="product-card">
          <img src={Featureproduct} alt="Modern Sofa" />
        </div>

      </div>

    </section>
  );
}

export default FeaturedProducts;