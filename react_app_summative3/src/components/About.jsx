import React from "react";
import "../css/about.css";
import header from "../img/about-image.jpg";

function About() {
  return (
    <div className="aboutContent">
      <h2>About Us</h2>
      <div className="header-text">
        <img src={header} alt="header" className="aboutHeader" />
      </div>
      <h1>The big challenge</h1>
      <p>
        Three introduced predators – rats, possums and stoats – are generally
        accepted as the main agents of ecological decline in New Zealand. Aside
        from the estimated 25 million native birds they kill each year, they
        cost this country billions of dollars annually, and they impact on the
        country’s primary production base through the transmission of diseases
        such as bovine tuberculosis. New Zealand is a world leader in removing
        invasive predators from islands and predator fenced areas. However the
        need for a defendable barrier (e.g. the sea) or the social and
        geographic challenges of predator fencing, limit the scale at which they
        can be used. Therefore on the mainland, the current predator management
        approach is ongoing suppression of predator populations using traps or
        toxins. This carries a significant long-term cost as reinvasion must be
        continually managed.
      </p>
      <h1>How we’re helping</h1>
      <p>
        Zero Invasive Predators Ltd (ZIP) was established to develop
        operationally ready, innovative, strongly supported technologies to
        completely remove rats, possums and stoats from large mainland areas,
        and then protect those areas from reinvasion. We call this model Remove
        and Protect. The Remove and Protect approach, if successful, will make
        it possible to carry out predator control in terrain where it is neither
        desirable nor possible to construct predator fences. Reduce our
        dependence on the repeated wide scale application of toxins at chosen
        sites enable progressive expansion of a protected area as funds and
        confidence allow create an environment on the mainland where, in time,
        ecological integrity could rival that of predator-free offshore islands.
      </p>
    </div>
  );
}

export default About;
