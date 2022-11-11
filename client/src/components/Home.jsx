import React from "react";
import homebg from "../assets/homebg.jpg";
import { CImage } from "@coreui/react";
import { CRow, CContainer, CCol, CButton } from "@coreui/react";
import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <CContainer style={{ marginTop: "5%" }}>
        <CRow>
          <CCol
            // style={{ border: "4px solid red" }}
            xs={{ cols: "auto", row: "auto" }}
            sm={{ cols: "auto", row: "auto" }}
            md={{ cols: "auto", row: "auto" }}
          >
            <div className="container text-center">
              <div style={{ marginTop: "20%" }} className="row">
                <div className="home1 ">
                  <p className="fs-2 fw-semibold text-start">
                    <span role="img" aria-label="note">
                      📝
                    </span>
                    Class Tracker
                  </p>
                </div>

                <p className="fs-5 text-start fw-normal text-break">
                  Track all your assignments, PR's, attendence and progress, so you will be always updated with your progress <br></br>
                 Features: - Access to your Individual performance, know where you stand in the cohort.
                </p>
                {/* <p className="fs-5 text-start fw-normal text-break">
                Track all your assignments, PR's, attendence and progress, so you will be always updated with your progress
                 Features: - Access to your Individual performance, know where you stand in the cohort.
                </p> */}
              </div>
            </div>
            {/* <Link to="/register">
              <CButton
                className="btn "
                style={{
                  color: "white",
                  backgroundColor: "#FF735C",
                  border: "2px solid #FF735C",
                  margin: "10px",
                  cursor: "pointer",
                  marginBottom: "30px",
                  boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)",
                }}
                color="info"
                size="lg"
              >
                Sign Up
              </CButton>
            </Link> */}
            <Link to="/login">
              <CButton
                className="btn"
                color="info"
                style={{
                  color: "white",
                  backgroundColor: "#FF735C",
                  border: "2px solid #FF735C",
                  margin: "10px",
                  cursor: "pointer",
                  marginBottom: "30px",
                  boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)",
                }}
                size="lg"
              >
                Login
              </CButton>
            </Link>
          </CCol>
          <CCol
            // style={{ border: "4px solid red" }}
            xs={{ cols: "auto", row: "auto" }}
            sm={{ cols: "auto", row: "auto" }}
            md={{ cols: "auto", row: "auto" }}
          >
            <CImage className="home2" fluid src={homebg} />
          </CCol>
        </CRow>
      </CContainer>
    </>
  );
}

export default Home;
