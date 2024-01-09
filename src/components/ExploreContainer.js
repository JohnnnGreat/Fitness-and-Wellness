import React from "react";
import ImageCon from "../../public/HeroImage.jpg";
import Image from "next/image";
import Link from "next/link";

const ExploreContainer = ({ keyValue, title, desc, img }) => {
  return (
    <div key={keyValue} className="card">
      <Image src={img} alt="Explore Image" />
      <h1 className="card__header">{title}</h1>
      <p className="card__desc">{desc}</p>
      <Link href="/readmore">Read More</Link>
    </div>
  );
};

export default ExploreContainer;
