import ReserveTable from './ReserveTable';

function CallToAction(){
    return (
        <section id="hero">
            <article id="about">
                <h1>Little Lemon</h1>
                <h3>Chicago</h3>
                <p>We are family owned Mediterranean restaurant,<br></br>
                    focused on traditional recipes served with a modern twist</p>
            </article>
            <div id="restaurant-food">
            <img src={require('./images/restauranfood.jpg')} alt="restaurant-food" />
            </div>
            <div id="reserve-button">
             <ReserveTable/>
            </div>
        </section>
    );
}

export default CallToAction;