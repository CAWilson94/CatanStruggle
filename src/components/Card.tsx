export interface CardProps {
  points: number;
  description: string;
  imagePath: string | undefined;
}

const Card = (props: CardProps) => {
  const { points, description, imagePath } = props;
  return (
    <div className="w-full rounded overflow-hidden shadow-lg">
     <img className="w-40 h-48 object-cover" src={imagePath} alt="sheep.jpeg" />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{description}</div>
      <p className="text-gray-700 text-base"> 
        {`${points} Points`}
      </p>
    </div>
  </div>
  );
};

export default Card;
