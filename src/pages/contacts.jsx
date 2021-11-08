import React from 'react';
import { FaTelegram, FaWhatsapp, FaPhoneAlt, FaMailBulk } from 'react-icons/fa'
const Contacts = () => {
    return (
        <div className='contacts'>
            <div className='contactsLeft'>
                <h2>Контакты</h2>
                <ul className='contactsUl'>
                    <li className='mt-3'>
                        <a href='https://t.me/petrosianNikita'
                            title='Напишите мне в Telegram' target='_blank'
                        ><FaTelegram /> Телеграм</a>
                    </li>
                    <li className='mt-3'>
                        <a href='https://wa.me/79818448074'
                            title='Напишите мне в WhatsApp' target='_blank'
                        ><FaWhatsapp /> WhatsApp</a>

                    </li>
                    <li className='mt-3'>
                        <a href="tel:+7123456789"
                            title='Позвоните мне' target='_blank'
                        ><FaPhoneAlt /> +7(981)8448074</a>
                    </li>
                    <li className='mt-3'>
                        <a href='mailto:Nekitrus92@yandex.ru'><FaMailBulk /> Nekitrus92@yandex.ru</a>

                    </li>
                </ul>

            </div>
            <div className='contactsRight'>
            </div>
        </div>
    );
}

export default Contacts;