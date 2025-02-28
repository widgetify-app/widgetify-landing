import backgroundImg from "../assets/images/background.png";

export default function FixedBackground() {
  return (
    <div className="absolute top-0 left-0 right-0 h-[700px] -z-10">
      <img
        className="w-full h-full"
        src={backgroundImg}
        alt="background-image"
      />
    </div>
  );
}
