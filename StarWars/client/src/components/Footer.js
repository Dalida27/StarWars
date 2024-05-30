import React from 'react';
import './Footer.css';  // Make sure the path is correct

function Footer() {
  return (
    <div className='mainfooter'>
        <footer className="site-footer pt-5">
            <div className="container">
              <div className="row">
                <div className="col-sm-12 col-md-6">
                  <h6>About</h6>
                  <p className="text-justify">The influence of Star Wars extends beyond cinema into various media including books, television series, comics, and video games, creating a mythology that continually expands. This universe not only explores complex themes such as freedom, destiny, and conflict but also resonates with cultural and historical parallels, making it a timeless saga that invites endless exploration and interpretation.</p>
                </div>
                <div className="col-xs-6 col-md-3">
                  <h6>Quick Links</h6>
                  <ul className="footer-links">
                    <li><a href="/aboutus">About</a></li>
                    <li><a href="/home">To objects</a></li>
                  </ul>
                </div>
              </div>
              <hr />
            </div>
            <div className="container">
              <div className="row">
                <div className="col-md-8 col-sm-6 col-xs-12">
                  <p className="copyright-text">Copyright &copy; 2024 All Rights Reserved by 
                  <a href="/home"> Star Wars</a>.
                  </p>
                </div>
              </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer;
