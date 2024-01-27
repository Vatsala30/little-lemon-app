import CallToAction from "./CallToAction";
import Specials from "./Specials";
import CustomerSays from "./CustomerSays";
import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
function HomePage(){
    return <div className="container">
        <Header/>
        <Nav/>
        <main>
        <CallToAction/>
        <Specials/>
        <CustomerSays/>
        </main>
        <Footer/>
    </div>
}

export default HomePage;