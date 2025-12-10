import React, { useState } from 'react';
import { Calendar, Users, Clock } from 'lucide-react';
import ReserveHero from './ReserveHero.jsx';

export default function ReservationSection() {
  const [guests, setGuests] = useState('2');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState('')

  const timeSlots = [];
  for (let hour = 19; hour <= 23; hour++) {
    for (let minute of ['00', '30']) {
      if (hour === 23 && minute === '30') continue;
      const timeStr = `${hour}:${minute}`;
      timeSlots.push(timeStr);
    }
  }

  const handleSubmit = () => {
    if (!date && !time) {
      setError('Please select a Date and Time')
      return;
    }
    else if (!date) {
      setError('Please select a Date')
      return
    }
    else if (!time) {
      setError('Please select a Time')
      return
    }
    else {
      setShowModal(true);
      setError('')
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <>
      <ReserveHero />

      <div className="min-h-screen bg-charcoal text-ivory font-manrope py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">

          <div className="bg-charcoal rounded-3xl p-8 sm:p-12 lg:p-16">
            <h2 className="text-3xl sm:text-4xl text-center mb-12 font-playfair text-goldd">
              Book Your Table
            </h2>

            <div className='flex flex-col items-center'>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                <div className="relative">
                  <label className="block text-sm text-goldd mb-3 tracking-wide">
                    NUMBER OF GUESTS
                  </label>
                  <div className="relative">
                    <Users className="absolute left-4 top-1/2 transform -translate-y-1/2 text-rosso w-5 h-5" />
                    <select
                      value={guests}
                      onChange={(e) => setGuests(e.target.value)}
                      className="w-full bg-neutral-900 text-ivory rounded-xl pl-12 pr-4 py-4 appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-goldd transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      {[...Array(20)].map((_, i) => (
                        <option key={i + 1} value={i + 1}>
                          {i + 1} {i === 0 ? 'Guest' : 'Guests'}
                        </option>
                      ))}
                    </select>
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                      <svg className="w-5 h-5 text-rosso" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <label className="block text-sm text-goldd mb-3 tracking-wide">
                    DATE
                  </label>
                  <div
                    className="relative cursor-pointer"
                    onClick={(e) => {
                      if (e.target !== e.currentTarget) return;
                      e.currentTarget.querySelector('input').showPicker();
                    }}
                  >
                    <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 text-rosso w-5 h-5 pointer-events-none z-10" />
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      min={today}
                      required
                      onClick={(e) => e.currentTarget.showPicker()}
                      className="w-full bg-neutral-900 text-ivory rounded-xl pl-12 pr-4 py-4 cursor-pointer focus:outline-none focus:ring-2 focus:ring-goldd transition-all duration-300 shadow-lg hover:shadow-xl"
                    />
                  </div>
                </div>

                <div className="relative">
                  <label className="block text-sm text-goldd mb-3 tracking-wide">
                    TIME
                  </label>
                  <div className="relative">
                    <Clock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-rosso w-5 h-5" />
                    <select
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      required
                      className="w-full bg-neutral-900 text-ivory rounded-xl pl-12 pr-4 py-4 appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-goldd transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      <option value="">Select time</option>
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot}>
                          {slot}
                        </option>
                      ))}
                    </select>
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                      <svg className="w-5 h-5 text-rosso" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-xs text-goldd mt-2">
                    Available Thursday–Sunday, 19:00 – 23:00
                  </p>
                </div>
              </div>

              <div className="text-center mb-8">
                <button onClick={handleSubmit} className="rounded cursor-pointer group relative px-10 py-4 bg-goldd border border-charcoal  text-charcoal hover:bg-wine hover:text-ivory transition-all duration-500 tracking-widest text-sm uppercase font-light overflow-hidden">
                  <span className="relative z-10">Check Availability</span>
                  <div className="absolute inset-0 bg-wine transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left -z-0" />
                </button>
              </div>
              <div className='text-red-500 pb-5 italic'>{error}</div>
              <div>
                <a
                  href="https://www.opentable.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block opacity-60 hover:opacity-100 transition-opacity duration-300"
                >
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-sm text-ivory">
                      Powered by
                    </span>
                    <svg className="h-6" viewBox="0 0 120 24" fill="currentColor">
                      <text x="0" y="18" className="text-ivory">
                        OpenTable
                      </text>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="text-center mt-12 text-goldd">
            <p className="text-sm">
              La Corte Rosso, Florence, Italy | +39 555 123 4567
            </p>
          </div>
        </div>

        {showModal && (
          <div
            className="fixed inset-0 bg-charcoal bg-opacity-80 flex items-center justify-center z-50 p-4"
            onClick={closeModal}
          >
            <div
              className="bg-neutral-800 rounded-3xl p-8 sm:p-12 max-w-md w-full shadow-2xl transform scale-100 animate-fadeIn"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-goldd rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-ivory" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-3xl mb-4 font-playfair text-goldd">
                  Thank You!
                </h3>
                <p className="text-ivory mb-8">
                  This is a demo booking. In production, this would connect to OpenTable's reservation system.
                </p>
                <button onClick={closeModal} className="cursor-pointer rounded group relative px-10 py-4 bg-goldd border border-charcoal  text-charcoal hover:bg-wine hover:text-ivory transition-all duration-500 tracking-widest text-sm uppercase font-light overflow-hidden">
                  <span className="relative z-10">Close</span>
                  <div className="absolute inset-0 bg-wine transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left -z-0" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}