import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";

function BookingPage(){
    return <div className="container">
        <Header/>
        <Nav/>
        <main>
         Reserve tables here
        </main>
        <Footer/>
    </div>
}

export default BookingPage;