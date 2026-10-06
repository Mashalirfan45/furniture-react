import f1 from "../assets/Pics/f1.png";
import f2 from "../assets/Pics/f2.png";
import f3 from "../assets/Pics/f3.png";
import f4 from "../assets/Pics/f4.png";

const instagramImages = [
  f1,
  f2,
  f3,
  f4,
];

function Footer() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", e.target.email.value);
  };

  return (
    <footer className="footer-section">

      {/* Newsletter */}
      <div className="newsletter-section">
        <h2>Join Our Mailing List</h2>

        <p>
          Sign up to receive inspiration, product updates,
          <br />
          and special offers from our team.
        </p>

        <form className="newsletter-form" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="example@gmail.com"
            required
          />

          <button type="submit">Submit</button>
        </form>
      </div>

      {/* Bottom Footer */}
      <div className="footer-bottom">

        {/* Left Content */}
        <div className="footer-info">
          <h3>Beauty Care</h3>

          <p>
            Do eiusmod tempor incididunt ut labore et
            <br />
            dolore magna aliqua. Ut enim ad minim veniam,
            <br />
            quis nostrud exercitation ullamco laboris.
          </p>

          <h3 className="follow-title">Follow Us</h3>
        </div>

        {/* Instagram */}
        <div className="instagram-section">
          <h3>Instagram Shop</h3>

          <div className="instagram-grid">
            {instagramImages.map((image, index) => (
              <div
                className={`instagram-item ${
                  index === 2 ? "active" : ""
                }`}
                key={index}
              >
                <img src={image} alt="Instagram" />
              </div>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;