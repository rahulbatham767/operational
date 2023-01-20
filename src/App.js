import Navbar from "./Compoents/Navbar";
import Header from "./Compoents/Header";
import './Compoents/style.css'
import Charts from "./Compoents/Charts";
import React from "react";

function App() {


  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div className="row my-5 mx-auto">
          <Header title="Created" subtitle="593" text="to yesterday" dec="9%" />
          <Header title="Unassigned" subtitle="7" text="to yesterday" dec="30%" />
          <Header title="Open" subtitle="46" text="to yesterday" dec="13%" />
          <Header title="Solved" subtitle="526" text="to yesterday" dec="8%" />
          <Header title="Escalated" subtitle="2" text="to yesterday" dec="0%" id="4" />
          <Header title="Sydney" subtitle="01:41 AM" text="Tuesday" dec="18 Dec 2018" id="5" />
        </div>
      </div>

      <Charts />

    </>
  );
}

export default App;
