import Heders from "../components/Headers";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
const About = () => {
  return (
    <div className="w-full">
      <Heders />
      <section className='bg-[url("http://localhost:3000/images/agri.jpg")] h-[220px] mt-6 bg-cover bg-no-repeat relative bg-left'>
        <div className="absolute left-0 top-0 w-full h-full bg-[#2422228a]">
          <div className="w-[85%] md:w-[80%] sm:w-[90%] lg:w-[90%] h-full mx-auto">
            <div className="flex flex-col justify-center gap-1 items-center h-full w-full text-white">
              <h2 className="text-3xl font-bold">Agrisoko</h2>
              <div className="flex justify-center items-center gap-2 text-2xl w-full">
                <Link to="/">Home</Link>
                <span className="pt-1">
                  <MdOutlineKeyboardArrowRight />
                </span>
                <span>About us</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex items-center justify-center">
        <div class="flex items-center max-w-[1200px]">
          <div class="sm:w-1/2 p-10">
            <div class="image object-center text-center">
              <img src="https://i.imgur.com/WbQnbas.png" />
            </div>
          </div>
          <div class="sm:w-1/2 p-5">
            <div class="text">
              <span class="text-gray-500 border-b-2 border-indigo-600 uppercase">
                About us
              </span>
              <h2 class="my-4 font-bold text-3xl  sm:text-4xl ">
                About <span class="text-indigo-600">Our Company</span>
              </h2>
              <p class="text-gray-700">
                Welcome to AgriSoko At AgriSoko, we are passionate about
                revolutionizing the agricultural sector in Kenya. We aim to
                create a sustainable and prosperous future for farmers by
                leveraging modern technology, innovative practices, and
                strategic market connections. Our mission is to empower
                smallholder farmers, enhance their productivity, and ensure they
                gain fair access to lucrative markets both locally and
                internationally. Our Vision We envision a world where
                agriculture thrives through innovation and collaboration. Our
                goal is to transform the agricultural landscape, making it more
                efficient, profitable, and sustainable for all stakeholders
                involved. Our Mission Our mission is to: Empower Farmers:
                Provide resources, training, and support to help farmers
                maximize their yields and improve the quality of their produce.
                Enhance Market Access: Connect farmers directly to buyers,
                ensuring they receive fair prices for their hard work. Promote
                Sustainability: Advocate for and implement sustainable farming
                practices that protect the environment and ensure long-term
                productivity. What We Do Farmer Support: We offer comprehensive
                support to farmers, including access to high-quality seeds,
                modern farming equipment, and expert agricultural advice.
                Training and Education: Through workshops, seminars, and online
                resources, we educate farmers on best practices in farming, pest
                control, and crop management. Market Linkage: By connecting
                farmers directly with buyers, we eliminate middlemen, ensuring
                farmers get the best possible prices for their produce.
                Technology Integration: We utilize the latest technology to
                streamline farming processes, from planting to harvesting, and
                provide real-time data to help farmers make informed decisions.
                Sustainability Initiatives: Our commitment to sustainability
                involves promoting organic farming, water conservation, and soil
                health management practices. Why Choose AgriSoko? Expertise: Our
                team consists of experienced agricultural professionals who are
                dedicated to helping farmers succeed. Innovation: We stay ahead
                of the curve by integrating cutting-edge technology into every
                aspect of farming. Community: We believe in the power of
                community and work closely with farmers, buyers, and other
                stakeholders to build a robust agricultural network.
                Transparency: Our transparent approach ensures that farmers
                receive fair compensation for their produce and that buyers get
                high-quality products. Join Us Join us in our mission to
                transform agriculture in Kenya. Whether you're a farmer looking
                for support or a buyer seeking quality produce, AgriSoko is your
                trusted partner in agricultural success. Together, we can create
                a thriving, sustainable agricultural ecosystem that benefits
                everyone. For more information, get in touch with us or explore
                our website to learn more about our services and initiatives.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
