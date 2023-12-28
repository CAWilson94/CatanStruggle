export interface CardProps {
  description: string;
  imagePath: string | undefined;
}

const Card = (props: CardProps) => {
  const { description, imagePath } = props;
  return (
    <div className="max-w-sm ml-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
     <img className="rounded-t-lg w-40 h-48 object-cover" src={imagePath} alt="sheep.jpeg" />
    <div className="px-6 py-4 rounded-lg bg-white">
      <div className="font-bold text-xl mb-2">{description}</div>
    </div>
  </div>
  );
};

export default Card;
