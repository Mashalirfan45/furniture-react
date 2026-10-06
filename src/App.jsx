import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Inspiration from "./components/Inspiration";
import FeaturedProducts from "./components/Featureproducts";
import "./App.css";
import Footer from "./components/Footer";
import inspiration1 from "./assets/Pics/inspiration_01.png";
import inspiration2 from "./assets/Pics/inspiration_02.png";
import inspiration3 from "./assets/Pics/inspiration_03.png";
import pic1 from "./assets/Pics/pic1.png";
import pic2 from "./assets/Pics/pic2.png";
import pic3 from "./assets/Pics/pic3.png";
import pic4 from "./assets/Pics/pic4.png";
import pic5 from "./assets/Pics/pic5.png";
import pic6 from "./assets/Pics/pic6.png";

function App() {
  return (
    <>
      <Navbar />

      <Hero />

      <Features />

      {/* First Inspiration - images only */}
     <Inspiration
  title="Inspiration Collection"
  description="Discover beautiful furniture ideas and create a space you love."
  cards={[
    {
      image: inspiration1,
    },
    {
      image: inspiration2,
    },
    {
      image: inspiration3,
    },
  ]}
/>

      <FeaturedProducts />

      {/* Second Inspiration - images + text */}
      <Inspiration
        title="Browse the Range"
        description="Discover beautiful furniture ideas and create a space you love."
       cards={[
  {
    image: pic1,
    title: "Dining",
  },
  {
    image: pic2,
    title: "Living",
  },
  {
    image: pic3,
    title: "Bedroom",
  },
]}
      />

      {/* Third Inspiration - another reusable section */}
   <Inspiration
  className="how-it-works"
  title="How Its Works"
  description="Discover our latest furniture designs for your beautiful home."
  cards={[
    {
      image: pic6,
      title: "Purchase Securely",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      image: pic5,
      title: "Ships From Warehouse",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    
    {
      image: pic4,
      title: "Style Your Room",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ]}
       
      />
       <Footer />
    </>
  );
}

export default App;