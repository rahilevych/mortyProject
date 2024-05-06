import { FC } from 'react';
import './Search.scss';
interface ISearch {
  name: string;
  input: React.ChangeEventHandler<HTMLInputElement>;
}

const Search: FC<ISearch> = ({ name, input }) => {
  return (
    <div className='search'>
      <input type='text' className='search__input' onChange={input} />
    </div>
  );
};
export default Search;
