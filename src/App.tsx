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
              className="flex-shrink-0 text-center w-16"
            >
              <div 
                className="w-12 h-12 rounded-2xl flex items-center justify-center mb-1 mx-auto border-2 border-white shadow-sm"
                style={{ backgroundColor: member.color + '33' }}
              >
                <span className="text-xl">{member.avatar}</span>
              </div>
              <p className="text-[10px] font-bold text-gray-800">{member.name}</p>
              <p className="text-[8px] text-gray-500 font-semibold truncate leading-tight">
                {member.role.split(' / ')[0]}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. Quick Memo Cards */}
      <section className="px-5 py-4 grid grid-cols-2 gap-3 bg-white">
        <div className="bg-[#F5F5F5] p-3 rounded-2xl">
          <h4 className="text-[10px] font-bold mb-1 opacity-60 text-gray-500 uppercase tracking-wider">FLIGHTS</h4>
          {FLIGHTS.map((f, i) => (
            <div key={i} className="mb-2 last:mb-0">
              <p className="text-[9px] font-bold leading-tight text-gray-700">{f.no}</p>
              <p className="text-[8px] text-gray-400">{f.route.split(' -> ')[2] || f.route}落地 {f.type === 'go' ? '🛫' : '🛬'}</p>
            </div>
          ))}
        </div>
        
        <div className="bg-[#F5F5F5] p-3 rounded-2xl">
          <h4 className="text-[10px] font-bold mb-1 opacity-60 text-gray-500 uppercase tracking-wider">HOTELS</h4>
          <div className="space-y-1">
            {HOTELS.map((h, i) => (
              <a 
                key={i}
                href={h.mapUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[9px] font-bold leading-tight text-gray-700 block border-b border-dashed border-gray-300 pb-0.5 last:border-0 truncate"
              >
                {h.name} 📍
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Daily Itinerary Section */}
      <section className="px-4 py-8 space-y-8 bg-white overflow-y-auto custom-scrollbar">
        {ITINERARY.map((item, index) => {
          const isEven = index % 2 === 0;
          const themeColor = item.day <= 3 ? 'macaron-pink-dark' : (item.day <= 5 ? 'macaron-orange-dark' : 'macaron-green-dark');
          const bgColor = item.day <= 3 ? 'macaron-pink' : (item.day <= 5 ? 'macaron-orange' : 'macaron-green');
          const borderColor = item.day <= 3 ? '#FFE0E0' : (item.day <= 5 ? '#FFF3E0' : '#E0F2F1');

          return (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative bg-white rounded-2xl p-4 shadow-sm border-2"
              style={{ borderColor: borderColor }}
            >
              {/* Day Tag */}
              <div 
                className="absolute -top-2.5 left-4 px-2 py-0.5 text-white text-[9px] rounded font-bold z-10"
                style={{ backgroundColor: `var(--color-${themeColor})` }}
              >
                Day {item.day} • {item.date} {item.city}
              </div>

              <div className={cn(
                "flex items-start gap-4 mb-4",
                isEven ? "flex-row" : "flex-row-reverse"
              )}>
                {/* Polaroid Frame */}
                <div className={cn(
                  "w-28 flex-shrink-0 relative",
                  isEven ? "rotate-[-3deg]" : "rotate-[2deg]"
                )}>
                  <div className="washi-tape-theme" />
                  <div className="polaroid-frame">
                    <img 
                      src={item.bgImage} 
                      alt={item.title} 
                      className="w-full h-24 object-cover"
                    />
                    <div className="mt-1 text-[8px] text-center italic font-serif opacity-60 truncate">
                      {item.city} Moments
                    </div>
                  </div>
                </div>

                {/* Details */}
                <div className="flex-1 pt-2">
                  <div className="flex items-center text-[10px] text-gray-400 font-bold mb-2">
                    <span className="mr-1">🌤</span> {item.weather.split(' ')[1]}
                  </div>
                  <div className="space-y-3">
                    <div className="text-[10px] leading-tight">
                      <p className="font-bold uppercase opacity-50 mb-1" style={{ color: `var(--color-${themeColor})` }}>交通/动线</p>
                      <div className="flex flex-col gap-1">
                        {item.details.map((detail, idx) => {
                          const parts = detail.split(/->|→/);
                          return (
                            <div key={idx} className="flex items-start gap-1">
                               <span className="leading-tight">
                                 {parts.map((p, pIdx) => (
                                   <span key={pIdx}>
                                     <MapLink place={p.trim().replace(/\(.*?\)/g, '')}>{p.trim()}</MapLink>
                                     {pIdx < parts.length - 1 && <span className="text-gray-300 mx-0.5">→</span>}
                                   </span>
                                 ))}
                               </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    <div className="text-[10px] leading-tight">
                      <p className="font-bold uppercase opacity-50 mb-1 text-macaron-orange-dark">灵魂美食</p>
                      <div className="flex flex-wrap gap-x-2 gap-y-1">
                        {item.food.main?.map((f, i) => (
                          <MapLink key={i} place={f.split(':')[0].trim()}>{f.split(':')[0].trim()}</MapLink>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Chat Bubble - Integrated style */}
              <div 
                className="rounded-xl p-2 text-[9px] italic flex items-center"
                style={{ backgroundColor: `var(--color-${bgColor})`, opacity: 0.8 }}
              >
                <div className="w-6 h-6 bg-white/50 rounded-full mr-2 flex items-center justify-center shrink-0 shadow-sm">
                  {MEMBERS.find(m => m.name === item.memberComment.member)?.avatar}
                </div>
                <span className="text-gray-700">“{item.memberComment.text}”</span>
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
