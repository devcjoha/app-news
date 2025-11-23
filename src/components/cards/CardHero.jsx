import { useArticles } from "../../context/AppContext";

function CardHero({ getImage }) {
  const { articles } = useArticles();

  const heroArticle = articles[0];

  if (!heroArticle) return <p>Loading...</p>;

  return (
    <div className="card-hero-container w-full lg:w-180 mb-16 flex flex-col justify-between">
      {heroArticle.category === "default" ? (
        <div className="hero-image-container bg-cover w-full h-74 bg-[url(assets/images/image-web-3-mobile.jpg)] lg:bg-[url(assets/images/image-web-3-desktop.jpg)] "></div>
      ) : (
        <div className="hero-image-container relative flex justify-center w-full h-74 ">
          <div
            className="absolute inset-0 bg-center bg-cover blur-xs opacity-40 h-full"
            style={{ backgroundImage: `url(${getImage(heroArticle)})` }}
          ></div>
          <img
            src={getImage(heroArticle)}
            alt={heroArticle.title ? heroArticle.title : "Imagen de artículo"}
            className="image-trending w-120 h-full border-transparent z-40"
          />
        </div>
      )}
      {/* TITLE TEXT CONTAINER */}
      <div className="hero-text-container flex lg:flex-row flex-col mt-7 justify-between">
        {/* TITLE */}
        <div className="title-hero-conatiner w-80">
          <h3 className="hero-title lg:mb-0 mb-5 text-Very-dark-blue dark:text-Off-white text-font-primary capital lg:leading-13 lg:text-size-48 text-size-40 font-extrabold line-clamp-3 leading-10 ">
            {heroArticle.title}
          </h3>
        </div>

        {/* DESCRIPTION AND BUTTON */}
        <div className="flex flex-col w-85">
          <p className="hero-description font-light text-justify leading-6 tracking-wide line-clamp-4 text-[.9rem] ">
            {heroArticle.description}
          </p>
          <p className="source-article font-secundary lg:pb-4 mb-4 text-[.6rem] text-Dark-gray-sh-blue dark:text-Off-white font-medium ">
            {heroArticle.source}.
            <span className="font-bold"> # {heroArticle.category}</span>
          </p>
          <a
            className="hero-link-url flex items-center w-49 bg-Soft-red text-Very-dark-blue font-bold text-[.89em] tracking-[.3rem] "
            href={heroArticle.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="link-hero flex justify-center items-center w-49 h-[46px]">
              READ MORE
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
export default CardHero;
