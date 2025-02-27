"use server";
import { signIn } from "@/lib/googleAuth";

export async function login(){
    await signIn('google',{redirectTo:'/'});
}