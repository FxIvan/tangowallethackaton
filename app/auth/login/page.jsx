import ScreenLogin from "screen/auth/login";

import { getServerSession } from "next-auth/next";
import { authOptions } from "app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function MainSSRLogin() {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/protect/dashboard");
  }

  return (
    <main>
      <ScreenLogin />
    </main>
  );
}
