import React from "react";
import {
  CNavbar,
  CContainer,
  CNavbarToggler,
  COffcanvas,
  COffcanvasHeader,
  COffcanvasTitle,
  CCloseButton,
  COffcanvasBody,
  CNavbarNav,
  CNavItem,
  CNavLink,
  CForm,
  CFormInput,
  CButton,
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
  CDropdownDivider,
  
} from "@coreui/react";
import { useState } from "react";
function Navbar() {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <CNavbar colorScheme="light" className="bg-light">
        <CContainer fluid>
          <CNavbarToggler
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
            onClick={() => setVisible(!visible)}
          />

          <COffcanvas
            id="offcanvasNavbar"
            placement="start"
            portal={false}
            visible={visible}
            onHide={() => setVisible(false)}
          >
            <COffcanvasHeader>
              <COffcanvasTitle>
                <p className="fs-3  text-decoration-none">
                  <span role="img" aria-label="alarm">
                    ⏰
                  </span>
                  Class Traker
                </p>
              </COffcanvasTitle>
              <CCloseButton
                className="text-reset"
                onClick={() => setVisible(false)}
              />
            </COffcanvasHeader>
            <COffcanvasBody>
              <CNavbarNav>
                <CNavItem>
                  <CNavLink href="/" active>
                    <p className="fs-4  text-decoration-none">
                      <span role="img" aria-label="home">
                        🏠
                      </span>
                      Home
                    </p>
                  </CNavLink>
                </CNavItem>
                {/* <CNavItem>
                  <CNavLink href="/register">
                    <p className="fs-4  text-decoration-none">
                      <span role="img" aria-label="note">
                        📝
                      </span>
                      Register
                    </p>
                  </CNavLink>
                </CNavItem> */}

                <CNavItem>
                  <CNavLink href="/login">
                    <p className="fs-4  text-decoration-none">
                      <span role="img" aria-label="lock">
                        🔐
                      </span>
                      Login
                    </p>
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink href="/policy">
                    <p className="fs-4  text-decoration-none">
                      <span role="img" aria-label="paper">
                        📃
                      </span>
                      Privacy Policy
                    </p>
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink href="/help">
                    <p className="fs-4  text-decoration-none">
                    <span role="img" aria-label="help">
                    💁
                  </span>
                       Help</p>
                  </CNavLink>
                </CNavItem>
              </CNavbarNav>
              <CForm className="d-flex">
                <CFormInput
                  type="search"
                  className="me-2"
                  placeholder="Search"
                />
                <CButton type="submit" color="success" variant="outline">
                  Search
                </CButton>
              </CForm> 
               <CDropdown variant="nav-item" popper={false}>
                  <CDropdownToggle color="secondary">
                    Dropdown button
                  </CDropdownToggle>
                  <CDropdownMenu>
                    <CDropdownItem href="#">Action</CDropdownItem>
                    <CDropdownItem href="#">Another action</CDropdownItem>
                    <CDropdownDivider />
                    <CDropdownItem href="#">Something else here</CDropdownItem>
                  </CDropdownMenu>
                </CDropdown>
            </COffcanvasBody>
          </COffcanvas>
        </CContainer>
      </CNavbar>
    </>
  );
}

export default Navbar;
