import React, { useRef } from "react";
import Slider from "react-slick";
import * as styles from "./TeamCarousel.module.css";
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={[className, styles.nextArrow].join(" ")}
      style={{
        zIndex: "1",
        right: "100px",
      }}
      onClick={onClick}
    >
      <img src="/images/arrow_right.png" alt="arrow right" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={[className, styles.prevArrow].join(" ")}
      style={{
        zIndex: "1",
        left: "30px",
      }}
      onClick={onClick}
    >
      <img src="/images/arrow_left.png" alt="arrow_left" />
    </div>
  );
}

var settings = {
  dots: false,
  infinite: true,
  centerMode: true,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};

const TeamCarousel = ({ item }) => {
  const sliderRef = useRef(null);
  return (
    <div className={styles.sliderRoot}>
      <h3 className={styles.teamTitle}>
        <span>Meet</span> the Team
      </h3>
      <p>The ones who are making everything happen.</p>
      <div className={styles.sliderWrapper}>
        <Slider ref={sliderRef} {...settings}>
          <div className={styles.slideBox}>
            <img src="/images/team5.png" alt="team5" />
            <h3>Sara</h3>
            <h4>Desination</h4>
          </div>
          <div className={styles.slideBox}>
            <img src="/images/team3.jpeg" alt="team3" />
            <h3>John</h3>
            <h4>Desination</h4>
          </div>
          <div className={styles.slideBox}>
            <img src="/images/team3.jpeg" alt="team3" />
            <h3>Doe</h3>
            <h4>Desination</h4>
          </div>
          <div className={styles.slideBox}>
            <img src="/images/team5.png" alt="team5" />
            <h3>Kent</h3>
            <h4>Desination</h4>
          </div>
          <div className={styles.slideBox}>
            <img src="/images/team3.jpeg" alt="team3" />
            <h3>John</h3>
            <h4>Desination</h4>
          </div>
          <div className={styles.slideBox}>
            <img src="/images/team5.png" alt="team5" />
            <h3>John</h3>
            <h4>Desination</h4>
          </div>
          <div className={styles.slideBox}>
            <img src="/images/team3.jpeg" alt="team3" />
            <h3>Kent</h3>
            <h4>Desination</h4>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default TeamCarousel;