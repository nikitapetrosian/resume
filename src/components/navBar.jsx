import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import foto from '../image/123.png'
import filePDF from '../pages/resumeTime.pdf'

import { FaTelegram, FaWhatsapp, FaMailBulk } from 'react-icons/fa'

const NavBar = () => {
    const mainRoute = process.env.NODE_ENV === 'production' ? '/resume' : '/'
    const [show, setShow] = useState("collapse navbar-collapse")
    const handleShow = () => {
        if (show === "collapse navbar-collapse") {
            setShow("collapse navbar-collapse show")
        } else { setShow("collapse navbar-collapse") }
    }
    return (
        <>
            <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
                <Link className='text-white' to={mainRoute}>
                    <img className='foto' src={foto} alt="" />
                </Link>
                <button
                    onClick={handleShow}
                    className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={show} id="navbarNav">
                    <ul className='navbar-nav '>
                        <li className='nav-item active p-2'>
                            <Link onClick={handleShow} className='text-white nav-link' to={mainRoute}> Главная </Link>
                        </li>
                        <li className='nav-item p-2'>

                            <a onClick={handleShow} className='text-white nav-link' href={filePDF}> Обо мне</a>

                        </li>
                        <li className='nav-item p-2'>
                            <Link onClick={handleShow} className='text-white nav-link' to='/progects'>Проекты</Link>
                        </li>
                        <li className='nav-item p-2'>
                            <Link onClick={handleShow} className='text-white nav-link' to='/contacts'>Контакты</Link>
                        </li>
                        <li>
                            <ul className='d-flex '>
                                <li className='navLi'>
                                    <a href='https://t.me/petrosianNikita'
                                        title='Напишите мне в Telegram' target='_blank'
                                    ><FaTelegram /></a>
                                </li>
                                <li className='navLi'>
                                    <a href='https://wa.me/79818448074'
                                        title='Напишите мне в WhatsApp' target='_blank'
                                    ><FaWhatsapp /> </a>

                                </li>
                                <li className='navLi'>
                                    <a href='mailto:Nekitrus92@yandex.ru'><FaMailBulk /></a>

                                </li>
                                <li className='navLi'>
                                    <p className='text-white'>
                                        +7(981)8448074

                                    </p>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>

        </>
    );
}

export default NavBar;