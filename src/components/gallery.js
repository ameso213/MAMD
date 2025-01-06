import React, { useEffect, useState } from "react";
import "./gallery.css"; 

const Gallery = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch images and categories from backend
    fetch("http://your-backend-api-url.com/api/gallery") 
      .then((response) => response.json())
      .then((data) => {
        setCategories(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching gallery data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="gallery-container">
      <h1>Our Best Foods</h1>
      {categories.map((category) => (
        <div key={category.name} className="category-section">
          <h2 className="category-title">{category.name.toUpperCase()}</h2>
          <div className="images-grid">
            {category.images.map((image) => (
              <div key={image.id} className="image-item">
                <img src={image.url} alt={image.name} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Gallery;

/* Example response from backend:
[
  {
    "name": "Breakfast",
    "images": [
      { "id": 1, "name": "Pancakes", "url": "https://example.com/pancakes.jpg" },
      { "id": 2, "name": "Waffles", "url": "https://example.com/waffles.jpg" }
    ]
  },
  {
    "name": "Wraps",
    "images": [
      { "id": 3, "name": "Chicken Wrap", "url": "https://example.com/chicken-wrap.jpg" },
      { "id": 4, "name": "Veggie Wrap", "url": "https://example.com/veggie-wrap.jpg" }
    ]
  }
]
*/
