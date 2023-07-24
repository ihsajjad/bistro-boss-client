import { Helmet } from "react-helmet-async";
import Cover from "../../../shared/cover/Cover";
import coverImg from "../../../assets/menu/banner3.jpg";
import { useMenu } from "../../../hooks/useMenu";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import MenuCategory from "../menuCategory/MenuCategory";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";

const Menu = () => {
  const [menu] = useMenu();

  const offered = menu?.filter((item) => item.category === "offered");
  const salads = menu?.filter((item) => item.category === "salad");
  const soups = menu?.filter((item) => item.category === "soup");
  const pizzas = menu?.filter((item) => item.category === "pizza");
  const desserts = menu?.filter((item) => item.category === "dessert");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>

      {/* main cover */}
      <Cover img={coverImg} title={"Our Menu"}></Cover>

      {/* Offered menu items */}
      <SectionTitle
        subHeading="Don't Miss"
        heading="Today's Offer"
      ></SectionTitle>
      <MenuCategory items={offered} coverImg={coverImg}></MenuCategory>

      {/* Dessert menu items */}
      <MenuCategory
        items={desserts}
        coverImg={dessertImg}
        title="desserts"
      ></MenuCategory>

      {/* Salad menu items */}
      <MenuCategory
        items={salads}
        coverImg={saladImg}
        title="salads"
      ></MenuCategory>

      {/* Soup menu items */}
      <MenuCategory
        items={soups}
        coverImg={soupImg}
        title="soups"
      ></MenuCategory>

      {/* Pizza menu items */}
      <MenuCategory
        items={pizzas}
        coverImg={pizzaImg}
        title="pizzas"
      ></MenuCategory>
    </div>
  );
};

export default Menu;
