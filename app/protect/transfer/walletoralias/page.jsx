import ScreenWalletOrAlias from "screen/transfer/ScreenWalletOrAlias";

import { getServerSession } from "next-auth/next";
import { authOptions } from "app/api/auth/[...nextauth]/route";

export default async function MainSSRWalletOrAlias() {
  const session = await getServerSession(authOptions);
  return (
    <main>
      <ScreenWalletOrAlias session={session} />
    </main>
  );
}
