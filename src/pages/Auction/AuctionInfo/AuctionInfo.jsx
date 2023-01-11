import React, { useState } from "react";
import {
  ClockIcon,
  HeartFillIcon,
  ChevronRightIcon,
} from "@primer/octicons-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Grid, Navigation, Thumbs } from "swiper";
import { Link } from "react-router-dom";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import Section from "../../../components/Section";
import GridContainer from "../../../components/GridContainer";
import Button from "../../../components/Button";
import Modal from "../../../components/Modal";
import "./AuctionInfo.scss";

const images = [
  "/assets/imgs/2-2.jpg",
  "/assets/imgs/2-1.jpg",
  "/assets/imgs/22w3r5.jpg",
  "/assets/imgs/2-3.jpg",
  "/assets/imgs/2-5.jpg",
  "/assets/imgs/2-6.jpg",
];

const AuctionInfo = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [pickupModalActive, setPickupModalActive] = useState(false);

  return (
    <>
      {pickupModalActive && (
        <Modal
          closeModal={() => {
            setPickupModalActive(false);
          }}
        >
          <GridContainer>
            <div className="col-md-6">
              <h3>View & pickupdays</h3>

              <div className="mt-20 mb-10">
                <strong>Viewing days</strong>
              </div>

              <p>Mo 02 Jan 2023 from 14:00 till 16:00</p>
              <p>Address: Touwslagerij 13A 4762 AT Zevenbergen NL</p>

              <p>Wij adviseren je van de kijkdag gebruik te maken.</p>
            </div>

            <div className="col-md-6">
              <h3>&nbsp;</h3>

              <div className="mt-20 mb-10">
                <strong>Pickup days</strong>
              </div>

              <p>We 18 Jan 2023 from 13:00 till 16:00</p>
              <p>Address: Touwslagerij 13A 4762 AT Zevenbergen NL</p>

              <p>
                Betaal eenvoudig met iDeal via uw BVA Account. Het is niet
                mogelijk om contant of per PIN te betalen.
              </p>
              <p>
                Wanneer je de kavel in ontvangst neemt vragen wij je te tekenen
                voor een goede ontvangst. Daarmee geef je aan dat je de kavel
                juist en compleet hebt ontvangen. Controleer bij ontvangst dan
                ook altijd je kavel, ook als deze in een verpakking zit.
              </p>
              <p>
                Mocht je zelf niet kunnen, dan mag iemand anders de kavel namens
                jou ophalen (op vertoon van de factuur) of regel hier alvast een
                transporteur.
              </p>
            </div>
          </GridContainer>
        </Modal>
      )}
      <Section id="auction-info">
        <GridContainer>
          <div className="col-md-6 col-lg-7">
            <Swiper
              style={{
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff",
              }}
              loop={true}
              spaceBetween={10}
              navigation={true}
              thumbs={{
                swiper:
                  thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
              }}
              modules={[Navigation, Thumbs]}
              className="mySwiper2"
            >
              {images.map((el, idx) => {
                return (
                  <SwiperSlide key={"swiper-auction-img" + idx}>
                    <div className="img-wrap">
                      <img src={el} />
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
            <Swiper
              onSwiper={setThumbsSwiper}
              loop={true}
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[Navigation, Thumbs]}
              className="mySwiper"
            >
              {images.map((el, idx) => {
                return (
                  <SwiperSlide key={"swiper-thumbnails" + idx}>
                    <img src={el} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          <div className="col-md-6 col-lg-5">
            <div className="info">
              <div className="head">
                <ClockIcon size={24} />
                Auction closed
              </div>
              <div className="body">
                <div className="bidding-info">
                  <div className="bidding-numbers">
                    <div className="bidding-numbers-items">
                      <div className="bidding-numbers-item">
                        <div className="bid-status-label">Last bid</div>
                        <strong className="fs-24">€10</strong>
                      </div>

                      <div className="bidding-numbers-item">
                        <div className="bid-status-label">Bids</div>
                        <strong className="fs-24">0</strong>
                      </div>
                    </div>

                    <Link className="costs">Excl. additional costs</Link>
                  </div>
                  <div className="bidding">
                    <div className="mb-2">
                      <strong>Bid from</strong>
                    </div>
                  </div>
                  <div className="bidding-container">
                    <div className="bidding-controls">
                      <div className="bidding-control">
                        <div className="input-currency">
                          <input type="number" />
                          <div className="label">€</div>
                        </div>

                        <Button orange>Check bid</Button>
                      </div>

                      <button className="heart">
                        <HeartFillIcon size={16} />
                      </button>
                    </div>
                  </div>
                  <div className="fs-14">
                    Your bid including additional costs is €21.24
                  </div>
                </div>

                <div className="bid-history">
                  <div className="mb-10">
                    <strong>Bid History:</strong>
                  </div>

                  <table>
                    <tr>
                      <td>
                        <strong>Bidder #5</strong>
                      </td>
                      <td>11-01-23 06:46</td>
                      <td>
                        <strong>€14,500</strong>
                      </td>
                    </tr>
                    <tr>
                      <td>Bidder #1</td>
                      <td>11-01-23 01:03</td>
                      <td>€14,500</td>
                    </tr>
                    <tr>
                      <td>Bidder #3</td>
                      <td>10-01-23 19:16</td>
                      <td>€14,500</td>
                    </tr>
                  </table>
                  <div className="history-info mt-10">
                    <div className="show-more">
                      <Link to="#0" className="text-primary-1">
                        Show all bids(16)
                      </Link>
                    </div>
                    <div>Last update: 19:52:51</div>
                  </div>
                </div>

                <div className="lot-info">
                  <div>
                    <div>Winning bid</div>
                    <div className="my-1">
                      <strong>€15.00</strong>
                    </div>
                  </div>
                  <div className="lot-row">
                    <div className="lot-col">Location:</div>
                    <div className="lot-col">
                      <a className="text-primary-1" href="#0">
                        Amsterdam, Netherlands
                      </a>
                    </div>

                    <div className="lot-col">Pickup:</div>
                    <div className="lot-col">
                      Pickup on 17 January
                      <br />
                      <Link className="text-primary-1" href="#0">
                        View delivery options
                      </Link>
                    </div>

                    <div className="lot-col">Lot number:</div>
                    <div className="lot-col">68423-374</div>

                    <div className="lot-col">Lot type:</div>
                    <div className="lot-col">
                      <Link to="#0">21% VAT - Normal Lot</Link>
                    </div>

                    <div className="lot-col">Seller:</div>
                    <div className="lot-col">Curator</div>

                    <div className="lot-col">Auction:</div>
                    <div className="lot-col">
                      <Link className="text-primary-1" to="#0">
                        go to the auction
                      </Link>
                    </div>

                    <div className="lot-col">Organizer:</div>
                    <div className="lot-col">BVA Auctions</div>
                  </div>
                  <div className="py-2">
                    BVA Auctions is not the seller. We auction and bill as a
                    mediator on behalf of a third party, the seller.
                  </div>
                </div>

                <div
                  className="info-line"
                  onClick={() => {
                    setPickupModalActive(true);
                  }}
                >
                  Viewing &amp; collection days <ChevronRightIcon size={24} />
                </div>
                <div className="info-line">
                  Auction information <ChevronRightIcon size={24} />
                </div>
              </div>
            </div>
          </div>
        </GridContainer>
      </Section>
    </>
  );
};

export default AuctionInfo;
