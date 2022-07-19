import React from 'react'

function NavHeader() {
  return (
    <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light text-gris">
            <div className="container-fluid">
              <div className="d-flex align-items-center ">
                <a className="navbar-brand" href="/index.html">
                  <h1 className="font-size-0 m-0">
                    Banu <img src="/src/img/logo.png" alt="logo" />
                  </h1>
                </a>
              </div>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav m-auto mt-0 me-auto mb-2 mb-lg-0 font-size-14 ">
                  <li className="nav-item">
                    <a
                      className="nav-link dropdown-toggle active"
                      href="src/pages/home.jsx"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Home
                    </a>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link dropdown-toggle"
                      href="src/pages/explore.jsx"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Explore
                    </a>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link"
                      href="/activity.html"
                      aria-current="page"
                    >
                      Activity
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link dropdown-toggle"
                      href="/blog.html"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Comunity
                    </a>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link dropdown-toggle"
                      href="/author.html"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Pages
                    </a>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item ">
                    <a
                      className="nav-link"
                      href="/contact.html"
                      aria-current="page"
                    >
                      Contact
                    </a>
                  </li>
                </ul>

                <form className="d-flex">
                  <input
                    className="form-control me-2 d-none"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <i className="bi bi-search m-auto  me-4 "></i>
                  <a
                    href="/wallet.html"
                    className="btn btn-outline-secondary font-size-14 text-decoration-none"
                    type="submit"
                  >
                    Connect Wallet
                  </a>
                </form>
              </div>
            </div>
          </nav>
        </div>
  )
}

export default NavHeader