// import { useMovies } from "../contexts/MovieContext";

// export default function MoviesList() {
//   const { movies } = useMovies();
//   return (
//     <div className="container">
//       {movies.map((movie) => {
//         return (
//           <div key={movie.id}>
//             <ul>
//               <li>
//                 <strong>Titolo:</strong>
//                 {movie.title}
//               </li>
//               <li>
//                 <strong>Titolo in lingua originale:</strong>
//                 {movie.original_language}
//               </li>
//               <li>
//                 <strong>Lingua:</strong>
//                 {movie.original_language}
//               </li>
//               <li>
//                 <strong>Voto:</strong>
//                 {movie.vote_average}
//               </li>
//             </ul>
//           </div>
//         );
//       })}
//     </div>
//   );
// }
