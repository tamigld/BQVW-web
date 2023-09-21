import './usuario.css'

import { Link } from "react-router-dom"
import api from '../../../utils/api'

import { useState, useEffect } from 'react'
import User from '../../../components/user'

import dashboard from './img/Dashboard Layout.png'
import iconUsuarios from './img/Vector.png'
import dados from './img/dados.png'
import setaVoltar from './img/botao-de-seta-para-a-esquerda 1.png'
// import avatarLuana from './img/avatar.png'
// import avatarEmerson from './img/avatar (1).png'
// import avatarHellen from './img/avatar (2).png'
import avatarMiguel from './img/avatar (3).png'
import lapis from './img/Vector (1).png'
import menuHamburgue from './img/menu-hamburguer 1.png'
import usuarios2 from './img/usuario.png'
import lupa from './img/lupa.png'

function Usuario() {

  const [usuarios, setUsuarios] = useState<string[]>([])


  function listarUsuarios(){
    api.get("users").then((response:any) => {
      setUsuarios(response.data)
    })
  }

  useEffect(() => {
    document.title = "Usuários - BQVW ADM"
    listarUsuarios()
  }, [])


  return (
    <>
      <main id='usuario'>
        <aside>
          <div className="aside_position">
            <div className="Dashboard_aside">
              <img src={dashboard} alt="" />
              <Link to={'/helpdesk'}>Tela Inicial</Link>      
            </div>
            <div className="Usuario_aside">
              <img src={iconUsuarios} alt="" />
              <Link to={'/usuarioHelpdesk'}>Usuários</Link>
            </div>
            <div className="Dados_aside">
              <img src={dados} alt="" />
              <Link to={'/metricas'}>Metricas</Link>
            </div>
            <div className="COnfiguração_aside">
              <img src={setaVoltar} alt="" />
              <Link to={'/acessoAdm'}>Voltar ao Inicio</Link>
            </div>
          </div>
        </aside>
        <section>
          <div className="menu_hamburgue">
            <img src={menuHamburgue} alt="" />
          </div>
          <div className="Sub_titulos">
            <h1>Usuarios</h1>
            <div className="cad_pesquisa_usuario">
              <div className="butao_usuarios">
                <a href="#">Cadastrar usuário</a>
                <img src={usuarios2} alt="" />
              </div>
              <div className="butao_usuarios">
                <a href="#">Pesquisar usuário</a>
                <img src={lupa} alt="" />
              </div>
            </div>
          </div>
          <div className="Solicitacoes">
            <div className="linha_divisoria" />
            <table>
              <thead>
                <tr>
                  <th>Nome:</th>
                  <th>VW ID</th>
                  <th>Setor:</th>
                  <th>Usuário ativo</th>
                  <th />
                </tr>
              </thead>
              <tbody>
              {usuarios.map((usuario: any, index: number) => {
                  return(
                    <tr
                      key={index}
                    >
                      <User
                      avatar={usuario.user_img}
                      nome={usuario.nome}
                      id={usuario.vwId}
                      setor={usuario.setor}
                      />
                      <td className="ajustar_lapis">
                        <img src={lapis} alt="" />
                      </td>
                    </tr>
                    
                  );
                })}              
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </>
  )
}
export default Usuario