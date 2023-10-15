import React, { useState } from "react";
import { Row, Container, Col } from "react-bootstrap";
import TheButton from "../Ui/TheButton";
import "bootstrap/dist/css/bootstrap.min.css";
import classes from "./HeroFourSection.module.css";
import aboutImage from "../../assets/image/about-image.webp";
import Modal from "../Ui/Modal";

const HeroFourSection = () => {
  const [showModal, setShowModal] = useState(false);

  const aboutModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      {showModal && (
        <Modal>
          <div className={classes.about_modal}>
            <div className={classes.about_header}>
              <h2 className={classes.text_modal_header}>About us</h2>
            </div>
            <div className={classes.about_body}>
              <p className={classes.text_content}>
              We understand the demands of modern life. That's why we've curated a menu filled with mouthwatering Moroccan classics, prepared with the finest ingredients and traditional recipes passed down through generations.

              Imagine savoring fragrant tagines, tender couscous, and savory kebabs without lifting a finger in the kitchen. With us, you can enjoy these culinary delights at home, at work, or on the go.

              Our user-friendly app is your gateway to a world of Moroccan gastronomy. Whether you're craving the warmth of a hearty bowl of harira soup or the sweet indulgence of pastilla, we've got you covered.

              Say goodbye to settling for unhealthy, overpriced takeout when you can have the genuine taste of Morocco at your fingertips. Treat yourself to the flavors of Morocco, and let Moroccan Delights be your personal chef, wherever you roam. Because you deserve great food, effortlessly.
              </p>
            </div>
            <div className={classes.about_footer}>
              <div className={classes.button_modal_div}>
                <TheButton onClick={closeModal}>Cancel</TheButton>
              </div>
            </div>
          </div>
        </Modal>
      )}
      <section id="about">
        <Container>
          <Row className={`${classes.row} mx-auto`}>
            <Col
              lg={6}
              data-aos="fade-right"
              data-aos-easing="ease-out"
              data-aos-duration="700"
            >
              <div className={classes.text_div}>
                <h2 className={classes.text_header}>About us</h2>
                <p className={classes.text_content}>
                Indulge in the rich flavors of Morocco without the stress of cooking. Our culinary adventure brings the exotic taste of Moroccan cuisine right to your plate, wherever you may be.

                Why slave away in the kitchen when you can savor the authentic essence of Morocco effortlessly? We are your passport to a world of delightful Moroccan dishes, carefully crafted for your busy lifestyle.
                </p>
                <div className={classes.button_div}>
                  <TheButton onClick={aboutModal}>See more</TheButton>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div
                className={classes.image_div}
                data-aos="fade-left"
                data-aos-easing="ease-out"
                data-aos-duration="700"
              >
                <img
                  className={classes.image}
                  src={aboutImage}
                  alt="about"
                ></img>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
  //END
};

export default HeroFourSection;
