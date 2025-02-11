import Link from "next/link";
import Header from "@/components/Headers";
import Image from "next/image";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-950 text-white px-10">
      <div className="flex flex-row items-center justify-between w-full max-w-6xl mx-auto ">
     
      <div className="w-1/2 relative bottom-30 ">
      <Header title="Hello There!!" subtitle="
      Sou Antônio Cavalcante, desenvolvedor Full-Stack focado em C#, Java,
       Node.js, TypeScript, React e bancos de dados como SQL Server, MySQL
        e PostgreSQL. Gosto de desafios que envolvem lógica e performance.
         No tempo livre, toco baixo, jogo Dota, revisito O Senhor dos Anéis
          e aprecio um bom café enquanto programo. Busco criar
        soluções diferentes e bem estruturadas, sempre aprimorando meu trabalho." />
      </div>

      <div className="w-1/2 flex flex-col items-center">
        <Image
        src="/antonio.png"
        alt="Foto de perfil de Antonio"
        width={456}
        height={250}
        className="rounded-full shadow-lg border-4 border-gray-950"
        />
        <Link href="/projects">
        <button className="mt-6 px-6 py-2 bg-green-600 text-black rounded-lg shadow-md hover:bg-green-600 transition">
          Meus projetos
        </button>
        </Link>
      </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
