import styles from "../header/Header.module.css"

function Header(){
    return(
      <div>
        <header className={styles.header}>
          <div className={styles.divLogo} >
            <img src="src\logo\Logo2.webp" className={styles.image}/>
          </div>
         <nav>
           <ul className={styles.nav}>
             <li>
               <a className={styles.buttons} href="/inicio">Inicio</a>
             </li>
              <li>
                <a className={styles.buttons} href="/servicios">Nuestros servicios</a>
              </li>
             <li>
               <a className={styles.buttons} href="/sobreNosotros">Sobre Nosotros</a>
              </li>
             <li>
                <a className={styles.buttons} href="/contacto">Contacto</a>
              </li>
            </ul>
          </nav>
       </header>



      </div>
    
    );
    }

export default Header;