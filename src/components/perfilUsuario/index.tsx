import './style.css'

import api from '../../utils/api'
import { useParams } from 'react-router'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import LoaderRound from '../loader/loader_round'

export default function PerfilUsuario(props:any){
    const {idUsuario} = useParams()    
    const [foto, setFoto] = useState<string>("")
   
    function buscarAvatar(){
        if(foto.length == 0){
            // alert("Você precisa definir o seu avatar!")
            document.getElementById('displayEditAvatar')!.style.display = 'flex'
            document.getElementById('avatar')!.style.display = 'none'
            document.getElementById('bt_acessar')!.style.display = 'none'
            document.getElementById('link-editavatar')!.style.display = 'none'
            console.log(foto)
        } else{
            console.log(foto)
        }
    }

      
    // vvvvvvvvvvvvvv FUNÇÃO LOADER
    const [visivel, setVisivel] = useState(false);
    
    const lidarTempo = () => setTimeout(() => setVisivel(true), 1500);
    lidarTempo();
    // ^^^^^^^^^^^^^^ FUNÇÃO LOADER
    
    setTimeout(() => {
        buscarAvatar()        
        }, 1000);
        
    useEffect(() => {
        document.title = `Olá, ${props.nome.split(" ")[0]}! - BotQuest VW`
            
        api.get(`users/${idUsuario}`).then((response:any) => {
            setFoto(response.data.user_img)
        })
    })

    return(
        <>
        <section id='perfilUsuario' className='right'>
            <h1>Meu perfil</h1>
            {visivel == true ? (
                <>
                <div 
                id='displayEditAvatar'
                style={{
                        display:"none"
                    }}>
                    <div>
                        <img 
                        src="https://firebasestorage.googleapis.com/v0/b/bqvw-bc2fc.appspot.com/o/area-colaborador%2Fcry.png?alt=media&token=be47dfa4-c516-4657-9121-1179c524def9" 
                        alt="" 
                        style={{
                            width: "6em"
                        }}/>
                        <p>Você ainda não definiu o seu avatar!</p>
                        <p 
                        style={{
                            fontSize: "12px",
                            color: "red",
                            fontWeight: "600"
                        }}>*Necessário para acessar o game.</p>
                        <Link 
                        // onClick={() => {navigate("/editar-avatar")}} 
                        id='defineAvatar' 
                        to={"editar-avatar"}
                        >Clique aqui</Link>
                    </div>
                </div>
                <img id='avatar' src={props.foto} alt="Imagem do usuário" />
                </>
            ) : (
                <>
                <div>
                    <LoaderRound/>
                </div>
                </>
            )}
            <h3
            style={{
                textAlign: "center"
            }}>{props.nome.split(" ")[0]} <Link 
            to={"editar-avatar"}
            className='link-editavatar'
            id='link-editavatar'>| Editar Avatar</Link>
            </h3>
            <p>VW_ID: {props.vwId}</p>
            <button id='bt_acessar'>
                <p>Acessar</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72" fill="none">
                    <circle cx="36.2934" cy="35.7065" r="32.4274" fill="#23CE6B" stroke="#F1F2F5" strokeWidth="6.55836"/>
                    <path d="M44.207 34.094C45.4483 34.8107 45.4483 36.6024 44.207 37.3191L33.7332 43.3661C32.4919 44.0828 30.9402 43.187 30.9402 41.7536L30.9402 29.6595C30.9402 28.2261 32.4919 27.3303 33.7332 28.0469L44.207 34.094Z" stroke="#F1F2F5" strokeWidth="3"/>
                </svg>  
            </button>        
        </section>
        </>
    )
}