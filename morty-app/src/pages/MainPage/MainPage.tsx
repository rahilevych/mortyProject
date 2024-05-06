import { useEffect, useState } from 'react';
import axios from 'axios';
import { APIData } from '../../../assets/Types';
import Card from '../../components/CardComponent/Card';
import Search from '../../components/SearchComponent/Search';
import Pagination from '../../components/PaginationComponent/Pagination';
import './MainPage.scss';

const MainPage = () => {
  let [data, setData] = useState<null | APIData>();
  let [page, setPage] = useState<number>(1);
  let [name, setName] = useState<string>('');
  console.log(data);
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://rickandmortyapi.com/api/character/?page=${page}&name=${name}`
      );
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  function clickLeftBtn(): void {
    setPage(page - 1);
  }
  function clickRightBtn(): void {
    setPage(page + 1);
  }
  function readInput() {}

  useEffect(() => {
    fetchData();
    console.log(page);
  }, [page, name]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  return (
    <div className='wrapper'>
      <div className='container'>
        <header className='header'>
          <div className='container'>
            <Search name={name} input={handleChange} />
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
              page={page}
            />
          </div>
        </main>
        <footer className='footer'></footer>
      </div>
    </div>
  );
};
export default MainPage;
