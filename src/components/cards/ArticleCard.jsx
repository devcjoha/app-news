function ArticleCard({ articles, getImage }) {
  return (
    <>
      <section className="articles-card-container grid gap-12 sm:grid-cols-1 lg:grid-cols-2 divide-red-500 whitespace-pre-wrap ">
        {articles.map((article, i) => (
          <div
            key={i}
            className="card-container w-full dark:bg-gray-800 h-150 rounded-sm border border-transparent lg:hover:shadow-lg dark:shadow-gray-900 lg:hover:scale-105 lg:transition-transform duration-300"
          >
            <a
              key={i}
              aria-label={`Leer artículo: ${article.title}`}
              href={article.url}
              className="url-article lg:w-130 w-full cursor-pointer "
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={getImage(article)}
                alt={article.title ? article.title : "Imagen de artículo"}
                className="image-article w-full h-75 border-transparent rounded-t-sm"
                onError={(e) => {
                  e.currentTarget.src =
                    categoryImages[article?.category] || categoryImages.default;
                }}
              />
              <div className="text-card lg:p-5 h-full">
                <h3 className="title-article font-primary uppercase tracking-wide text-3xl font-extrabold">
                  {article.title}.
                </h3>

                <p className="description-article font-secundary pt-5 font-light text-justify tracking-wide line-clamp-4 ">
                  {article.description}
                </p>

                <p className="source-article font-secundary pt-4 text-size-12 font-medium italic ">
                  {article.source}. <span className="font-bold">  # {article.category}</span>
                </p>
              </div>
            </a>
          </div>
        ))}
      </section>
    </>
  );
}
export default ArticleCard;
