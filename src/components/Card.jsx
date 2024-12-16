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
    <ul>
      <li>
        <strong>Titolo:</strong>
        {title}
      </li>
      <li>
        <strong>Titolo in lingua originale:</strong>
        {originalTitle}
      </li>
      <li>
        <strong>Lingua:</strong>
        <img src={language} alt="" className="img-flag" />
      </li>
      <li>
        <strong>Voto:</strong>
        {vote}
      </li>
    </ul>
  );
}
