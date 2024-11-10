"use client";
import { Session } from "next-auth";
import { useRouter } from "next/navigation";

export function useGuardVerifiedSession(session?: Session | null) {
  const router = useRouter();
  if (!session) {
    return;
  }
  if (session?.user.isVerified === true) {
    if (session.user.role === "startup") {
      router.push("/startup-portfolio/ai-valuation");
    }

    if (session.user.role === "investor") {
      router.push("/portfolio/investments");
    }
  }
}
