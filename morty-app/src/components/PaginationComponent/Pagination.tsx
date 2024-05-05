import './Pagination.css';
import { FC } from 'react';

interface IPagination {
  clickLeftBtn: Function;
  clickRightBtn: Function;
}

const Pagination: FC<IPagination> = ({ clickLeftBtn, clickRightBtn }) => {
  return (
    <div className='pagination'>
      <div className='pagination__left' onClick={clickLeftBtn}>
        <i className='ph ph-caret-left'></i>
      </div>
      <div className='pagination__right' onClick={clickRightBtn}>
        <i className='ph ph-caret-right'></i>
      </div>
    </div>
  );
};
export default Pagination;
