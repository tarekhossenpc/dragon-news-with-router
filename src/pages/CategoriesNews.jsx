import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "./NewsCard";

const CategoriesNews = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const [newsData, setNewsData] = useState([]);
  console.log(id, data);
  useEffect(() => {
    if (id == "0") {
      setNewsData(data);
    } else if (id == "1") {
      const filteredNews = data.filter(
        (news) => news.others.is_today_pick == true,
      );
      setNewsData(filteredNews);
    } else {
      const filteredNews = data.filter((news) => news.category_id == id);
      setNewsData(filteredNews);
    }
  }, [data, id]);
  return (
    <div>
      <h1 className="font-bold">Categories News({newsData.length})</h1>
      <div>
        {
            newsData.map(news=> <NewsCard key={news.id} news={news}></NewsCard>)
        }
      </div>
    </div>
  );
};

export default CategoriesNews;
