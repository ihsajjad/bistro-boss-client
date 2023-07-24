import { Link } from "react-router-dom";
import Cover from "../../../shared/cover/Cover";
import MenuItem from "../../../shared/menuItem/MenuItem";

const MenuCategory = ({ items, title, coverImg }) => {
  return (
    <div className="py-8">
      {title && <Cover img={coverImg} title={title}></Cover>}
      <div className="grid md:grid-cols-2 gap-6 my-8">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="text-center">
        <Link to={`/order/${title}`}>
          <button className="btn btn-outline mt-6 border-0 border-b-4">
            Order Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MenuCategory;
