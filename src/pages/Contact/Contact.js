import './style.css'

const Contact = () => {
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
            <h1 id='head'>Contact info</h1>
            <br />
            <br />
            <br />
            <br />
            <br />
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Email: noah.tesfa@yahoo.com</li>
              <li class="list-group-item">GitHub: https://github.com/NoahTesfa</li>
            </ul>
            <br />
            <br />
            <br />

          </div>

        </div>
      </div>

    </>
  )
}

export default Contact