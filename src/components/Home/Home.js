import NavBar from "../NavBar/NavBar";
import Banner from "../Banner/Banner";
import Products from "../Products/Products";
const Home = () => {
    return (
        <>
        <NavBar/> 
        <Banner/>
        <div className="product-card-container">
        <Products/>
        </div>
        </>
    );
};

export default Home;