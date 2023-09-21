export default function User(props:any){
    return(
        <>
            <td className="alinhamento_nome">
                <img src={props.avatar} alt="Avatar do usuário" />
                {props.nome}
            </td>
            <td>{props.id}</td>
            <td>{props.setor}</td>
            <td>
                <div className="usuario_ativo" />
            </td>
        </>
    )
}