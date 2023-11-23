import Image from "next/image";

const DevImg = ({ containerStyles, imgSource }) => {
  return (
    <div className={`${containerStyles}`}>
      <Image src={imgSource} alt="dev image" fill priority />
    </div>
  );
};

export default DevImg;
