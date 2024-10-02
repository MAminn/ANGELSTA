import { signIn } from "@/auth";
import LoginFormContent from "./LoginFormContent";
import { Session } from "next-auth";
import { auth } from "@/auth";

interface LoginFormProps {
  session: Session | null;
}

export async function SignIn(props: LoginFormProps) {
  const loginAction = async (
    formData: FormData
  ): Promise<{
    success: boolean;
    error?: string;
    updatedSession?: Session | null;
  }> => {
    "use server";
    try {
      const result = await signIn("credentials", {
        redirect: false,
        email: formData.get("email") as string,
        password: formData.get("password") as string,
      });

      // Directly check the result for errors
      if (result?.error) {
        return {
          success: false,
          error: result.error || "Invalid credentials",
          updatedSession: null,
        };
      }

      // If successful, immediately fetch the updated session
      const updatedSession: Session | null = await auth();

      return {
        success: true,
        updatedSession, // Return the updated session
      };
    } catch (err) {
      console.error("An error occurred while trying to sign in:", err);
      return {
        success: false,
        error: "An error occurred while trying to sign in",
        updatedSession: null,
      };
    }
  };

  return (
    <LoginFormContent
      action={loginAction}
      session={props.session} // Pass the initial session as a prop
    />
  );
}
