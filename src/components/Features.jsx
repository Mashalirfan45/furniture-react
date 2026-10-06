import { Truck } from "lucide-react";
function Features() {
  return (
    <section className="features">

     <div className="feature">
 <div className="feature-icon">
  <Truck size={28} strokeWidth={2} />
</div>

  <div>
    <h3>Free Delivery</h3>
    <p>For all orders over $50</p>
  </div>
</div>

<div className="feature">
  <div className="feature-icon">◷</div>

  <div>
    <h3>24/7 Support</h3>
    <p>Dedicated support</p>
  </div>
</div>

<div className="feature">
  <div className="feature-icon">✓</div>

  <div>
    <h3>100% Authentic</h3>
    <p>Genuine quality products</p>
  </div>
</div>


      
    </section>
  );
}

export default Features;