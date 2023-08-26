/* eslint-disable react/prop-types */
import React from "react";
import moment from "moment";
import { Image, Card } from "react-bootstrap";
import { FaEye, FaRegStar, FaStar, FaRegBookmark, FaShareNodes } from "react-icons/fa6";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const { _id, title, details, image_url, author, total_view, rating } = news;
  return (
    <Card className="mb-4">
      <Card.Header className="d-flex  justify-content-between align-items-center">
        <div className="d-flex  align-items-center">
          <Image style={{ height: "54px" }} src={author?.img} roundedCircle />
          <div className="ms-2">
            <h6 className="mb-0">{author?.name}</h6>
            <small>
              {moment(author?.published_date).format("MMMM Do YYYY")}
            </small>
          </div>
        </div>
        <div>
          <FaRegBookmark className="mx-2"></FaRegBookmark>
          <FaShareNodes></FaShareNodes>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={image_url} className="my-4" />
        <Card.Text>
          {details.length < 200 ? (
            <>{details} </>
          ) : (
            <>
              {details.slice(0, 200)}...{" "}
              <Link className="text-decoration-none" to={`/news/${_id}`}>
                Read More
              </Link>{" "}
            </>
          )}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted d-flex">
        <div className="d-flex flex-grow-1">
          <p className="me-2 m-0">{rating.number}</p>
          <Rating
            style={{ 'margin-top': "-3px" }}
            placeholderRating={rating.number}
            readonly
            emptySymbol={<FaRegStar></FaRegStar>}
            placeholderSymbol={<FaStar></FaStar>}
            fullSymbol={<FaStar></FaStar>}
          />
        </div>
        <div>
          <FaEye className="me-2" style={{ 'margin-top': "-3px" }}></FaEye>
          {total_view}
        </div>
      </Card.Footer>
    </Card>
  );
};

export default NewsCard;
