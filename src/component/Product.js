import React, {Component} from 'react';
import DocumentMeta from 'react-document-meta';

class Product extends Component {
	render() {
        const meta = {
          title: 'Product',
          description: 'This is Product page',
          meta: {
            charset: 'utf-8',
            name: {
              keywords: 'Product page'
            }
          }
        };
		return(
            <DocumentMeta {...meta}>
			<main role="main" className="find-your-home">
        <div className="container">
            <h1 className="find-home-title">Quick Move-In Homes</h1>
            <p className="find-home-para">Are you looking for a Brand New, Readily Available Home that's a great deal, too? Would you like to save thousands thanks to the favorable interest rates that are available? You need to act now, because once these incredible Quick Move-In Homes are gone, you won't have an opportunity like this again!</p>

            <div className="home-detail">
                <div className="row">
                    <div className="col-md-12 card home-detail-box">
                        <div className="row">
                            <div className="col-md-5 home-img">
                                <a href="view-plan-elevation.html">
                                    <img src="images/home1.jpg" className="img-fluid" alt="home-img-1" />
                                </a>
                                
                                 113 Richwood Cove, Fredericksburg , VA 22406, Home Site
                            </div>

                            <div className="col-md-7">
                                <table width="100%" border="0" className="table table-striped table-condensed">
                                    <thead>
                                        <tr>
                                            <th colSpan="2"><a href="#"><h2>Ashland   <span><i className="fa fa-home" aria-hidden="true"></i></span></h2></a></th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        <tr>
                                            <td colSpan="2">Community: <a href="#" className="white-space: normal;">Amber Oaks</a></td>
                                        </tr>
                                        <tr>
                                            <td valign="top">Move In Date:</td>
                                            <td valign="top">March/ April 2018</td>
                                        </tr>
                                        <tr>
                                            <td valign="top">Status:</td>
                                            <td valign="top">Under Contract!!</td>
                                        </tr>
                                        <tr>
                                            <td valign="top" width="50%">Bedrooms:</td>
                                            <td valign="top" width="50%">4</td>
                                        </tr>
                                        <tr>
                                            <td valign="top">Bathrooms:</td>
                                            <td valign="top">3 &amp; 1 half</td>
                                        </tr>
                                        <tr>
                                            <td valign="top">Study:</td>
                                            <td valign="top">Yes</td>
                                        </tr>
                                        <tr>
                                            <td valign="top">Garage:</td>
                                            <td valign="top">2</td>
                                        </tr>
                                        <tr>
                                            <td valign="top">Square Feet:</td>
                                            <td valign="top">3,995+</td>
                                        </tr>
                                        <tr>
                                            <td valign="top">Price:</td>
                                            <td valign="top">$525,900</td>
                                        </tr>
                                        <tr>
                                            <td colSpan="2" align="right">
                                                <a href="view-plan-elevation.html" className="btn btn-primary  btn-sm" id="btn-view">View Plan &amp; Elevations</a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12 card home-detail-box">
                        <div className="row">
                            <div className="col-md-5 home-img">
                                <a href="view-plan-elevation.html">
                                    <img src="images/home2.jpg" className="img-fluid" alt="home-img-2" />
                                </a>
                                
                                 113 Richwood Cove, Fredericksburg , VA 22406, Home Site
                            </div>

                            <div className="col-md-7">
                                <table width="100%" border="0" className="table table-striped table-condensed">
                                    <thead>
                                        <tr>
                                            <th colSpan="2"><a href="#"><h2>Chelsey ClassNameic   <span><i className="fa fa-home" aria-hidden="true"></i></span></h2></a></th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        <tr>
                                            <td colSpan="2">Community: <a href="#" className="white-space: normal;">Amber Oaks</a></td>
                                        </tr>
                                        <tr>
                                            <td valign="top">Move In Date:</td>
                                            <td valign="top">March/ April 2018</td>
                                        </tr>
                                        <tr>
                                            <td valign="top">Status:</td>
                                            <td valign="top">Under Contract!!</td>
                                        </tr>
                                        <tr>
                                            <td valign="top" width="50%">Bedrooms:</td>
                                            <td valign="top" width="50%">4</td>
                                        </tr>
                                        <tr>
                                            <td valign="top">Bathrooms:</td>
                                            <td valign="top">3 &amp; 1 half</td>
                                        </tr>
                                        <tr>
                                            <td valign="top">Study:</td>
                                            <td valign="top">Yes</td>
                                        </tr>
                                        <tr>
                                            <td valign="top">Garage:</td>
                                            <td valign="top">2</td>
                                        </tr>
                                        <tr>
                                            <td valign="top">Square Feet:</td>
                                            <td valign="top">3,995+</td>
                                        </tr>
                                        <tr>
                                            <td valign="top">Price:</td>
                                            <td valign="top">$525,900</td>
                                        </tr>
                                        <tr>
                                            <td colSpan="2" align="right">
                                                <a href="view-plan-elevation.html" className="btn btn-primary  btn-sm" id="btn-view">View Plan &amp; Elevations</a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12 card home-detail-box">
                        <div className="row">
                            <div className="col-md-5 home-img">
                                <a href="view-plan-elevation.html">
                                    <img src="images/home3.jpg" className="img-fluid" alt="home-img-3" />
                                </a>
                                
                                 113 Richwood Cove, Fredericksburg , VA 22406, Home Site
                            </div>

                            <div className="col-md-7">
                                <table width="100%" border="0" className="table table-striped table-condensed">
                                    <thead>
                                        <tr>
                                            <th colSpan="2"><a href="#"><h2>Chelsey ClassNameic   <span><i className="fa fa-home" aria-hidden="true"></i></span></h2></a></th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        <tr>
                                            <td colSpan="2">Community: <a href="#" className="white-space: normal;">Amber Oaks</a></td>
                                        </tr>
                                        <tr>
                                            <td valign="top">Move In Date:</td>
                                            <td valign="top">March/ April 2018</td>
                                        </tr>
                                        <tr>
                                            <td valign="top">Status:</td>
                                            <td valign="top">Under Contract!!</td>
                                        </tr>
                                        <tr>
                                            <td valign="top" width="50%">Bedrooms:</td>
                                            <td valign="top" width="50%">4</td>
                                        </tr>
                                        <tr>
                                            <td valign="top">Bathrooms:</td>
                                            <td valign="top">3 &amp; 1 half</td>
                                        </tr>
                                        <tr>
                                            <td valign="top">Study:</td>
                                            <td valign="top">Yes</td>
                                        </tr>
                                        <tr>
                                            <td valign="top">Garage:</td>
                                            <td valign="top">2</td>
                                        </tr>
                                        <tr>
                                            <td valign="top">Square Feet:</td>
                                            <td valign="top">3,995+</td>
                                        </tr>
                                        <tr>
                                            <td valign="top">Price:</td>
                                            <td valign="top">$525,900</td>
                                        </tr>
                                        <tr>
                                            <td colSpan="2" align="right">
                                                <a href="view-plan-elevation.html" className="btn btn-primary  btn-sm" id="btn-view">View Plan &amp; Elevations</a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12 card home-detail-box">
                        <div className="row">
                            <div className="col-md-5 home-img">
                                <a href="view-plan-elevation.html">
                                    <img src="images/home4.jpg" className="img-fluid" alt="home-img-4" />
                                </a>
                                
                                 113 Richwood Cove, Fredericksburg , VA 22406, Home Site
                            </div>

                            <div className="col-md-7">
                                <table width="100%" border="0" className="table table-striped table-condensed">
                                    <thead>
                                        <tr>
                                            <th colSpan="2"><a href="#"><h2>Montvale ClassNameic   <span><i className="fa fa-home" aria-hidden="true"></i></span></h2></a></th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        <tr>
                                            <td colSpan="2">Community: <a href="#" className="white-space: normal;">Amber Oaks</a></td>
                                        </tr>
                                        <tr>
                                            <td valign="top">Move In Date:</td>
                                            <td valign="top">March/ April 2018</td>
                                        </tr>
                                        <tr>
                                            <td valign="top">Status:</td>
                                            <td valign="top">Under Contract!!</td>
                                        </tr>
                                        <tr>
                                            <td valign="top" width="50%">Bedrooms:</td>
                                            <td valign="top" width="50%">4</td>
                                        </tr>
                                        <tr>
                                            <td valign="top">Bathrooms:</td>
                                            <td valign="top">3 &amp; 1 half</td>
                                        </tr>
                                        <tr>
                                            <td valign="top">Study:</td>
                                            <td valign="top">Yes</td>
                                        </tr>
                                        <tr>
                                            <td valign="top">Garage:</td>
                                            <td valign="top">2</td>
                                        </tr>
                                        <tr>
                                            <td valign="top">Square Feet:</td>
                                            <td valign="top">3,995+</td>
                                        </tr>
                                        <tr>
                                            <td valign="top">Price:</td>
                                            <td valign="top">$525,900</td>
                                        </tr>
                                        <tr>
                                            <td colSpan="2" align="right">
                                                <a href="view-plan-elevation.html" className="btn btn-primary  btn-sm" id="btn-view">View Plan &amp; Elevations</a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12 card home-detail-box">
                        <div className="row">
                            <div className="col-md-5 home-img">
                                <a href="view-plan-elevation.html">
                                    <img src="images/home5.jpg" className="img-fluid" alt="home-img-5" />
                                </a>
                                <br />
                                <br /> 113 Richwood Cove, Fredericksburg , VA 22406, Home Site
                            </div>

                            <div className="col-md-7">
                                <table width="100%" border="0" className="table table-striped table-condensed">
                                    <thead>
                                        <tr>
                                            <th colSpan="2"><a href="#"><h2>Bridgewater II   <span><i className="fa fa-home" aria-hidden="true"></i></span></h2></a></th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        <tr>
                                            <td colSpan="2">Community: <a href="#" className="white-space: normal;">Amber Oaks</a></td>
                                        </tr>
                                        <tr>
                                            <td valign="top">Move In Date:</td>
                                            <td valign="top">March/ April 2018</td>
                                        </tr>
                                        <tr>
                                            <td valign="top">Status:</td>
                                            <td valign="top">Under Contract!!</td>
                                        </tr>
                                        <tr>
                                            <td valign="top" width="50%">Bedrooms:</td>
                                            <td valign="top" width="50%">4</td>
                                        </tr>
                                        <tr>
                                            <td valign="top">Bathrooms:</td>
                                            <td valign="top">3 &amp; 1 half</td>
                                        </tr>
                                        <tr>
                                            <td valign="top">Study:</td>
                                            <td valign="top">Yes</td>
                                        </tr>
                                        <tr>
                                            <td valign="top">Garage:</td>
                                            <td valign="top">2</td>
                                        </tr>
                                        <tr>
                                            <td valign="top">Square Feet:</td>
                                            <td valign="top">3,995+</td>
                                        </tr>
                                        <tr>
                                            <td valign="top">Price:</td>
                                            <td valign="top">$525,900</td>
                                        </tr>
                                        <tr>
                                            <td colSpan="2" align="right">
                                                <a href="view-plan-elevation.html" className="btn btn-primary  btn-sm" id="btn-view">View Plan &amp; Elevations</a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12 card home-detail-box">
                        <div className="row">
                            <div className="col-md-5 home-img">
                                <a href="view-plan-elevation.html">
                                    <img src="images/home6.jpg" className="img-fluid" alt="home-img-6" />
                                </a>
                                
                                 113 Richwood Cove, Fredericksburg , VA 22406, Home Site
                            </div>

                            <div className="col-md-7">
                                <table width="100%" border="0" className="table table-striped table-condensed">
                                    <thead>
                                        <tr>
                                            <th colSpan="2"><a href="#"><h2>Lexington   <span><i className="fa fa-home" aria-hidden="true"></i></span></h2></a></th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        <tr>
                                            <td colSpan="2">Community: <a href="#" className="white-space: normal;">Amber Oaks</a></td>
                                        </tr>
                                        <tr>
                                            <td valign="top">Move In Date:</td>
                                            <td valign="top">March/ April 2018</td>
                                        </tr>
                                        <tr>
                                            <td valign="top">Status:</td>
                                            <td valign="top">Under Contract!!</td>
                                        </tr>
                                        <tr>
                                            <td valign="top" width="50%">Bedrooms:</td>
                                            <td valign="top" width="50%">4</td>
                                        </tr>
                                        <tr>
                                            <td valign="top">Bathrooms:</td>
                                            <td valign="top">3 &amp; 1 half</td>
                                        </tr>
                                        <tr>
                                            <td valign="top">Study:</td>
                                            <td valign="top">Yes</td>
                                        </tr>
                                        <tr>
                                            <td valign="top">Garage:</td>
                                            <td valign="top">2</td>
                                        </tr>
                                        <tr>
                                            <td valign="top">Square Feet:</td>
                                            <td valign="top">3,995+</td>
                                        </tr>
                                        <tr>
                                            <td valign="top">Price:</td>
                                            <td valign="top">$525,900</td>
                                        </tr>
                                        <tr>
                                            <td colSpan="2" align="right">
                                                <a href="view-plan-elevation.html" className="btn btn-primary  btn-sm" id="btn-view">View Plan &amp; Elevations</a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>    
    </main>
    </DocumentMeta>
		);
	}
}

export default Product;