import "./index.scss";

const BENEFITS = [
  {
    img: "static/logo/laptop.png",
    title: "Kelas Online",
    desc: "Belajar dimanapun kamu berada",
  },
  {
    img: "static/logo/training.png",
    title: "Kelas yang interaktif",
    desc: "Kelas yang interaktif dan terintegrasi dengan budaya China/Taiwan",
  },
  {
    img: "static/logo/teacher.png",
    title: "Guru-guru yang asyik",
    desc: "Guru-guru yang asyik dan semangat membersamai belajarmu",
  },
  {
    img: "static/logo/profiles.png",
    title: "Kurikulum Fleksibel",
    desc: "Kurikulum yang menyesuaikan kebutuhan dan tujuan belajarmu",
  },
  {
    img: "static/logo/deadline.png",
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
          <img className="polka-blue-1" src="static/logo/polka-blue.svg"></img>
          <img className="polka-blue-2" src="static/logo/polka-blue.svg"></img>
        </div>
        <div className="text-container">
          <div className="main-text">
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
          <img className="polka-blue-1" src="static/logo/polka-blue.svg"></img>
          <img className="polka-blue-1" src="static/logo/polka-blue.svg"></img>
          <img
            className="polka-yellow-1"
            src="static/logo/polka-yellow.svg"
          ></img>
          <img
            className="polka-yellow-2"
            src="static/logo/polka-yellow.svg"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default KeyBenefits;
