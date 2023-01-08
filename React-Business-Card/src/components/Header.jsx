import image from "../person-image.jpg";

export default function Header() {
  return (
    <>
      <img className="person-image" src={image} alt="person" />
      <h1>I am the header</h1>;
    </>
  );
}
