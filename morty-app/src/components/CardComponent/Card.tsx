import { FC } from 'react';
import { Cards } from '../../../assets/Types';
import './Card.scss';
interface CardProps {
  data: Cards;
}
const Card: FC<CardProps> = ({ data }) => {
  return (
    <div className='flip-card'>
      <div className='flip-card-inner'>
        <div className='flip-card-front'>
          <img src={data.image} alt='' />
        </div>
        <div className='flip-card-back'>
          <h1>{data.name}</h1>
          <button>LEAR MORE</button>
        </div>
      </div>
    </div>
  );
};
export default Card;
