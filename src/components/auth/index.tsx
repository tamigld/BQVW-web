import "./style.css";

const Auth = () => {
  return (
    <div>
      <button className="openai-com-by">
        <div className="text-wrapper">continue com o Google</div>

        <img
          className="span"
          alt="Span"
          src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/gjfrcfap6qe-30%3A4?alt=media&token=eb3fe251-6f97-4f52-b94e-6846544c8c57"
        />
      </button>
    </div>
  );
};

export default function GoogleAuth() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyItems: "center",
          marginLeft: 30,
        }}
      >
     <Auth />
      </div>
    </>
  );
}
