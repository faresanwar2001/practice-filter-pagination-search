import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form"
import {  useNavigate } from "react-router-dom";
import { z } from "zod";
import { Loader } from 'lucide-react';

export default function Login(){
    // Navigation
    const navigation = useNavigate()

    // Form & Validation
    const loginSchema = z.object({
        email:z.string({required_error:"Email is Requires"}).min(1,{required_error:"Email is Requires"}).email({required_error:"Email is invalid"}),
        password:z.string({required_error:"Password is Requires"}).min(1,{required_error:"Email is Requires"})
    })
    const {register, handleSubmit, formState:{errors,isLoading}} = useForm({
        defaultValues:{
            email:"",
            password:""
        },
        resolver:zodResolver(loginSchema)
    })

    // Functions
    const onSubmit = (values)=>{
            localStorage.setItem("TokenUser",values)
            navigation("/")        
    }

    return <section className="flex justify-center items-center h-dvh">
        <form className="w-[40%]" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-4 grow">
            {/* Email */}
            <input type="email" placeholder="Please Enter your email" className="border rounded-md p-3 border-gray-400 focus:outline-blue-300" {...register("email")}/>

            {/* Feedback */}
            {errors && <span className="text-red-400">{errors.email?.message}</span>}
            

            {/* Password */}
            <input type="password" placeholder="Please Enter your Password" className="border rounded-md p-3 border-gray-400 focus:outline-blue-300" {...register("password")}/>

            {/* Feedback */}
            {errors && <span className="text-red-400">{errors.password?.message}</span>}

            {/* Button login */}
            <button type="submit" className="bg-blue-400 font-bold text-white hover:bg-blue-300 p-3 rounded-md transition-all cursor-pointer">
                {isLoading ? <Loader className="animation-all"/>:"Login"}
            </button>
            </div>


        </form>
        
    </section>
}