function Specials(){
    return(
    <section id="specials">
        <h1>This weeks special!!</h1>
        <article class="dish greek-salad">
            <div class="dish-img gs-img">
                <img src={require('./images/greek salad.jpg')} alt="greek salad"/>

            </div>
            <div class="dish-dsp gs-dsp">
                <h5 class="name">Greek salad</h5>
                <h5 class="price">12.99$</h5>
                <p>The famous greek salad of crispy lettuce, peppers,<br></br>
                 olives and our Chicago style feta cheese, garnished<br></br> 
                 with crunchy garlic and rosemary croutons.</p>

            </div>
            
        </article>
        <article class="dish bruchetta">
           <div class="dish-img b-img">
               <img src={require('./images/bruchetta.png')} alt="bruchetta"/>
           </div>
           <div class="dish-dsp b-dsp">
           <h5 class="name">Bruchetta</h5>
            <h5 class="price">5.99$</h5>
            <p>Our Bruschetta is made from grilled bread that has been<br></br>
             smeared with garlic and seasoned with salt and olive oil. </p>
    
           </div>
        </article>
        <article class="dish lemon-dessert">
        <div class="dish-img ld-img">
            <img src={require('./images/lemon dessert.jpg')} alt="lemon dessert"/>
           </div>
           <div class="dish-dsp ld-dsp">
              <h5 class="name">Lemon dessert</h5>
              <h5 class="price">5.00$</h5>
              <p>This comes straight from grandma’s recipe book, every last<br></br>
               ingredient has been sourced and is as authentic as can be imagined.</p>

           </div>
        </article>

    </section>);
}

export default Specials;