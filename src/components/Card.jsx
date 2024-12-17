export default function Card({ title, originalTitle, language, vote, img }) {
  const normalizedVote = Math.ceil(vote / 2);

  const stars = (num, num2) => {
    const regularStar = num2 - num;

    const numberStars = [];
    for (let i = 0; i < num; i++) {
      numberStars.push(<i class="fa-solid fa-star fa-xs"></i>);
    }
    for (let i = 0; i < regularStar; i++) {
      numberStars.push(<i class="fa-regular fa-star fa-xs"></i>);
    }
    return numberStars;
  };
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
      {/*ipoteticamnete dovresti avere due componenti, uno per l'hover e uno per il poster 
      quindi dividi e ricevi i dati da due chiamate fetch diverse una che riceve solo il poster
      laltra che riceve solo i dati...onMouseOver */}
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
          {stars(normalizedVote, 5)}
        </p>
        <p>
          <strong>Lingua:</strong>
          <img src={language} alt="" className="img-flag" />
        </p>
      </div>
    </div>
  );
}
