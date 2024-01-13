import React from "react";
import ImageCon from "../../public/HeroImage.jpg";
import Image from "next/image";
import Link from "next/link";

const ExploreContainer = ({ keyValue, title, desc, img, delay }) => {
  return (
    <div
      key={keyValue}
      className="card"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay={delay}
    >
      <Image src={img} alt="Explore Image" />
      <h1 className="card__header">{title}</h1>
      <p className="card__desc">{desc}</p>
      <Link href="/readmore">Read More</Link>
    </div>
  );
};

export default ExploreContainer;
