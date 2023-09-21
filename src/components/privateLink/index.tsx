import "./style.css";

import { ReactNode, useState } from "react";

export const Box = (): ReactNode => {
  return (
    <div className="box">
      <img className="fechar" alt="Fechar" src="fechar.png" />
    </div>
  );
};

export const LinkEnviado = (): ReactNode => {
  const [state] = useState<string>("");

  const [click, setClick] = useState<number>(0);

  // useEffect(() => {
  //   click === 1 && setState("Atualize a pagina para tentar novamente");
  // }, [click]);

  return (
    <div className="LINK-ENVIADO">
      <div className="overlap">
        <div className="overlap-wrapper">
          <div className="overlap-group">
            <div className="rectangle" />
            <div className="login">
              <div>
                {click === 1 ? (
                  <>
                    <button
                      onClick={() => setClick((prevState) => prevState + 1)}
                      className="text-wrapper"
                      disabled
                      style={
                        click === 1
                          ? {
                              padding: "10px 30px",
                              borderRadius: "30px",
                              fontFamily: "montSerrat",
                              backgroundColor: "#d40000",
                            }
                          : { fontFamily: "montSerrat" }
                      }
                    >
                      Reenviar
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => setClick((prevState) => prevState + 1)}
                      className={" shake-horizontal text-wrapper"}
                      style={
                        click === 1
                          ? {
                              fontFamily: "montSerrat",
                              backgroundColor: "#d40000",
                            }
                          : { fontFamily: "montSerrat" }
                      }
                    >
                      Reenviar
                    </button>
                  </>
                )}
              </div>
            </div>
            <div className="div">
              <p style={{ fontFamily: "montSerrat" }}>Link enviado</p>
            </div>
            <div className="text-wrapper-2">Não foi enviado?</div>
            <p className="p" style={{ fontFamily: "montSerrat" }}>
              Verifique seu e-mail institucional, foi enviado um link para
              redefinição de senha.
            </p>
          </div>
          <div>
            <p className="p-result">{state}</p>
          </div>
        </div>
        <a href="/login">
          <img
            className="fechar"
            alt="Fechar"
            src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/4q75t6nezsv-1789%3A272?alt=media&token=c8ce17fd-24a2-4787-b298-5265ae25f207"
          />
        </a>
      </div>
    </div>
  );
};

export default function Private() {
  return (
    <>
      <LinkEnviado />
    </>
  );
}
