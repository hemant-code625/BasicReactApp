// emmet:- rfc (react function based component)
import React from 'react'

export default function Navbar(props) {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">{props.aboutText}</a>
        </li>
        
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

  );
}

// Navbar.propTypes = {
//   title: PropTypes.String.isRequired,
//   aboutText: PropsTypes.String.isRequired
// }

// Navbar.propTypes.props={
//   title: 'string',
//   aboutText:'string'
// }

// this defualt prop will run if no value is passed when component is called

Navbar.defualtProps = {
  title: 'Set Title',
  aboutText: 'Add About text here'
}