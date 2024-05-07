import { useEffect, useState } from 'react';
import axios from 'axios';
import { APIData, Cards } from '../../../assets/Types';
import Card from '../../components/CardComponent/Card';
import Search from '../../components/SearchComponent/Search';
import Pagination from '../../components/PaginationComponent/Pagination';
import './MainPage.scss';
import CardWindow from '../../components/CardWindowComponent/CardWindow';

const MainPage = () => {
  let [data, setData] = useState<null | APIData>();
  let [page, setPage] = useState<number>(1);
  let [name, setName] = useState<string>('');
  let [isOpen, setIsOpen] = useState<boolean>(false);
  let [id, setId] = useState<number>(0);
  let [card, setCard] = useState<Cards>();

  console.log(id);
  console.log(isOpen);

  const pressedCard = (id: number) => {
    setIsOpen(true);
    setId(id);
    getCard();
  };

  function clickCloseBtn(): void {
    setIsOpen(false);
  }
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

  useEffect(() => {
    fetchData();
  }, [page, name]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) {
      setName(e.target.value);
    }
  };
  function getCard() {
    isOpen &&
      data &&
      data.results.map((card: Cards) => {
        if (card.id === id) {
          setCard(card);
        }
      });
  }

  return (
    <div className='wrapper'>
      <header className='header'>
        <div className='container'>
          <Search input={handleChange} />
        </div>
      </header>
      <div className='container'>
        <main className='main'>
          <div className=' main__container'>
            <div className='main__cards'>
              {data &&
                data.results.map((card, index) => (
                  <Card data={card} key={index} pressedCard={pressedCard} />
                ))}
            </div>

            <Pagination
              clickLeftBtn={clickLeftBtn}
              clickRightBtn={clickRightBtn}
              page={page}
            />
            {isOpen && card && (
              <CardWindow data={card} closeModal={clickCloseBtn} />
            )}
          </div>
        </main>
        <footer className='footer'></footer>
      </div>
    </div>
  );
};
export default MainPage;
