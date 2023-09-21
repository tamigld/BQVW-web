import "./style.css";

interface Props {
  source: string;
  class: string;
  alt?: string;
}

export const Image = ({ source, class: design, alt }: Props): any => {
  return (
    <>
      <img className={design} src={source} alt={alt} />
    </>
  );
};
