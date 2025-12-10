import React, { useRef, useState, useEffect } from 'react';
import PrivateDiningHero from './PrivateDiningHero';

export default function PrivateDining() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState('')
  const firstNameRef = useRef(null)
  const lastNameRef = useRef(null)
  const emailRef = useRef(null)
  const phoneRef = useRef(null)
  const commentsRef = useRef(null)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    occasion: '',
    date: '',
    partySize: '',
    comments: ''
  });

  function validateForm() {
    const newErrors = {}
    let isValid = true
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'Kindly provide your first name';
      isValid = false;
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Kindly provide your last name';
      isValid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = 'We kindly request your email address';
      isValid = false;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please provide a valid and distinguished email address';
      isValid = false;
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Kindly share your contact number';
      isValid = false;
    }
    if (!formData.comments.trim()) {
      newErrors.comments = 'Your thoughtful remarks would be most appreciated';
      isValid = false;
    }

    setErrors(newErrors)
    if (newErrors.firstName) {
      firstNameRef.current?.focus()
    }
    else if (newErrors.lastName) {
      lastNameRef.current?.focus()
    }
    else if (newErrors.email) {
      emailRef.current?.focus()
    }
    else if (newErrors.phone) {
      phoneRef.current?.focus()
    }
    else if (newErrors.comments) {
      commentsRef.current?.focus()
    }
    return isValid
  }

  function validateEmail(email) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  }

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: ''
      })
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return
    }
    setIsSubmitted(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setIsSubmitted(false);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        occasion: '',
        date: '',
        partySize: '',
        comments: ''
      });
    }, 3000);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsSubmitted(false);
  };

  return (
    <>
      <PrivateDiningHero />

      <div className="min-h-screen bg-charcoal font-manrope">
        <section className="max-w-4xl mx-auto px-6 py-5 md:py-10">

          <div className="mb-12">
            <p className="text-goldd text-sm md:text-xl leading-relaxed font-light tracking-wide text-center">
              Our thoughtfully curated set menus, designed exclusively for private engagements, celebrate the artistry of timeless Italian gastronomy through the finest seasonal ingredients. With a distinguished collection of over three hundred and fifty wines, each course is expertly paired to elevate your dining experience.
            </p>
          </div>

          <div className="mb-12">
            <p className="text-goldd text-sm md:text-xl leading-relaxed font-light tracking-wide text-center">
              The Club Room presents a harmonious balance of relaxed sophistication, complete with its own dedicated cocktail bar. Entrust your occasion to our attentive team, who will deliver the exceptional, personalized service for which <span className='font-great-vibes text-rosso'>La Corte Rosso</span> has become renowned.
            </p>
          </div>

          <div className="mb-16">
            <p className="text-goldd text-sm md:text-xl leading-relaxed font-light tracking-wide text-center">
              For availability and further details regarding your private dining experience, we invite you to contact our reservations team at <span className="text-goldd font-bold hover:text-rosso">reservations@lacorterossoristorante.com</span> or by telephone at <span className="text-goldd font-bold hover:text-rosso">+39 555 123 4567</span>.
            </p>
          </div>

          <div className="text-center">
            <button onClick={() => setIsModalOpen(true)} className="rounded cursor-pointer group relative px-10 py-4 bg-goldd border border-charcoal  text-charcoal hover:bg-wine hover:text-ivory transition-all duration-500 tracking-widest text-sm uppercase font-light overflow-hidden">
              <span className="relative z-10">Enquire Private Dining</span>
              <div className="absolute inset-0 bg-wine transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left -z-0" />
            </button>
          </div>
        </section>

        {isModalOpen && (
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn"
            onClick={closeModal}
          >
            <div
              className="bg-zinc-900 border border-amber-100/20 rounded-sm max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-slideUp"
              onClick={(e) => e.stopPropagation()}
            >
              {!isSubmitted ? (
                <div className="p-8 md:p-12">
                  <button
                    onClick={closeModal}
                    className="float-right cursor-pointer text-amber-50/60 hover:text-amber-50 text-3xl leading-none transition-colors"
                  >
                    ×
                  </button>

                  <h2 className="font-playfair text-3xl md:text-4xl text-goldd text-center mb-12 tracking-wide">
                    Private Dining Enquiry
                  </h2>

                  <div className="space-y-10">
                    <div>
                      <label className="block text-ivory text-sm tracking-widest uppercase mb-4 font-light">
                        Name<span className="text-rosso">*</span>
                      </label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                          ref={firstNameRef}
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          placeholder="First Name"
                          required
                          className={`bg-transparent border border-amber-100/30 text-ivory px-5 py-3 focus:outline-none focus:border-goldd transition-colors placeholder:text-amber-50/30 ${errors.firstName ? 'border-red-500' : ''} `}
                        />
                        <input
                          ref={lastNameRef}
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          placeholder="Last Name"
                          required
                          className={`bg-transparent border border-amber-100/30 text-ivory px-5 py-3 focus:outline-none focus:border-goldd transition-colors placeholder:text-amber-50/30 ${errors.lastName ? 'border-red-500' : ''} `}
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-ivory text-sm tracking-widest uppercase mb-4 font-light">
                        Email<span className="text-rosso">*</span>
                      </label>
                      <input
                        ref={emailRef}
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="you@example.com"
                        required
                        className={`w-full bg-transparent border border-amber-100/30 text-ivory px-5 py-3 focus:outline-none focus:border-goldd transition-colors placeholder:text-amber-50/30 ${errors.email ? 'border-red-500' : ''}`}
                      />
                    </div>

                    <div>
                      <label className="block text-ivory text-sm tracking-widest uppercase mb-4 font-light">
                        Phone<span className="text-rosso">*</span>
                      </label>
                      <input
                        ref={phoneRef}
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Phone Number"
                        required
                        className={`w-full bg-transparent border border-amber-100/30 text-ivory px-5 py-3 focus:outline-none focus:border-goldd transition-colors placeholder:text-amber-50/30 ${errors.phone ? 'border-red-500' : ''}`}
                      />
                    </div>

                    <div>
                      <label className="block text-ivory text-sm tracking-widest uppercase mb-4 font-light">
                        Occasion
                      </label>
                      <input
                        type="text"
                        name="occasion"
                        value={formData.occasion}
                        onChange={handleInputChange}
                        placeholder="Type of occasion (e.g., birthday, corporate dinner)"
                        className="w-full bg-transparent border border-amber-100/30 text-ivory px-5 py-3 focus:outline-none focus:border-goldd transition-colors placeholder:text-amber-50/30"
                      />
                    </div>

                    <div>
                      <label className="block text-ivory text-sm tracking-widest uppercase mb-4 font-light">
                        Date
                      </label>
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        className="w-full bg-transparent border border-amber-100/30 text-ivory px-5 py-3 focus:outline-none focus:border-goldd transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-ivory text-sm tracking-widest uppercase mb-4 font-light">
                        Party Size
                      </label>
                      <input
                        type="number"
                        name="partySize"
                        value={formData.partySize}
                        onChange={handleInputChange}
                        placeholder="Number of guests"
                        min="1"
                        className="w-full bg-transparent border border-amber-100/30 text-ivory px-5 py-3 focus:outline-none focus:border-goldd transition-colors placeholder:text-amber-50/30"
                      />
                    </div>

                    <div>
                      <label className="block text-ivory text-sm tracking-widest uppercase mb-4 font-light">
                        Comments<span className="text-rosso">*</span>
                      </label>
                      <textarea
                        ref={commentsRef}
                        name="comments"
                        value={formData.comments}
                        onChange={handleInputChange}
                        placeholder="Tell us more about your event…"
                        required
                        rows="5"
                        className={`w-full bg-transparent border border-amber-100/30 text-ivory px-5 py-3 focus:outline-none focus:border-goldd transition-colors placeholder:text-amber-50/30 resize-none ${errors.comments ? 'border-red-500' : ''}`}
                      />
                    </div>
                    <div className="text-center pt-4">
                      <button onClick={handleSubmit} className="rounded cursor-pointer group relative px-10 py-4 bg-goldd border border-charcoal  text-charcoal hover:bg-wine hover:text-ivory transition-all duration-500 tracking-widest text-sm uppercase font-light overflow-hidden">
                        <span className="relative z-10">Submit Enquiry</span>
                        <div className="absolute inset-0 bg-wine transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left -z-0" />
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="p-12 md:p-16 text-center animate-fadeIn">
                  <h3 className="text-3xl md:text-4xl text-goldd font-playfair mb-6 tracking-wide">
                    Thank You
                  </h3>
                  <p className="text-ivory text-lg md:text-xl leading-relaxed font-light tracking-wide max-w-xl mx-auto">
                    Your private dining enquiry has been received. Our team will contact you shortly to discuss your bespoke experience.
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
}