import "./styles.css";
import Particle from "../../Particle";


const projectsData = [
  {
    id: "1",
    name: "Projeto",
    link: "https://github.com/poli-og",
    image: "https://blog.solides.com.br/wp-content/uploads/2017/02/2.-home-office-min.png",
  },
  {
    id: "2",
    name: "Projeto",
    link: "https://github.com/poli-og",
    image: "https://www.talentia-software.com/wp-content/uploads/2020/05/Featured-image-Corp-12.png",
  },
  {
    id: "3",
    name: "Projeto",
    link: "https://github.com/poli-og",
    image: "https://www.hostinger.com.br/tutoriais/wp-content/uploads/sites/12/2020/08/Como-Criar-um-Blog.png",
  },
  {
    id: "4",
    name: "Projeto",
    link: "https://github.com/poli-og",
    image: "https://www.hostinger.com.br/tutoriais/wp-content/uploads/sites/12/2017/05/Como-otimizar-as-Imagens-WordPress-usando-o-WP-Smush.png",
  },
  {
    id: "5",
    name: "Projeto",
    link: "https://github.com/poli-og",
    image: "https://startupi.com.br/wp-content/uploads/2022/01/secretary-g56f935717_1920.png",
  },
  {
    id: "6",
    name: "Projeto",
    link: "https://github.com/poli-og",
    image: "https://kinsta.com/wp-content/uploads/2021/11/front-end-developer-1024x512.png",
  },
];

export default function Projects() {
  return (
    <div className="projects" id="projects">
      <Particle />
      <h1 className="title-project">Projetos</h1>
      <ul className="list-projects">
        {projectsData.map(({ image, name, link }) => (
          <a href={link} target="_blank" rel="noreferrer">
            <li className="card-projects">
              <img className="image" src={image} width={350} height={250} />
              <h3 className="name-project">{name}</h3>
            </li>
          </a>
        ))}
      </ul>
    </div>
  );
}
