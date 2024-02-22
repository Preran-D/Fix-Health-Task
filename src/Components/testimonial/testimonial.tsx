import React from "react";
import "./testimonial.css";

const reviews = [
  {
    name: "Daniel Clifford",
    designation: "Consulant",
    imageSrc:
      "https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-daniel.jpg",
    reviewTitle: "Received Excellent Medical Care",
    reviewContent:
      "The medical team provided exceptional care, and I felt confident in their expertise throughout my consultation.",
  },
  {
    name: "Jonathan Walters",
    designation: "Pilot",
    imageSrc:
      "https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-jonathan.jpg",
    reviewTitle: "Grateful for Compassionate Service",
    reviewContent:
      "The staff demonstrated empathy and professionalism, making my hospital visit as comfortable as possible.",
  },
  {
    name: "Kira Whittle",
    designation: "Artist",
    imageSrc:
      "https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-kira.jpg",
    reviewTitle: "Highly Recommend for Medical Needs",
    reviewContent:
      "My experience at the hospital was reassuring, thanks to the attentive care provided by the medical team. The doctors and nurses were not only highly skilled but also compassionate, taking the time to address all my concerns and ensuring I felt supported throughout my entire stay. Their dedication to patient care truly made a difference during a challenging time, and I cannot recommend this hospital enough for anyone in need of medical assistance.",
  },
  {
    name: "Jeanette Harmon",
    designation: "Architect",
    imageSrc:
      "https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-jeanette.jpg",
    reviewTitle: "Impressed by Professionalism",
    reviewContent:
      "The hospital staff exhibited professionalism and expertise, ensuring I received the best possible care.",
  },
  {
    name: "Patrick Abrams",
    designation: "Engineer",
    imageSrc:
      "https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-patrick.jpg",
    reviewTitle: "Exceptional Service from Start to Finish",
    reviewContent:
      "From the initial consultation to post-treatment follow-up, the hospital provided top-notch service at every step.",
  },
];

const Testimonial = () => {
  return (
    <div className="testimonial-container">
      <div className="outerdiv">
        <div className="innerdiv">
          {reviews.map((review, index) => (
            <div key={index} className={`div${index + 1} eachdiv`}>
              <div className="userdetails">
                <div className="imgbox">
                  <img src={review.imageSrc} alt="" />
                </div>
                <div className="detbox">
                  <p className="name">{review.name}</p>
                  <p className="designation">{review.designation}</p>
                </div>
              </div>
              <div className="review">
                <h4>{review.reviewTitle}</h4>
                <p>{review.reviewContent}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
