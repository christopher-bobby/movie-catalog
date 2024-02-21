
import React, { useEffect, useState } from 'react';
import './App.css';
import Loading from './components/Loading';
import Card from './components/Card';
import { listOfFilms } from './apis';

function App() {
  const [isLoadingFetching, setIsLoadingFetching] = useState<boolean>(true);
  const [filmList, setFilmList] = useState([])

  useEffect( ()=> {
    async function fetchFilms() {
      let res = await listOfFilms();
      setIsLoadingFetching(false)
      setFilmList(res);
      console.log("res", res)
    }


    fetchFilms();
 
  }, []);

  return (
    <div className="App">
      {isLoadingFetching && (<Loading />)}
      <div className="px-[24px] flex overflow-x-auto space-x-8">
        {filmList.map((film: any, index) => {
          return (
            <Card 
              title={film?.title}
              episodeId={film?.episode_id}
              releaseDate={film?.release_date}
              url={film?.url}
              openingCrawl={film?.opening_crawl}
              price={"50.000"}
            />
          )
        })}
      </div>
    </div>
  );
}

export default App;
