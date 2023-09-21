import "./style.css";

import { Link } from "react-router-dom";
import secureLocalStorage from "react-secure-storage";
import { useNavigate} from "react-router-dom";


export default function Header(props: any) {
  const navigate = useNavigate();

  function sair(event: any) {
    event.preventDefault();

    if (confirm("Tem certeza que deseja sair?") == true) {
      secureLocalStorage.removeItem("user");
      navigate("/");
      navigate(0);
    }
  }


  function mostrarMenu() {
    let menu = document.getElementById("menu_links") as HTMLCanvasElement; // Obtém o elemento do menu pelo ID
    let sombra: any = document.getElementById("sombra"); // Obtém o elemento da sombra pelo ID
    let menu_barras: any = document.getElementById("menu_barras"); // Obtém o elemento do botão do menu pelo ID

    let body: any = document.getElementsByTagName("body")[0]; // Obtém o elemento body (primeiro elemento)

    if (window.getComputedStyle(menu).left != "10px") {
      // Verifica se a propriedade 'left' do estilo computado do elemento do menu é diferente de 10px
      menu.style.left = "10px"; // Define a posição 'left' do menu como 10px movendo ele para direita
      sombra.style.right = "-10vw"; // Move a sombra para a direita
      menu_barras.setAttribute("aria-expanded", "true"); // Atualiza o atributo 'aria-expanded' para 'true'
      menu_barras.setAttribute("aria-label", "fechar menu"); // Atualiza o atributo 'aria-label' para 'fechar menu'
      body.style.overflow = "hidden"; // Define o overflow do body como "hidden" para evitar a rolagem da página
    } else {
      menu.style.left = "-300px"; // Esconde o menu deslocando-o para esquerda
      sombra.style.right = "110vw"; // Move a sombra para a esquerda para ocultá-la
      menu_barras.setAttribute("aria-expanded", "false"); // Atualiza o atributo 'aria-expanded' para 'false'
      menu_barras.setAttribute("aria-label", "abrir menu"); // Atualiza o atributo 'aria-label' para 'abrir menu'
      body.style.overflow = "auto"; // Restaura o overflow do body para o valor padrão (auto)
    }
    menu_barras.classList.toggle("ativo"); // Alterna a classe 'ativo' no botão do menu
  }

  function abrirMenu() {
    let menu_lateral: any = document.getElementById(
      "menu_lateral"
    ) as HTMLCanvasElement;

    if (window.getComputedStyle(menu_lateral).opacity == "0") {
      menu_lateral.style.opacity = "1";
      menu_lateral.style.right = "0"; // Esconde o menu deslocando-o para esquerda
      menu_lateral.style.zIndex = "1"
      menu_lateral.setAttribute("aria-expanded", "false"); // Atualiza o atributo 'aria-expanded' para 'false'
      menu_lateral.setAttribute("aria-label", "abrir menu"); // Atualiza o atributo 'aria-label' para 'abrir menu'
    } else {
      menu_lateral.style.opacity = "0";
      menu_lateral.style.right = "-10px"; // Esconde o menu deslocando-o para esquerda
      menu_lateral.style.zIndex = "-1"
      menu_lateral.setAttribute("aria-expanded", "true"); // Atualiza o atributo 'aria-expanded' para 'true'
      menu_lateral.setAttribute("aria-label", "fechar menu"); // Atualiza o atributo 'aria-label' para 'fechar menu'
    }
    menu_lateral.classList.toggle("ativo"); // Alterna a classe 'ativo' no botão do menu
  }


  return (
    <>
      <header id="header_home">
        <a
          className="menu_barras"
          id="menu_barras"
          aria-label="abrir menu"
          aria-expanded="false"
          aria-controls="menu_links"
          aria-haspopup="true"
          onClick={mostrarMenu}
          href="#"
        >
          <div className="barras" />
        </a>
        <div>
          <Link className="link" to={"/"}>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/bqvw-bc2fc.appspot.com/o/blu_header.png?alt=media&token=317b726b-7e4a-4557-81f3-b60085755cf9"
              alt=""
            />
            <p>BotQuest VW</p>
          </Link>
        </div>
        <nav id="menu_links" className="menu_links">
          {props.user.logado ? (
            <>
              <div id="menu">
                <div
                  aria-label="abrir menu"
                  aria-expanded="false"
                  id="menu_lateral"
                  style={{
                    display: "flex",
                    gap: "20px",
                  }}
                >
                  <Link onClick={sair} className="btn_sair" to={"/"}>
                    Sair
                  </Link>
                  {/* <span 
                  style={{cursor: "pointer"}}
                  onClick={() => {navigate(`/editar-avatar`)
                  }}>Editar Avatar</span> */}
                  {/* <Link  to={"editar-avatar"}>Editar Avatar</Link> */}
                </div>
                <div
                  className="hover"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "20px",
                    cursor: "pointer",
                    marginRight: "15px",
                  }}
                  onClick={abrirMenu}
                >
                  <p>MENU</p>
                  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" width="24" height="24">
                  <g style={{fill: "var(--branco)"}}>
                    <path d="M480,224H32c-17.673,0-32,14.327-32,32s14.327,32,32,32h448c17.673,0,32-14.327,32-32S497.673,224,480,224z"/>
                    <path d="M32,138.667h448c17.673,0,32-14.327,32-32s-14.327-32-32-32H32c-17.673,0-32,14.327-32,32S14.327,138.667,32,138.667z"/>
                    <path d="M480,373.333H32c-17.673,0-32,14.327-32,32s14.327,32,32,32h448c17.673,0,32-14.327,32-32S497.673,373.333,480,373.333z"/>
                  </g>
                  </svg>
                </div>
              </div>
            </>
          ) : (
            <>
              <Link className="link_header" to={"/"}>
                HOMEPAGE
              </Link>
              <Link className="link_header" to={"/login"}>
                LOGIN
              </Link>
              <Link className="link_header" to={"/cadastro"}>
                CADASTRE-SE
              </Link>
            </>
          )}
        </nav>
      </header>
    </>
  );
}
