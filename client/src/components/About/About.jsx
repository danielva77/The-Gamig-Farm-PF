import React from 'react';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import "./about.css"

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
    name: 'Jaque',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    image: "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png",
    linkedin: "www.linkedin.com",
    github: "www.github.com"
  },
  {
    id: 1,
    name: 'Bradley Caruci',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    image: "https://i.ibb.co/VqK0hH9/Foto-Perfil-Linkedin-1.png",
    linkedin: "www.linkedin.com",
    github: "www.github.com"
  },
  {
    id: 1,
    name: 'Imanol',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    image: "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png",
    linkedin: "www.linkedin.com",
    github: "www.github.com"
  },
  {
    id: 1,
    name: 'Benjamin ',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    image: "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png",
    linkedin: "www.linkedin.com",
    github: "www.github.com"
  },
  {
    id: 1,
    name: 'Mauricio',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    image: "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png",
    linkedin: "www.linkedin.com",
    github: "www.github.com"
  },
  {
    id: 1,
    name: 'Alfredo Zavala',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s ",
    image: "https://i.ibb.co/SPrW9kB/Whats-App-Image-2023-01-23-at-14-28-14.jpg",
    linkedin: "www.linkedin.com",
    github: "www.github.com"
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




                  <div>
                    <a href={el.linkedin}><img src="https://cdn-icons-png.flaticon.com/128/1384/1384014.png" width="40" height="40" alt="linkedin" target="_blank"  /></a>
                    <a href={el.github}><img src="https://cdn-icons-png.flaticon.com/512/2111/2111432.png" width="40" height="40" alt="github" target="_blank" /></a>
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
