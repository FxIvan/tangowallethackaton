import ScreenRegister from "screen/auth/register";
import { signIn } from "next-auth/react";

import { getServerSession } from "next-auth/next";
import { authOptions } from "app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function MainSSRRegister() {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/protect/dashboard");
  }
  return (
    <main className="">
      <ScreenRegister />
    </main>
  );
}
