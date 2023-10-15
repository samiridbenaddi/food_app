import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import classes from "./HeroThreeSection.module.css";
import HeroThreeContent from "../SectionComponents/HeroThreeContent";

// const dummyListone = [
//   {
//     id: "d1",
//     src: dish1,
//     name: "Couscous Marocain",
//     price: 40,
//   },

//   {
//     id: "d2",
//     src: dish2,
//     name: "R'fissa",
//     price: 30,
//   },

//   {
//     id: "d3",
//     src: dish3,
//     name: "Pastilla",
//     price: 70,
//   },
//   {
//     id: "d4",
//     src: dish4,
//     name: "Tagine",
//     price: 40,
//   },
// ];


const HeroThreeSection = () => {
  const [dishList, setDishList] = React.useState([]);

  React.useEffect(() => {
    fetch("http://localhost:5000/produits")
      .then((res) => res.json())
      .then(setDishList);
  }, []);

  //Mapper les données de l'objet ci-dessus et les stocker dans une variable

  const dishList1 = dishList
    .filter((item) => item.Quantite > 0)
    .map((dish) => (
      <Col key={dish._id} lg={4} className={classes.dish_col}>
        <div
          data-aos="fade-up"
          data-aos-easing="ease-out"
          data-aos-duration="700"
        >
          <HeroThreeContent
            key={dish._id}
            id={dish._id}
            name={dish.Titre}
            src={dish.Photo}
            price={dish.Prix}
            Description={dish.Description}
            quantity={dish.Quantite}
          />
        </div>
      </Col>
    ));


  return (
    <section id="dishes">
      <Container>
        <Row
          className={`${classes.row} mx-auto`}
          data-aos="fade-up"
          data-aos-easing="ease-out"
          data-aos-duration="700"
        >
          <Col xs={12}>
            <div className={classes.header_div}>
              <h2>Our daily dishes</h2>
              <p>Explore our recommended dishes selected just for you</p>
            </div>
          </Col>
        </Row>

        <Row className={classes.row_dish}>{dishList1}</Row>
      </Container>
    </section>
  );
};

export default HeroThreeSection;
