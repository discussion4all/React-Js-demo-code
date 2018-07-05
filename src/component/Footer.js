import React, {Component} from 'react';


class Footer extends Component {
    render() {
        return(
           <footer className="dark-h">
            <div className="container">
                <div className="row d-flex justify-content-between">
                    <div className=" col-md-5 p-2  footer-des">
                        <div className="logo-footer"><img src="images/logo_1.png" alt="" /></div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>

                    </div>
                    <div className=" col-md-3 p-2  footer-des">
                        <h5>CONTACT US</h5>
                        <div className="contact-us-foooter">
                            <p> <i className="fa fa-map-marker" aria-hidden="true"></i> 20 County Road 632 Dayton, Texas 77535</p>
                            <p><i className="fa fa-phone" aria-hidden="true"></i> (936) 258-1100</p>
                            <p><i className="fa fa-envelope-o" aria-hidden="true"></i> Info @ whiteoaktrails.com</p>
                            <div className="social-icons">
                                <a href="#" title=""> <i className="fa fa-twitter" aria-hidden="true"></i> </a>
                                <a href="#" title=""> <i className="fa fa-google-plus" aria-hidden="true"></i> </a>
                                <a href="#" title=""> <i className="fa fa-facebook" aria-hidden="true"></i> </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 p-2  footer-des">
                        <h5>QUICK LINK</h5>
                        <div className="quick-links">
                            <a href="index.html" title="">Home</a>
                            <a href="find-your-home.html" title="">Find Your Home</a>
                            <a href="whiteoaktrail.html" title="">White Oak Trail</a>
                            <a href="custom-home-guide.html" title="">Custom Home Guide</a>
                            <a href="gallary.html" title="">Gallery</a>
                            <a href="about-us.html" title="">About us</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        );
    }
}

export default Footer;
 