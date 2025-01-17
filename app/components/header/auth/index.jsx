"use client";
import { useEffect, useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import TangoWalletLetra from "public/tangowalletLetra.png";
import Link from "next/link";
import Image from "next/image";
import { signOut } from "next-auth/react";
import { NEXT_PUBLIC_REDIRECT_PAYMENT } from "constants/env";
const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

export default function HeaderAuth() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const logoutHandler = async () => {
    await signOut({
      callbackUrl: `${NEXT_PUBLIC_REDIRECT_PAYMENT}/auth/login`,
    });
  };

  return (
    <>
      {isClient && (
        <header className="">
          <nav
            aria-label="Global"
            className="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0 h-14 relative px-4 py-2"
          >
            <div className="flex lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className="h-8 w-8" />
              </button>
            </div>
            <div className="flex lg:flex-1">
              <Link href="/protect/dashboard" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <Image
                  src={TangoWalletLetra}
                  alt="Tango Wallet Letra"
                  width={900}
                  height={900}
                  className="w-16 h-16"
                />
              </Link>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-semibold leading-6 text-white"
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-white"
              >
                Log in <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </nav>
          <Dialog
            open={mobileMenuOpen}
            onClose={setMobileMenuOpen}
            className="lg:hidden"
          >
            <div className="fixed inset-0 z-10" />
            <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-gray-400 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">Your Company</span>
                  <Image
                    src={TangoWalletLetra}
                    alt="Tango Wallet Letra"
                    className="w-16 h-16"
                    width={900}
                    height={900}
                  />
                </a>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-m-2.5 rounded-md p-2.5 text-black"
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/25">
                  <div className="space-y-2 py-6">
                    <button
                      onClick={() => logoutHandler()}
                      className="text-black font-semibold py-4 px-6 items-center flex flex-row rounded-lg my-6 w-full"
                    >
                      Cerrar session
                    </button>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </Dialog>
        </header>
      )}
    </>
  );
}
