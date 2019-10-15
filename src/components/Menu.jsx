import React from 'react'
import CN from 'classnames'
import logo from './../images/logo_DV.png'
import Icon from './Icons'

const Menu = (props) => {

  const handleClick = (e) => {
    props.toggleMenu()
  }


  let icons = ['npm', 'github', 'linkedin', 'codepen', 'linkedin'];
  return (
    <div id="menu" className='menu'>
      <div className="menu-button">
        <img src={logo} alt="logo" onClick={handleClick}/>
      </div>

      <nav className={CN("menu-nav", { "active": props.isOpen })}>
        <ul>
          {
            icons.map((el, i, arr) =>
              <li key={i} className={CN("hide-" + (arr.length - i) + " show-" + (i + 1), { "active": props.isOpen })}>
                <Icon icon={el} />
              </li>
            )
          }
        </ul>
      </nav>
    </div>
  )
}

export default Menu