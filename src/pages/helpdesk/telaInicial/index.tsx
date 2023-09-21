import "./homeAdm.css";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../../utils/api";

import dashboard from "./img/Dashboard Layout.png";
import vector from "./img/Vector.png";
import dados from "./img/dados.png";
import setaVoltar from "./img/botao-de-seta-para-a-esquerda 1.png";
import avatarLuana from "./img/avatar.png";
import avatarEmerson from "./img/avatar (1).png";
import avatarHellen from "./img/avatar (2).png";
import avatarMiguel from "./img/avatar (3).png";

function HomeHelpdesk() {
  const [usuarios, setUsuarios] = useState<any[]>([]);
  console.log(usuarios);

  // const [usuarioDigitado, setUsuariosDigitada] = useState<string>("");

  // const [listaUsuariosFiltrados, setListaUsuariosFiltrados] =
  //   useState<any[]>(usuarios);

  useEffect(() => {
    document.title = "Helpdesk - BotVW";

    listarUsuarios();
  }, []);

  // function buscarPorUsuarios(event: any) {
  //   event.preventDefault();

  //   const devsFiltrados = usuarios.filter((dev: any) =>
  //     dev.hardSkills.includes(usuarioDigitado.toLocaleUpperCase())
  //   );

  //   if (devsFiltrados.length === 0) {
  //     alert("Nenhum desenvolvedor(a) com essa skill");
  //   } else {
  //     setListaUsuariosFiltrados(devsFiltrados);
  //   }
  // }
  // 'retornoUsuariosGeral' é declarado, mas seu valor nunca é lido.ts(6133)

  // function retornoUsuariosGeral(event: any){
  //     if(event.target.value === ""){
  //         listarUsuarios()
  //     }
  //     setUsuariosDigitada(event.target.value)
  // }
  // 'retornoUsuariosGeral' é declarado, mas seu valor nunca é lido.ts(6133)

  function listarUsuarios() {
    api.get("users").then((response: any) => {
      console.log(response.data);
      setUsuarios(response.data);
    });
  }

  
  return (
    <>
      <main id="homeHelpdesk">
        <aside>
          <div className="aside_position">
            <div className="Dashboard_aside">
              <img src={dashboard} alt="" />
              <Link to={"/helpdesk"}>Tela Inicial</Link>
            </div>
            <div className="Usuario_aside">
              <img src={vector} alt="" />
              <Link to={"/usuarioHelpdesk"}>Usuários</Link>
            </div>
            <div className="Dados_aside">
              <img src={dados} alt="" />
              <Link to={"/metricas"}>Metricas</Link>
            </div>
            <div className="COnfiguração_aside">
              <img src={setaVoltar} alt="" />
              <Link to={"/acessoAdm"}>Voltar ao Inicio</Link>
            </div>
          </div>
        </aside>
        <section>
          <div className="Resumo_recentes">
            <img src="img/menu-hamburguer 1.png" alt="" />
            <h1>Resumos recentes</h1>
          </div>
          <div className="PaiDosQuadrados">
            <div className="quadrado_resumo">
              <div className="quadradinho_resumo">
                <p>
                  Acessos na <br /> plataforma
                </p>
                <div className="numeros_recentes">
                  <p>2.550</p>
                </div>
              </div>
            </div>
            <div className="quadrado_resumo">
              <div className="quadradinho_resumo">
                <p>
                  Número médio <br /> de interações
                </p>
                <div className="numeros_recentes">
                  <p>550</p>
                </div>
              </div>
            </div>
            <div className="quadrado_resumo">
              <div className="quadradinho_resumo">
                <p>
                  Assuntos <br /> frequentes
                </p>
                <div className="numeros_recentes">
                  <p>26</p>
                </div>
              </div>
            </div>
            <div className="quadrado_resumo">
              <div className="quadradinho_resumo">
                <p>
                  Taxa de satisfação pós <br /> atendimento (NPS)
                </p>
                <div className="numeros_recentes">
                  <p>255</p>
                </div>
              </div>
            </div>
          </div>
          <div className="linha_divisoria" />
          <h2>Solicitações</h2>
          <div className="Solicitacoes">
            <div className="Sub_titulos">
              <h3>Todas </h3>
              <h3>Em análise</h3>
              <h3>Aceitas</h3>
              <h3>Rejeitadas</h3>
            </div>
            <div className="linha_divisoria" />
            <table>
              <thead>
                <tr>
                  <th>Nome:</th>
                  <th>Setor:</th>
                  <th>Cargo:</th>
                  <th>Tipo de solicitação:</th>
                  <th>Data:</th>
                  <th>Situação:</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="alinhamento_nome">
                    <img src={avatarLuana} alt="Avatar da Luana M." />
                    Luana M.
                  </td>
                  <td>ADM</td>
                  <td>Auxiliar Adm</td>
                  <td>Duvida não encontrada</td>
                  <td>14/06</td>
                  <td>Em analise</td>
                </tr>
                <tr>
                  <td className="alinhamento_nome">
                    <img src={avatarEmerson} alt="Avatar da Emerson A." />
                    Emerson A.
                  </td>
                  <td>TI</td>
                  <td>Analista de Suporte</td>
                  <td>Duvida não encontrada</td>
                  <td>13/06</td>
                  <td>Em analise</td>
                </tr>
                <tr>
                  <td className="alinhamento_nome">
                    <img src={avatarHellen} alt="Avatar da Hellen M." />
                    Hellen M.
                  </td>
                  <td>FIN</td>
                  <td>Analista fin</td>
                  <td>Duvida não encontrada</td>
                  <td>12/06</td>
                  <td>Em analise</td>
                </tr>
                <tr>
                  <td className="alinhamento_nome">
                    <img src={avatarMiguel} alt="Avatar do Miguel G." />
                    Miguel G.
                  </td>
                  <td>ADM</td>
                  <td>Gerente ADM</td>
                  <td>Duvida não encontrada</td>
                  <td>10/06</td>
                  <td>Aceita</td>
                </tr>
                <tr>
                  <td className="alinhamento_nome">
                    <img src={avatarLuana} alt="Avatar da Luana M." />
                    Luana M.
                  </td>
                  <td>ADM</td>
                  <td>Auxiliar Adm</td>
                  <td>Duvida não encontrada</td>
                  <td>14/06</td>
                  <td>Em analise</td>
                </tr>
                <tr>
                  <td className="alinhamento_nome">
                    <img src={avatarEmerson} alt="Avatar da Emerson A." />
                    Emerson A.
                  </td>
                  <td>TI</td>
                  <td>Analista de Suporte</td>
                  <td>Duvida não encontrada</td>
                  <td>13/06</td>
                  <td>Em analise</td>
                </tr>
                <tr>
                  <td className="alinhamento_nome">
                    <img src={avatarHellen} alt="Avatar da Hellen M." />
                    Hellen M.
                  </td>
                  <td>FIN</td>
                  <td>Analista fin</td>
                  <td>Duvida não encontrada</td>
                  <td>12/06</td>
                  <td>Em analise</td>
                </tr>
                <tr>
                  <td className="alinhamento_nome">
                    <img src={avatarMiguel} alt="Avatar do Miguel G." />
                    Miguel G.
                  </td>
                  <td>ADM</td>
                  <td>Gerente ADM</td>
                  <td>Duvida não encontrada</td>
                  <td>10/06</td>
                  <td>Aceita</td>
                </tr>
                <tr>
                  <td className="alinhamento_nome">
                    <img src={avatarLuana} alt="Avatar da Luana M." />
                    Luana M.
                  </td>
                  <td>ADM</td>
                  <td>Auxiliar Adm</td>
                  <td>Duvida não encontrada</td>
                  <td>14/06</td>
                  <td>Em analise</td>
                </tr>
                <tr>
                  <td className="alinhamento_nome">
                    <img src={avatarEmerson} alt="Avatar da Emerson A." />
                    Emerson A.
                  </td>
                  <td>TI</td>
                  <td>Analista de Suporte</td>
                  <td>Duvida não encontrada</td>
                  <td>13/06</td>
                  <td>Em analise</td>
                </tr>
                <tr>
                  <td className="alinhamento_nome">
                    <img src={avatarHellen} alt="Avatar da Hellen M." />
                    Hellen M.
                  </td>
                  <td>FIN</td>
                  <td>Analista fin</td>
                  <td>Duvida não encontrada</td>
                  <td>12/06</td>
                  <td>Em analise</td>
                </tr>
                <tr>
                  <td className="alinhamento_nome">
                    <img src={avatarMiguel} alt="Avatar do Miguel G." />
                    Miguel G.
                  </td>
                  <td>ADM</td>
                  <td>Gerente ADM</td>
                  <td>Duvida não encontrada</td>
                  <td>10/06</td>
                  <td>Aceita</td>
                </tr>
                <tr>
                  <td className="alinhamento_nome">
                    <img src={avatarLuana} alt="Avatar da Luana M." />
                    Luana M.
                  </td>
                  <td>ADM</td>
                  <td>Auxiliar Adm</td>
                  <td>Duvida não encontrada</td>
                  <td>14/06</td>
                  <td>Em analise</td>
                </tr>
                <tr>
                  <td className="alinhamento_nome">
                    <img src={avatarEmerson} alt="Avatar da Emerson A." />
                    Emerson A.
                  </td>
                  <td>TI</td>
                  <td>Analista de Suporte</td>
                  <td>Duvida não encontrada</td>
                  <td>13/06</td>
                  <td>Em analise</td>
                </tr>
                <tr>
                  <td className="alinhamento_nome">
                    <img src={avatarHellen} alt="Avatar da Hellen M." />
                    Hellen M.
                  </td>
                  <td>FIN</td>
                  <td>Analista fin</td>
                  <td>Duvida não encontrada</td>
                  <td>12/06</td>
                  <td>Em analise</td>
                </tr>
                <tr>
                  <td className="alinhamento_nome">
                    <img src={avatarMiguel} alt="Avatar do Miguel G." />
                    Miguel G.
                  </td>
                  <td>ADM</td>
                  <td>Gerente ADM</td>
                  <td>Duvida não encontrada</td>
                  <td>10/06</td>
                  <td>Aceita</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </>
  );
}

export default HomeHelpdesk;
