export interface CardProps {
  points: number;
  description: string;
  imagePath: string | undefined;
}

const Card = (props: CardProps) => {
  const { points, description, imagePath } = props;
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
     <img className="rounded-t-lg w-40 h-48 object-cover" src={imagePath} alt="sheep.jpeg" />
    <div className="px-6 py-4 rounded-lg bg-white">
      <div className="font-bold text-xl mb-2">{description}</div>
      <p className="text-gray-700 text-base"> 
        {`${points} Points`}
      </p>
    </div>
  </div>
  );
};

export default Card;
