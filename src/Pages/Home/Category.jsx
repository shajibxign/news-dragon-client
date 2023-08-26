// eslint-disable-next-line no-unused-vars
import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsCard from "./NewsCard";

const Category = () => {
  // const {id} = useParams();
  const categoryNews = useLoaderData();
  return (
    <div>
      <h4>News in this Category {categoryNews.length}</h4>
      {categoryNews.map((news) => (
        <NewsCard key={news._id} news={news}></NewsCard>
      ))}
    </div>
  );
};

export default Category;
