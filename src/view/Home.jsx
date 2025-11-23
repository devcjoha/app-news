import Header from "../components/layout/Header";
import useNewsFeed from "../hooks/useNewsFeed";
import imageHealth from "../assets/images/medical1.jpg";
import imageHealthTwo from "../assets/images/medical2.jpg";
import imageTech from "../assets/images/image-tech.jpg";
import { useArticles } from "../context/AppContext";
import CardHero from "../components/cards/CardHero";
import CardNew from "../components/cards/CardNew";
import CardTrending from "../components/cards/CardTrending";

function Home({ handleToggle, darkMode, setDarkMode }) {
  const { error, loading } = useArticles();

  const categoryImages = {
    health: imageHealth,
    science: imageHealthTwo,
    technology: imageTech,
    default: imageHealthTwo,
  };
  const getImage = (article) => {
    if (article?.image) {
      return article.image;
    }
    return categoryImages[article?.category] || categoryImages.default;
  };
  return (
    <>
      <section className="home-container flex flex-col items-center lg:w-286 w-screen lg:pt-15 p-5 min-h-screen">
        <Header
          handleToggle={handleToggle}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        ></Header>

        {loading && <p>Loading...</p>}
        {error && <p className="text-red-700 text-size-16">{error}</p>}

        {/* SECTIONS CONTAINER */}
        <div className="sections-container lg:w-full flex flex-col lg:h-180 w-85 items-center">
          {/* HERO NEW CONTAINER */}
          <div className="hero-new-container w-full flex flex-row flex-wrap lg:h-125 lg:mb-18 mb-16 lg:justify-between">
            {/* SECTION HERO */}
            <CardHero getImage={getImage} />

            {/* SECTION NEW */}
            <div className="new-card-container lg:w-88 w-85 h-125 bg-Very-dark-blue text-Off-white  dark:text-Off-white ">
              <h1 className="text-Soft-orange p-6 pb-0 text-size-32 font-bold">
                New
              </h1>
              <CardNew />
            </div>
          </div>
          {/* SECTION TRENDING */}
          <CardTrending />
        </div>
      </section>
    </>
  );
}
export default Home;
