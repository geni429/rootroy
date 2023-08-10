import { Button, Header } from "ui";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <Header text="Docs" />
      <Button />
      <Image
        src="/vercel.svg"
        alt="Vercel Logo"
        className="dark:invert"
        width={100}
        height={24}
        priority
      />
    </>
  );
}
