// eslint-disable-next-line import/no-extraneous-dependencies
import { Link, Routes, Route } from 'react-router-dom';
import './Header.css';
import Calculator from '../Calculator';
import Quote from '../Quotes';
import Home from '../Home/Home';

const Header = () => (
  <>
    <nav className="headerContainer">
      <h1>Math magicians</h1>
      <ul className="link-holder">
        <li className="links"><Link to="/">Home</Link></li>
        <li className="links"><Link to="/Calculator">Calculator</Link></li>
        <li className="links"><Link to="/Quotes">Quote</Link></li>
      </ul>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Calculator" element={<Calculator />} />
      <Route path="/Quotes" element={<Quote />} />
    </Routes>
  </>
);

export default Header;
