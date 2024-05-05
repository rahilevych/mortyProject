import { useEffect, useState } from 'react';
import axios from 'axios';
import { APIData } from '../../../assets/Types';
import Card from '../../components/CardComponent/Card';
import Search from '../../components/SearchComponent/Search';
import Pagination from '../../components/PaginationComponent/Pagination';

const MainPage = () => {
  let [data, setData] = useState<null | APIData>();
  let [page, setPage] = useState<number>(1);

  console.log(data);
  const fetchData = async () => {
    try {
      const response = await axios.get(
        'https://rickandmortyapi.com/api/character/'
      );
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  function clickLeftBtn(): void {
    if (data && page && page != 1) {
      setPage(page--);
    }
  }
  function clickRightBtn(): void {
    if (data && page && page < data?.results.length / 20) {
      setPage(page++);
    }
  }

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <div className='wrapper'>
      <div className='container'>
        <header className='header'>
          <div className='container'>
            <Search />
          </div>
        </header>
        <main className='main'>
          <div className='container'>
            {data &&
              data.results.map((card, index) => (
                <Card data={card} key={index} />
              ))}
            <Pagination
              clickLeftBtn={clickLeftBtn}
              clickRightBtn={clickRightBtn}
            />
          </div>
        </main>
        <footer className='footer'></footer>
      </div>
    </div>
  );
};
export default MainPage;
