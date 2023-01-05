import React from "react";
import { Link } from "react-router-dom";
import { StarIcon, StarFillIcon } from "@primer/octicons-react";

import GridContainer from "../GridContainer";
import Section from "../Section";
import "./Footer.scss";
import DownloadBtns from "../DownloadBtns";
import Button from "../Button";

const Footer = () => {
  return (
    <Section id="footer">
      <GridContainer noPx0>
        <div className="col-md-3">
          <h5>Service &amp; contact</h5>

          <div className="links">
            <Link to="/">Contact &amp; questions</Link>
            <Link to="/">Register</Link>
            <Link to="/">Login</Link>
          </div>
        </div>
        <div className="col-md-3">
          <h5>More BVA Auctions</h5>

          <div className="links">
            <Link to="/">About us</Link>
            <Link to="/">Auction something yourself?</Link>
            <Link to="/">Careers</Link>
          </div>
        </div>
        <div className="col-md-3">
          <h5>More BVA Auctions</h5>

          <div className="ratings my-30">
            <StarFillIcon size={20} />
            <StarFillIcon size={20} />
            <StarFillIcon size={20} />
            <StarFillIcon size={20} />
            <StarIcon size={20} />
          </div>

          <DownloadBtns />
        </div>
        <div className="col-md-3">
          <h5>More BVA Auctions</h5>

          <p className="my-3">
            Latest auctions and personal lots in your mailbox?
          </p>

          <Button small orange>
            Register
          </Button>
        </div>
      </GridContainer>

      <div className="bottom">
        <Link to="/">
          <img src="/assets/vectors/logo-white-payoff.svg" alt="logo" />
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

        <div className="extra-links">
          <Link to="/">
            <img src="/assets/vectors/thuiswinkel.svg" alt="thuiswinkel" />
            Thuiswinkel waarborg
          </Link>
          <Link to="/">Privacy and Cookie conditions</Link>
          <Link to="/">General terms and conditions</Link>
          <Link to="/">Disclaimer</Link>
          <Link to="/">&copy; BVA Auctions 2013</Link>
        </div>
      </div>
    </Section>
  );
};

export default Footer;
