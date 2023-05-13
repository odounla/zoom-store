import React from "react";
import styled from "styled-components";
import { PageHero } from "../components";
import aboutImg from "../assets/hero-bcg-2023.jpg";

const AboutPage = () => {
  return (
    <main>
      <PageHero title="about" />
      <Wrapper className="page section section-center">
        <img src={aboutImg} alt="desk" />
        <article>
          <div className="title">
            <h2>our story</h2>
            <div className="underline"></div>
          </div>
          <p>
            IPhone tote bag tumeric pok pok VHS vape irony locavore migas palo
            santo coloring book. Wayfarers kinfolk knausgaard, four dollar toast
            tattooed bushwick sustainable crucifix enamel pin taxidermy
            try-hard. Ramps iceland trust fund actually health goth. Affogato
            XOXO chartreuse humblebrag, meditation iceland tacos wayfarers
            kitsch master cleanse.Direct trade coloring book listicle tousled
            banh mi. Sriracha thundercats street art af. Tbh lo-fi vinyl poke,
            woke prism VHS iceland trust fund man bun. Jean shorts fam kale
            chips cold-pressed, cloud bread poutine selvage listicle photo booth
            trust fund kombucha single-origin coffee raclette. Mustache green
            juice brooklyn wolf banjo church-key food truck pickled fixie.
          </p>
        </article>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default AboutPage;
