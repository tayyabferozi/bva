import React from "react";
import { Link } from "react-router-dom";
import { StarIcon, StarFillIcon } from "@primer/octicons-react";
import Fade from "react-reveal/Fade";

import GridContainer from "../GridContainer";
import Section from "../Section";
import "./Footer.scss";
import DownloadBtns from "../DownloadBtns";
import Button from "../Button";

const Footer = () => {
  return (
    <Section id="footer">
      <GridContainer className="px-0">
        <div className="col-md-3">
          <Fade bottom>
            <h5>Service &amp; contact</h5>
          </Fade>

          <Fade cascade delay={500} bottom>
            <div className="links">
              <Link to="/">Contact &amp; questions</Link>
              <Link to="/register">Register</Link>
              <Link to="/login">Login</Link>
            </div>
          </Fade>
        </div>
        <div className="col-md-3">
          <Fade bottom>
            <h5>More BVA Auctions</h5>
          </Fade>

          <Fade cascade delay={1000} bottom>
            <div className="links">
              <Link to="/about-us">About us</Link>
              <Link to="/become-a-seller">Auction something yourself?</Link>
              <Link to="/careers">Careers</Link>
            </div>
          </Fade>
        </div>
        <div className="col-md-3">
          <Fade bottom>
            <h5>More BVA Auctions</h5>
          </Fade>

          <Fade cascade delay={1500} bottom>
            <div className="ratings my-30">
              <StarFillIcon size={20} />
              <StarFillIcon size={20} />
              <StarFillIcon size={20} />
              <StarFillIcon size={20} />
              <StarIcon size={20} />
            </div>
          </Fade>

          <Fade delay={1750} bottom>
            <DownloadBtns />
          </Fade>
        </div>
        <div className="col-md-3">
          <Fade bottom>
            <h5>More BVA Auctions</h5>
          </Fade>

          <Fade cascade delay={2000} bottom>
            <div>
              <p className="my-3">
                Latest auctions and personal lots in your mailbox?
              </p>

              <Button className="d-inline-flex" to="/register" small orange>
                Register
              </Button>
            </div>
          </Fade>
        </div>
      </GridContainer>

      <Fade cascade delay={2000} bottom>
        <div className="bottom">
          <Link to="/">
            Logo
            {/* <img src="/assets/vectors/logo-white-payoff.svg" alt="logo" /> */}
          </Link>

          <div className="social">
            <a rel="noreferrer" target="_blank" href="www.facebook.com">
              <img src="/assets/imgs/facebook.png" alt="facebook" />
            </a>
            <a rel="noreferrer" target="_blank" href="www.facebook.com">
              <img src="/assets/imgs/youtube.png" alt="youtube" />
            </a>
            <a rel="noreferrer" target="_blank" href="www.facebook.com">
              <img src="/assets/imgs/linkedin.png" alt="linkedin" />
            </a>
            <a rel="noreferrer" target="_blank" href="www.facebook.com">
              <img src="/assets/imgs/instagram.png" alt="instagram" />
            </a>
          </div>

          <Fade cascade delay={3000} bottom>
            <div className="extra-links">
              {/* <Link to="/">
            <img src="/assets/vectors/thuiswinkel.svg" alt="thuiswinkel" />
            Thuiswinkel waarborg
          </Link> */}

              <Link to="/privacy">Privacy and Cookie conditions</Link>
              <Link to="/terms">General terms and conditions</Link>
              <Link to="/disclaimer">Disclaimer</Link>
              <div>&copy; BVA Auctions 2013</div>
            </div>
          </Fade>
        </div>
      </Fade>
    </Section>
  );
};

export default Footer;
