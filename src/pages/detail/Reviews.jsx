import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiConfig from "../../api/apiConfig";
import tmdbApi from "../../api/tmdbApi";

const Reviews = (props) => {
  const { category } = useParams();
  console.log("params category review ", category);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getReviews = async () => {
      const res = await tmdbApi.reviewUsers(category, props.id);
      console.log("res data reviews", res);
      console.log("res data reviews results", res.results);
      setReviews(res.results.slice(0, 3));
    };
    getReviews();
  }, [category, props.id]);

  console.log("reviews", reviews);

  return (
    <>
      <p style={{ margin: "0 30px 10px", borderTop: "1px #e4cece solid", paddingTop: '10px' }}>
        {reviews.length} Comments
      </p>
      <div className="review__box" style={{ backgroundColor: "#fff" }}>
        {reviews.map((review, index) => (
          <div className="review__box__item">
            <img
              className="review__box__item__img"
              src={
                review.author_details.avatar_path
                  ? apiConfig.w500Image(review.author_details.avatar_path)
                  : "https://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png"
              }
              alt=""
            />
            <div className="review__box__item__comment">
              <p className="review__author">{review.author}</p>
              <p className="review__content">{review.content}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};


export default Reviews;
