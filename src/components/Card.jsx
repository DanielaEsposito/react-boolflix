export default function Card({ title, originalTitle, language, vote, img }) {
  return (
    <ul>
      <li>
        <strong>Titolo:</strong>
        {title}
      </li>
      <li>
        <strong>Titolo in lingua originale:</strong>
        {language}
      </li>
      <li>
        <strong>Lingua:</strong>
        {originalTitle}
      </li>
      <li>
        <strong>Voto:</strong>
        {vote}
      </li>
    </ul>
  );
}
