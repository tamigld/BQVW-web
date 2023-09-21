import { useState, ChangeEvent } from "react";

import "./style.css";

interface Props {
  acces: string;
  animate: any;
}

export default function Form({ acces, animate }: Props) {
  const [instruction] = useState({
    recuperation: `Siga estas etapas para recuperar sua senha e
            acessar sua conta novamente.`,
    delimitation: ` Durante o processo de recuperação, você terá acesso limitado à sua conta para usar recursos essenciais.`,
  });

  const [email, setEmail] = useState<any>({});
  const [comfirm, setComfirm] = useState<any>({});
  const [talk, setTalk] = useState<string>();

  const redirect = (): void => {
    const url = new URL("http://localhost:5173/active");
    window.location.href = String(url);
  };

  const handleState = (e: ChangeEvent<HTMLInputElement>) =>
    setEmail({
      email: e.target.value,
    });

  const handleComfirm = (e: ChangeEvent<HTMLInputElement>) =>
    setComfirm({
      comfirm: e.target.value,
    });

  const compare = () => {
    const valueEmail = Object.values(email);
    const valueComfirm = Object.values(comfirm);

    valueComfirm[0] === valueEmail[0]
      ? redirect()
      : setTalk("É necessário que os 2 emails sejam iguais.");
  };

  const autorize = () => {
    const valueEmail = Object.values(email);
    const valueComfirm = Object.values(comfirm);

    if (valueEmail.length == 0) setTalk("Você precisa digitar um email.");
    if (valueComfirm.length == 0) setTalk("Você precisa repetir o seu email.");
  };

  return (
    <>
      <form action="" method="post" onChange={autorize}>
        <div className="form-content">
          <input
            required
            onChange={handleState}
            type="text"
            id="Time"
            minLength={4}
            placeholder="E-mail"
          />
          <label htmlFor="E-mail"></label>
          <input
            onChange={handleComfirm}
            type="text"
            id="E-mail"
            placeholder="repetir E-mail"
          />
          <label htmlFor="Senha"></label>
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();

            return compare();
          }}
        >
          {acces}
        </button>

        <div>
          <p
            className={animate}
            style={{
              margin: "0 150px",
              padding: "20px",
              width: 450,
              marginLeft: 130,
              textDecoration: "underline",
              fontFamily: "montSerrat",
              // fontSize: 35,
              textAlign: "center"
            }}
          >
            {!talk ? instruction.recuperation : talk}
          </p>
        </div>
      </form>
    </>
  );
}
