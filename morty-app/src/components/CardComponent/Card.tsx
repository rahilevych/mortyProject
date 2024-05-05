import { FC } from 'react';
import { Cards } from '../../../assets/Types';
import './Card.css';
interface CardProps {
  data: Cards;
}
const Card: FC<CardProps> = ({ data }) => {
  return (
    <div className='card'>
      <img src={data.image} alt='' className='card__img' />
    </div>
  );
};
export default Card;
