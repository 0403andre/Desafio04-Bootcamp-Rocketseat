import React from 'react';

function Header() {
  return (
    <header>
      <nav>
        <img src="https://i.imgur.com/KDIDiSE.png" />
        <div>
          <span>Meu perfil</span>
          <i className="material-icons"><img src="https://avatars0.githubusercontent.com/u/45733084?s=400&u=97256ba8882ac8934664208b78c592fbda2483b2&v=4" /></i>
        </div>
      </nav>
    </header>
  );
}

export default Header;