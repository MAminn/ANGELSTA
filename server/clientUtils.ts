"use client";
import { Session } from "next-auth";
import { useRouter } from "next/navigation";

export function useGuardVerifiedSession(session?: Session | null) {
  const router = useRouter();
  if (!session) {
    return;
  }
  if (session?.user.isVerified === true) {
    router.push("/portfolio/investments");
  }
}
