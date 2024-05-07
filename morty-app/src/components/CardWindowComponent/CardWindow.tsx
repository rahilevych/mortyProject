import { FC } from 'react';
import { Cards } from '../../../assets/Types';
import './CardWindow.scss';
interface ICardWindow {
  data: Cards | undefined;
  closeModal: () => void;
}

const CardWindow: FC<ICardWindow> = ({ data, closeModal }) => {
  return (
    <div className='modal'>
      <div className='modal__img'>
        <img src={data?.image} alt='' />
      </div>
      <p className='modal__name'>{data?.name}</p>
      <p className='modal__species'>{'Species: ' + data?.species}</p>
      <p className='modal__status'>{'Status: ' + data?.status}</p>
      <button className='modal__btn' onClick={closeModal}>
        Close
      </button>
    </div>
  );
};
export default CardWindow;
