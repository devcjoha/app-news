import { useArticles } from "../../context/AppContext";

function CardNew() {
  const { articles, filter, defaultArticles } = useArticles();

  const news = filter === "home" ? defaultArticles.new : articles;
  if (!news) return <p>Loading...</p>;
  return (
    <>
      <div className="new-cards h-95 pl-5 pr-6 overflow-y-auto scrollbar ">
        {news.map((article) => (
          <div
            key={article.id}
            className="new-text-container flex flex-col  border-b border-Grayish-blue pb-6 pt-4 dark:border-Very-dark-blue "
          >
            <h4 className="new-title font-primary text-size-20 tracking-wide pt-3 font-bold line-clamp-1 ">
              {article.title}
            </h4>
            <div className="flex flex-col">
              <p className="new-description font-light text-size-14 text-justify tracking-wide line-clamp-2 pt-3">
                {article.description}
                <span>
                  <a
                    className="new-link-url text-[.7rem] italic "
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    Read more...
                  </a>
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
export default CardNew;
