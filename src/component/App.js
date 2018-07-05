import React, {Component} from 'react';
import '../style.css';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import Product from './Product';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/bootstrap/dist/css/bootstrap-grid.css';
import '../../node_modules/bootstrap/dist/css/bootstrap-reboot.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../../css/animate.css';
import '../../css/style.css';

class App extends Component {
	render() {
		return(
		<Router>
		<div>
		<Header />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/Product" component={Product} />
				<Route path="/About" component={About} />
				<Route render={() => <h1>Page not found</h1>} />
			</Switch>
		<Footer />
		</div>
		</Router>
		);
	}
}

export default App;