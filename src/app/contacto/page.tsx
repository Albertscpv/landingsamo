"use client";
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("xkndqpjd");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
    <>
    <h2 className='font-bold text-center text-2xl my-6'>Contactenos</h2>
    <div className='flex place-content-center'>
    <form 
          onSubmit={handleSubmit}
          className='flex flex-col w-full md:w-1/2 xl:w-2/5 2xl:w-2/5 3xl:w-1/3 mx-auto p-8 md:p-10 2xl:p-12 3xl:p-14
          bg-gray-700
          
          '
          >
      <label htmlFor="email">
        Email Address
      </label>
      <input
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <label htmlFor="textarea">
      Message
      </label>
      <textarea
        id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  </div>
  </>
  );
}

export default ContactForm;