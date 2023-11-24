import Social from "../home/Social";

const Footer = () => {
  return (
    <footer className="bg-secondary py-6 absolute bottom-0 left-0 w-[100vw]">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between">
          <Social
            containerStyles="flex gap-x-6 mx-auto xl:mx-0 mb-4"
            iconsStyles="text-primary text-[20px] transition-all"
          />
          <div className="text-muted-foreground">
            Copyright &copy; Chi. ALl rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
