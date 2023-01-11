import React, { useRef } from "react";
import SectionTitle from "../sectiontitle/SectionTitle";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import "./style.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import Fish from "../img/fish.png";
import Egg from "../img/egg.png";

export default function About() {
  const slider = useRef(null);
  const pic = [
    {
      img: Fish,
    },
    {
      img: Egg,
    },
    {
      img: Egg,
    },
    {
      img: Egg,
    },
  ];
  const settings = {
    // arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
  return (
    <section className="about_section">
      <div className="about_wrapper">
        <div className="section_about_title_position">
          <SectionTitle
            title={"ABOUT"}
            subtitle={"The Basics Of Healthy Food"}
          />
        </div>
        <p className="about_subtitle">
          In aliqua ea ullamco ad est ex non deserunt nulla. Consectetur sint ea
          aliquip aliquip consectetur <br /> voluptate est. Eu minim dolore
          laboris enim mollit voluptate irure esse aliquip.
        </p>
        <div className="about_slider_wrapper">
          {/* <button onCLick={slider?.slickPrev}>
            <BsArrowLeftCircle />
          </button> */}
          <Slider ref={slider} {...settings}>
            {pic.map((el, i) => (
              <div key={i}>
                <img src={el.img} alt="pic" />
              </div>
            ))}
          </Slider>
          {/* <button>
            <BsArrowRightCircle onCLick={slider?.slickNext} />
          </button> */}
        </div>
      </div>
    </section>
  );
}
