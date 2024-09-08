import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';//bootstrap


import Header from "./components/Header";
import Stories from "./components/Stories";
import Post from "./components/Post";
import Footer from "./components/Footer";

//post components
const App = () => {
  const postsData = [
    {
      username: "vane_mokoena",
      location: "Nelspruit",
      imgSrc:  '/images/Post-1.jpg',
      caption: "Loving the vibes!",
    },
    {
      username: "thegirl_jt",
      location: "Kimberly",
      imgSrc: '/images/Post-2.jpg',
      caption: "Great day at the beach!",
    },
    {
      username: "olosom",
      location: "Rusternburg",
      imgSrc: '/images/Post-3.jpg',
      caption: "Had an amazing dinner!",
    },
  ];

  return (
    <div>
      <Header />
      <Stories />
      {postsData.map((post, index) => (
        <Post key={index} data={post} />
      ))}
      <Footer />
    </div>
  );
};

export default App;
