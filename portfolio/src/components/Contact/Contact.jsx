import React from 'react'
import {getImageUrl} from '../../utils'

export const Contact = () => {
  return <footer>
    <div><h2>Contact</h2>
    <p>Feel free to reach out!</p>
    </div>
    <ul>
      <li>
        <img src={getImageUrl("contact/emailIcon.png")} alt="email icon" />
        <a href="mailto:manisaparajuli66@gmail.com">manisaparajuli66@gmail.com</a>
      </li>
    </ul>
  </footer>
}

