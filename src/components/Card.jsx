export default function Card({ title, originalTitle, language, vote, img }) {
  if (language === "en") {
    language = "gb.svg";
  }
  if (language === "it") {
    language = "it.svg";
  }
  if (language === "us") {
    language = "us.svg";
  }
  if (language === "fr") {
    language = "fr.svg";
  }
  return (
    <div className="card-post d-flex col">
      <img src={img} alt="" className="img-fluid" />
      <div className="card-description w-100 ">
        <p>
          <strong>Titolo:</strong>
          {title}
        </p>
        <p>
          <strong>Titolo Originale:</strong>
          {originalTitle}
        </p>
        <p>
          <strong>voto:</strong>
          {vote}
        </p>
        <p>
          <strong>Lingua:</strong>
          {language}
        </p>
      </div>
    </div>
  );
}
