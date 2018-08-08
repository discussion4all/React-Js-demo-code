import React, {Component} from 'react';
import DocumentMeta from 'react-document-meta';

class About extends Component {
	render() {
        const meta = {
          title: 'About',
          description: 'This is Aboout page',
          meta: {
            charset: 'utf-8',
            name: {
              keywords: 'About page'
            }
          }
        };
		return(
            <DocumentMeta {...meta}>
		<div className="about-us-div">
        <div className="container">
            <div className="about-us-heading">
                <h1>About Us</h1>
            </div>
            <div className="row about-us-block">
                <div className="col-md-12">
                    <h1><span className="ab">COMPANY OVERVIEW</span></h1>
                    <p>
                        This is an exploratory session where you tell us all of the things you want in your new home from space needs to special design details. We establish the scope and estimated budget range for your project. We also do a site evaluation to determine the best layout for your new home and site requirements for construction. From initial design to closing, we listen to your wants, needs, and concerns.
                    </p>
                    <p>
                        This is an exploratory session where you tell us all of the things you want in your new home from space needs to special design details. We establish the scope and estimated budget range for your project. We also do a site evaluation to determine the best layout for your new home and site requirements for construction. From initial design to closing, we listen to your wants, needs, and concerns.
                    </p>
                </div>

                <div className="span12">&nbsp;</div>

                <div className="col-md-12">
                    <h1><span className="ab">YEAR IN BUSINESS</span></h1>
                    <p>
                        This is an exploratory session where you tell us all of the things you want in your new home from space needs to special design details. We establish the scope and estimated budget range for your project. We also do a site evaluation to determine the best layout for your new home and site requirements for construction. From initial design to closing, we listen to your wants, needs, and concerns.
                    </p>
                    <p>
                        This is an exploratory session where you tell us all of the things you want in your new home from space needs to special design details. We establish the scope and estimated budget range for your project. We also do a site evaluation to determine the best layout for your new home and site requirements for construction. From initial design to closing, we listen to your wants, needs, and concerns.
                    </p>
                </div>

                <div className="span12">&nbsp;</div>

                <div className="col-md-12 about-us-teamwork-div">
                    <h1><span className="ab">OUR TEAMS</span></h1>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="img-hover">
                                <a href="#">
                                    <img src="images/about-us-teamwork1.jpg" className="img-fluid" />
                                </a>
                               
                                <div className="hover_div">
                                     <p>
                                    This is an exploratory session where you tell us all of the things you want in your new home from space needs to special design details. We establish the scope and estimated budget range for your project. We also do a site evaluation to determine the best layout for your new home and site requirements for construction. From initial design to closing, we listen to your wants, needs, and concerns.
                                    </p>

                                </div>
                            </div>
                            <h3 className="team-title">RESEARCH AND DEVELOPMENT</h3>
                            <p className="team-para">OUR R&D TEAM IS THE HEART OF PLUTO'S INNOVATION.</p>
                        </div>
                        <div className="col-md-4">
                            <div className="img-hover">
                                <a href="#">
                                    <img src="images/about-us-teamwork2.jpg" className="img-fluid" />
                                </a>
                               
                                <div className="hover_div">
                                     <p>
                                    This is an exploratory session where you tell us all of the things you want in your new home from space needs to special design details. We establish the scope and estimated budget range for your project. We also do a site evaluation to determine the best layout for your new home and site requirements for construction. From initial design to closing, we listen to your wants, needs, and concerns.
                                    </p>

                                </div>
                            </div>
                            <h3 className="team-title">INTERNAL OPERATIONS</h3>
                            <p className="team-para">OUR HUMAN RESOURCES, FINANCE, IT, AND LEGAL TEAMS.</p>
                        </div>
                        <div className="col-md-4">
                            <div className="img-hover">
                                <a href="#">
                                    <img src="images/about-us-teamwork3.jpg" className="img-fluid" />
                                </a>
                               
                                <div className="hover_div">
                                     <p>
                                    This is an exploratory session where you tell us all of the things you want in your new home from space needs to special design details. We establish the scope and estimated budget range for your project. We also do a site evaluation to determine the best layout for your new home and site requirements for construction. From initial design to closing, we listen to your wants, needs, and concerns.
                                    </p>

                                </div>
                            </div>
                            <h3 className="team-title">TECHNOLOGY IMPLEMENTATION</h3>
                            <p className="team-para">THE TECHNOLOGY IMPLEMENTATION TEAMS ARE COMPRISED OF ENGINEERS AND PROJECT MANAGERS</p>
                        </div>
                        <div className="col-md-4">
                            <div className="img-hover">
                                <a href="#">
                                    <img src="images/about-us-teamwork4.jpg" className="img-fluid" />
                                </a>
                               
                                <div className="hover_div">
                                     <p>
                                    This is an exploratory session where you tell us all of the things you want in your new home from space needs to special design details. We establish the scope and estimated budget range for your project. We also do a site evaluation to determine the best layout for your new home and site requirements for construction. From initial design to closing, we listen to your wants, needs, and concerns.
                                    </p>

                                </div>
                            </div>
                            <h3 className="team-title">ROBOTICS R&D</h3>
                            <p className="team-para">OUR ROBOTIC R&D DEPARTMENT IS DEVELOPING OUR PLUTOIDS P2 AND P5, DROIDS FOR BUSINESS</p>
                        </div>
                        <div className="col-md-4">
                           <div className="img-hover">
                                <a href="#">
                                    <img src="images/about-us-teamwork5.jpg" className="img-fluid" />
                                </a>
                               
                                <div className="hover_div">
                                     <p>
                                    This is an exploratory session where you tell us all of the things you want in your new home from space needs to special design details. We establish the scope and estimated budget range for your project. We also do a site evaluation to determine the best layout for your new home and site requirements for construction. From initial design to closing, we listen to your wants, needs, and concerns.
                                    </p>

                                </div>
                            </div>
                            <h3 className="team-title">CRM, MARKETING, & SALES</h3>
                            <p className="team-para">OUR GLOBAL SALES AND MARKETING TEAM ALONG WITH CUSTOMER RELATIONSHIP MANAGER DRIVE THE BUSINESS DEVELOPMENT.</p>
                        </div>
                        <div className="col-md-4">
                           <div className="img-hover">
                                <a href="#">
                                    <img src="images/about-us-teamwork6.jpg" className="img-fluid" />
                                </a>
                                <div className="hover_div">
                                     <p>
                                    This is an exploratory session where you tell us all of the things you want in your new home from space needs to special design details. We establish the scope and estimated budget range for your project. We also do a site evaluation to determine the best layout for your new home and site requirements for construction. From initial design to closing, we listen to your wants, needs, and concerns.
                                    </p>

                                </div>
                            </div>
                            <h3 className="team-title">SOFTWARE ENGINNERING</h3>
                            <p className="team-para">OUR CORE TEAM OF ENGINEERS WHO BUILD THE PLATFORM, AND THE EA BOTS.</p>
                        </div>
                    </div>
                </div>

                <div className="span12">&nbsp;</div>

                <div className="col-md-12 community-overview-div">
                    <h1><span className="ab">COMMUNITY OVERVIEW</span></h1>
                    <p className="community-para">
                        This is an exploratory session where you tell us all of the things you want in your new home from space needs to special design details. We establish the scope and estimated budget range for your project. We also do a site evaluation to determine the best layout for your new home and site requirements for construction. From initial design to closing, we listen to your wants, needs, and concerns.
                    </p>
                    <p className="community-para">
                        This is an exploratory session where you tell us all of the things you want in your new home from space needs to special design details. We establish the scope and estimated budget range for your project. We also do a site evaluation to determine the best layout for your new home and site requirements for construction. From initial design to closing, we listen to your wants, needs, and concerns.
                    </p>
                </div>

                <div className="span12">&nbsp;</div>

                <div className="col-md-12 about-us-map">
                    <h1><span className="ab">Map</span></h1>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d443090.18938914064!2d-95.68148787568943!3d29.816882379121985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640b8b4488d8501%3A0xca0d02def365053b!2sHouston%2C+TX%2C+USA!5e0!3m2!1sen!2sin!4v1525926766193" width="100%" height="350" frameBorder="0"  allowFullScreen></iframe>
                </div>

                <div className="span12">&nbsp;</div>

                <div className="col-md-12 about-us-testimonial">
                    <h1><span className="ab">Testimonial</span></h1>
                    <div className="row">
                        <div className="col-md-12 col-center m-auto">
                            <div id="myCarousel" className="carousel slide" data-ride="carousel">
                                <ol className="carousel-indicators">
                                <li data-target="#myCarousel" data-slide-to="0" className=""></li>
                                <li data-target="#myCarousel" data-slide-to="1" className="active"></li>
                                <li data-target="#myCarousel" data-slide-to="2" className=""></li>
                            </ol>  
                                <div className="carousel-inner text-center">
                                    <div className="item carousel-item active left">
                                        <div className="img-box"><img src="images/testimonial-img-1.jpg" alt="" /></div>
                                        <p className="testimonial">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam at, luctus dui. Mauris magna metus, dapibus nec turpis vel, semper malesuada ante. Idac bibendum scelerisque non non purus. Suspendisse varius nibh non aliquet.</p>
                                        <p className="overview"><b>Paula Wilson</b>, Media Analyst</p>
                                    </div>
                                    <div className="item carousel-item next left">
                                        <div className="img-box"><img src="images/testimonial-img-2.jpg" alt="" /></div>
                                        <p className="testimonial">Vestibulum quis quam ut magna consequat faucibus. Pellentesque eget nisi a mi suscipit tincidunt. Utmtc tempus dictum risus. Pellentesque viverra sagittis quam at mattis. Suspendisse potenti. Aliquam sit amet gravida nibh, facilisis gravida odio.</p>
                                        <p className="overview"><b>Antonio Moreno</b>, Web Developer</p>
                                    </div>
                                    <div className="item carousel-item">
                                        <div className="img-box"><img src="images/testimonial-img-3.jpg" alt="" /></div>
                                        <p className="testimonial">Phasellus vitae suscipit justo. Mauris pharetra feugiat ante id lacinia. Etiam faucibus mauris id tempor egestas. Duis luctus turpis at accumsan tincidunt. Phasellus risus risus, volutpat vel tellus ac, tincidunt fringilla massa. Etiam hendrerit dolor eget rutrum.</p>
                                        <p className="overview"><b>Michael Holz</b>, Seo Analyst</p>
                                    </div>
                                </div>
                                <a className="carousel-control left carousel-control-prev" href="#myCarousel" data-slide="prev">
                                    <i className="fa fa-angle-left"></i>
                                </a>
                                <a className="carousel-control right carousel-control-next" href="#myCarousel" data-slide="next">
                                    <i className="fa fa-angle-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
    </DocumentMeta>
		);
	}
}

export default About;