import './App.css';
import Row from '../contents/Row';
import Nav from '../navbar/Nav';
import Request from '../api/request';
import Banner from '../banner/Banner';

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Row title="NETFLIX ORIGINAL" fetchUrl={Request.fetchNetflixOriginals} isLargeRow />
      <Row title="Trending Now" fetchUrl={Request.fetchTrending} />
      <Row title="Top Rated" fetchUrl={Request.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={Request.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={Request.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={Request.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={Request.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={Request.fetchDocumentariesMovies} />
    </div>
  );
}

export default App;
