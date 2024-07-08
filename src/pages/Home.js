import './styles/Home.css'


const Home=()=>
    {
        return(
            <>
            <div className="container-xxl bg-white p-0">
                <div className="container-xxl position-relative p-0">
                    <div className="container-xxl py-5 bg-dark mb-5 hero-header">
                        <div className="row align-items-center g-5">
                            <div className="col-lg-6 text-center text-lg-start">
                                <h1 className="display-3 text-white animated slideInLeft">Enjoy Our<br/>Delicious Meal</h1>
                                <p className="text-white animated slideInLeft mb-4 pb-2">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                            </div>
                            <div className="col-lg-6 text-center text-lg-end overflow-hidden">
                            <img class="img-fluid" src={require("./images/hero.png")} alt=""/>
                        </div>
                        </div>
                    </div>
                </div>
            </div>



        <div className="container">
    <div className="row">
    <div className="col-md-3 col-sm-6">
        <div className="serviceBox">
            <div className="service-icon">
                <span><i className="fa fa-user-tie"></i></span>
            </div>
            <h3 className="title">Master Chef</h3>
            <p className="description">He has hosted numerous cooking shows and reality cooking competitions in various Tamil language television channels.</p>
        </div>
    </div>

    <div className="col-md-3 col-sm-6">
        <div className="serviceBox yellow">
            <div className="service-icon">
                <span><i className="fa fa-utensils"></i></span>
            </div>
            <h3 className="title">Quality Food</h3>
            <p className="description">Lorem ipsum dolor sit amet conse ctetur adipisicing elit. Qui quaerat fugit quas veniam perferendis repudiandae sequi, dolore quisquam illum.</p>
        </div>
    </div>

    <div className="col-md-3 col-sm-6">
        <div className="serviceBox purple">
            <div className="service-icon">
                <span><i class="fa fa-cart-plus"></i></span>
            </div>
            <h3 className="title">Online Order</h3>
            <p className="description">Lorem ipsum dolor sit amet conse ctetur adipisicing elit. Qui quaerat fugit quas veniam perferendis repudiandae sequi, dolore quisquam illum.</p>
        </div>
    </div>

    <div className="col-md-3 col-sm-6">
        <div className="serviceBox pink">
            <div className="service-icon">
                <span><i className="fa fa-headset"></i></span>
            </div>
            <h3 className="title">24/7 Service</h3>
            <p className="description">Lorem ipsum dolor sit amet conse ctetur adipisicing elit. Qui quaerat fugit quas veniam perferendis repudiandae sequi, dolore quisquam illum.</p>
        </div>
    </div>
    </div>
</div>
<br/>
<br/>     
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
        </center>
            

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


<center>
					<br/>
				<div className="col-md-6">
                        <div className="wow fadeInUp" data-wow-delay="0.2s">
                        <h5 className="section-title ff-secondary text-primary fw-normal">Reservation</h5>
                        <h3 className="mb-4">Book A Table Online</h3>
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
                        <h5 class="text-light fw-normal">Monday - Saturday</h5>
                        <ui>
                        <li><a href="#">09AM - 09PM</a></li>
                        <h5 class="text-light fw-normal">Sunday</h5>
                        <li><a href="#">10AM - 08PM</a></li>
                        </ui>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>follow us</h4>
  	 			<div class="social-links">
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





            </>
        )
    }
    export default Home;