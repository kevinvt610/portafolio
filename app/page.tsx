import Parte1_destok from "./components/Parte1_destok";
import Parte1_mobile from "./components/Parte1_mobile";
import Parte2 from "./components/Parte2";
import Parte3 from "./components/Parte3";
import Parte4 from "./components/Parte4";

export default function Home() {
  return (
    <main>
      <div className="block md:hidden">
        <Parte1_mobile />
      </div>
      <div className="hidden md:block">
        <Parte1_destok />
      </div>
      <Parte2 />
      <Parte3 />
      <Parte4 />
    </main>
  );
}
