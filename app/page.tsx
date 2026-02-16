import Parte1_destok from "./components/Parte1_destok";
import Parte1_mobile from "./components/Parte1_mobile";
import Parte2 from "./components/Parte2";


export default function Home() {
  return (
    <main className="w-full">
      <div className="hidden md:block">
        <Parte1_destok />
      </div>
      <div className="block md:hidden">
        <Parte1_mobile />
      </div>
      <Parte2 />

    </main>
  );
}
