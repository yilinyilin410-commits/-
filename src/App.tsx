/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Plane, MapPin, Cloudy, Sun, Cloud, Utensils, Navigation, Camera, Heart, ExternalLink, ChevronRight, MessageCircle } from 'lucide-react';
import { cn } from './lib/utils';
import { MEMBERS, ITINERARY, FLIGHTS, HOTELS } from './data/itinerary';
import { Member, ItineraryDay } from './types';

function MapLink({ children, place }: { children: React.ReactNode; place?: string }) {
  const url = place ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place)}` : '#';
  return (
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="map-link inline-flex items-center gap-0.5"
    >
      {children}
    </a>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-macaron-white max-w-md mx-auto relative shadow-2xl border-[8px] border-gray-800 rounded-[40px] overflow-hidden my-4">
      {/* 1. Hero Section */}
      <section className="relative h-[200px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&q=80&w=800")' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        
        <div className="absolute bottom-6 left-6 right-6 text-white text-left">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-2 py-1 bg-macaron-pink text-macaron-pink-dark text-[10px] font-bold rounded mb-2">4.29 - 5.6 (7天8晚)</span>
            <h1 className="text-white text-3xl font-bold leading-tight tracking-tight shadow-sm">超级意大利漫游！</h1>
            <p className="text-white/90 text-xs mt-1 font-medium italic">
              罗马 • 托斯卡纳 • 佛罗伦萨 • 米兰
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Team Profile Section */}
      <section className="py-6 px-6 bg-white shrink-0">
        <h2 className="text-[14px] font-bold mb-4 flex items-center gap-2">
          <span className="text-xl">🎒</span> 小队成员
        </h2>
        <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
          {MEMBERS.map((member) => (
            <motion.div 
              key={member.id}
              whileTap={{ scale: 0.95 }}
              className="flex-shrink-0 text-center w-20 group"
            >
              <div 
                className="w-16 h-16 rounded-[20px] flex items-center justify-center mb-1.5 mx-auto border-2 border-white shadow-sm ring-1 ring-gray-100 group-hover:shadow-md transition-all"
                style={{ backgroundColor: member.color + '44' }}
              >
                <div className="text-3xl filter saturate-150 drop-shadow-sm">{member.avatar}</div>
              </div>
              <p className="text-[11px] font-bold text-gray-800 mb-0.5">{member.name}</p>
              <div 
                className="text-[8px] font-bold px-1 py-0.5 rounded-md inline-block uppercase tracking-tighter"
                style={{ color: 'var(--color-' + (member.id === 'linlin' ? 'macaron-pink-dark' : member.id === 'xiaoli' ? 'macaron-blue-dark' : member.id === 'chichi' ? 'macaron-orange-dark' : 'macaron-green-dark') + ')', backgroundColor: member.color + '22' }}
              >
                {member.role.split(' / ')[0]}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. Quick Memo Cards */}
      <section className="px-5 py-4 grid grid-cols-2 gap-3 bg-white">
        <div className="bg-[#F5F5F5] p-3 rounded-2xl border border-gray-100">
          <h4 className="text-[10px] font-bold mb-2 opacity-60 text-gray-400 uppercase tracking-[0.1em] flex items-center gap-1">
            <Plane className="w-3 h-3" /> FLIGHTS
          </h4>
          {FLIGHTS.map((f, i) => (
            <div key={i} className="mb-2 last:mb-0">
              <p className="text-[10px] font-bold leading-tight text-gray-700">{f.no}</p>
              <p className="text-[8px] text-gray-400 font-medium">落地 {f.route.split(' -> ').slice(-1)} {f.type === 'go' ? '🛫' : '🛬'}</p>
            </div>
          ))}
        </div>
        
        <div className="bg-[#F5F5F5] p-3 rounded-2xl border border-gray-100">
          <h4 className="text-[10px] font-bold mb-2 opacity-60 text-gray-400 uppercase tracking-[0.1em] flex items-center gap-1">
            <MapPin className="w-3 h-3" /> HOTELS
          </h4>
          <div className="space-y-1.5">
            {HOTELS.map((h, i) => (
              <a 
                key={i}
                href={h.mapUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[9px] font-bold leading-tight text-gray-600 block border-b border-dashed border-gray-200 pb-1 last:border-0 truncate hover:text-macaron-orange-dark"
              >
                {h.name} 📍
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Daily Itinerary Section */}
      <section className="px-4 py-8 space-y-10 bg-white overflow-y-auto custom-scrollbar">
        {ITINERARY.map((item, index) => {
          const themeColor = item.day <= 3 ? 'macaron-pink-dark' : (item.day <= 5 ? 'macaron-orange-dark' : 'macaron-green-dark');
          const bgColor = item.day <= 3 ? 'macaron-pink' : (item.day <= 5 ? 'macaron-orange' : 'macaron-green');
          const borderColor = item.day <= 3 ? '#FFE0E0' : (item.day <= 5 ? '#FFF3E0' : '#E0F2F1');

          return (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative bg-white rounded-3xl p-5 shadow-sm border-2"
              style={{ borderColor: borderColor }}
            >
              {/* Day Tag */}
              <div 
                className="absolute -top-3 left-4 px-3 py-1 text-white text-[10px] rounded-full font-bold z-10 shadow-sm"
                style={{ backgroundColor: `var(--color-${themeColor})` }}
              >
                Day {item.day} • {item.date} {item.city}
              </div>

              <div className="flex flex-col gap-5">
                {/* Header Content */}
                <div className="flex justify-between items-start gap-3">
                  <div className="flex-1">
                    <h2 className="text-lg font-bold text-gray-900 leading-tight mb-1">{item.title}</h2>
                    <div className="flex items-center text-[10px] text-gray-400 font-bold">
                       <Cloudy className="w-3 h-3 mr-1" /> {item.weather}
                    </div>
                  </div>
                  {/* Polaroid Frame */}
                  <div className={cn(
                    "w-24 flex-shrink-0 relative",
                    index % 2 === 0 ? "rotate-[-3deg]" : "rotate-[2deg]"
                  )}>
                    <div className="washi-tape-theme" />
                    <div className="polaroid-frame shadow-md">
                      <img 
                        src={item.bgImage} 
                        alt={item.title} 
                        className="w-full h-20 object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Details Grid */}
                <div className="grid grid-cols-1 gap-4">
                  {/* Route */}
                  <div className="bg-gray-50/50 p-3 rounded-2xl border border-gray-100">
                    <p className="text-[10px] font-bold uppercase opacity-60 mb-2 flex items-center gap-1" style={{ color: `var(--color-${themeColor})` }}>
                      <Navigation className="w-3 h-3" /> 详细攻略/动线
                    </p>
                    <div className="space-y-2">
                       {item.details.map((detail, idx) => {
                         const parts = detail.split(/->|→/);
                         return (
                           <div key={idx} className="flex items-start gap-1.5 text-[11px] leading-relaxed text-gray-600">
                              <span className="mt-1 w-1 h-1 rounded-full bg-gray-300 flex-shrink-0" />
                              <span>
                                {parts.map((p, pIdx) => (
                                  <span key={pIdx}>
                                    <MapLink place={p.trim().replace(/[✈️🛬🏨🍝🏛🏰⛲🌅🛍🚄🍹🏷🚆]/gu, '').replace(/\(.*?\)/g, '').trim()}>{p.trim()}</MapLink>
                                    {pIdx < parts.length - 1 && <span className="text-gray-300 mx-1">→</span>}
                                  </span>
                                ))}
                              </span>
                           </div>
                         );
                       })}
                    </div>
                  </div>

                  {/* Food */}
                  <div className="bg-gray-50/50 p-3 rounded-2xl border border-gray-100">
                    <p className="text-[10px] font-bold uppercase opacity-60 mb-2 flex items-center gap-1" style={{ color: 'var(--color-macaron-orange-dark)' }}>
                      <Utensils className="w-3 h-3" /> 灵魂美食安利
                    </p>
                    <div className="space-y-2">
                      {item.food.main && (
                        <div className="flex flex-col gap-1.5">
                          {item.food.main.map((f, i) => {
                            const [name, desc] = f.split(':');
                            return (
                              <div key={i} className="text-[11px] flex items-center gap-1">
                                <MapLink place={name.trim()}>{name.trim()}</MapLink>
                                <span className="text-[10px] text-gray-400 font-medium">{desc}</span>
                              </div>
                            );
                          })}
                        </div>
                      )}
                      <div className="flex flex-wrap gap-1.5 mt-1">
                        {item.food.snack?.map((f, i) => (
                          <span key={i} className="text-[9px] bg-white border border-orange-100 text-macaron-orange-dark px-1.5 py-0.5 rounded-md font-bold">
                            #{f.includes(':') ? f.split(':')[0] : f}
                          </span>
                        ))}
                        {item.food.dessert?.map((f, i) => (
                          <span key={i} className="text-[9px] bg-pink-50 border border-pink-100 text-macaron-pink-dark px-1.5 py-0.5 rounded-md font-bold">
                            🍦 {f.includes(':') ? f.split(':')[0] : f}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Chat Bubble - Integrated style */}
                <div 
                  className="rounded-2xl p-3 text-[10px] italic flex items-start gap-2 relative shadow-inner"
                  style={{ backgroundColor: `var(--color-${bgColor})`, opacity: 0.9 }}
                >
                  <div className="w-8 h-8 bg-white rounded-xl flex items-center justify-center shrink-0 shadow-sm border border-white">
                    {MEMBERS.find(m => m.name === item.memberComment.member)?.avatar}
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-[9px] opacity-40 mb-0.5 uppercase">{item.memberComment.member} 提醒：</p>
                    <span className="text-gray-700 font-medium leading-relaxed">“{item.memberComment.text}”</span>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </section>

      {/* 5. Footer */}
      <footer className="px-6 py-8 text-center bg-white shrink-0 border-t border-gray-50">
        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
        >
          <p className="text-[10px] text-gray-400 tracking-[0.2em] uppercase font-bold">Wish you a happy journey ✨</p>
        </motion.div>
      </footer>

      {/* Static Overlay Decorations */}
      <div className="fixed top-20 -right-4 w-24 h-24 bg-macaron-pink/20 blur-3xl rounded-full pointer-events-none" />
      <div className="fixed bottom-40 -left-4 w-32 h-32 bg-macaron-blue/20 blur-3xl rounded-full pointer-events-none" />
    </div>
  );
}
