import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import User from "./models/user";
import connectToDB from "./utils/database";
// import Google from "next-auth/providers/google";
import bcrypt from "bcrypt";

import google from "next-auth/providers/google";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const saltAndHashPassword = async (password: string | Buffer) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
  } catch (error) {
    console.log(error);
  }
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getUserFromDb = async (email: string, hashedPassword: string) => {
  // connect to database
  await connectToDB();
  // get user from database
  const user = await User.findOne({ email: email }).exec();
  console.log(user);
  if (!user) {
    throw new Error("email not correct");
  }
  const isValid = bcrypt.compare(hashedPassword, user.password);
  if (!isValid) {
    throw new Error("password not correct");
  }

  return user;
};

export const { auth, handlers, signIn, signOut } = NextAuth({
  pages: {
    signIn: "/login",
  },
  providers: [
    google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    Credentials({
      name: "Credentials",
      id: "credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      async authorize(credentials: any) {
        await connectToDB();

        try {
          const user = await User.findOne({ email: credentials.email });
          if (user) {
            const isPasswordCorrect = await bcrypt.compare(
              credentials.password,
              user.password
            );
            if (isPasswordCorrect) {
              return user;
            }
          }
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (err: any) {
          throw new Error(err);
        }

        // let user = null;

        // // logic to verify if the user exists
        // user = await getUserFromDb(credentials.email, credentials.password);

        // if (!user) {
        //   throw new Error("User not found.");
        // }

        // return user;
      },
    }),
  ],
  //   callbacks: {
  //     async session({ session }) {
  //       const sessionUser = await User.findOne({ email: session.user.email });
  //       session.user.id = sessionUser._id.toString();
  //       return session;
  //     },
  //     async signIn({ account, profile, user, credentials }) {
  //       try {
  //         await connectToDB();
  //         const userExists = await User.findOne({ email: profile.email });
  //         if (!userExists) {
  //           await User.create({
  //             email: profile.email,
  //             username: profile.name.replace(" ", "").toLowerCase(),
  //             image: profile.picture,
  //           });
  //         }
  //         return true;
  //       } catch (error) {
  //         console.log("Error checking if user exists: ", error.message);
  //         return false;
  //       }
  //     },
  //   },
});
