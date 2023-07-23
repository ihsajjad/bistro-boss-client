import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <section className="featured-section pt-8 text-white my-20">
      <SectionTitle
        subHeading="Check it out"
        heading="Featured Item"
      ></SectionTitle>

      <div className="md:flex justify-center items-center md:gap-10 md:p-20 bg-black bg-opacity-30">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div>
          <p>Aug 20, 2023</p>
          <p className="uppercase">Where can i get some?</p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas
            obcaecati nobis esse recusandae adipisci nulla reprehenderit unde in
            excepturi, repellendus enim accusantium a beatae ullam assumenda
            vitae quaerat perspiciatis, itaque, sit nisi! Deserunt, accusamus
            eveniet repellat dolor ipsa qui, magni numquam voluptas quas
            repellendus tenetur. Quia tenetur ab dolorum provident!
          </p>
          <button className="btn btn-outline mt-6 border-0 border-b-4">
            Order Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Featured;
