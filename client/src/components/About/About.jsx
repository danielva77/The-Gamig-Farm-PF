import React from "react";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import "./about.css";
import gitHubMorado from "../Assets/gitHubMorado.png";
import linkedinMorado from "../Assets/linkedinMorado.png";

const team = [
  {
    id: 1,
    name: "Daniel Valdez",
    description:
      "Ingeniero y desarrollador full stack, con gran habilidad en pensamiento analítico y orientado a resultados. Buen manejo de inglés y trabajo en equipo",
    image: "https://i.ibb.co/mRts8tr/dani.png",
    linkedin: "https://www.linkedin.com/in/daniel-valdez-94a638195/",
    github: "https://github.com/danielva77",
  },
  {
    id: 1,
    name: "Jacqueline Castillo",
    description:
      "Desarrollador full stack, con gran habilidad analítica y lógica capaz de encontrar soluciones a los problemas que se plantean y con alto interés en explorar los caminos de la programación.",
    image: "https://i.ibb.co/q0fhhgB/jaqui.png",
    linkedin: "https://www.linkedin.com/in/jacqueline-castillo-/",
    github: "https://github.com/jacquec",
  },
  {
    id: 1,
    name: "Bradley Caruci",
    description:
      "Desarrollador Front-end en busca de nuevas experiencias y retos que me hagan crecer personalmente y profesionalmente.",
    image: "https://i.ibb.co/crsZdWm/bradley.png",
    linkedin: "https://www.linkedin.com/in/bradley-caruci-767a7a22a/",
    github: "https://github.com/BradleyGCF",
  },
  {
    id: 1,
    name: "Imanol Malamud",
    description:
      "Fullstack Developer - Con interés en participar en proyectos para el desarrollo de productos y servicios IT. Me gusta trabajar en grupo. Tengo un buen manejo del inglés.",
    image: "https://i.ibb.co/y50pk1Q/IMG-20230125-WA0013.jpg",
    linkedin: "https://www.linkedin.com/in/imanol-malamud/",
    github: "https://github.com/ImanolMalamud",
  },
  {
    id: 1,
    name: "Benjamin Bidondo ",
    description:
      "Actualmente fortaleciento mis conocimentos en Frontend. Emocionado de formar parte de este equipo y poder ampliar mis aptitudes como Full Stack Developer.",
    image: "https://i.ibb.co/b28Swg3/Dise-o-sin-t-tulo.png",
    linkedin: "https://www.linkedin.com/in/benjamin-bidondo-lacassy-a5a089231/",
    github: "https://github.com/BBidondo",
  },
  {
    id: 1,
    name: "Mauricio Torres",
    description:
      "Desarrollador Web Full-Stack constantemente en búsqueda de nuevos retos que me permitan crecer profesionalmente.",
    image: "https://i.ibb.co/2vyhTt7/IMG-20230124-WA0041.jpg",
    linkedin: "https://www.linkedin.com/in/mauricio-torres-suesc%C3%BAn/",
    github: "https://github.com/MauricioSuescun",
  },
  {
    id: 1,
    name: "Alfredo Zavala",
    description:
      "Desarrollador Full Stack,  Quiero utilizar mis habilidades para llevar a cabo ideas, proyectos, que tengan impacto en el mundo. Acompañado con el aprendizaje de todos los días el ingles.",
    image: "https://i.ibb.co/7k5WbbN/Alfredo.png",
    linkedin: "https://www.linkedin.com/in/alfredo-zavala-/",
    github: "https://github.com/Tutialfred",
  },
];

export default function About() {
  return (
    <div>
      <NavBar />

      <div className="primerDiv">
        <h1 className="sobreNosotros">Sobre Nosotros</h1>

        <p className="parrafo1">
          La experiencia de trabajar en equipo ha sido muy enriquecedora para
          todos nosotros. Hemos aprendido a comunicarnos de manera efectiva, a
          colaborar y a respetar las ideas y opiniones de nuestros compañeros.
          emos tenido la oportunidad de poner en práctica nuestras habilidades
          de liderazgo y gestión de proyectos, asegurando que nuestro equipo se
          mantenga enfocado y motivado hacia nuestros objetivos.
        </p>
      </div>

      <div className="primerDiv">
        <h1 className="nuestroEquipo">Nuestro Equipo</h1>
        {team.map((el) => {
          return (
            <div className="tarjetasPadre">
              <div className="cardPersona">
                <div className="divFoto">
                  <img src={el.image} className="fotoEquipo" />
                </div>

                <div>
                  <div>
                    <h1 className="nombreEquipo">{el.name}</h1>
                    <p className="descripcionEquipo">{el.description}</p>

                    <div className="linksEquipo">
                      <a href={el.linkedin} target="_blank">
                        <img
                          src={linkedinMorado}
                          width="40"
                          height="40"
                          alt="linkedin"
                          className="linkedinI"
                        />
                      </a>

                      <a href={el.github} target="_blank">
                        <img
                          src={gitHubMorado}
                          width="50"
                          height="50"
                          alt="github"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <Footer />
    </div>
  );
}
