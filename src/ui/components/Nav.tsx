import { Pacifico } from "next/font/google";

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
});

const Nav = () => {
  return (
    <nav className="flex items-center justify-center p-3">
      <h1
        className={`${pacifico.className} text-accent text-3xl font-extrabold`}
      >
        QuillCircle
      </h1>
    </nav>
  );
};

export default Nav;
