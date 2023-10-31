import './Stars.css'
import { Star } from "../Star/Star"

type TCount = number;

interface ICountProps {
  count: TCount,
}

export const Stars = ({ count = 0 }: ICountProps) => {
  
  let arr = [];
  count < 1 || count > 5 ? arr = [] : arr = new Array(count).fill('*');

  return (
    <ul className="card-body-stars u-clearfix">
        {arr.map((star) => (
            <Star key={star} />
        ))}
    </ul>
  )
}
