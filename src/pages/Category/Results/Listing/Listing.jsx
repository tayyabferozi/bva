import React, { useState } from "react";
import {
  ListUnorderedIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
} from "@primer/octicons-react";
import ReactPaginate from "react-paginate";

import AuctionItemCard from "../../../../components/AuctionItemCard";
import GridContainer from "../../../../components/GridContainer";
import "./Listing.scss";
import Button from "../../../../components/Button";

const items = [
  {
    img: "/assets/imgs/2.jpg",
    placeholder: "68434-2",
    text: "Bosch Serie 8 VarioPerfect Exclusi...",
    price: 135,
    bids: 20,
    time: "Today at 21:20",
  },
  {
    img: "/assets/imgs/10.jpg",
    placeholder: "68434-2",
    text: "AEG MSB2548C-M Magnetron",
    price: 121,
    bids: 20,
    time: "Today at 21:20",
  },
  {
    img: "/assets/imgs/19.jpg",
    placeholder: "68434-2",
    text: "ETNA FIV760WIT fornuis",
    price: 185,
    bids: 26,
    time: "Today at 21:01",
  },
  {
    img: "/assets/imgs/4.jpg",
    placeholder: "68434-2",
    text: "Siemens iQ300 varioPerfect Wasma...",
    price: 161,
    bids: 24,
    time: "Today at 21:24",
  },
  {
    img: "/assets/imgs/8.jpg",
    placeholder: "68434-2",
    text: "Miele T1 Eco Droger",
    price: 150,
    bids: 19,
    time: "Today at 21:30",
  },
  {
    img: "/assets/imgs/2.jpg",
    placeholder: "68434-2",
    text: "Bosch Serie 8 VarioPerfect Exclusi...",
    price: 135,
    bids: 20,
    time: "Today at 21:20",
  },
  {
    img: "/assets/imgs/10.jpg",
    placeholder: "68434-2",
    text: "AEG MSB2548C-M Magnetron",
    price: 121,
    bids: 20,
    time: "Today at 21:20",
  },
  {
    img: "/assets/imgs/19.jpg",
    placeholder: "68434-2",
    text: "ETNA FIV760WIT fornuis",
    price: 185,
    bids: 26,
    time: "Today at 21:01",
  },
  {
    img: "/assets/imgs/4.jpg",
    placeholder: "68434-2",
    text: "Siemens iQ300 varioPerfect Wasma...",
    price: 161,
    bids: 24,
    time: "Today at 21:24",
  },
  {
    img: "/assets/imgs/8.jpg",
    placeholder: "68434-2",
    text: "Miele T1 Eco Droger",
    price: 150,
    bids: 19,
    time: "Today at 21:30",
  },
  {
    img: "/assets/imgs/10.jpg",
    placeholder: "68434-2",
    text: "AEG MSB2548C-M Magnetron",
    price: 121,
    bids: 20,
    time: "Today at 21:20",
  },
  {
    img: "/assets/imgs/19.jpg",
    placeholder: "68434-2",
    text: "ETNA FIV760WIT fornuis",
    price: 185,
    bids: 26,
    time: "Today at 21:01",
  },
  {
    img: "/assets/imgs/2.jpg",
    placeholder: "68434-2",
    text: "Bosch Serie 8 VarioPerfect Exclusi...",
    price: 135,
    bids: 20,
    time: "Today at 21:20",
  },
  {
    img: "/assets/imgs/10.jpg",
    placeholder: "68434-2",
    text: "AEG MSB2548C-M Magnetron",
    price: 121,
    bids: 20,
    time: "Today at 21:20",
  },
  {
    img: "/assets/imgs/19.jpg",
    placeholder: "68434-2",
    text: "ETNA FIV760WIT fornuis",
    price: 185,
    bids: 26,
    time: "Today at 21:01",
  },
  {
    img: "/assets/imgs/4.jpg",
    placeholder: "68434-2",
    text: "Siemens iQ300 varioPerfect Wasma...",
    price: 161,
    bids: 24,
    time: "Today at 21:24",
  },
  {
    img: "/assets/imgs/8.jpg",
    placeholder: "68434-2",
    text: "Miele T1 Eco Droger",
    price: 150,
    bids: 19,
    time: "Today at 21:30",
  },
  {
    img: "/assets/imgs/2.jpg",
    placeholder: "68434-2",
    text: "Bosch Serie 8 VarioPerfect Exclusi...",
    price: 135,
    bids: 20,
    time: "Today at 21:20",
  },
  {
    img: "/assets/imgs/10.jpg",
    placeholder: "68434-2",
    text: "AEG MSB2548C-M Magnetron",
    price: 121,
    bids: 20,
    time: "Today at 21:20",
  },
  {
    img: "/assets/imgs/19.jpg",
    placeholder: "68434-2",
    text: "ETNA FIV760WIT fornuis",
    price: 185,
    bids: 26,
    time: "Today at 21:01",
  },
  {
    img: "/assets/imgs/4.jpg",
    placeholder: "68434-2",
    text: "Siemens iQ300 varioPerfect Wasma...",
    price: 161,
    bids: 24,
    time: "Today at 21:24",
  },
  {
    img: "/assets/imgs/8.jpg",
    placeholder: "68434-2",
    text: "Miele T1 Eco Droger",
    price: 150,
    bids: 19,
    time: "Today at 21:30",
  },
  {
    img: "/assets/imgs/10.jpg",
    placeholder: "68434-2",
    text: "AEG MSB2548C-M Magnetron",
    price: 121,
    bids: 20,
    time: "Today at 21:20",
  },
  {
    img: "/assets/imgs/19.jpg",
    placeholder: "68434-2",
    text: "ETNA FIV760WIT fornuis",
    price: 185,
    bids: 26,
    time: "Today at 21:01",
  },
];

const Listing = ({ setShowFilters }) => {
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  const [itemsPerPage, setItemsPerPage] = useState(5);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    // console.log(
    //   `User requested page number ${event.selected}, which is offset ${newOffset}`
    // );
    setItemOffset(newOffset);
  };

  return (
    <div id="category-results-listing">
      <div className="py-20">
        <span className="fs-22 fw-600">699</span>
        <span className="fs-22"> results</span>
      </div>

      <Button orange onClick={() => setShowFilters(true)}>
        Filter
      </Button>

      <div className="delimitated">
        <div className="page-size-wrapper">
          <div className="results-form-label">Page size:</div>
        </div>
        <div className="filters">
          <div className="filters-list-item">
            <div className="sort-form-label">Sort by:</div>
          </div>
          <div className="filters-list-item">
            <ListUnorderedIcon size={24} />
          </div>
        </div>
      </div>

      <div className="cards mt-40">
        <GridContainer>
          {items.map((el, idx) => {
            return (
              <div
                key={"auction-category-card" + idx}
                className="col-lg-4 col-sm-6"
              >
                <AuctionItemCard {...el} />
              </div>
            );
          })}
        </GridContainer>
      </div>
      <div className="paginate">
        <ReactPaginate
          className="pagination"
          breakLabel="..."
          nextLabel={<ArrowRightIcon />}
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel={<ArrowLeftIcon />}
          renderOnZeroPageCount={null}
        />
      </div>
    </div>
  );
};

export default Listing;
