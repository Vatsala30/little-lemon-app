function Footer(){
    return <footer>
        <div id="icon">
        <img src={require('./images/Icon.png')} alt="icon" />
        </div>
        <div id="contact-us">
            <ul>
                <li>Club Road</li>
                <li>011-22345678</li>
                <li>littleLemon@gmail.com</li>
            </ul>
            </div>
            <div id="social-media">
            <ul>
                <li><a href="/facebook">facebook/</a></li>
                <li><a href="/instagram">instagram/</a></li>
                <li><a href="/twitter">twitter</a></li>
            </ul>
            </div>
    </footer>
}

export default Footer;