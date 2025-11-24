import { useArticles } from "../../context/AppContext";
import imageDefault from "../../assets/images/medical1.jpg";
import imageDefaultTwo from "../../assets/images/image-tech.jpg";

function CardTrending() {
  const { articles, filter, defaultArticles } = useArticles();

  const trending = filter === "home" ? defaultArticles.trending : articles;
  return (
    <section className="card-trending-container flex lg:w-275 lg:h-34 h-auto lg:flex-row flex-col justify-between overflow-x-auto scrollbar overflow-y-hidden">
      <ul className=" flex flex-col lg:flex-row justify-between gap-9 lg:h-34 h-auto">
        {trending.map((article, index) => (
          <li
            key={article.id}
            className="trending-card flex flex-row w-85 justify-between "
          >
            {/* <div className="trending-image-container"> */}
            <img
              src={article?.image || imageDefault || imageDefaultTwo}
              alt={article.title ? article.title : "Imagen de artículo"}
              className="image-trending w-26 h-34"
            />
            {/* </div> */}

            <div className="text-trending-container flex flex-col justify-between w-50 h-34 ">
              <h1 className="number-card-trending  text-Soft-red font-bold text-[1.9rem] font-">
                {String(index + 1).padStart(2, "0")}
              </h1>
              <a
                className="trending-link-url "
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <h4 className="trending-title font-primary text-Very-dark-blue dark:text-Off-white text-size-16 tracking-wide font-bold line-clamp-1 hover:text-Soft-red">
                  {article.title}
                </h4>
              </a>
              <p className="trending-description font-light text-justify  line-clamp-2 text-[.9rem]">
                {article.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
export default CardTrending;
