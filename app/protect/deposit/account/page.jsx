import DepositAccountData from "screen/depositAccountData";
import { getServerSession } from "next-auth/next";
import { authOptions } from "app/api/auth/[...nextauth]/route";
import { NEXT_PUBLIC_BACKEND } from "constants/env";
const getData = async () => {
  try {
    const session = await getServerSession(authOptions);

    const response = await fetch(
      `${NEXT_PUBLIC_BACKEND}/user/info/user/${session.user.id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error loading account:", error);
    throw error;
  }
};

export default async function SSRDepositAccountData() {
  const { userInfo } = await getData();
  return (
    <DepositAccountData
      alias={userInfo.alias || "Alias"}
      wallet={userInfo.wallet || "0x000"}
    />
  );
}
