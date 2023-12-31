import { Helmet } from "react-helmet-async";
import Banner from "../banner/Banner";
import Category from "../category/Category";
import Featured from "../featured/Featured";
import PopularMenu from "../popularMenu/PopularMenu";
import Testimonials from "../testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Banner />
      <Category />
      <PopularMenu />
      <Featured />
      <Testimonials />
    </div>
  );
};

export default Home;
