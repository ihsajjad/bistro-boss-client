import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import MenuItem from "../../../shared/menuItem/MenuItem";
import { useMenu } from "../../../hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu?.filter((item) => item.category === "popular");

  return (
    <div>
      <SectionTitle
        heading={"From Our Menu"}
        subHeading={"Popular Items"}
      ></SectionTitle>

      <div className="grid md:grid-cols-2 gap-6 my-8">
        {popular.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="text-center">
        <button className="btn btn-outline mt-6 border-0 border-b-4">
          View Full Menu
        </button>
      </div>
    </div>
  );
};

export default PopularMenu;
