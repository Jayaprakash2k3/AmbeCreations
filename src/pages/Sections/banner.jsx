import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";

const CarouselComponent = () => {
  const [images, setImages] = useState([]);
    const apiURL = "http://ambecreation.com/backend/api/get-slides";

  useEffect(() => {
    // Replace with your API endpoint
    const apiURL = "http://ambecreation.com/backend/api/get-slides";

    const fetchImages = async () => {
      try {
        const response = await fetch(apiURL);
        const data = await response.json();
        const imageUrls = data.data.map((item) => item.image_url);
        setImages(imageUrls);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };
    fetchImages();
  }, []);

  return (
    <Carousel>
      {images.map((url, index) => (
        <Carousel.Item key={index}>
          <img className="d-block w-100 rounded" src={url} alt={`Slide ${index + 1}`} />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
