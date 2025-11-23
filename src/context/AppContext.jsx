import { createContext, useState, useContext, useEffect, useMemo } from "react";
import defaultArticles from "../assets/data/defaultArticles.json";
import mockJson from "../assets/data/mockNews.json";
// import useNewsFeed from "../hooks/useNewsFeed";

const ArticlesContext = createContext();

export function ArticlesProvider({ children }) {
  const [filter, setFilter] = useState("home");

  // 🔹 Simulación de fetch con mockJson (ya no usamos el hook)
  const mockArticles = mockJson.data;
  // 🔹 Estados derivados del mock
  const [newArticle, setNewArticle] = useState(null);
  const [trendingArticles, setTrendingArticles] = useState([]);
  const [popularArticles, setPopularArticles] = useState([]);

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // carga de datos
    setLoading(true);

    try {
      if (!mockArticles || !mockArticles.length) {
        setError(true); // Si no hay datos, marcamos error
        setLoading(false);
        return;
      }

      // Hero: artículo más reciente
      const latest = mockArticles.reduce(
        (acc, cur) =>
          new Date(cur.published_at) > new Date(acc.published_at) ? cur : acc,
        mockArticles[0]
      );
      setNewArticle(latest);

      // Trending: por palabras clave
      const keywords = ["cyberspace", "metaverse", "futuristic", "retro", "laptops", "gaming"];
      setTrendingArticles(
        mockArticles.filter((a) =>
          keywords.some((k) => a.title?.toLowerCase().includes(k))
        )
      );

      // Popular: por fuente
      const popularSources = [
        "TechCrunch",
        "The New York Times",
        "Google News Health GB",
      ];
      setPopularArticles(
        mockArticles.filter((a) => popularSources.includes(a.source))
      );

      setError(false);
    } catch (err) {
      setError(true);
      err.message("Error al ")
    } finally {
      setLoading(false); 
    }
  }, [mockArticles]);

  // Qué mostrar según el filtro activo
  const articlesToShow = useMemo(() => {
    if (!filter || filter === "home") {
      return [
        defaultArticles.hero,
        ...defaultArticles.new,
        ...defaultArticles.trending,
      ];
    }
    if (filter === "new" && newArticle) return [newArticle] ;
    if (filter === "trending") return trendingArticles;
    if (filter === "popular") return popularArticles;

    const categories = ["science", "technology", "health", "default"];
    if (categories.includes(filter)) {
      return mockArticles.filter((a) => a.category?.toLowerCase() === filter);
    }

    // Fallback: mostrar todo el mock si el filtro no coincide
    return mockArticles || [];
  }, [filter, mockArticles, newArticle, trendingArticles, popularArticles]);

  return (
    <ArticlesContext.Provider
      value={{
        filter,
        setFilter,
        articles: articlesToShow,
        loading,
        error,
        defaultArticles
      }}
    >
      {children}
    </ArticlesContext.Provider>
  );
}

export function useArticles() {
  return useContext(ArticlesContext);
};