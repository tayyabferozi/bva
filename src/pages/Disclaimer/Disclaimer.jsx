import React from "react";
import { Link } from "react-router-dom";
import Section from "../../components/Section";

import "./Disclaimer.scss";

const Disclaimer = () => {
  return (
    <Section id="disclaimer">
      <h2 className="mb-10">Disclaimer</h2>

      <p>
        The data displayed on this website, including texts, photographs,
        illustrations, graphic material, (trade) names and logos, are the
        property of TBAuctions Netherlands B.V. and are protected by copyright,
        domain names, trademark rights, patents and other intellectual property
        rights. All intellectual property rights of the organizations affiliated
        with TBAuctions Netherlands B.V. are the exclusive property of
        TBAuctions Netherlands B.V.
      </p>

      <br />

      <p>
        The rights mentioned here are in no way transferred to (legal) persons
        who gain access to this website. It is not permitted to copy, distribute
        or in any way publish the content of this website, to reproduce it or to
        make it available to third parties in return for payment, without the
        prior written consent of TBAuctions Netherlands B.V. Unauthorised or
        improper use of this website or its content can constitute an
        infringement of the aforementioned rights in the broadest sense of the
        word.
      </p>

      <br />

      <p>
        The content of this website has been compiled with great care.
        Nevertheless, it is possible that certain information has become
        outdated over time. TBAuctions Netherlands B.V. is not liable in the
        event of obvious (writing)mistakes.
      </p>

      <br />

      <p>
        An overview of the organisations affiliated to TBAuctions Netherlands
        B.V. can be found in our{" "}
        <Link className="text-primary-1" to="/privacy">
          Privacy & Cookieverklaring
        </Link>
        .
      </p>
    </Section>
  );
};

export default Disclaimer;
