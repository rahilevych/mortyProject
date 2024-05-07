import { FC } from 'react';
import './Search.scss';
interface ISearch {
  //input: React.ChangeEventHandler<HTMLInputElement>;
  input: React.ChangeEventHandler<HTMLInputElement>;
}

const Search: FC<ISearch> = ({ input }) => {
  return (
    <div className='search'>
      <input
        type='text'
        className='search__input'
        placeholder='Search by name'
        onChange={input}
      />
    </div>
  );
};
export default Search;
