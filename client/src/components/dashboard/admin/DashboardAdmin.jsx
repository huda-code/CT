import AverageChart from "./AverageChart";
import {
  CForm,
  CRow,
  CFormLabel,
  CCol,
  CFormInput,
  CButton,
} from "@coreui/react";
const DashboardAdmin = () => {
  return (
    <>
      <div style={{ backgroundColor: "#f4d49d" }}>
        <h1>Admin Dashboard</h1>
        <div>
          <AverageChart />
        </div>
        <CForm>
          <CCol sm={3}>
            <CFormLabel
              className="visually-hidden"
              htmlFor="specificSizeInputName"
            >
              Name
            </CFormLabel>
            <CFormInput id="specificSizeInputName" placeholder="Name " />
          </CCol>



          <CRow className="g-3">
  <CCol sm >
    <CFormInput placeholder="Assignment 1" aria-label="Assignment 1"/>
  </CCol>
  <CCol sm>
    <CFormInput placeholder="Assignment 1" aria-label="Assignment 1"/>
  </CCol>
  <CCol sm>
    <CFormInput placeholder="Bonus" aria-label="Bonus"/>
  </CCol>
</CRow>

<CRow className="g-3">
  <CCol sm >
    <CFormInput placeholder="Blogs" aria-label="Blogs"/>
  </CCol>
  <CCol sm>
    <CFormInput placeholder="Attendence" aria-label="Attendence"/>
  </CCol>
  <CCol sm>
    <CFormInput placeholder="Total" aria-label="Total"/>
  </CCol>
</CRow>

          <CButton type="submit">submit</CButton>
        </CForm>
      </div>
    </>
  );
};

export default DashboardAdmin;

