class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <section class="ftco-section"> 
            <div class="container">
                <nav class="navbar navbar-expand-lg ftco_navbar ftco-navbar-light" id="ftco-navbar">
                    <div class="container">
                        <div class="logo">
                            <a href="index.html">
                                <img src="assets/images/WebLogo.png" alt="logo" width="80%" height="80%" />
                            </a>
                        </div>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav"
                            aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="fa fa-bars"></span><i class="bi bi-card-list"></i>  Menu
                        </button>
                        <div class="collapse navbar-collapse" id="ftco-nav">
                            <ul class="navbar-nav ml-auto mr-md-3">
                                <li class="nav-item active"><a href="index.html" class="nav-link">Home</a></li>
                                <li class="nav-item"><a href="#about" class="nav-link">About Us</a></li>
                                <li class="nav-item"><a href="#classes" class="nav-link">Classes</a></li>
                                <li class="nav-item"><a href="#news" class="nav-link">News</a></li>
                                <li class="nav-item"><a href="#contact" class="nav-link">Contact</a></li>
                            </ul>
                        </div>
                        <div class="phone-number">
                            <img src="assets/images/phone-call.png" alt="" />
                            09999999999
                        </div>
                    </div>
                </nav>
                <!-- END nav -->
            </div>
        
        </section>
        `
    }
}

customElements.define("app-header", Header);