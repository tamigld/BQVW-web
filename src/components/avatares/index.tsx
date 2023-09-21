import './style.css'

export default function ListaAvatares(props:any){

    return(
        <>
            <div className="avatar">
                <input 
                type="radio" 
                name="avatar" 
                id={props.id}
                className='input-hidden'
                value={props.url}
                />
                <label htmlFor={props.id}>
                <img 
                    src={props.url}
                    alt="" 
                    style={{
                        width: "130px"
                    }}
                    />
                </label>

            </div>
        </>
    )
}