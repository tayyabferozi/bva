import React from "react";

import GridContainer from "../../../components/GridContainer";
import Section from "../../../components/Section";
import "./Details.scss";

const Details = () => {
  return (
    <Section id="auction-details">
      <GridContainer className="px-0" rowClassName="justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <h4>Lot description</h4>
            <div className="my-10">
              <strong>Condition: </strong> Graded
            </div>
            <div className="my-10">
              <strong>Status: </strong> Working
            </div>
            <div className="my-10">
              <strong>Appearance: </strong> Not applicable
            </div>
            <div className="my-10">
              <strong>Packaging: </strong> Not applicable
            </div>
            <div className="my-10">
              <strong>Quantity: </strong> 1
            </div>
            <div className="my-10">
              <strong>Additional information: </strong> Afmetingen binnenkant
              van de bak 410 x 205 x 230cm
            </div>
            <div className="my-20">de vrachtwagen is o.a. voorzien van:</div>

            <div className="my-20">
              cent. deurvergrendeling
              <br />
              ergo comfort bestuurderstoel met vering
              <br />
              2 sleutels aanwezig
              <br />
              laadklep
              <br />
              spoiler boven de cabine
            </div>

            <div className="my-20">
              2 zitplaasen
              <br />
              spiegels elekt. verstelbaar
              <br />
              airco
              <br />
              elekt. ramen
              <br />
              led verlichting in de bak
            </div>

            <div className="my-20">
              airbag beide kanten
              <br />
              alarm
            </div>

            <div className="my-20">
              cruisecontroll
              <br />
              limit controll
              <br />
              boord computer
            </div>

            <div className="my-20">
              media / navigatie center v.v.
              <br />
              touchscreen
              <br />
              media
              <br />
              navigatie
              <br />
              telefoon
              <br />
              radio
            </div>

            <div className="my-20">
              spraak ondersteuning
              <br />
              apple carplay
              <br />
              bleutooth
            </div>
          </div>
        </div>
      </GridContainer>
    </Section>
  );
};

export default Details;
