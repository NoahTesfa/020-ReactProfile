import './style.css'
import profilePic from './images/devpic.png'

const Home = () => {
  return (
    <>


      <nav id='nav' className="navbar navbar-expand-lg navbar-light bg-light">
        <div id='id' className="container-fluid">
          <a className="navbar-brand" href="/">Home</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="../Portfolio">Portfolio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="../Contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-6'>
            <div className="card" style={{ width: "52rem" }}>
              <img src={profilePic} className="card-img-top" alt='me' />
              <div className="card-body">
                <h3 className="card-title">About Me</h3>
                <p className="card-text">Hello! My name is Noah Tesfa, I made the choice to pursure web develeopment because I feel that skill is extremely important to learn and take advantage of in these digital times. I've also always wanted to work with software and computers at a young age and web development suits well with my drive to create things. Creativity is a large part of my focus and personality I feel.</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Home