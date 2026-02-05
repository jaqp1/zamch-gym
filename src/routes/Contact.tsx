import React, { useState } from 'react';
import type { FormEvent } from 'react';
import ronnieCalling from '../assets/ronnieCalling.png'
import { motion, useScroll, useTransform } from 'motion/react'
import znakOSP from '../assets/znak_zosp.png'
import Swal from 'sweetalert2';


interface FormDetails {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

interface Status {
  success?: boolean;
  message?: string;
}

const Contact: React.FC = () => {
  const formInitialDetails: FormDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  };

  const [formDetails, setFormDetails] = useState<FormDetails>(formInitialDetails);
  const [buttonText, setButtonText] = useState<string>('Wyślij');
  const [status, setStatus] = useState<Status>({});
   const { scrollYProgress } = useScroll();
  const logoOpacity = useTransform(scrollYProgress, [0.98,1], [0,1])

  const onFormUpdate = (category: keyof FormDetails, value: string) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setButtonText("Wysyłanie...");

    const formData = new FormData(event.currentTarget);
    // Pamiętaj o podmianie klucza na swój
    formData.append("access_key", "ccb4bca3-4aa0-4f61-9eb3-0bbff39910f6");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();
      setButtonText("Wyślij");

      if (data.success) {
        Swal.fire({
          title: "Dziękujemy!",
          text: "Wiadomość została wysłana",
          icon: "success",
          timer: 4000,
          background: "#151515",
          color: "#fff",
        });
        setFormDetails(formInitialDetails);
        setStatus({ success: true, message: 'Wiadomość wysłana pomyślnie' });
      } else {
        setStatus({ success: false, message: 'Coś poszło nie tak' });
        Swal.fire({
          title: 'Błąd',
          text: data.message || 'Spróbuj ponownie później',
          icon: 'error',
          confirmButtonText: 'Ok'
        });
      }
    } catch (error) {
      console.error("Error occurred:", error);
      setButtonText("Wyślij");
      setStatus({ success: false, message: 'Błąd sieci' });
    }
  };

  // Wspólne style dla inputów i textarea (z Twojego CSS)
  const inputClasses = `
    w-full bg-scheme1-600  px-4 py-3 rounded-lg hover:border-scheme1-900 backdrop-blur-2xl  border-1 border-zinc-700 rounded-[20px] text-white
    px-[26px] py-2 font-medium text-sm tracking-[0.8px] 
    placeholder:text-zinc-500 placeholder:font-normal placeholder:opacity-100
    focus:bg-white focus:text-[#121212] focus:outline-none focus:placeholder:text-[#121212] focus:placeholder:opacity-80
    transition-all duration-300 ease-in-out mb-2
  `;

  return (
    <section 
      className="p-5 relative" 
      id="connect"
    >
       <div className='fixed left-0 right-0 top-0 h-25 w-full shadow-[0_10px_60px_40px_rgba(0,0,0,1)] bg-black z-50'></div>
      <div className=" mb-20 px-4 max-w-7xl bg-zinc-950 border-1 border-zinc-700 rounded-2xl  mt-30 pb-15 sm:mt-[8%]">
        <div className="flex flex-col md:flex-row  items-center justify-between gap-10">
          
          {/* Lewa kolumna: Obrazek */}
          <div className="relative w-full md:w-1/2 flex justify-center md:justify-start ">
            <img 
              src={ronnieCalling}
              alt="Contact Us" 
              className="w-[100%] h-auto object-contain absolute top-30 "
            />
          </div>

          {/* Prawa kolumna: Formularz */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold text-white leading-tight">
              Masz pytanie?
            </h2>
            <h3 className='text-zinc-500 mb-30'>Skontaktuj się z nami!</h3>
            
            <form onSubmit={handleSubmit} className="w-full">
              {/* Grid dla pól formularza (odpowiednik Row/Col) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-2 gap-y-0">
                
                <div className="w-full">
                  <input
                    type="text"
                    value={formDetails.firstName}
                    placeholder="Imię"
                    onChange={(e) => onFormUpdate('firstName', e.target.value)}
                    name="name"
                    required
                    className={inputClasses}
                  />
                </div>
                
                <div className="w-full ">
                  <input
                    type="text"
                    value={formDetails.lastName}
                    placeholder="Nazwisko"
                    onChange={(e) => onFormUpdate('lastName', e.target.value)}
                    name="lastName"
                    required
                    className={inputClasses}
                  />
                </div>

                <div className="w-full">
                  <input
                    type="email"
                    value={formDetails.email}
                    placeholder="Adres email"
                    onChange={(e) => onFormUpdate('email', e.target.value)}
                    name="email"
                    required
                    className={inputClasses}
                  />
                </div>

                <div className="w-full">
                  <input
                    type="tel"
                    value={formDetails.phone}
                    placeholder="Numer telefonu"
                    onChange={(e) => onFormUpdate('phone', e.target.value)}
                    name="phone"
                    required
                    className={inputClasses}
                  />
                </div>

                {/* Textarea na całą szerokość */}
                <div className="col-span-1 sm:col-span-2 mt-2">
                  <textarea
                    rows={6}
                    value={formDetails.message}
                    placeholder="Wiadomość..."
                    onChange={(e) => onFormUpdate('message', e.target.value)}
                    name="message"
                    required
                    className={`${inputClasses} resize-none`} // resize-none opcjonalnie
                  />
                  
                  {/* Przycisk z animacją 'slide' (Twoje ::before) */}
                  <button 
                    type="submit" 
                    className="px-8 py-4 mx-auto rounded-md  border-zinc-700 font-semibold text-white border-2 shadow-scheme1-shadow backdrop-blur-2xl
                               overflow-hidden transition-all duration-300 ease-in-out"
                  >
                    {/* Tło animowane */}
                    <span className="absolute top-0 left-0 w-0 h-full bg-white transition-all duration-300 ease-in-out group-hover:w-full z-0"></span>
                    
                    {/* Tekst przycisku */}
                    <span className="relative z-10 transition-colors duration-300 group-hover:text-[#121212]">
                      {buttonText}
                    </span>
                  </button>
                </div>
              </div>

              {/* Status wiadomości */}
              {status.message && (
                <div className="mt-4">
                  <p className={`text-lg font-medium ${status.success === false ? "text-red-500" : "text-green-500"}`}>
                    {status.message}
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
      <div 
        className='fixed flex flex-row items-end left-0 right-0 bottom-0 h-40 w-full bg-gradient-to-t from-black z-50 p-5 pointer-events-none'
        >
          <motion.div
          className='flex flex-row w-full items-end'
          style={{
            opacity: logoOpacity
          }}
          >
            <img className='w-10' src={znakOSP}></img>
            <p className='text-gray-400 font-semibold text-xs p-3'>
              OSP Zamch
            </p>
            <p className='text-gray-400 font-semibold text-xs p-3 justify-end ml-auto'>
              © 2026 Wszelkie prawa zastrzeżone.
            </p>
          </motion.div>
          
      </div>
    </section>
  );
}

export default Contact;