
import './styles/About.css'
const About=()=>
    {
        return(
        <div>
            <br/>

            <div className="container-xxl py-5 bg-dark hero-header mb-5">
                <div className="container text-center my-5 pt-5 pb-4">
                    <h1 className="display-3 text-white mb-3 animated slideInDown">About Us</h1>
                </div>
            </div>
            <center>
                <div className="col-lg-6">
                        <h3 className="section-title ff-secondary  text-primary fw-normal">ABOUT US</h3>
                        <h1 className="mb-4">Welcome to <i class="fas fa-hamburger text-primary me-2"></i>Burger King</h1>
                        <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos erat ipsum et lorem et sit, sed stet lorem sit.</p>
                        <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                        <div className="row g-4 mb-4">
                            <div className="col-sm-6">
                                <div className="d-flex align-items-center border-start border-5 border-primary px-3">
                                    <h1 className="flex-shrink-0 display-5 text-primary mb-0" data-toggle="counter-up">15</h1>
                                    <div className="ps-4">
                                        <p className="mb-0">Years of</p>
                                        <h6 className="text-uppercase mb-0">Experience</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="d-flex align-items-center border-start border-5 border-primary px-3">
                                    <h1 className="flex-shrink-0 display-5 text-primary mb-0" data-toggle="counter-up">50</h1>
                                    <div className="ps-4">
                                        <p className="mb-0">Popular</p>
                                        <h6 className="text-uppercase mb-0">Master Chefs</h6>
                                    </div>
                                </div>
                            </div>
                        </div>  
                </div>
        </center><br/>


        <div className="container-xxl pt-5 pb-3 bg-warning">
            <div className="container">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h5 className="section-title ff-secondary text-center text-primary fw-normal">TEAM MEMBERS</h5>
                    <h1 className="mb-5">Our Master Chefs</h1>
                </div>
                <div className="row g-4">
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="team-item text-center rounded overflow-hidden">
                            <div className="rounded-circle overflow-hidden m-4">
                                <img className="img-fluid" src={require("./images/team-1.jpg")} alt=""/>
                            </div>
                            <h5 className="mb-0">Full Name</h5>
                            <small>Designation</small>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="team-item text-center rounded overflow-hidden">
                            <div className="rounded-circle overflow-hidden m-4">
                            <img className="img-fluid" src={require("./images/team-2.jpg")} alt=""/>
                            </div>
                            <h5 className="mb-0">Full Name</h5>
                            <small>Designation</small>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="team-item text-center rounded overflow-hidden">
                            <div className="rounded-circle overflow-hidden m-4">
                            <img className="img-fluid" src={require("./images/team-3.jpg")} alt=""/>
                            </div>
                            <h5 className="mb-0">Full Name</h5>
                            <small>Designation</small>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                        <div className="team-item text-center rounded overflow-hidden">
                            <div className="rounded-circle overflow-hidden m-4">
                            <img className="img-fluid" src={require("./images/team-4.jpg")} alt=""/>
                            </div>
                            <h5 className="mb-0">Full Name</h5>
                            <small>Designation</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
<br/>
          


<footer className="footer">
  	 <div className="container">
  	 	<div className="row">
  	 		<div className="footer-col">
  	 			<h4>company</h4>
  	 			<ul>
  	 				<li><a href="#">About Us</a></li>
  	 				<li><a href="#">Contact Us</a></li>
  	 				<li><a href="#">Reservation</a></li>
  	 				<li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Terms & Condition</a></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>Contact</h4>
  	 			<ul>
  	 				<li><a href="#"><i class="fa fa-map-marker-alt me-3"></i>123 Street, New York, USA</a></li>
  	 				<li><a href="#"><i class="fa fa-phone-alt me-3"></i>+012 345 67890</a></li>
  	 				<li><a href="#"><i class="fa fa-envelope me-3"></i>info@example.com</a></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
               <h4 className="section-title ff-secondary text-start  fw-normal mb-4">Opening</h4>
                        <h5 className="text-light fw-normal">Monday - Saturday</h5>
                        <ui>
                        <li><a href="#">09AM - 09PM</a></li>
                        <h5 className="text-light fw-normal">Sunday</h5>
                        <li><a href="#">10AM - 08PM</a></li>
                        </ui>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>follow us</h4>
  	 			<div className="social-links">
  	 				<a href="#"><i class="fab fa-facebook-f"></i></a>
  	 				<a href="#"><i class="fab fa-twitter"></i></a>
  	 				<a href="#"><i class="fab fa-instagram"></i></a>
  	 				<a href="#"><i class="fab fa-linkedin-in"></i></a>
  	 			</div>
  	 		</div>
			</div>	
			</div>
	</footer><br/>
  
  			<div>
				<center>
  	 			<h6>© Burger King, All Right Reserved. Designed By Manikandan</h6>
				</center>
  	 		</div>


            
        </div>
        )
    }
    export default About;