import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center gap-4 p-4 ">
      {/* Ícone do E-mail */}
      <a href="mailto:carlos.developer@icloud.com" target="_blank">
        <Image
          alt="Logo Mail"
          src="/email.svg"
          width={50}
          height={50}
          className="w-12 h-12 hover:scale-110 transition-transform"
        />
      </a>

      {/* Ícone do LinkedIn */}
      <Link href="https://www.linkedin.com/in/antonio-dev-/" target="_blank">
        <Image
          alt="Logo LinkedIn"
          src="/linkedin.svg"
          width={50}
          height={50}
          className="w-12 h-12 hover:scale-110 transition-transform"
        />
      </Link>

      {/* Ícone do Github */}
      <Link href="https://github.com/Carloscavalcante97" target="_blank">
        <Image
          alt="Logo Github"
          src="/github.svg"
          width={50}
          height={50}
          className="w-12 h-12 hover:scale-110 transition-transform"
        />
      </Link>
    </footer>
  );
};

export default Footer;
