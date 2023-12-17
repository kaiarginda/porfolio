import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "The Road",
      description: "Nextjs",
      imgUrl:
        "https://road-blue.vercel.app/_next/static/media/header-bg.2ed11f7f.jpg",
      webUrl: "https://road-blue.vercel.app/",
    },
    {
      title: "Wine Website",
      description: "Nextjs",
      imgUrl:
        "https://winerestaurant-p9gp.vercel.app/_next/static/media/section-1-bg.64d7356a.jpg",
      webUrl: "https://winerestaurant-p9gp.vercel.app/",
    },
    {
      title: "Shop Website",
      description: "Nextjs",
      imgUrl:
        "https://scontent.xx.fbcdn.net/v/t1.15752-9/403394942_1382829645655115_394241643674106534_n.png?stp=dst-png_p206x206&_nc_cat=110&ccb=1-7&_nc_sid=510075&_nc_ohc=Y_NZ99F4cJYAX-BiHhc&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdS8f_XMJ1MkxO40BXrygRsL0NtJEZR-ITfArDkSWcUyOw&oe=659BBB6E",
      webUrl: "https://shop-7l9b.vercel.app/",
    },
    {
      title: "Movie Website",
      description: "MERN",
      imgUrl:
        "https://scontent.xx.fbcdn.net/v/t1.15752-9/410491649_702407755327575_8428482639608542065_n.png?stp=dst-png_p206x206&_nc_cat=101&ccb=1-7&_nc_sid=510075&_nc_ohc=OjMrRIAueKAAX8Z8edY&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdQh5O61ILmJuVc9rSXU7wfTF3yfWufV2E_1tVd2QPxukA&oe=65A1424D",
      webUrl: "https://mov-dv4y.onrender.com/",
    },
    {
      title: "Porfolio Website",
      description: "Nextjs",
      imgUrl:
        "https://scontent.xx.fbcdn.net/v/t1.15752-9/398411024_871977677724491_623173634656328917_n.png?stp=dst-png_p206x206&_nc_cat=105&ccb=1-7&_nc_sid=510075&_nc_ohc=RgyZC1m8MYgAX8jckOu&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdRiyaAsU0aWcCPTHFI7MYFhXTCqjVMnDHHHC2iAvzFSvQ&oe=65A692F0",
      webUrl: "https://portfolio-lteg.vercel.app/",
    },
    {
      title: "Hoobank",
      description: "React",
      imgUrl:
        "https://scontent.xx.fbcdn.net/v/t1.15752-9/403416177_737098791184754_3135171421297123451_n.png?stp=dst-png_p206x206&_nc_cat=105&ccb=1-7&_nc_sid=510075&_nc_ohc=SkerYS0vTcMAX9rdi42&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdQ-ocqYJJdh3KKis7zgEsiCWWpffkVlzedP_Uk3OmCQyQ&oe=65A67B02",
      webUrl: "https://hoobankk.onrender.com/",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="section">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
