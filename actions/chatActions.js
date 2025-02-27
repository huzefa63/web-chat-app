<<<<<<< HEAD
"use server";
import { signIn } from "@/lib/googleAuth";

export async function login(){
    await signIn('google',{redirectTo:'/'});
=======
"use server";
import { signIn } from "@/lib/googleAuth";

export async function login(){
    await signIn('google',{redirectTo:'/'});
>>>>>>> 6ae2ef5 (Your commit message)
}