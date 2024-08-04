import Heders from "../components/Headers";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import blog from "../images/agrisoko.jpg";
const Blog = () => {
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
                <span>Blog</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <main class="container flex sm:mx-auto mt-8">
        <div class="flex flex-wrap justify-between sm:mx-auto mx-11">
          <div class="md:w-full w-8/12 px-4 mb-8">
            <img
              src={blog}
              alt="Featured Image"
              class="w-full h-64 object-cover rounded"
            />
            <h2 class="text-4xl font-bold mt-4 mb-2">Our Company</h2>
            <p class="text-gray-700 mb-4">
              <b>The Emerging Trend in Avocado Farming in Kenya</b>
              <br />
              In recent years, Kenya has witnessed a significant shift in its
              agricultural landscape, with avocado farming emerging as a
              prominent trend. This rise is fueled by a combination of factors,
              including increasing global demand, favorable climatic conditions,
              and the government's supportive policies. Growing Global Demand
              The global appetite for avocados has surged, driven by their
              reputation as a superfood rich in healthy fats, vitamins, and
              minerals. This demand has opened up lucrative export opportunities
              for Kenyan farmers, particularly to markets in Europe, the Middle
              East, and Asia. The Hass variety, known for its rich flavor and
              long shelf life, has become especially popular. Favorable Climatic
              Conditions Kenya's diverse climatic regions offer ideal conditions
              for avocado cultivation. Regions such as Murang'a, Kiambu, and
              Nyeri have seen a boom in avocado farming due to their suitable
              altitudes, well-distributed rainfall, and fertile soils. These
              conditions allow for high yields and good-quality fruits, making
              Kenyan avocados highly competitive in the global market.
              Government Support and Investment Recognizing the potential of
              avocado farming, the Kenyan government has implemented policies to
              support this burgeoning sector.
              <br />
              <b>Initiatives include providing</b>
              <br />
              seedlings, offering training programs for farmers, and
              facilitating access to international markets. Additionally,
              investments in infrastructure, such as improved road networks and
              cold storage facilities, have helped streamline the supply chain
              and reduce post-harvest losses. Economic Impact The avocado boom
              has had a transformative impact on local economies. Smallholder
              farmers, who constitute the majority of avocado growers, have seen
              significant income increases. This financial boost has led to
              improved living standards, better access to education, and
              enhanced community development. Moreover, the industry's growth
              has created numerous job opportunities in farming, processing, and
              export logistics. Sustainable Practices Sustainability is at the
              heart of Kenya's avocado farming trend. Farmers are increasingly
              adopting eco-friendly practices such as organic farming,
              integrated pest management, and water conservation techniques.
              These practices not only ensure the long-term viability of avocado
              farming but also enhance the fruits' appeal to environmentally
              conscious consumers. Future Prospects The future looks promising
              for Kenya's avocado industry. Continued investment in research and
              development, coupled with strategic marketing efforts, can further
              solidify Kenya's position as a leading avocado exporter. As more
              farmers embrace this green gold, avocado farming is set to play a
              pivotal role in Kenya's agricultural and economic landscape. In
              conclusion, the rise of avocado farming in Kenya is a testament to
              the country's ability to adapt and thrive in a dynamic global
              market. With its favorable conditions, supportive policies, and
              commitment to sustainability, Kenya is poised to become a
              powerhouse in the avocado industry, bringing prosperity to its
              farmers and delight to avocado lovers worldwide. Welcome to
              AgriSoko At AgriSoko, we are passionate about revolutionizing the
              agricultural sector in Kenya. We aim to create a sustainable and
              prosperous future for farmers by leveraging modern technology,
              innovative practices, and strategic market connections. Our
              mission is to empower smallholder farmers, enhance their
              productivity, and ensure they gain fair access to lucrative
              markets both locally and internationally. Our Vision We envision a
              world where agriculture thrives through innovation and
              collaboration. Our goal is to transform the agricultural
              landscape, making it more efficient, profitable, and sustainable
              for all stakeholders involved. Our Mission Our mission is to:
              Empower Farmers: Provide resources, training, and support to help
              farmers max…
            </p>
          </div>
          <div class="md:w-full w-4/12 px-4 mb-8">
            <div class="bg-gray-100 px-4 py-6 rounded">
              <h3 class="text-lg font-bold mb-2">Categories</h3>
              <ul class="list-disc list-inside">
                <li>
                  <a href="#" class="text-gray-700 hover:text-gray-900">
                    Technology
                  </a>
                </li>
                <li>
                  <a href="#" class="text-gray-700 hover:text-gray-900">
                    Food
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
