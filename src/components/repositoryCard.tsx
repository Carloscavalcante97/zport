import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
}

const RepositoryCard = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [images, setImages] = useState<{ [key: number]: string }>({});
  const [currentPage, setCurrentPage] = useState(1);
  const reposPerPage = 12;

  const GITHUB_USERNAME = "Carloscavalcante97";
  const DEFAULT_IMAGE = "/github.svg"; // Imagem padrão caso o repositório não tenha uma imagem

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos`);
        const data = await response.json();

        // Filtrar apenas os repositórios que possuem estrelas
        const starredRepos = data.filter((repo: Repo) => repo.stargazers_count > 0);
        setRepos(starredRepos);

        // Buscar imagens para cada repositório
        starredRepos.forEach(async (repo) => {
          const imageUrl = `https://raw.githubusercontent.com/${GITHUB_USERNAME}/${repo.name}/master/Images/Example.png`;

          try {
            const imgResponse = await fetch(imageUrl, { method: "HEAD" });
            if (imgResponse.ok) {
              setImages((prev) => ({ ...prev, [repo.id]: imageUrl }));
            } else {
              setImages((prev) => ({ ...prev, [repo.id]: DEFAULT_IMAGE }));
            }
          } catch {
            setImages((prev) => ({ ...prev, [repo.id]: DEFAULT_IMAGE }));
          }
        });

      } catch (error) {
        console.error("Erro ao buscar repositórios:", error);
      }
    };

    fetchRepos();
  }, []);

  const indexOfLastRepo = currentPage * reposPerPage;
  const indexOfFirstRepo = indexOfLastRepo - reposPerPage;
  const currentRepos = repos.slice(indexOfFirstRepo, indexOfLastRepo);

  const nextPage = () => {
    if (currentPage < Math.ceil(repos.length / reposPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="flex flex-col items-center p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mx-auto">
        {currentRepos.map((repo) => (
          <div key={repo.id} className="bg-[#242424] text-white rounded-lg shadow-lg p-4 hover:shadow-xl transition 
            h-auto flex flex-col justify-between">
            
            <h3 className="text-xl font-semibold text-center">{repo.name}</h3>
            
            {/* Imagem do repositório */}
            <div className="flex justify-center mt-2">
              <Image 
                src={images[repo.id] || DEFAULT_IMAGE} 
                alt="Project cover" 
                height={240} 
                width={240} 
                className="rounded-lg object-cover"
              />
            </div>
            
            {/* Exibir descrição completa */}
            <p className="text-sm text-gray-300 mt-3 text-center flex-grow">
              {repo.description ? repo.description : "Sem descrição disponível"}
            </p>

            <div className="mt-auto">
              <Link href={repo.html_url} target="_blank" className="mt-2 inline-block bg-green-600 hover:bg-gray-950 
              text-white px-4 py-2 rounded w-full text-center">
                Ver no GitHub
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Paginação */}
      <div className="mt-4 flex gap-4">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded ${currentPage === 1 ? "bg-gray-500 cursor-not-allowed" : "bg-green-600 hover:bg-gray-950 text-white"}`}
        >
          Anterior
        </button>
        <span className="text-white">{currentPage} / {Math.ceil(repos.length / reposPerPage)}</span>
        <button
          onClick={nextPage}
          disabled={currentPage >= Math.ceil(repos.length / reposPerPage)}
          className={`px-4 py-2 rounded ${currentPage >= Math.ceil(repos.length / reposPerPage) ? "bg-gray-500 cursor-not-allowed" : "bg-green-600 hover:bg-blue-600 text-white"}`}
        >
          Próximo
        </button>
      </div>

      {/* Botão Home */}
      <Link href="/">
        <button className="mt-4 px-4 py-2 bg-green-600 hover:bg-blue-600 text-white rounded">
          <Image src={"/home.svg"} alt="home" height={20} width={20} />
        </button>
      </Link>
    </div>
  );
};

export default RepositoryCard;
