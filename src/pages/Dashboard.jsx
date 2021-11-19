import React, { useEffect } from "react";
import Card from "../components/card/Card";
import Layout from "../components/layout/Layout";
import { useAppContext } from "../provider/AppProvider.context";

const Dashboard = () => {
  const { images, setImages } = useAppContext();

  const imageApi =
    "https://api.unsplash.com/search/photos?page=6&query=men&client_id=" +
    process.env.REACT_APP_UNSPLASH_CLIENT_ID;

  const getData = () => {
    fetch(imageApi)
      .then((res) => res.json())
      .then((data) => {
        setImages(data.results);
      });
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, []);

  return (
    <Layout>
      <div className="header">
        <div className="header_list">
          World <i className="fas fa-angle-down"></i>
        </div>
        <div className="header_list">
          Following <i className="fas fa-angle-down"></i>
        </div>
        <div className="header_list">
          Popular <i className="fas fa-angle-down"></i>
        </div>
        <div className="header_list">
          Post <i className="fas fa-angle-down"></i>
        </div>
        <div className="header_list">
          Gender <i className="fas fa-angle-down"></i>
        </div>
        <div className="header_list">
          Location <i className="fas fa-angle-down"></i>
        </div>
        <div className="header_list">
          Profession <i className="fas fa-angle-down"></i>
        </div>
      </div>
      <div className="card">
        {images?.map((image) => (
          <Card key={image.id} images={image} {...image} />
        ))}
      </div>
    </Layout>
  );
};

export default Dashboard;
