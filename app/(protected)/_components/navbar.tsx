"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import { UserButton } from "@/components/auth/user-button";

export const Navbar = () => {
  const pathName = usePathname();
  return (
    <div className="bg-secondary flex justify-between items-center p-4 rounded-xl w-[600px] shadow-sm">
      <div className="flex gap-x-2">
        <Button
          asChild
          variant={pathName === "/server" ? "default" : "secondary"}
        >
          <Link href="/server">Server</Link>
        </Button>
        <Button
          asChild
          variant={pathName === "/client" ? "default" : "secondary"}
        >
          <Link href="/client">Client</Link>
        </Button>
        <Button
          asChild
          variant={pathName === "/admin" ? "default" : "secondary"}
        >
          <Link href="/admin">Admin</Link>
        </Button>
        <Button
          asChild
          variant={pathName === "/settings" ? "default" : "secondary"}
        >
          <Link href="/settings">Settings</Link>
        </Button>
      </div>
      <p>
        <UserButton/>
      </p>
    </div>
  );
};
