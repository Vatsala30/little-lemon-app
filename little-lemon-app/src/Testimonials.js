function Testimonials(){

    return(
        <section id="testimonials">
            <article class="customer cone">
                <div class="customer-img cone-img">
                    <img src={require('./images/customer1.png')} alt="customer1"/>
                </div>
                <div class="customer-review cone-review">
                    <h5 class="name">Andrew</h5>
                    <h5 class="ratings">5 <span class="star">&#9734;</span></h5>
                    <p><q>I love the ambience of this place.</q></p>
    
                </div>
            </article>
            <article class="customer ctwo">
                <div class="customer-img ctwo-img">
                    <img src={require('./images/customer2.png')} alt="customer2"/>
                </div>
                <div class="customer-review ctwo-review">
                    <h5 class="name">Emma</h5>
                    <h5 class="ratings">5 <span class="star">&#9734;</span></h5>
                    <p><q>I am a big fan of their lemon dessert.</q></p>
    
                </div>
            </article>
            <article class="customer cthree">
                <div class="customer-img cthree-img">
                    <img src={require('./images/customer3.png')} alt="customer3"/>
                </div>
                <div class="customer-review cthree-review">
                    <h5 class="name">George</h5>
                    <h5 class="ratings">5 <span class="star">&#9734;</span></h5>
                    <p><q>My kids love this place. We visit this restaurant every Sunday.</q></p>
    
                </div>
            </article>
            <article class="customer cfour">
                <div class="customer-img cfour-img">
                    <img src={require('./images/customer4.png')} alt="customer4"/>
                </div>
                <div class="customer-review cfour-review">
                    <h5 class="name">Violet</h5>
                    <h5 class="ratings">5 <span class="star">&#9734;</span></h5>
                    <p><q>I always order salad from this place after a long day at work.</q></p>
    
                </div>
            </article>

    
        </section>);

}

export default Testimonials;
