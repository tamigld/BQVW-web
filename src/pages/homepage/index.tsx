import "./style.css";

import { useEffect } from "react";

import { Link } from "react-router-dom";

import Footer from "../../components/footer";


// imagens
import img_main from "../../assets/img/img_main.png";
import seta_baixo from "../../assets/img/seta_down.png";
import blu_oi from "../../assets/img/blu_oi.png";

export default function Homepage() {
  useEffect(() => {
    document.title = "Home - BotQuest VW";
  });

  return (
    <main id="main_home">
      <section className="primeira_secao">
        <div>
          <p>
            Revolucione a maneira como enfrenta os desafios diários com nossa{" "}
            <span>plataforma gamificada.</span>
          </p>
          <span>
            Inove a forma como você lida com tarefas empresariais através da
            gamificação inteligente!
          </span>
        </div>
        <img className="floating" src={img_main} alt="" />
      </section>
      <div>
        <img src={seta_baixo} alt="" />
      </div>
      <section className="segunda_secao">
        <p>Mas o que é o BotQuest VW?</p>
        <div className="cards">
          <div className="card">
            <p>
              Nossa aplicação foi criada para combinar a empolgação dos jogos
              com a eficiência dos processos empresariais, criando uma abordagem
              única para a melhoria contínua.
            </p>
          </div>
          <div className="card">
            <p>
              Desenvolvemos uma plataforma que transforma cada etapa dos
              procedimentos internos em uma oportunidade de aprendizado,
              crescimento e recompensa.
            </p>
          </div>
          <div className="card">
            <p>
              Não é apenas uma aplicação, é uma revolução nos procedimentos
              internos. Junte-se a nós para transformar o modo como sua equipe
              trabalha, aprende e cresce.
            </p>
          </div>
        </div>
        <p>
          Bem-vindo ao <strong>futuro</strong> do trabalho, onde a gamificação e
          a excelência operacional se encontram.
        </p>
      </section>
      <section className="terceira_secao">
        <div>
          <img src={blu_oi} alt="" />
          <span>
            E esse é o Blu, <br />
            seu assistente virtual e mascote aqui da BQVW!
            <br />
            <br />
            Ele te leva às FAQ’s sempre que precisar.
          </span>
        </div>
        <div>
          <span>Acesse a plataforma.</span>
          <div>
            <a className="botao" href="/login">
              Login
            </a>
            <Link className="botao" to={"/cadastro"}>
              Cadastre-se
            </Link>
          </div>
        </div>
      </section>
      <Footer/>
    </main>
  );
}
