import "./index.scss";

const BENEFITS = [
  {
    img: "",
    title: "Kelas Online",
    desc: "Belajar dimanapun kamu berada",
  },
  {
    img: "",
    title: "Kelas yang interaktif",
    desc: "Kelas yang interaktif dan terintegrasi dengan budaya China/Taiwan",
  },
  {
    img: "",
    title: "Guru-guru yang asyik",
    desc: "Guru-guru yang asyik dan semangat membersamai belajarmu",
  },
  {
    img: "",
    title: "Kurikulum Fleksibel",
    desc: "Kurikulum yang menyesuaikan kebutuhan dan tujuan belajarmu",
  },
  {
    img: "",
    title: "Fleksibel",
    desc: "Bisa reschedule jadwal les",
  },
];

const BenefitItem = ({ img, title, desc }: any) => {
  return (
    <div className="benefit-item">
      <div className="icon">
        <img src={img}></img>
      </div>
      <div className="text">
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </div>
  );
};

const KeyBenefits = () => {
  return (
    <div className="key-benefits-container">
      <div className="content">
        <div className="image-container">
          <div className="main-image-container">
            <img
              className="main-image"
              src="static/images/key-benefits.png"
            ></img>
            <div className="like-button">
              <img src="static/logo/thumbs.svg"></img>
            </div>
            <img className="polka" src="static/logo/polka-yellow.svg"></img>
          </div>
        </div>
        <div className="text-container">
          <h1>Kenapa Le Le Mandarin</h1>
          {BENEFITS.map((benefit, index) => (
            <BenefitItem
              key={index}
              img={benefit.img}
              title={benefit.title}
              desc={benefit.desc}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default KeyBenefits;
