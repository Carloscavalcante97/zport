import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-gray-950 text-white p-4 flex flex-row justify-center sm:justify-between items-center sm:px-10 shadow-md z-50 flex-wrap">
      <div className="flex gap-6 flex-wrap justify-center sm:justify-start">
        {/* Ícone do E-mail */}
        <a href="mailto:carlos.developer@icloud.com" target="_blank">
          <Image
            alt="Logo Mail"
            src="/email.svg"
            width={50}
            height={50}
            className="w-10 h-10 sm:w-12 sm:h-12 hover:scale-110 transition-transform"
          />
        </a>

        {/* Ícone do LinkedIn */}
        <Link href="https://www.linkedin.com/in/antonio-dev-/" target="_blank">
          <Image
            alt="Logo LinkedIn"
            src="/linkedin.svg"
            width={50}
            height={50}
            className="w-10 h-10 sm:w-12 sm:h-12 hover:scale-110 transition-transform"
          />
        </Link>

        {/* Ícone do Github */}
        <Link href="https://github.com/Carloscavalcante97" target="_blank">
          <Image
            alt="Logo Github"
            src="/github.svg"
            width={50}
            height={50}
            className="w-10 h-10 sm:w-12 sm:h-12 hover:scale-110 transition-transform"
          />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
