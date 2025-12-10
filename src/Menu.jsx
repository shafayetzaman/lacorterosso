import { MENU_ITEMS } from './WebsiteData.jsx';
import MenuHero from './MenuHero.jsx';
import { useState } from 'react';

export default function Menu() {
    const [activeCategory, setActiveCategory] = useState('all');
    const filteredMenu = activeCategory === 'all'
        ? MENU_ITEMS
        : MENU_ITEMS.filter(item => item.category === activeCategory);
    return (
        <>
            <MenuHero />
            <div className='bg-charcoal text-charcoal p-5 font-manrope' id='menu'>
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {['all', 'starters', 'main courses', 'desserts', 'beverages', 'mocktails'].map(cat => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-6 py-2 rounded-full font-semibold capitalize transition ${activeCategory === cat
                                ? 'bg-wine text-goldd'
                                : ' text-goldd hover:bg-neutral-500'
                                } cursor-pointer`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredMenu.map(item => (
                        <div key={item.id} className="bg-goldd text-charcoal rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-full object-cover object-center hover:scale-110 transition duration-500"
                                />
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-xl font-semibold font-playfair">{item.name}</h3>
                                    <span className="text-wine font-bold text-lg">${item.price}</span>
                                </div>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
