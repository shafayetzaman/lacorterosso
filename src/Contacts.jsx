import { MapPin, Phone, Clock } from 'lucide-react';
import ContactsHero from './ContactsHero.jsx';
import { Link } from 'react-router-dom';

export default function Contacts() {
  return (
    <>
      <ContactsHero />

      <div className="min-h-screen bg-charcoal py-20 px-4 font-manrope">
        <div className="max-w-7xl mx-auto">

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-10">
              <div className="group">
                <div className="flex items-start space-x-4">
                  <div className="mt-1 p-3 bg-goldd rounded-full shadow-sm group-hover:shadow-md transition-shadow duration-300">
                    <MapPin className="w-6 h-6 text-rosso" />
                  </div>
                  <div>
                    <h3 className="text-sm uppercase tracking-wider text-goldd mb-2 font-playfair">
                      Location
                    </h3>
                    <p className="text-lg text-ivory leading-relaxed">
                      Via de' Tornabuoni, 12<br />
                      50123 Firenze<br />
                      Italy
                    </p>
                  </div>
                </div>
              </div>

              <div className="h-px bg-rosso"></div>

              <div className="group">
                <div className="flex items-start space-x-4">
                  <div className="mt-1 p-3 bg-goldd rounded-full shadow-sm group-hover:shadow-md transition-shadow duration-300">
                    <Clock className="w-6 h-6 text-rosso" />
                  </div>
                  <div>
                    <h3 className="text-sm uppercase tracking-wider text-goldd mb-2 font-playfair">
                      Opening Hours
                    </h3>
                    <div className="inline-block px-3 py-1 bg-goldd text-rosso text-xs uppercase tracking-wide rounded-full mb-3">
                      Evening Service Only
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-ivory">
                        <span className="font-medium">Thursday – Sunday</span>
                        <span className="text-goldd ml-8">19:00 – 23:30</span>
                      </div>
                      <div className="text-sm text-ivory italic">
                        Closed Monday – Wednesday
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="h-px bg-rosso"></div>

              <div className="group">
                <div className="flex items-start space-x-4">
                  <div className="mt-1 p-3 bg-goldd rounded-full shadow-sm group-hover:shadow-md transition-shadow duration-300">
                    <Phone className="w-6 h-6 text-rosso" />
                  </div>
                  <div>
                    <h3 className="text-sm uppercase tracking-wider text-goldd mb-2 font-sans">
                      Contact
                    </h3>
                    <a
                      href="tel:+395551234567"
                      className="text-lg text-ivory hover:text-rosso transition-colors duration-300"
                    >
                      +39 555 123 4567
                    </a>                    <div>
                      <a
                        href="mailto:info@lacorterossoristorante.it"
                        className="text-lg text-ivory hover:text-rosso transition-colors duration-300 break-all"
                      >
                        info@lacorterossoristorante.it
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            <div className="relative">
              <div className="sticky top-8">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2879.5886849417596!2d11.251013315443442!3d43.770920579115716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132a5403a5e5d6a9%3A0x7e0e8f8c2e0a7c8c!2sVia%20de'%20Tornabuoni%2C%2012%2C%2050123%20Firenze%20FI%2C%20Italy!5e0!3m2!1sen!2sus!4v1621234567890!5m2!1sen!2sus&filter=grayscale:100"
                    width="100%"
                    height="500"
                    style={{ border: 0, filter: 'grayscale(100%) contrast(110%)' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="La Corte Rosso Location"
                    className="w-full"
                  ></iframe>
                </div>
                <p className="text-center text-sm text-ivory mt-4 italic">
                  In the heart of Florence's historic district
                </p>
              </div>
            </div>
          </div>

          <div className="mt-20 text-center">
            <p className="text-ivory italic">
              Reservations are highly recommended. We look forward to welcoming you.
            </p>
            <div className="pt-8 animate-[fadeInUp_1s_ease-out_0.9s_both]">
              <Link to='/reserve'
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <button className="cursor-pointer rounded group relative px-10 py-4 bg-goldd border border-charcoal text-charcoal hover:bg-wine hover:text-ivory transition-all duration-500 tracking-widest text-sm uppercase font-light overflow-hidden">
                  <span className="relative z-10">Reserve</span>
                  <div className="absolute inset-0 bg-wine transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left -z-0" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}