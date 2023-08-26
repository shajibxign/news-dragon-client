// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";

const LeftNav = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="me-3">
      <div>
        <h5>All Categories</h5>
      </div>
      <div>
        <ListGroup>
        {categories.map((category) => (
          <ListGroup.Item key={category.id} action>
            <Link to={`/category/${category.id}`} className="text-decoration-none text-dark">
              {category.name}
            </Link>
          </ListGroup.Item>
        ))}
      </ListGroup>
      </div>
      
    </div>
  );
};

export default LeftNav;
