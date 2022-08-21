import { Link } from 'react-router-dom';
import mainLogo from'../logos/logo.svg';

function Nav() {

  return (
    <nav className="navbar navbar-expand-lg bg-dark p-2">
        <div className="collapse navbar-collapse">
          <div className="navbar-nav container align-items-end">
            <Link to="/" className="navbar-brand">
              <div className="flex-d align-items-center">
                <img src={mainLogo} alt="" width="72" height="72" />
                <span className="ms-2" style={{fontWeight:600, color:"gold"}}>Movie Time</span>
              </div>
            </Link>
            <Link to="/" className="nav-link active text-white ms-2">Home</Link>
            <Link to="/about" className="nav-link text-white">About</Link>
            <Link to="/suggestions" className="nav-link text-white">Suggestions</Link>
          </div>
      </div>
    </nav>
  );
}

export default Nav;
