import React from 'react'
import  "./Card.css";

interface Props  {
  companyName:string;
  ticker:string;
  price:number;
}

const Card: React.FC<Props> = ({
  companyName,
  ticker,
  price,
}: Props): JSX.Element => {
  return (
    <div className="card">
        <img
         src="https://life-decor.com/cdn/shop/products/art-zidne-slike-plitvice---ap011art-zidne-slikelife-decorlife-decor-15090663_832x576.jpg?v=1578840014"
         alt="Image"
         />
        <div className="details">
        {companyName} ({ticker})
<p>${price}</p>
        </div>
        <p className="infon">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, dolore!</p>
    </div>
  )
}

export default Card;