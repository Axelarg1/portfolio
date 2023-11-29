import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Bonjour tout le monde, je suis <span className="purple">Axel Aragon </span>
            je viens de<span className="purple"> Sarthe, en France.</span> mais je suis désormais à<span className="purple"> Paris.</span>
            <br />Après 3 années d'apprentissage en obtenant un <span className="purple">BTS SIO</span> ainsi qu'une licence <span className="purple">CDA</span>.
            Je poursuis ma<span className="purple"> 4ème année</span> d'apprentissage en préparant un Master Architecte Technique en Informatique et Réseaux, <span className="purple">option Logiciel</span>.
            <br />
            <br />
            J'aime apprendre de nouvelles technologies et langages afin d'approfondir mes compétences.
            <br />
            <br />
            J'ai plusieurs hobbies
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight />  La Musique
            </li>
            <li className="about-activity">
              <ImPointRight />  Les jeux vidéos
            </li>
            <li className="about-activity">
              <ImPointRight />  Les films
            </li>
          </ul>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
