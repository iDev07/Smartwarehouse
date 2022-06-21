import React, { useState } from "react";
import analtyc from "../../assets/analytic.png";
import finance from "../../assets/finance.png";
import managed from "../../assets/managed.png";
import useful from "../../assets/useful.png";
import planning from "../../assets/planning.png";
import settings from "../../assets/settings.png";

import "./Opportunites.scss";
function Opportunites() {
  const [active1, setActive1] = useState("active");
  const [active2, setActive2] = useState("null");
  const [active3, setActive3] = useState("null");
  const [active4, setActive4] = useState("null");
  const [activeBtn1, setActiveBtn1] = useState("active");
  const [activeBtn2, setActiveBtn2] = useState("notActive");
  const [activeBtn3, setActiveBtn3] = useState("notActive");
  const [activeBtn4, setActiveBtn4] = useState("notActive");

  return (
    <div className="Opportunites">
      <div className="mycontainer">
        <div className="gen_title">
          <h1>Imkoniyatlar</h1>
        </div>
        <div className="change_section">
          <div className={`change_section_item1 ${activeBtn1}`}>
            <button
              onClick={() => {
                setActive1("active");
                setActive2("null");
                setActive3("null");
                setActive4("null");
                setActiveBtn1("active");
                setActiveBtn2("notActive");
                setActiveBtn3("notActive");
                setActiveBtn4("notActive");
              }}
            >
              Nazorat va tahlil
            </button>
          </div>
          <div className={`change_section_item2 ${activeBtn2}`}>
            <button
              onClick={() => {
                setActive1("null");
                setActive2("active");
                setActive3("null");
                setActive4("null");
                setActiveBtn1("notActive");
                setActiveBtn2("active");
                setActiveBtn3("notActive");
                setActiveBtn4("notActive");
              }}
            >
              Ombor
            </button>
          </div>
          <div className={`change_section_item3 ${activeBtn3}`}>
            <button
              onClick={() => {
                setActive1("null");
                setActive2("null");
                setActive3("active");
                setActive4("null");
                setActiveBtn1("notActive");
                setActiveBtn2("notActive ");
                setActiveBtn3("active");
                setActiveBtn4("notActive");
              }}
            >
              Sotishni ko'paytirish
            </button>
          </div>
          <div className={`change_section_item4 ${activeBtn4}`}>
            <button
              onClick={() => {
                setActive1("null");
                setActive2("null");
                setActive3("null");
                setActive4("active");
                setActiveBtn1("notActive");
                setActiveBtn2("notActive ");
                setActiveBtn3("notActive");
                setActiveBtn4(" active");
              }}
            >
              Nazorat va tahlil
            </button>
          </div>
        </div>
        <div className={`wrapper  ${active1} noactive`}>
          <div className="col">
            <div className="innerW">
              <div className="name_title">
                <h2>Analitika</h2>
              </div>
              <div className="main">
                <img src={analtyc} alt="analtyc" />
                <p>
                  Sotish kassadagi naqd pul miqdori, o'rtacha chek, qoldiqlar,
                  aksiyalar miqdori
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="innerW">
              <div className="name_title">
                <h2>Moliya</h2>
              </div>
              <div className="main">
                <img src={finance} alt="analtyc" />
                <p>
                  Sotish kassadagi naqd pul miqdori, o'rtacha chek, qoldiqlar,
                  aksiyalar miqdori
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="innerW">
              <div className="name_title">
                <h2>Boshqaruv</h2>
              </div>
              <div className="main">
                <img src={managed} alt="analtyc" />
                <p>
                  Sotish kassadagi naqd pul miqdori, o'rtacha chek, qoldiqlar,
                  aksiyalar miqdori
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="innerW">
              <div className="name_title">
                <h2>Foydali manbalar</h2>
              </div>
              <div className="main">
                <img src={useful} alt="analtyc" />
                <p>
                  Sotish kassadagi naqd pul miqdori, o'rtacha chek, qoldiqlar,
                  aksiyalar miqdori
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="innerW">
              <div className="name_title">
                <h2>Rajalashtirish</h2>
              </div>
              <div className="main">
                <img src={planning} alt="analtyc" />
                <p>
                  Sotish kassadagi naqd pul miqdori, o'rtacha chek, qoldiqlar,
                  aksiyalar miqdori
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="innerW">
              <div className="name_title">
                <h2>Optimallashtirish</h2>
              </div>
              <div className="main">
                <img src={settings} alt="analtyc" />
                <p>
                  Sotish kassadagi naqd pul miqdori, o'rtacha chek, qoldiqlar,
                  aksiyalar miqdori
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={`wrapper ${active2}`}>
          <div className="col">
            <div className="innerW">
              <div className="name_title">
                <h2>Ombor</h2>
              </div>
              <div className="main">
                <img src={analtyc} alt="analtyc" />
                <p>
                  Sotish kassadagi naqd pul miqdori, o'rtacha chek, qoldiqlar,
                  aksiyalar miqdori
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="innerW">
              <div className="name_title">
                <h2>Ma'lumotlar bazasi</h2>
              </div>
              <div className="main">
                <img src={finance} alt="analtyc" />
                <p>
                  Sotish kassadagi naqd pul miqdori, o'rtacha chek, qoldiqlar,
                  aksiyalar miqdori
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="innerW">
              <div className="name_title">
                <h2>I togdali</h2>
              </div>
              <div className="main">
                <img src={managed} alt="analtyc" />
                <p>
                  Sotish kassadagi naqd pul miqdori, o'rtacha chek, qoldiqlar,
                  aksiyalar miqdori
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="innerW">
              <div className="name_title">
                <h2>Foydali manbalar</h2>
              </div>
              <div className="main">
                <img src={useful} alt="analtyc" />
                <p>
                  Sotish kassadagi naqd pul miqdori, o'rtacha chek, qoldiqlar,
                  aksiyalar miqdori
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="innerW">
              <div className="name_title">
                <h2>Rajalashtirish</h2>
              </div>
              <div className="main">
                <img src={planning} alt="analtyc" />
                <p>
                  Sotish kassadagi naqd pul miqdori, o'rtacha chek, qoldiqlar,
                  aksiyalar miqdori
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="innerW">
              <div className="name_title">
                <h2>Optimallashtirish</h2>
              </div>
              <div className="main">
                <img src={settings} alt="analtyc" />
                <p>
                  Sotish kassadagi naqd pul miqdori, o'rtacha chek, qoldiqlar,
                  aksiyalar miqdori
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={`wrapper ${active3}`}>
          <div className="col">
            <div className="innerW">
              <div className="name_title">
                <h2>Analitika</h2>
              </div>
              <div className="main">
                <img src={analtyc} alt="analtyc" />
                <p>
                  Sotish kassadagi naqd pul miqdori, o'rtacha chek, qoldiqlar,
                  aksiyalar miqdori
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="innerW">
              <div className="name_title">
                <h2>Moliya</h2>
              </div>
              <div className="main">
                <img src={finance} alt="analtyc" />
                <p>
                  Sotish kassadagi naqd pul miqdori, o'rtacha chek, qoldiqlar,
                  aksiyalar miqdori
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="innerW">
              <div className="name_title">
                <h2>Boshqaruv</h2>
              </div>
              <div className="main">
                <img src={managed} alt="analtyc" />
                <p>
                  Sotish kassadagi naqd pul miqdori, o'rtacha chek, qoldiqlar,
                  aksiyalar miqdori
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="innerW">
              <div className="name_title">
                <h2>Foydali manbalar</h2>
              </div>
              <div className="main">
                <img src={useful} alt="analtyc" />
                <p>
                  Sotish kassadagi naqd pul miqdori, o'rtacha chek, qoldiqlar,
                  aksiyalar miqdori
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="innerW">
              <div className="name_title">
                <h2>Rajalashtirish</h2>
              </div>
              <div className="main">
                <img src={planning} alt="analtyc" />
                <p>
                  Sotish kassadagi naqd pul miqdori, o'rtacha chek, qoldiqlar,
                  aksiyalar miqdori
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="innerW">
              <div className="name_title">
                <h2>Optimallashtirish</h2>
              </div>
              <div className="main">
                <img src={settings} alt="analtyc" />
                <p>
                  Sotish kassadagi naqd pul miqdori, o'rtacha chek, qoldiqlar,
                  aksiyalar miqdori
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={`wrapper ${active4}`}>
          <div className="col">
            <div className="innerW">
              <div className="name_title">
                <h2>Analitika</h2>
              </div>
              <div className="main">
                <img src={analtyc} alt="analtyc" />
                <p>
                  Sotish kassadagi naqd pul miqdori, o'rtacha chek, qoldiqlar,
                  aksiyalar miqdori
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="innerW">
              <div className="name_title">
                <h2>Moliya</h2>
              </div>
              <div className="main">
                <img src={finance} alt="analtyc" />
                <p>
                  Sotish kassadagi naqd pul miqdori, o'rtacha chek, qoldiqlar,
                  aksiyalar miqdori
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="innerW">
              <div className="name_title">
                <h2>Boshqaruv</h2>
              </div>
              <div className="main">
                <img src={managed} alt="analtyc" />
                <p>
                  Sotish kassadagi naqd pul miqdori, o'rtacha chek, qoldiqlar,
                  aksiyalar miqdori
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="innerW">
              <div className="name_title">
                <h2>Foydali manbalar</h2>
              </div>
              <div className="main">
                <img src={useful} alt="analtyc" />
                <p>
                  Sotish kassadagi naqd pul miqdori, o'rtacha chek, qoldiqlar,
                  aksiyalar miqdori
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="innerW">
              <div className="name_title">
                <h2>Rajalashtirish</h2>
              </div>
              <div className="main">
                <img src={planning} alt="analtyc" />
                <p>
                  Sotish kassadagi naqd pul miqdori, o'rtacha chek, qoldiqlar,
                  aksiyalar miqdori
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="innerW">
              <div className="name_title">
                <h2>Optimallashtirish</h2>
              </div>
              <div className="main">
                <img src={settings} alt="analtyc" />
                <p>
                  Sotish kassadagi naqd pul miqdori, o'rtacha chek, qoldiqlar,
                  aksiyalar miqdori
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Opportunites;
