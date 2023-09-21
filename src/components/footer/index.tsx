import "./style.css";
import logovw from "../../assets/img/logo_vw.png";
import logoMF from "../../assets/img/logo_mindforge.png";

export default function Footer() {
  return (
    <footer>
      <div>
        <h2>Institucional</h2>
        <ul>
          <li>
            <a href="https://www.vw.com.br/pt.html" target="_blank">
              Home Page
            </a>
          </li>
          <li>
            <a href="https://www.vwnews.com.br/" target="_blank">
              Site de Imprensa
            </a>
          </li>
          <li>
            <a href="https://www.volkswagencollection.com.br/" target="_blank">
              VW Collection
            </a>
          </li>
          <li>
            <a href="https://fundacaogrupovw.org.br/" target="_blank">
              Fundação Grupo Volkswagem
            </a>
          </li>
          <li>
            <a href="https://loja.fundacaogrupovw.org.br/" target="_blank">
              Loja da Fundação
            </a>
          </li>
          <li>
            <a
              href="https://www.vw.com.br/pt/volkswagen/recursos-humanos.html"
              target="_blank"
            >
              Recursos Humanos
            </a>
          </li>
          <li>
            <a
              href="https://www.vw.com.br/pt/fale-conosco.html"
              target="_blank"
            >
              Fale Conosco
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h2>Governancia corporativa</h2>
        <ul>
          <li>
            <a
              href="https://www.vw.com.br/pt/volkswagen/Responsabilidade-Corporativa/governanca-corporativa.html#InfoDenuncias"
              target="_blank"
            >
              Canal de Denúncia
            </a>
          </li>
          <li>
            <a
              href="https://www.vw.com.br/pt/volkswagen/Responsabilidade-Corporativa/governanca-corporativa.html#Contatos"
              target="_blank"
            >
              Contatos de denúncia
            </a>
          </li>
          <li>
            <a
              href="https://www.vw.com.br/pt/volkswagen/Responsabilidade-Corporativa/governanca-corporativa.html#CodigoCondutaAudio"
              target="_blank"
            >
              Códigos de Conduta
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h2>Inovações</h2>
        <ul>
          <li>
            <a
              href="https://www.vw.com.br/pt/volkswagen/tecnologia.html"
              target="_blank"
            >
              Tecnologia
            </a>
          </li>
          <li>
            <a
              href="https://www.vw.com.br/pt/volkswagen/tecnologia/vw-play.html"
              target="_blank"
            >
              VW Play
            </a>
          </li>
          <li>
            <a
              href="https://www.vw.com.br/pt/volkswagen/tecnologia/inovacao.html"
              target="_blank"
            >
              Nova VW
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h2>Redes Sociais</h2>
        <ul>
          <li>
            <a
              href="https://pt-br.facebook.com/volkswagendobrasil/"
              target="_blank"
            >
              Facebook
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/vwbrasil/?hl=pt-br"
              target="_blank"
            >
              Instagram
            </a>
          </li>
          <li>
            <a href="https://twitter.com/vwbrasil" target="_blank">
              Twitter
            </a>
          </li>
          <li>
            <a
              href="https://br.linkedin.com/company/volkswagen-do-brasil"
              target="_blank"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/user/volkswagendobrasil"
              target="_blank"
            >
              YouTube
            </a>
          </li>
        </ul>
      </div>
      <div>
        <a href="#top">Voltar ao topo</a>
        <img src={logovw} alt="" />
        <img src={logoMF} alt="" />
      </div>
    </footer>
  );
}
