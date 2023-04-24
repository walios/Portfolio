import { Image } from "react-bootstrap";

function Projet() {
  return (
    <div style={{ paddingTop: '5vh' }}>
      <h1>Projects</h1>
      <section className="row justify-content-center" style={{ padding: '10vh 20vh 10vh 20vh' }}>
        <div className="col-sm-12 col-md-12 mb-4">
          <div className="card">

            <div className="card-body">
              <h5 className="card-title">kriTirank</h5>
              <p className="card-text">KriTirank is a project designed to enable users to reserve a football field at
their preferred location. My role involved developing the front-end aspects
of the project. I was responsible for creating an intuitive and visually
appealing user interface.
              </p>
              <a href="https://github.com/AlaouiMohamedDev/server-fields-reservation" className="btn btn-primary">Learn more</a>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-12 mb-4">
          <div className="card">

            <div className="card-body">
              <h5 className="card-title">Urbain5 Idea</h5>
              <p className="card-text">Developed a gym management system app using Java, it involved
creating a robust and user-friendly platform that streamlines gym
operations, such as membership tracking, class scheduling, and billing.
              </p>
              <a href="https://github.com/f-amine/Gym-management-system" className="btn btn-primary">Learn more</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Projet;
