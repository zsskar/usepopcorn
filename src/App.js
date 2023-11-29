import './App.css';

const data = [
  {
    "albumId": 1,
    "id": 1,
    "title": "accusamus beatae ad facilis cum similique qui sunt",
    "url": "https://via.placeholder.com/600/92c952",
    "thumbnailUrl": "https://via.placeholder.com/150/92c952"
  },
  {
    "albumId": 1,
    "id": 2,
    "title": "reprehenderit est deserunt velit ipsam",
    "url": "https://via.placeholder.com/600/771796",
    "thumbnailUrl": "https://via.placeholder.com/150/771796"
  },
  {
    "albumId": 1,
    "id": 3,
    "title": "officia porro iure quia iusto qui ipsa ut modi",
    "url": "https://via.placeholder.com/600/24f355",
    "thumbnailUrl": "https://via.placeholder.com/150/24f355"
  },
  {
    "albumId": 1,
    "id": 4,
    "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
    "url": "https://via.placeholder.com/600/d32776",
    "thumbnailUrl": "https://via.placeholder.com/150/d32776"
  },
  {
    "albumId": 1,
    "id": 5,
    "title": "natus nisi omnis corporis facere molestiae rerum in",
    "url": "https://via.placeholder.com/600/f66b97",
    "thumbnailUrl": "https://via.placeholder.com/150/f66b97"
  }
];

function App() {
  return (
    <div>
      <nav className="nav-bar">
        <div className="logo">
          <span role="img">🍿</span>
          <h1>usePopcorn</h1>
        </div><input className="search" type="text" placeholder="Search movies..." />
        <p className="num-results">Found <strong>0</strong> results</p>
      </nav>
      <main className="main">
        <div className="box">
          <button className="btn-toggle">–</button>
          <ul class="list list-movies">
            {
              data.map(obj =>
                <div>
                  <>
                    <img alt={obj.title} src={obj.thumbnailUrl} />
                    <p key={obj.id}>{obj.title}</p>
                  </>
                </div>
              )
            }
          </ul>

          <p className="error"><span>⛔️</span> Something went wrong with fetching movies</p>
        </div>
        <div className="box">
          <button className="btn-toggle">–</button>
          <div className="summary">
            <h2>Movies you watched</h2>
            <div>
              <p>
                <span>#️⃣</span>
                <span>0 movies</span>
              </p>
              <p>
                <span>⭐️</span>
                <span>0.00</span>
              </p>
              <p>
                <span>🌟</span>
                <span>0.00</span>
              </p>
              <p>
                <span>⏳</span>
                <span>0 min</span>
              </p>
            </div>
          </div>
          <ul className="list">

          </ul>
        </div>
      </main>
    </div>
  );
}

export default App;
