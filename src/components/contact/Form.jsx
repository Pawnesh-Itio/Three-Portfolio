"use client"
import   emailjs  from '@emailjs/browser';
import { delay, motion } from 'framer-motion';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Toaster, toast } from 'sonner';

const container = {
  hidden:{opacity:0},
  show:{
     opacity:1,
     transition:{
         staggerChildren: 0.3,
         delayChildren:0.2
     }
  }
}

const item = {
  hidden:{scale: 0},
  show: {scale:1}
}

export default function Form() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const sendEmail = (params) => {
    const toastId = toast.loading("Sending your message, please wait...");
    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID, 
        process.env.NEXT_PUBLIC_TEMPLATE_ID, 
        params,
        {
        publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
        limitRate:{
            throttle: 5000,//You can not send more then 1 email per 5 second 
        }
      })
      .then(
        () => {
          toast.success("I have received your message, I will get back to you soon!",{
            id: toastId
          })
        },
        (error) => {
          // console.log('FAILED...', error.text);
          toast.error("Opps !Somthing went wrong, please try again later!",{
            id: toastId
          })
        },
      );
  };

  const onSubmit =(data) =>{
    const templateParams={
        to_name: "Er.Pawnesh Kumar",
        from_name: data.name,
        reply_to: data.Email,
        message: data.message
    }
    sendEmail(templateParams)
  }
  
  return (
    <>
      <Toaster richColors={true} />
      <motion.form 
      variants={container}
      initial="hidden"
      animate="show"
      onSubmit={handleSubmit(onSubmit)} className='max-w-md w-full flex flex-col items-center justify-center space-y-4 '>
        <input 
          type="text" 
          placeholder="name" 
          {...register("name", {required: 'Name is required!',
            minLength:{
              value:3,
              message:"Name should be atleast 3 characters long."
            }
          })} 
          className='w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/
          50 custom-bg'
        />
          {
            errors.name && <span className='inline-block self-start text-accent'>{errors.name.message}</span>
          }
        <motion.input 
          variants={item}
          type="text" 
          placeholder="Email" 
          {...register("Email", {required: "Email is required", pattern: /^\S+@\S+$/i})} 
          className='w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/
          50 custom-bg' 
        />
          {
            errors.Email && <span className='inline-block self-start text-accent'>{errors.Email.message}</span>
          }
        <motion.textarea 
          variants={item}
          {...register("message", {required:"Message is required!",maxLength:{
            value: 500,
            message: "The message should be lesser then 500 characters"
          }, 
          minLength:{
            value: 50,
            message:"The message should be atleast of 50 characters"
          }})} 
          placeholder='Write your message...'
          className='w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/
          50 custom-bg' 
        />
          {
            errors.message && <span className='inline-block self-start text-accent'>{errors.message.message}</span>
          }
        <motion.input
          variants={item}
          value="Cast Your Message"
          className='px-10 py-4 rounded-md shadow-lg bg-background border border-accent/30 border-solid 
          hover:shadow-glass-sm backdrop-blur-sm text-foreground focus:outline-none focus:outline-none focus:ring-2 focus:ring-accent/
          50 cursor-pointer capitalize'
          type="submit" 
          />
      </motion.form>
    </>
  );
}