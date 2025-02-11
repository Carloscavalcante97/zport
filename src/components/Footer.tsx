import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex flex-col gap-1">
      <Link href="mLinkilto:carlos.developer@icloud.com">
        <Image alt="Logo Mail" src="/email.svg" width={50} height={50} />
      </Link>
      <Link href={"https://www.linkedin.com/in/antonio-dev-/"}>
        <Image
          alt="Logo LinkedIn"
          src={"/linkedin.svg"}
          width={50}
          height={50}
        />
      </Link>
      <Link href={"https://github.com/Carloscavalcante97"}>
        <Image alt="Logo Github" src={"/github.svg"} width={50} height={50} />
      </Link>
    </footer>
  );
};
export default Footer;
