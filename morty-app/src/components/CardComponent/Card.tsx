import { FC } from 'react';
import { Cards } from '../../../assets/Types';
import './Card.scss';

interface CardProps {
  data: Cards;

  pressedCard: (id: number) => void;
}
const Card: FC<CardProps> = ({ data, pressedCard }) => {
  return (
    <div className='flip-card'>
      <div className='flip-card-inner'>
        <div className='flip-card-front'>
          <img src={data.image} alt='' />
        </div>
        <div className='flip-card-back'>
          <h1>{data.name}</h1>
          <button
            onClick={() => {
              pressedCard(data?.id);
            }}>
            LEARN MORE
          </button>
        </div>
      </div>
    </div>
  );
};
export default Card;
