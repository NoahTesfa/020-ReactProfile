import squadPic from './assests/squad.png'
import quizPic from './assests/codequiz.png'
import './style.css'
const Portfolio = () => {
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


      <div div className='container'>
        <div className='row'>
          <div className="col-sm-6">
            <section className="bgCard" className="card" style={{ width: '22rem' }}>
              <img
                src={squadPic}
                className="card-img-top" alt="squad-searcher" />
              <div className="card-body">
                <h5 className="titleCard" className="card-title">Squad Searcher</h5>
                <p className="card-text">Gaming group searcher application
            </p>
                <a href="https://modjeska.github.io/Squad-Searcher/" className="btn btn-primary">Squad Searcher</a>
              </div>
            </section>
            <div className='col-sm-6'>
              <section className="bgCard" className="card" style={{ width: '22rem' }}>
                <img
                  src={quizPic}
                  className="card-img-top" alt="code-quiz" />
                <div className="card-body">
                  <h5 className="titleCard" className="card-title">Coding Quiz</h5>
                  <p className="card-text">Short quiz covering coding topics
                </p>
                  <a href="https://noahtesfa.github.io/004-CodeQuiz/" className="btn btn-primary">Coding Quiz</a>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Portfolio