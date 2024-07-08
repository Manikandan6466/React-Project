import './styles/Contact.css'

const Contact=()=>
    {
        return(
        <div>
			<br/>
			<div className="container-xxl py-5 bg-dark hero-header mb-5">
                <div className="container text-center my-5 pt-5 pb-4">
                    <h1 className="display-3 text-white mb-3 animated slideInDown">Contact</h1>
                </div>
            </div>
            
			 
			<div className="container-xxl py-5">
            <div className="container">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h5 className="section-title ff-secondary text-center text-warning fw-normal">Contact Us</h5>
                    <h1 className="mb-5">Contact For Any Query</h1>
                </div>	

                <div className="row g-4">
                    <div className="col-12">
                        <div className="row gy-4">
                            <div className="col-md-4">
                                <h5 className="section-title ff-secondary fw-normal text-start text-primary">Booking</h5>
                                <p><i className="fa fa-envelope-open text-primary me-2"></i>book@example.com</p>
                            </div>
                            <div className="col-md-4">
                                <h5 className="section-title ff-secondary fw-normal text-start text-primary">General</h5>
                                <p><i className="fa fa-envelope-open text-primary me-2"></i>info@example.com</p>
                            </div>
                            <div className="col-md-4">
                                <h5 className="section-title ff-secondary fw-normal text-start text-primary">Technical</h5>
                                <p><i className="fa fa-envelope-open text-primary me-2"></i>tech@example.com</p>
                            </div>
                        </div>
                    </div>
			    </div>


                <center>
					<br/>
				<div className="col-md-6">
                        <div className="wow fadeInUp" data-wow-delay="0.2s">
                            <form>
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="name" placeholder="Your Name"/>
                                            <label for="name">Your Name</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="email" className="form-control" id="email" placeholder="Your Email"/>
                                            <label for="email">Your Email</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="subject" placeholder="Subject"/>
                                            <label for="subject">Subject</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <textarea className="form-control" placeholder="Leave a message here" id="message"></textarea>
                                            <label for="message">Message</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button className="btn btn-primary w-100 py-3" type="submit">Send Message</button>
                                    </div>
                                </div>
                            </form>
							
                        </div>
                    </div>
					</center>


            </div>	
		    </div>	 
			

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
    export default Contact;

