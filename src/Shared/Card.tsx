import React from "react";

interface CardProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ title, children, className }) => {
  return (
    <div
      className={`bg-white shadow-md p-4 rounded ${className ? className : ""}`}
    >
      {title && <h2 className="text-lg font-bold">{title}</h2>}
      {children}
    </div>
  );
};

export default Card;
