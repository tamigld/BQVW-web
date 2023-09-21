import "./style.css";

import { Image } from "../../components/Image";
import Loader from "../../components/loader";
import Form from "../../components/form";
import { useState } from "react";

interface Props {
  title: string;
  talk: string;
  description: string;
}

export default function Recuperation({ title, talk, description }: Props) {
  const [visible, setVisible] = useState(false);

  const handleTime = () => setTimeout(() => setVisible(true), 1500);
  handleTime();

  return (
    <main id="main_recuperation">
      {visible == true ? (
        <div 
        id="main_login" 
        className="dados" 
        style={{
          height: "700px"
        }}>
          <Image
            class="image-vw"
            source="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/nicismpcs6-271%3A9?alt=media&token=34022096-56d5-4eb8-801a-3b8328125e59"
          />
          {/* <Image
            class="robot"
            source="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/xzjx27buj2k-106%3A18?alt=media&token=55352e40-f453-403c-8619-c6b5cd369dc5"
          ></Image> */}
          <h1>{title}</h1>
          <span>{talk}</span>
          <span>{description}</span>
          <Form acces="Acessar" animate={"swipe-animation"} />
        </div>
      ) : (
        <>
          <div
            style={{
              display: "flex",
              height: 500,
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 1,
            }}
          >
            <Loader />
          </div>
        </>
      )}
    </main>
  );
}
