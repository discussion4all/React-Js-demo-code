import React, {Component} from 'react';

class Slider extends Component {
    render() {
        return(
        <main role="main" className="slider-section">

        <div id="myCarousel" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                <li data-target="#myCarousel" data-slide-to="1" className=""></li>
                <li data-target="#myCarousel" data-slide-to="2" className=""></li>
                <li data-target="#myCarousel" data-slide-to="3" className=""></li>
                <li data-target="#myCarousel" data-slide-to="4" className=""></li>
                <li data-target="#myCarousel" data-slide-to="5" className=""></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item">
                    <img className="img-fluid first-slide" src="images/slider-img-homepage3.jpg" alt="First slide" />
                    <div className="container">
                        <div className="carousel-caption text-left">
                            <div className="carousel-caption-border">
                                <h1>Example headline.</h1>
                                <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                                <p><a className="btn btn-lg btn-sldier" href="#" role="button">Sign up today</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="img-fluid second-slide" src="https://www.atlanticbuilders.com/images/HomepageImage/2.jpg" alt="Second slide" />
                    <div className="container">
                        <div className="carousel-caption">
                            <div className="carousel-caption-border">
                                <h1>Another example headline.</h1>
                                <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                                <p><a className="btn btn-lg btn-sldier" href="#" role="button">Learn more</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item active">
                    <img className="img-fluid third-slide" src="https://www.atlanticbuilders.com/images/HomepageImage/3.jpg" alt="Third slide" />
                    <div className="container">
                        <div className="carousel-caption text-right">
                            <div className="carousel-caption-border">
                                <h1>One more for good measure.</h1>
                                <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                                <p><a className="btn btn-lg btn-sldier" href="#" role="button">Browse gallery</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="img-fluid four-slide" src="images/slider-img-homepage.jpg" alt="Four slide" />
                    <div className="container">
                        <div className="carousel-caption text-left">
                            <div className="carousel-caption-border">
                                <h1>Example headline.</h1>
                                <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                                <p><a className="btn btn-lg btn-sldier" href="#" role="button">Sign up today</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="img-fluid five-slide" src="images/slider-img-homepage2.jpg" alt="Five slide" />
                    <div className="container">
                        <div className="carousel-caption text-left">
                            <div className="carousel-caption-border">
                                <h1>Good headline.</h1>
                                <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                                <p><a className="btn btn-lg btn-sldier" href="#" role="button">Sign up today</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="img-fluid six-slide" src="images/slider-img-homepage4.jpg" alt="Five slide" />
                    <div className="container">
                        <div className="carousel-caption text-left">
                            <div className="carousel-caption-border">
                                <h1>Good headline.</h1>
                                <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                                <p><a className="btn btn-lg btn-sldier" href="#" role="button">Sign up today</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="carousel-next-pre">
                <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    </main>
        );
    }
}

export default Slider;
 