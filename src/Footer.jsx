import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className="relative bg-wine text-goldd overflow-hidden font-manrope">

            <div className="relative max-w-7xl mx-auto px-8 lg:px-16">
                <div className='grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 py-12 md:py-16'>
                    <div className="text-center md:text-left space-y-5 order-1 md:order-1">
                        <h3 className="font-playfair text-xl tracking-wides mb-6">CONTACT</h3>
                        <div className="space-y-3 text-ivory text-sm leading-relaxed font-light">
                            <p className="transition-colors duration-300 hover:text-goldd">
                                Via de' Tornabuoni, 12
                                <br />
                                50123 Firenze
                                Italia
                            </p>
                            <p className="transition-colors duration-300 hover:text-goldd">
                                info@lacorterossoristorante.it
                            </p>
                            <p className="transition-colors duration-300 hover:text-goldd">
                                +39 555 123 4567
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col items-center justify-center space-y-4 order-3 md:order-2">
                        <div className="flex items-center flex-col flex-shrink-0">
                            <img src="./logo.svg" alt="BrandLogo" className="h-[100px] lg:h-[120px]" />
                            <span className="text-rosso font-great-vibes font-bold text-3xl lg:text-4xl whitespace-nowrap">La Corte Rosso</span>
                        </div>
                    </div>

                    <div className="text-center md:text-right space-y-5 order-2 md:order-3">
                        <h3 className="font-playfair text-xl tracking-widest text-goldd mb-6">HOURS</h3>
                        <div className="space-y-2 text-ivory text-sm leading-relaxed font-light">
                            <p>Mon–Fri: 6:00 PM – 11:00 PM</p>
                            <p>Sat–Sun: 6:00 PM – 12:00 AM</p>
                            <p className="text-goldd italic">Closed Tuesday</p>
                        </div>
                        <div className="pt-4">
                            <Link to='/reserve'
                                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                                <div
                                    className="inline-block text-goldd text-sm tracking-wider font-light border-b border-transparent hover:border-goldd transition-all duration-300"
                                >
                                    Make a Reservation
                                </div></Link>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className='border-t border-charcoal py-6'>
                    <p className="text-center text-ivory text-xs tracking-widest font-light">
                        © <span>{new Date().getFullYear()}</span> La Corte Rosso — All Rights Reserved
                    </p>
                </div>
            </div>
        </footer>
    );
}