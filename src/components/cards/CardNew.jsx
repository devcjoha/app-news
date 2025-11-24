import { useArticles } from "../../context/AppContext";

function CardNew() {
  const { articles, filter, defaultArticles } = useArticles();

  const news = filter === "home" ? defaultArticles.new : articles;
  return (
    <>
      <section className="new-cards h-100 pl-5 pr-6 overflow-y-auto scrollbar ">
        {news.map((article) => (
          <div
            key={article.id}
            className="new-text-container flex flex-col  border-b border-Grayish-blue pb-6 pt-4 dark:border-Very-dark-blue "
          >
            <a
              className="new-link-url "
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4 className="new-title font-primary text-size-20 tracking-wide pt-3 font-bold line-clamp-1 hover:text-Soft-orange ">
                {article.title}
              </h4>
            </a>
            <div className="flex flex-col">
              <p className="new-description font-light text-size-14 text-justify tracking-wide line-clamp-2 pt-3">
                {article.description}
                <span></span>
              </p>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
export default CardNew;
