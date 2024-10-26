"use client";
import { useForm, ValidationError } from '@formspree/react';
import  Link  from 'next/link';

function ContactForm() {
  const [state, handleSubmit] = useForm("xkndqpjd");
  if (state.succeeded) {
      return (
      <div className='min-h-screen flex items-center justify-center animate-fade-in-right'>
        <div className='flex flex-col items-center place-content-center justify-center gap-4'>
              <span className='text-4xl font-bold'>¡Gracias por contactarnos!</span>
              <button className='p-4 text-black bg-white border hover:bg-black hover:text-white active:bg-[var(--marked-text)] 
              active:text-black transition-all duration-600'>
                <Link href="/">Go Back</Link>
              </button>
        </div>
      </div>
      );
  }
  return (
    <>
    <div id='main-container' className='min-h-screen flex items-start justify-center animate-fade-in-right'>
      <div id='form-container' className='flex justify-center flex-col w-full md:w-1/2 xl:w-2/5 2xl:w-2/5 3xl:w-1/3 mx-auto p-8 md:p-10 2xl:p-12 3xl:p-14 text-white'>
          <div id='header' className='flex flex-row justify-center'>
            <div>
              {/* image */}
            </div>
            <h2 className='text-4xl font-bold my-auto '>
              Contacto
            </h2>
          </div>

          <div className='text-sm font-light pb-8 '>
            <p className='text-center'>¡Entremos en contacto!</p>
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
                    className='p-6 my-4 bg-white text-black border rounded-lg hover:bg-black hover:text-white active:bg-[var(--marked-text)] active:text-black transition-all duration-600'>
              Submit
            </button>
          </form>
      </div>
    </div>
  </>
  );
}

export default ContactForm;