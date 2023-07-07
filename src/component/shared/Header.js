import React from 'react'
import {Link} from 'react-router-dom'


const Header = () => {
  return (
    <nav class="navbar navbar-expand-md  bg sticky-top">
  <div class="container">
     <Link to="/">
       <img src={require('../images/Dyleum.svg').default} width='100px' height='45px' alt=''/>
     </Link>
    <button class="navbar-toggler bg-info" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse " id="navbarNav">
      <ul class="navbar-nav ms-auto fs-5 ">
        <li class="nav-item ">
          <a class="nav-link textColor" aria-current="page" href="#feature">Features</a>
        </li>
        <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle textColor"  href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Product
        </a>
        <ul class="dropdown-menu p-2 textColor2" style={{backgroundColor:'#1c2024'}}>
          <li><a class="dropdown-item textColor2" href="#product">Dex</a></li>
          <li><a class="dropdown-item textColor2" href="#product">AI P2P Exchange</a></li>
          <li><a class="dropdown-item textColor2" href="#product">NFT</a></li>
          <li><a class="dropdown-item textColor2" href="#product">Dapp Evaluation Program</a></li>
          <li><a class="dropdown-item textColor2" href="#product">Defi Protocol</a></li>
        </ul>
      </li>
        <li class="nav-item">
          <a class="nav-link textColor" href="#">Governance</a>
        </li>
        <li class="nav-item">
          <a class="nav-link textColor" href="#about">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link textColor" href='#road'>Road Map</a>
        </li>
      </ul>
      <button class="btn btn-primary ms-md-auto d-block btn-lg px-4" type="submit">Button</button>
    </div>
  </div>
</nav>  )
}

export default Header