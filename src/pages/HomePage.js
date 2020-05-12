import React from "react";
import Article from "../components/Article";

const articles = [
  {
    id: 1,
    title: "Czym jest teoria strun",
    author: "Jan Nowak",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, labore ab perspiciatis impedit officiis vel sapiente, magnam voluptas nesciunt adipisci repudiandae ullam, sequi totam eius accusamus sint maiores quasi? Consectetur.",
  },
  {
    id: 2,
    title: "Co się stało z Rysią K.?",
    author: "Jan Nowak",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, labore ab perspiciatis impedit officiis vel sapiente, magnam voluptas nesciunt adipisci repudiandae ullam, sequi totam eius accusamus sint maiores quasi? Consectetur.",
  },
  {
    id: 3,
    title: "Pogryziony przez bezdomnego staniesz się wilkołakiem",
    author: "Beavis Butthead",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, labore ab perspiciatis impedit officiis vel sapiente, magnam voluptas nesciunt adipisci repudiandae ullam, sequi totam eius accusamus sint maiores quasi? Consectetur.",
  },
];

const HomePage = () => {
  const artList = articles.map((article) => (
    <Article
      key={article.id}
      title={article.title}
      author={article.author}
      text={article.text}
    />
  ));

  return <div className="home">{artList}</div>;
};

export default HomePage;
