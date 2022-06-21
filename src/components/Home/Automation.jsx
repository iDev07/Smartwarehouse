import React from "react";
import manimg from "../../assets/man_auto.png";
import { Gen_title } from "../../utils/helpers";
import "./Automation.scss";
function Automation() {
  return (
    <div className="Automation">
      <div className="mycontainer">
        {/* <Gen_title title="Avtomatlashtirish uchun yechimlar" /> */}
        <div
          className="gen_title"
          style={{
            borderLeft: "5px solid #fff",
          }}
        >
          <h1
            style={{
              color: "#fff",
            }}
          >
            Avtomatlashtirish uchun yechimlar
          </h1>
        </div>
        <div className="wrapper">
          <div className="col">
            <div className="col_img">
              <img src={manimg} alt="Automation" />
            </div>
            <div className="col_text">
              <h3>Kiyim do'konini avtomatlashtirish</h3>
              <p>
                Tovarlar va huruhlar bo'yicha belgilash, eng yaxshi kassirlar,
                asosiy mijozlar.
              </p>
              <a href="/testpage">Batafsil</a>
            </div>
          </div>
          <div className="col">
            <div className="col_img">
              <img src={manimg} alt="Automation" />
            </div>
            <div className="col_text">
              <h3>Kiyim do'konini avtomatlashtirish</h3>
              <p>
                Tovarlar va huruhlar bo'yicha belgilash, eng yaxshi kassirlar,
                asosiy mijozlar.
              </p>
              <a href="/testpage">Batafsil</a>
            </div>
          </div>
          <div className="col">
            <div className="col_img">
              <img src={manimg} alt="Automation" />
            </div>
            <div className="col_text">
              <h3>Kiyim do'konini avtomatlashtirish</h3>
              <p>
                Tovarlar va huruhlar bo'yicha belgilash, eng yaxshi kassirlar,
                asosiy mijozlar.
              </p>
              <a href="/testpage">Batafsil</a>
            </div>
          </div>
          <div className="col">
            <div className="col_img">
              <img src={manimg} alt="Automation" />
            </div>
            <div className="col_text">
              <h3>Kiyim do'konini avtomatlashtirish</h3>
              <p>
                Tovarlar va huruhlar bo'yicha belgilash, eng yaxshi kassirlar,
                asosiy mijozlar.
              </p>
              <a href="/testpage">Batafsil</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Automation;
