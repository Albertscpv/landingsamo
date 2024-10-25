"use client";
import { useForm, ValidationError } from '@formspree/react';
import  Link  from 'next/link';

function ContactForm() {
  const [state, handleSubmit] = useForm("xkndqpjd");
  if (state.succeeded) {
      return (
      <div>
        <p>Thanks for joining!</p>
        <Link href="/">Go back</Link>
      </div>
      );
  }
  return (
    <>
    <div id='main-container' className='min-h-screen flex items-center justify-center'>
      <div id='form-container' className='flex justify-center flex-col w-full md:w-1/2 xl:w-2/5 2xl:w-2/5 3xl:w-1/3 mx-auto p-8 md:p-10 2xl:p-12 3xl:p-14 text-white'>
          <div id='header' className='flex flex-row justify-center'>
            <div>
              {/* image */}
            </div>
            <h2 className='text-3xl font-bold my-auto '>
              Contacto
            </h2>
          </div>

          <div className='text-sm font-light pb-8 '>
            <p className='text-center'>Envianos un mensaje para ponernos en contacto</p>
          </div>
          <form 
            onSubmit={handleSubmit}
            className='flex flex-col gap-4'
            >
            <label htmlFor="email" className='block text-sm font-medium text-[var(--marked-text)] flex justify-start'>
              Email Address
            </label>
            <input
              id="email"
              type="email" 
              name="email"
              className='pl-10 mb-2 bg-gray-50 text-gray-600 border focus:border-transparent border-gray-300 sm:text-sm rounded-lg ring ring-transparent focus:ring-1 focus:outline-none focus:ring-gray-400 block w-full p-2.5 rounded-l-lg py-3 px-4'
            />
            <ValidationError 
              prefix="Email" 
              field="email"
              errors={state.errors}
            />
            <label htmlFor="textarea" className='block text-sm font-medium text-[var(--marked-text)] flex justify-start'>
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className='pl-10 mb-2 bg-gray-50 text-gray-600 border focus:border-transparent border-gray-300 sm:text-sm rounded-lg ring ring-transparent focus:ring-1 focus:outline-none focus:ring-gray-400 block w-full p-2.5 rounded-l-lg py-3 px-4'
            />
            <ValidationError 
              prefix="Message" 
              field="message"
              errors={state.errors}
            />
            <button type="submit"  
                    disabled={state.submitting} 
                    className='p-6 my-4 bg-white text-black border rounded-lg hover:bg-black hover:text-white transition-all duration-600'>
              Submit
            </button>
          </form>
      </div>
    </div>
  </>
  );
}

export default ContactForm;