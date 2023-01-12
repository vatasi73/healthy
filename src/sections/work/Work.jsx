import React from "react";
import SectionTitle from "../../component/sectionTitle/SectionTitle";
import style from "./work.module.css";
export default function Work() {
  const text = [
    {
      title: "Pick Meals",
      subtitle:
        "Choose your meals from our diverse weekly menu. Find gluten or dairy free, low carb & veggie options.",
    },
    {
      title: "Choose How Often",
      subtitle:
        "Our team of chefs do the prep work - no more chopping, measuring, or sink full of dishes!",
    },
    {
      title: "Fast Deliveries",
      subtitle:
        "Your freshly prepped 15-min dinner kits arrive on your doorstep in a refrigerated box.",
    },
    {
      title: "Tasty Meals",
      subtitle:
        "Gobble makes cooking fast, so you have more time to unwind and be with family.",
    },
  ];

  return (
    <section className={style.section_work}>
      <div className={style.section_work_title_position}>
        <SectionTitle title={"WORK"} subtitle={"How It Works"} />
      </div>
      <div className={style.section_work_card_wrapper}>
        {text.map((el, i) => (
          <div className={style.section_work_card} key={i}>
            <h3 className={style.section_work_card_title}> {el.title}</h3>
            <hr className={style.section_work_card_underline_green} />
            <p className={style.section_work_card_subtitle}>{el.subtitle}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
