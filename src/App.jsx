import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">

        <header className="header">
            <h1 className="title">Vegetables</h1>
            <div className="header-right">
                <a href="#"><img src="./img/img_facebook_icon.png" alt="FB"/></a>
                <a href="#"><img src="./img/img_instagram_icon.png" alt="IG"/></a>
                <hr className="line"/>
                <a href="#" target="_blank" class="button">LOGIN</a>
                <a href="#" target="_blank" class="button">JOIN</a>
            </div>
        </header>

        <nav className="nav">
            <ul className="nav-list">
                <li className="nav-item">
                    <a href="#" className="nav-link">Home</a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">About Us</a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">Vegetables</a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">Online</a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">Contact</a>
                </li>
            </ul>
        </nav>

        <img src="./img/img_main_pumpkin.png" alt="pumpkimg" className="picture" />

        <div className="content-area">
            <article className="left-area">
                <header className="left-header">
                    <h2 className="left-title">Vegetables</h2>
                </header>
                <div className="left-body">
                    <img src="./img/img_vegetables_carrot.png" alt="carrot" />
                    <img src="./img/img_vegetables_corn.png" alt="corn" />
                    <img src="./img/img_vegetables_pepper.png" alt="pepper" />
                </div>
            </article>
            <aside className="right-area">
                <header className="right-header">
                    <h2 className="right-title">Contact</h2>
                </header>
                <div className="right-body">
                    <p className="right-text">For any questions or suggestions about Vegetables, Vegetables Club or your online order you can contact Vegetables Customer Service by phone, email or post and we’ll be happy to help.</p>
                    <hr/>
                    <p className="right-text">E-mail : Vegetables@aaabbccc.com<br/>PHONE : +886-123-456-789</p>
                </div>
            </aside>
        </div>
    </div>
    <footer className="footer">
        <p className="footer-text">Copyrights 2017 Vegetables cise / Design by Vegetables</p>
    </footer>
    </>
  )
}

export default App
