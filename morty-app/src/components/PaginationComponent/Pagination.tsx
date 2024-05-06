import './Pagination.scss';
import { FC } from 'react';

interface IPagination {
  clickLeftBtn: () => void;
  clickRightBtn: () => void;
  page: number;
}

const Pagination: FC<IPagination> = ({ clickLeftBtn, clickRightBtn, page }) => {
  return (
    <div className='pagination'>
      <button
        disabled={page === 1}
        className='pagination__left'
        onClick={clickLeftBtn}>
        <i className='ph ph-caret-left'></i>
      </button>
      <button
        disabled={page === 42}
        className='pagination__right'
        onClick={clickRightBtn}>
        <i className='ph ph-caret-right'></i>
      </button>
    </div>
  );
};
export default Pagination;
