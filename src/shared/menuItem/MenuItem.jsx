const MenuItem = ({ item }) => {
  const { name, image, price, recipe } = item;
  return (
    <div className="flex space-x-4">
      <img
        className="w-[110px] h-[100px] rounded-e-full rounded-bl-full"
        src={image}
        alt=""
      />
      <div>
        <h3 className="uppercase">{name} -----------</h3>
        <p>{recipe}</p>
      </div>
      <p className="text-yellow-600">${price}</p>
    </div>
  );
};

export default MenuItem;
