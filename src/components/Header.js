import '../css/Header.css';

function Header({name, alias}) {

  return (
    <header>
        <h1>{name}</h1>
        {alias !== null && 
        <span>{alias}</span>}
    </header>
  );
}

export default Header;