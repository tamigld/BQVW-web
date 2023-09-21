import "./style.css";

import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import Loader from "../../components/loader";

import CardTarefa from "../../components/cardTarefa";
import CardNovidade from "../../components/cardNovidade";

import api from "../../utils/api";
import PerfilUsuario from "../../components/perfilUsuario";

// import logado from '../../main';

export default function AreaColaborador(props: any) {
  // vvvvvvvvvvvvvv FUNÇÃO DISPLAY DATA ATUAL
  const data = new Date();
  const dia = String(data.getDate()).padStart(2, "0");
  // const mes = String(data.getMonth() + 1).padStart(2, '0');
  const ano = data.getFullYear();

  const semana = [
    "Domingo",
    "Segunda-Feira",
    "Terça-Feira",
    "Quarta-Feira",
    "Quinta-Feira",
    "Sexta-Feira",
    "Sábado",
  ];
  const mês = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];
  const d = new Date();

  const diaSemana = semana[d.getDay()];
  const mesAtual = mês[d.getMonth()];
  const dataAtual = diaSemana + ", " + dia + " de " + mesAtual + " de " + ano;
  // ^^^^^^^^^^^^^^ FUNÇÃO DISPLAY DATA ATUAL

  const [tarefas, setTarefas] = useState<any[]>([]);
  const [novidades, setNovidades] = useState<any[]>([]);
  const [titulo, setTitulo] = useState("");

  const { idUsuario } = useParams();

  const [nome, setNome] = useState<string>("");
  const [foto, setFoto] = useState<string>("");
  const [vwId, setVwId] = useState<string>("");

  function buscarUsuarioPorID() {
    api
      .get(`users/${idUsuario}`)
      .then((response: any) => {
        setNome(response.data.nome);
        setFoto(response.data.user_img);
        setVwId(response.data.vwId);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function listarTarefas() {
    api
      .get(`/tarefas`)
      .then((response: any) => {
        setTarefas(response.data);
      })
      .catch((error) =>
        console.log("Erro ao obter os dados das tarefas", error)
      );
  }

  function listarNovidades() {
    api
      .get("/novidades")
      .then((response: any) => {
        setNovidades(response.data);
      })
      .catch((error) =>
        console.log("Erro ao obter os dados das novidades", error)
      );
  }

  function addTask(event: any) {
    event.preventDefault();
    const formdata = new FormData();

    formdata.append("titulo", titulo);

    api
      .post("/tarefas", formdata)
      .then((response: any) => {
        console.log(response);
        alert("Tarefa adicionada!");
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });

    api.post;
  }

  useEffect(() => {
    listarTarefas();
    listarNovidades();
    buscarUsuarioPorID();
    console.log(nome);
  }, []);

  // vvvvvvvvvvvvvv FUNÇÃO LOADER
  const [visible, setVisible] = useState(false);

  const handleTime = () => setTimeout(() => setVisible(true), 1500);
  handleTime();
  // ^^^^^^^^^^^^^^ FUNÇÃO LOADER

  return (
    <main id="area_colaborador">
      {props.user.logado ? (
        <>
          {visible == true ? (
            <>
              <section className="left">
                <div>
                  <h1>Visão Geral</h1>
                  <span>{dataAtual}</span>
                </div>
                <div>
                  <div className="card">
                    <h2
                      style={{
                        marginBottom: "10px",
                      }}
                    >
                      Minhas tarefas
                    </h2>
                    <div
                      className="listaTask"
                      style={{
                        height: "85%",
                      }}
                    >
                      <ul
                        id="listaTarefas"
                        style={{
                          marginRight: "15px",
                        }}
                      >
                        {tarefas.map((tarefa: any, index: number) => {
                          return (
                            <li key={index}>
                              <CardTarefa
                                titulo={tarefa.titulo}
                                id={tarefa.id}
                              />
                            </li>
                          );
                        })}
                        <div id="addTask" className="addTask">
                          <form
                            id="taskForm"
                            action=""
                            method="post"
                            onSubmit={addTask}
                          >
                            <label htmlFor="task"></label>
                            <input
                              id="task"
                              name="campo_task"
                              type="text"
                              placeholder="Título da tarefa"
                              onChange={(e) => {
                                setTitulo(e.target.value);
                              }}
                              required
                            />
                            <button>Adicionar</button>
                          </form>
                        </div>
                      </ul>
                    </div>
                  </div>
                  <div className="card">
                    <h2
                      style={{
                        marginBottom: "10px",
                      }}
                    >
                      Novidades
                    </h2>
                    <div
                      className="listaNews"
                      style={{
                        listStyleType: "none",
                        height: "85%",
                      }}
                    >
                      <ul
                        style={{
                          marginRight: "15px",
                        }}
                      >
                        {novidades.map((novidade: any, index: number) => {
                          return (
                            <li key={index}>
                              <CardNovidade
                                titulo={novidade.titulo}
                                id={novidade.id}
                                link={novidade.link}
                              />
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
              <PerfilUsuario foto={foto} nome={nome} vwId={vwId} />
            </>
          ) : (
            <>
              <div
                style={{
                  display: "flex",
                  height: 500,
                  width: "100vw",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 1,
                }}
              >
                <Loader />
              </div>
            </>
          )}
        </>
      ) : (
        <>
          <section id="message_login">
            <img
              style={{
                width: "150px",
              }}
              src="https://firebasestorage.googleapis.com/v0/b/bqvw-bc2fc.appspot.com/o/area-colaborador%2Fsad.png?alt=media&token=90071968-52f6-43c0-bd5f-544762c1218f"
              alt=""
            />
            <p>Você não está logado 😥</p>
            <h1>Faça seu login!</h1>
            <Link
              style={{
                color: "var(--verdeC)",
              }}
              to={"/login"}
            >
              Clique aqui
            </Link>
          </section>
        </>
      )}
    </main>
  );
}
