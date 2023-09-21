import './style.css'
import { useNavigate } from 'react-router-dom'

import ListaAvatares from '../../components/avatares'

import api from '../../utils/api'
import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

import Loader from '../../components/loader'

export default function EditarAvatar(props: any){
    const {idUsuario} = useParams()
    const navigate = useNavigate()

    const [avatares, setAvatares] = useState<any[]>([])

    
    function listarAvatares(){
        api.get("avatares").then((response:any) => {
            setAvatares(response.data)
        })
    }
    
    function selectAvatar(event:any){
        event.preventDefault()
        let escolha = (document.querySelector('input[name="avatar"]:checked') as HTMLInputElement).value;
        console.log(escolha)

        api.patch(`users/${idUsuario}`, {      
            user_img: escolha
        }).then((response:any) => {console.log(response)})

        navigate(-1)
    }

    


    useEffect(() => {
        document.title = "Editar Avatar - BotQuest VW"
        listarAvatares()
    }, [])

    // vvvvvvvvvvvvvv FUNÇÃO LOADER
    const [visible, setVisible] = useState(false);

    const handleTime = () => setTimeout(() => setVisible(true), 1500);
    handleTime();
    // ^^^^^^^^^^^^^^ FUNÇÃO LOADER

    return(
        <section id='editAvatar'>
        {props.user.logado  ? (
            <>
        {visible == true ? (
            <>
            <div className='editAvatar'>
                <h3 
                onClick={() => (navigate(-1))}
                style={{
                    alignSelf: "flex-start"
                }}>Voltar</h3>
                    <div className='editAvatar-low'>
                        <h1>Selecione o seu avatar!</h1>
                        <form action="" className="selectAvatares" onSubmit={selectAvatar}>
                            <div className='avatares'>

                            {avatares.map((avatar: any, index: number) => {
                                return(
                                    <>
                                    <li 
                                    key={index}
                                    style={{
                                        listStyle: "none"
                                    }}
                                    >
                                        <ListaAvatares
                                        url={avatar.url}
                                        id={avatar.id}
                                        name={avatar.name}
                                        />
                                    </li>
                                    </>
                                )
                            })}
                            </div>
                        <button style={{cursor: "pointer"}}>Selecionar</button>
                        </form>
                    </div>
            </div>
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
        </section>
        
    )
}