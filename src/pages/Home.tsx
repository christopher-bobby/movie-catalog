
import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import Loading from '../components/Loading';
import Card from '../components/Card';
import { listOfFilms } from '../apis';


function Home() {
    const navigate = useNavigate();
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
      <div className="px-[24px] flex md:flex-row flex-col md:flex-wrap">
        {filmList.map((film: any, index) => {
            let strIndex = film.url.lastIndexOf('/films/');
            let detailId = film.url.slice(strIndex + 7, film.url.length - 1);
          return (
            <div className="lg:w-1/4 md:w-1/2 w-full px-4 mb-4" key={film?.episode_id}>
              <Card 
                title={film?.title}
                episodeId={film?.episode_id}
                releaseDate={film?.release_date}
                url={film?.url}
                openingCrawl={film?.opening_crawl}
                price={"50.000"}
                redirect={()=>navigate(`/detail/${detailId}`)}
              />
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default Home;
