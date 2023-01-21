import clsx from "clsx";
import React, { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";

import isEmpty from "../../utils/is-empty";

const navItems = [
  {
    label: "Menu",
    heading: true,
  },
  {
    // icon: "bi bi-grid-fill",
    icon: "bi bi-arrow-repeat",
    label: "Transactions",
    link: "/transactions",
  },
  {
    icon: "bi bi-currency-dollar",
    label: "Auctions",
    dir: "/auctions",
    subMenu: [
      {
        label: "All Auctions",
        link: "/auctions/all-auctions",
      },
      {
        label: "Running Auctions",
        link: "/auctions/running-auctions",
      },
      {
        label: "Closed Auctions",
        link: "/auctions/closed-auctions",
      },
      {
        label: "Upcoming Auctions",
        link: "/auctions/upcoming-auctions",
      },
    ],
  },
  {
    icon: "bi bi-trophy-fill",
    label: "Winners",
    link: "/winners",
  },
  {
    icon: "bi bi-person-circle",
    label: "Users",
    link: "/users",
  },
  {
    label: "Support",
    heading: true,
  },
  {
    icon: "bi bi-exclamation-circle",
    label: "E-Tickets",
    link: "/e-ticket",
  },
];

const AdminDashboardLayout = () => {
  const location = useLocation();

  const addScript = (src, id) => {
    const el = document.getElementById(id);
    if (el) return;
    const script = document.createElement("script");
    script.src = src;
    script.charset = "utf-8";
    script.async = true;
    script.id = id;
    document.head.appendChild(script);
  };

  // const removeScript = (id) => {
  //   const el = document.getElementById(id);

  //   if (el) el.remove();
  // };

  useEffect(() => {
    addScript("/assets/js/initTheme.js", "initTheme");
    addScript("/assets/js/bootstrap.js", "bootstrap");
    addScript("/assets/js/mazer.js", "mazer");
    addScript("/assets/js/app.js", "appMain");

    return () => {
      // removeScript("initTheme");
      // removeScript("bootstrap");
      // removeScript("mazer");
      // removeScript("appMain");
    };
  }, []);

  return (
    <div id="app">
      <div id="sidebar" className="active">
        <div className="sidebar-wrapper active">
          <div className="sidebar-header position-relative">
            <div className="d-flex justify-content-between align-items-center">
              <div className="logo">
                <Link to="/">
                  <img src="/assets/vectors/logo.svg" alt="Logo" />
                </Link>
              </div>
              <div className="theme-toggle d-flex gap-2 align-items-center mt-2">
                <svg
                  // xmlns="http://www.w3.org/2000/svg"
                  // xmlns:xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  className="iconify iconify--system-uicons"
                  width="20"
                  height="20"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 21 21"
                >
                  <g
                    fill="none"
                    fillRule="evenodd"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path
                      d="M10.5 14.5c2.219 0 4-1.763 4-3.982a4.003 4.003 0 0 0-4-4.018c-2.219 0-4 1.781-4 4c0 2.219 1.781 4 4 4zM4.136 4.136L5.55 5.55m9.9 9.9l1.414 1.414M1.5 10.5h2m14 0h2M4.135 16.863L5.55 15.45m9.899-9.9l1.414-1.415M10.5 19.5v-2m0-14v-2"
                      opacity=".3"
                    ></path>
                    <g transform="translate(-210 -1)">
                      <path d="M220.5 2.5v2m6.5.5l-1.5 1.5"></path>
                      <circle cx="220.5" cy="11.5" r="4"></circle>
                      <path d="m214 5l1.5 1.5m5 14v-2m6.5-.5l-1.5-1.5M214 18l1.5-1.5m-4-5h2m14 0h2"></path>
                    </g>
                  </g>
                </svg>
                <div className="form-check form-switch fs-6">
                  <input
                    className="form-check-input me-0"
                    type="checkbox"
                    id="toggle-dark"
                    style={{ cursor: "pointer" }}
                  />
                  <label className="form-check-label"></label>
                </div>
                <svg
                  // xmlns="http://www.w3.org/2000/svg"
                  // xmlns:xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  className="iconify iconify--mdi"
                  width="20"
                  height="20"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="m17.75 4.09l-2.53 1.94l.91 3.06l-2.63-1.81l-2.63 1.81l.91-3.06l-2.53-1.94L12.44 4l1.06-3l1.06 3l3.19.09m3.5 6.91l-1.64 1.25l.59 1.98l-1.7-1.17l-1.7 1.17l.59-1.98L15.75 11l2.06-.05L18.5 9l.69 1.95l2.06.05m-2.28 4.95c.83-.08 1.72 1.1 1.19 1.85c-.32.45-.66.87-1.08 1.27C15.17 23 8.84 23 4.94 19.07c-3.91-3.9-3.91-10.24 0-14.14c.4-.4.82-.76 1.27-1.08c.75-.53 1.93.36 1.85 1.19c-.27 2.86.69 5.83 2.89 8.02a9.96 9.96 0 0 0 8.02 2.89m-1.64 2.02a12.08 12.08 0 0 1-7.8-3.47c-2.17-2.19-3.33-5-3.49-7.82c-2.81 3.14-2.7 7.96.31 10.98c3.02 3.01 7.84 3.12 10.98.31Z"
                  ></path>
                </svg>
              </div>
              <div className="sidebar-toggler x">
                <a href="#" className="sidebar-hide d-xl-none d-block">
                  <i className="bi bi-x bi-middle"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="sidebar-menu">
            <ul className="menu">
              {/* <li className="sidebar-title">Menu</li> */}

              {navItems.map((el, idx) => {
                const link = "/admin" + (el.link ? el.link : "");

                if (el.heading) {
                  return (
                    <li
                      key={"sidebar-nav-item" + idx}
                      className="sidebar-title"
                    >
                      {el.label}
                    </li>
                  );
                }

                return (
                  <li
                    key={"sidebar-nav-item" + idx}
                    className={clsx(
                      el.heading ? "sidebar-title" : "sidebar-item",
                      !isEmpty(el.subMenu) && "has-sub",
                      location.pathname.includes(el.link) && "active",
                      !isEmpty(el.subMenu) &&
                        el.dir &&
                        location.pathname.includes(el.dir) &&
                        "active"
                    )}
                  >
                    <Link to={link} className="sidebar-link">
                      <i className={el.icon}></i>
                      <span>{el.label}</span>
                    </Link>
                    {!isEmpty(el.subMenu) && (
                      <ul className="submenu">
                        {el.subMenu.map((el2, idx2) => {
                          const link2 = "/admin" + (el2.link ? el2.link : "");

                          return (
                            <li
                              key={"sub-menu" + idx + idx2}
                              className={clsx(
                                "submenu-item",
                                location.pathname === link2 && "active"
                              )}
                            >
                              <Link to={link2}>{el2.label}</Link>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </li>
                );
              })}

              {/* <li className="sidebar-item has-sub">
                <a href="#" className="sidebar-link">
                  <i className=""></i>
                  <span>Components</span>
                </a>
                <ul className="submenu">
                  <li className="submenu-item">
                    <a href="component-accordion.html">Accordion</a>
                  </li>
                  <li className="submenu-item">
                    <a href="component-alert.html">Alert</a>
                  </li>
                  <li className="submenu-item">
                    <a href="component-badge.html">Badge</a>
                  </li>
                  <li className="submenu-item">
                    <a href="component-breadcrumb.html">Breadcrumb</a>
                  </li>
                  <li className="submenu-item">
                    <a href="component-button.html">Button</a>
                  </li>
                  <li className="submenu-item">
                    <a href="component-card.html">Card</a>
                  </li>
                  <li className="submenu-item">
                    <a href="component-carousel.html">Carousel</a>
                  </li>
                  <li className="submenu-item">
                    <a href="component-collapse.html">Collapse</a>
                  </li>
                  <li className="submenu-item">
                    <a href="component-dropdown.html">Dropdown</a>
                  </li>
                  <li className="submenu-item">
                    <a href="component-list-group.html">List Group</a>
                  </li>
                  <li className="submenu-item">
                    <a href="component-modal.html">Modal</a>
                  </li>
                  <li className="submenu-item">
                    <a href="component-navs.html">Navs</a>
                  </li>
                  <li className="submenu-item">
                    <a href="component-pagination.html">Pagination</a>
                  </li>
                  <li className="submenu-item">
                    <a href="component-progress.html">Progress</a>
                  </li>
                  <li className="submenu-item">
                    <a href="component-spinner.html">Spinner</a>
                  </li>
                  <li className="submenu-item">
                    <a href="component-toasts.html">Toasts</a>
                  </li>
                  <li className="submenu-item">
                    <a href="component-tooltip.html">Tooltip</a>
                  </li>
                </ul>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default AdminDashboardLayout;
