import ScreenRegister from "screen/auth/register";
import { signIn } from "next-auth/react";

export default async function MainSSRRegister() {
  return (
    <main className="">
      <ScreenRegister />
    </main>
  );
}
