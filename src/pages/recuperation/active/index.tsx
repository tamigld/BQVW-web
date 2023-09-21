import { useState } from "react";
import "./style.css";

import Private from "../../../components/privateLink";

import "./style.css";

import Loader from "../../../components/loader";

export default function Active() {
  const [visible, setVisible] = useState(false);

  const handleVisible = () => setTimeout(() => setVisible(true), 1500);
  handleVisible();

  return (
    <>
      {visible === true ? (
        <>
          <div style={{ margin: 50 }}>
            <Private />
          </div>
        </>
      ) : (
        <div
          style={{
            display: "flex",

            height: 500,
            alignItems: "center",
            justifyContent: "center",

            fontSize: 59,
            flexShrink: 1,
          }}
        >
          <Loader />
        </div>
      )}
    </>
  );
}
