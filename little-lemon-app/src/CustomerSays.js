function CustomerSays(){

    return(
        <section id="testimonials">
            <article className="customer cone">
                <div className="customer-img cone-img">
                    <img src={require('./images/customer1.png')} alt="customer1"/>
                </div>
                <div className="customer-review cone-review">
                    <h5 className="name">Andrew</h5>
                    <h5 className="ratings">5 <span className="star">&#9734;</span></h5>
                    <p><q>I love the ambience of this place.</q></p>
    
                </div>
            </article>
            <article className="customer ctwo">
                <div className="customer-img ctwo-img">
                    <img src={require('./images/customer2.png')} alt="customer2"/>
                </div>
                <div className="customer-review ctwo-review">
                    <h5 className="name">Emma</h5>
                    <h5 className="ratings">5 <span className="star">&#9734;</span></h5>
                    <p><q>I am a big fan of their lemon dessert.</q></p>
    
                </div>
            </article>
            <article className="customer cthree">
                <div className="customer-img cthree-img">
                    <img src={require('./images/customer3.png')} alt="customer3"/>
                </div>
                <div className="customer-review cthree-review">
                    <h5 className="name">George</h5>
                    <h5 className="ratings">5 <span className="star">&#9734;</span></h5>
                    <p><q>My kids love this place. We visit this restaurant every Sunday.</q></p>
    
                </div>
            </article>
            <article className="customer cfour">
                <div className="customer-img cfour-img">
                    <img src={require('./images/customer4.png')} alt="customer4"/>
                </div>
                <div className="customer-review cfour-review">
                    <h5 className="name">Violet</h5>
                    <h5 className="ratings">5 <span className="star">&#9734;</span></h5>
                    <p><q>I always order salad from this place after a long day at work.</q></p>
    
                </div>
            </article>

    
        </section>);

}

export default CustomerSays;
