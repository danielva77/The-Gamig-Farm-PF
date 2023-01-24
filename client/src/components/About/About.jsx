import React from 'react';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import "./about.css"
import gitHubMorado from "../Assets/gitHubMorado.png"
import linkedinMorado from "../Assets/linkedinMorado.png"


const team = [
  {
    id: 1,
    name: 'Daniel Valdez',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    image: "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png",
    linkedin: "www.linkedin.com",
    github: "www.github.com"
  },
  {
    id: 1,
    name: 'Jacqueline Castillo',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    image: "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png",
    linkedin: "www.linkedin.com",
    github: "www.github.com"
  },
  {
    id: 1,
    name: 'Bradley Caruci',
    description: "Desarrollador Front-end en busca de nuevas experiencias y retos que me hagan crecer personalmente y profesionalmente.",
    image: "https://i.ibb.co/VqK0hH9/Foto-Perfil-Linkedin-1.png",
    linkedin: "https://www.linkedin.com/in/bradley-caruci-767a7a22a/",
    github: "https://github.com/BradleyGCF"
  },
  {
    id: 1,
    name: 'Imanol Malamud',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    image: "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png",
    linkedin: "www.linkedin.com",
    github: "www.github.com"
  },
  {
    id: 1,
    name: 'Benjamin Bidondo ',
    description: "Actualmente estoy explorando las oportunidades ilimitadas de la programación. Emocionado de formar parte de este equipo y poder ampliar mis aptitudes como Full Stack Developer",
    image: "https://i.ibb.co/m92fCR5/Whats-App-Image-2023-01-22-at-12-28-50.jpg",
    linkedin: "https://www.linkedin.com/in/benjamin-bidondo-lacassy-a5a089231/",
    github: "https://github.com/BBidondo"
  },
  {
    id: 1,
    name: 'Mauricio Torres',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    image: "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png",
    linkedin: "www.linkedin.com",
    github: "www.github.com"
  },
  {
    id: 1,
    name: 'Alfredo Zavala',
    description: "Desarrollador Full Stack,  Quiero utilizar mis habilidades para llevar a cabo ideas, proyectos, que tengan impacto en el mundo. Acompañado con el aprendizaje de todos los días el ingles",
    image: "https://i.ibb.co/SPrW9kB/Whats-App-Image-2023-01-23-at-14-28-14.jpg",
    linkedin: "https://www.linkedin.com/in/alfredo-zavala-/",
    github: "https://github.com/Tutialfred"
  },
]

export default function About() {
  return (
    <div>
      <NavBar />

      <div className='primerDiv'>
      <h1 className='sobreNosotros'>Sobre Nosotros</h1>

      <p className='parrafo1'>Somos estudiantes de Henry cursando la etapa final del bootcamp donde tenemos que desarrollar una aplicación en grupo cumpliendo diferentes objetivos propuestos por el bootcamp para mejorar nuestras capacidades como desarrolladores.</p>

      </div>
     

      <div className='primerDiv'>
        

      <h1 className='nuestroEquipo'>Nuestro Equipo</h1>
      {
        team.map(el => {
          return (
            <div className='tarjetasPadre'>
              <div className='cardPersona'>
                

                <div className='divFoto'>
                <img src={el.image} className='fotoEquipo'/>
                </div>
                



                <div>

                  <div>
                  <h1 className='nombreEquipo'>{el.name}</h1>
                  <p className='descripcionEquipo'>{el.description}</p>




                  <div className='linksEquipo'>
                    <a href={el.linkedin} target="_blank"><img src={linkedinMorado} width="40" height="40" alt="linkedin" className='linkedinI' /></a>

                    <a href={el.github} target="_blank"><img src={gitHubMorado} width="50" height="50" alt="github" /></a>
                  </div>


                  </div>



                



                </div>
              </div>
            </div>
           
          )
        })
      }

      </div>


      <Footer />
    </div>
  )
}
