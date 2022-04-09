import "./styles.css";
import banner from "../../assets/banner.png";


function About() {

  return (
        <div className="about" id="about">
          <banner>
            <img src={banner}  />
          </banner>
         <h2 className="about-title" id="sobre">Sobre Mim</h2>
         <p className="text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur,
          quam ac gravida vehicula, sem turpis commodo augue, ut consectetur
          turpis erat non velit. Vestibulum sollicitudin scelerisque turpis.
          Aliquam metus diam, facilisis ut vestibulum ac, hendrerit vitae turpis.
          Donec fringilla tempor lectus, at dictum lacus finibus ut. Cras
          fermentum neque quis nisi vestibulum posuere. Proin venenatis, urna
          vitae egestas gravida, dui mi congue sem, et accumsan risus erat eget
          justo. Suspendisse placerat est a odio gravida finibus. Nunc massa nunc,
          luctus nec pulvinar et, porttitor a elit. In fermentum metus non dictum
          cursus. Sed non aliquam nisi. Suspendisse vel vehicula diam. Morbi
          scelerisque mollis nibh sed tristique. Nulla eget massa cursus, tempus
          elit non, suscipit nibh. Donec non tellus purus. Nullam ornare euismod
          mauris sed facilisis.
          </p>
          
        
        </div>  
    );
  }

  export default About;