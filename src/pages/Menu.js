import './styles/Menu.css'

const Menu=()=>
    {
        return(
        <div>
            <br/>
            <div className="container-xxl py-5 bg-dark hero-header mb-5">
                <div className="container text-center my-5 pt-5 pb-4">
                    <h1 className="display-3 text-white mb-3 animated slideInDown">Food Menu</h1>
                </div>
            </div>

             
            <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h5 className="section-title ff-secondary text-center text-primary fw-normal">Food Menu</h5>
                    <h1 className="mb-5">Most Popular Items</h1>
                </div>
                <div className="tab-class text-center wow fadeInUp" data-wow-delay="0.1s">
                    <div className="nav nav-pills d-inline-flex justify-content-center border-bottom mb-5">
                        <div className="nav-item">
                            <a className="d-flex align-items-center text-start mx-3 ms-0 pb-3 active a1" data-bs-toggle="pill" href="#tab-1">
                                <i className="fa fa-coffee fa-2x text-warning"></i>
                                <div className="ps-3">
                                    <small className="text-body">Popular</small>
                                    <h6 className="mt-n1 mb-0">Breakfast</h6>
                                </div>
                            </a>
                        </div>
                        <div className="nav-item">
                            <a className="d-flex align-items-center text-start mx-3 pb-3 a1" data-bs-toggle="pill" href="#tab-2">
                                <i className="fa fa-hamburger fa-2x text-warning"></i>
                                <div className="ps-3">
                                    <small className="text-body">Special</small>
                                    <h6 className="mt-n1 mb-0">Launch</h6>
                                </div>
                            </a>
                        </div>
                        <div className="nav-item">
                            <a className="d-flex align-items-center text-start mx-3 me-0 pb-3 a1" data-bs-toggle="pill" href="#tab-3">
                                <i className="fa fa-utensils fa-2x text-warning"></i>
                                <div className="ps-3">
                                    <small className="text-body">Lovely</small>
                                    <h6 className="mt-n1 mb-0">Dinner</h6>
                                </div>
                            </a>
                        </div>
                    </div>
                    </div>
                </div>
                </div>

        
                <div className="container">
                <div className="tab-content">
            <div id="tab-1" className="tab-pane fade show active p-4">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2 g-4">
                <div className="col">
                    <div className="d-flex align-items-center">
                        <img className="flex-shrink-0 img-fluid rounded" src={require("./images/menu-1.jpg")} alt=""/>
                        <div className="w-100 d-flex flex-column text-start ps-4">
                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                                <span>Chicken Burger</span>
                                <span cclassName="text-primary">$99</span>
                            </h5>
                            <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                        </div>
                    </div>
                </div>


                <div className="col">
                    <div className="d-flex align-items-center">
                        <img className="flex-shrink-0 img-fluid rounded" src={require("./images/menu-2.jpg")} alt=""/>
                        <div className="w-100 d-flex flex-column text-start ps-4">
                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                                <span>Chicken Burger</span>
                                <span className="text-primary">$150</span>
                            </h5>
                            <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                        </div>
                    </div>
                </div>


                <div className="col">
                    <div className="d-flex align-items-center">
                        <img className="flex-shrink-0 img-fluid rounded" src={require("./images/menu-3.jpg")} alt=""/>
                        <div className="w-100 d-flex flex-column text-start ps-4">
                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                                <span>Chicken Burger</span>
                                <span className="text-primary">$299</span>
                            </h5>
                            <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                        </div>
                    </div>
                </div>


                <div className="col">
                    <div className="d-flex align-items-center">
                        <img className="flex-shrink-0 img-fluid rounded" src={require("./images/menu-4.jpg")} alt=""/>
                        <div className="w-100 d-flex flex-column text-start ps-4">
                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                                <span>Chicken Burger</span>
                                <span className="text-primary">$89</span>
                            </h5>
                            <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                        </div>
                    </div>
                </div>
                

                <div className="col">
                    <div className="d-flex align-items-center">
                        <img className="flex-shrink-0 img-fluid rounded" src={require("./images/menu-5.jpg")} alt=""/>
                        <div className="w-100 d-flex flex-column text-start ps-4">
                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                                <span>Chicken Burger</span>
                                <span className="text-primary">$399</span>
                            </h5>
                            <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                        </div>
                    </div>
                </div>


                <div className="col">
                    <div className="d-flex align-items-center">
                        <img className="flex-shrink-0 img-fluid rounded" src={require("./images/menu-6.jpg")} alt=""/>
                        <div className="w-100 d-flex flex-column text-start ps-4">
                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                                <span>Chicken Burger</span>
                                <span className="text-primary">$100</span>
                            </h5>
                            <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                        </div>
                    </div>
                </div>


                <div className="col">
                    <div className="d-flex align-items-center">
                        <img className="flex-shrink-0 img-fluid rounded" src={require("./images/menu-7.jpg")} alt=""/>
                        <div className="w-100 d-flex flex-column text-start ps-4">
                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                                <span>Chicken Burger</span>
                                <span className="text-primary">$111</span>
                            </h5>
                            <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                        </div>
                    </div>
                </div>


                <div className="col">
                    <div className="d-flex align-items-center">
                        <img className="flex-shrink-0 img-fluid rounded" src={require("./images/menu-8.jpg")} alt=""/>
                        <div className="w-100 d-flex flex-column text-start ps-4">
                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                                <span>Chicken Burger</span>
                                <span class="text-primary">$199</span>
                            </h5>
                            <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    </div>


    <div className="tab-content">
    <div id="tab-2" className="tab-pane fade p-4">
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2 g-4">
                <div className="col">
                    <div className="d-flex align-items-center">
                        <img className="flex-shrink-0 img-fluid rounded" src={require("./images/menu-1.jpg")} alt=""/>
                        <div className="w-100 d-flex flex-column text-start ps-4">
                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                                <span>Chicken Burger</span>
                                <span cclassName="text-primary">$99</span>
                            </h5>
                            <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                        </div>
                    </div>
                </div>


                <div className="col">
                    <div className="d-flex align-items-center">
                        <img className="flex-shrink-0 img-fluid rounded" src={require("./images/menu-2.jpg")} alt=""/>
                        <div className="w-100 d-flex flex-column text-start ps-4">
                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                                <span>Chicken Burger</span>
                                <span className="text-primary">$150</span>
                            </h5>
                            <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                        </div>
                    </div>
                </div>


                <div className="col">
                    <div className="d-flex align-items-center">
                        <img className="flex-shrink-0 img-fluid rounded" src={require("./images/menu-3.jpg")} alt=""/>
                        <div className="w-100 d-flex flex-column text-start ps-4">
                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                                <span>Chicken Burger</span>
                                <span className="text-primary">$299</span>
                            </h5>
                            <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                        </div>
                    </div>
                </div>


                <div className="col">
                    <div className="d-flex align-items-center">
                        <img className="flex-shrink-0 img-fluid rounded" src={require("./images/menu-4.jpg")} alt=""/>
                        <div className="w-100 d-flex flex-column text-start ps-4">
                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                                <span>Chicken Burger</span>
                                <span className="text-primary">$89</span>
                            </h5>
                            <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                        </div>
                    </div>
                </div>
                

                <div className="col">
                    <div className="d-flex align-items-center">
                        <img className="flex-shrink-0 img-fluid rounded" src={require("./images/menu-5.jpg")} alt=""/>
                        <div className="w-100 d-flex flex-column text-start ps-4">
                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                                <span>Chicken Burger</span>
                                <span className="text-primary">$399</span>
                            </h5>
                            <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                        </div>
                    </div>
                </div>


                <div className="col">
                    <div className="d-flex align-items-center">
                        <img className="flex-shrink-0 img-fluid rounded" src={require("./images/menu-6.jpg")} alt=""/>
                        <div className="w-100 d-flex flex-column text-start ps-4">
                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                                <span>Chicken Burger</span>
                                <span className="text-primary">$100</span>
                            </h5>
                            <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                        </div>
                    </div>
                </div>


                <div className="col">
                    <div className="d-flex align-items-center">
                        <img className="flex-shrink-0 img-fluid rounded" src={require("./images/menu-7.jpg")} alt=""/>
                        <div className="w-100 d-flex flex-column text-start ps-4">
                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                                <span>Chicken Burger</span>
                                <span className="text-primary">$111</span>
                            </h5>
                            <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                        </div>
                    </div>
                </div>


                <div className="col">
                    <div className="d-flex align-items-center">
                        <img className="flex-shrink-0 img-fluid rounded" src={require("./images/menu-8.jpg")} alt=""/>
                        <div className="w-100 d-flex flex-column text-start ps-4">
                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                                <span>Chicken Burger</span>
                                <span class="text-primary">$199</span>
                            </h5>
                            <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    </div>
 



    <div className="tab-content">
        <div id="tab-3" className="tab-pane fade p-4">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2 g-4">
                <div className="col">
                    <div className="d-flex align-items-center">
                        <img className="flex-shrink-0 img-fluid rounded" src={require("./images/menu-1.jpg")} alt=""/>
                        <div className="w-100 d-flex flex-column text-start ps-4">
                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                                <span>Chicken Burger</span>
                                <span cclassName="text-primary">$99</span>
                            </h5>
                            <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                        </div>
                    </div>
                </div>


                <div className="col">
                    <div className="d-flex align-items-center">
                        <img className="flex-shrink-0 img-fluid rounded" src={require("./images/menu-2.jpg")} alt=""/>
                        <div className="w-100 d-flex flex-column text-start ps-4">
                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                                <span>Chicken Burger</span>
                                <span className="text-primary">$150</span>
                            </h5>
                            <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                        </div>
                    </div>
                </div>


                <div className="col">
                    <div className="d-flex align-items-center">
                        <img className="flex-shrink-0 img-fluid rounded" src={require("./images/menu-3.jpg")} alt=""/>
                        <div className="w-100 d-flex flex-column text-start ps-4">
                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                                <span>Chicken Burger</span>
                                <span className="text-primary">$299</span>
                            </h5>
                            <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                        </div>
                    </div>
                </div>


                <div className="col">
                    <div className="d-flex align-items-center">
                        <img className="flex-shrink-0 img-fluid rounded" src={require("./images/menu-4.jpg")} alt=""/>
                        <div className="w-100 d-flex flex-column text-start ps-4">
                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                                <span>Chicken Burger</span>
                                <span className="text-primary">$89</span>
                            </h5>
                            <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                        </div>
                    </div>
                </div>
                

                <div className="col">
                    <div className="d-flex align-items-center">
                        <img className="flex-shrink-0 img-fluid rounded" src={require("./images/menu-5.jpg")} alt=""/>
                        <div className="w-100 d-flex flex-column text-start ps-4">
                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                                <span>Chicken Burger</span>
                                <span className="text-primary">$399</span>
                            </h5>
                            <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                        </div>
                    </div>
                </div>


                <div className="col">
                    <div className="d-flex align-items-center">
                        <img className="flex-shrink-0 img-fluid rounded" src={require("./images/menu-6.jpg")} alt=""/>
                        <div className="w-100 d-flex flex-column text-start ps-4">
                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                                <span>Chicken Burger</span>
                                <span className="text-primary">$100</span>
                            </h5>
                            <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                        </div>
                    </div>
                </div>


                <div className="col">
                    <div className="d-flex align-items-center">
                        <img className="flex-shrink-0 img-fluid rounded" src={require("./images/menu-7.jpg")} alt=""/>
                        <div className="w-100 d-flex flex-column text-start ps-4">
                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                                <span>Chicken Burger</span>
                                <span className="text-primary">$111</span>
                            </h5>
                            <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                        </div>
                    </div>
                </div>


                <div className="col">
                    <div className="d-flex align-items-center">
                        <img className="flex-shrink-0 img-fluid rounded" src={require("./images/menu-8.jpg")} alt=""/>
                        <div className="w-100 d-flex flex-column text-start ps-4">
                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                                <span>Chicken Burger</span>
                                <span class="text-primary">$199</span>
                            </h5>
                            <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                        </div>
                    </div>
                </div>


            </div>
        </div>
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
    export default Menu;