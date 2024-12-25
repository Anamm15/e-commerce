import React from "react";

interface CardProps {
  product: {
    photo: string;
    name: string;
    price: number;
    rating: number;
    sold: number;
  };
}

const Card: React.FC<CardProps> = ({ product }) => {
  return (
    <a className="h-max pb-3 w-48 flex flex-col bg-blue-500">
      <img
        src={product.photo}
        alt={product.name}
        className="object-center object-cover w-full h-56"
      />
      <div className="px-1.5">
        <h5>{product.name}</h5>
        <p>Rp. {product.price.toLocaleString()}</p>
        <p className="flex gap-2">
          <span>{product.rating.toFixed(1)}</span>
          <span>{product.sold} Terjual</span>
        </p>
      </div>
    </a>
  );
};

export default Card;
