/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { ReactNode } from 'react';
import { motion } from 'motion/react';
import { Plane, MapPin, Cloudy, Sun, Cloud, Utensils, Navigation, Camera, Heart, ExternalLink, ChevronRight, MessageCircle } from 'lucide-react';
import { cn } from './lib/utils';
import { MEMBERS, ITINERARY, FLIGHTS, HOTELS } from './data/itinerary';
import { Member, ItineraryDay } from './types';

function MapLink({ children, place }: { children: ReactNode; place?: string }) {
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
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-macaron-white max-w-md mx-auto relative shadow-2xl border-[12px] border-gray-800 rounded-[48px] overflow-hidden my-4 selection:bg-macaron-orange/30 flex flex-col h-[85vh]">
      {/* Scrollable Container */}
      <div className="flex-1 overflow-y-auto no-scrollbar pb-10">
        {/* 1. Hero Section - More Compact */}
        <section className="relative h-[200px] overflow-hidden">
          <motion.div 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&q=80&w=800")' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          
          <div className="absolute bottom-4 left-5 right-5 text-white">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="inline-block px-2 py-0.5 bg-macaron-pink text-macaron-pink-dark text-[9px] font-black rounded-full shadow-lg transform -rotate-1">
                  4.29 - 5.6
                </span>
                <span className="bg-white/20 backdrop-blur-md px-2 py-0.5 rounded text-[9px] font-bold border border-white/20 uppercase tracking-widest">
                  7 Days 8 Nights
                </span>
              </div>
              <h1 className="text-white text-3xl font-black leading-tight tracking-tighter drop-shadow-md handwritten">
                超级意大利漫游！
              </h1>
              <p className="text-white/90 text-[10px] mt-1 font-bold flex items-center gap-1 opacity-80 uppercase tracking-widest">
                <MapPin className="w-3 h-3 text-macaron-pink" /> ROMA • TOSCANA • FIRENZE • MILANO
              </p>
            </motion.div>
          </div>
        </section>

        {/* 2. Team Profile Section - Redesigned Chibi Style */}
        <section className="py-8 px-6 bg-white relative overflow-hidden">
          {/* Background Decorative Stickers */}
          <div className="absolute top-2 right-4 text-3xl opacity-10 rotate-12 sticker">🎒</div>
          <div className="absolute bottom-2 left-6 text-2xl opacity-10 -rotate-12 sticker">🎫</div>
          
          <div className="flex justify-between items-end mb-6 relative z-10">
            <h2 className="text-[15px] font-black flex items-center gap-2 text-gray-800 doodle-underline inline-block uppercase tracking-widest">
              <Heart className="w-4 h-4 text-macaron-pink fill-current" /> 探险小分队
            </h2>
            <span className="text-[10px] font-bold text-gray-400 bg-gray-50 px-2 py-1 rounded-lg border border-gray-100">STRIKE TEAM</span>
          </div>
          
          <div className="grid grid-cols-2 gap-x-4 gap-y-6 relative z-10">
            {MEMBERS.map((member, idx) => (
              <motion.div 
                key={member.id}
                whileHover={{ y: -8, scale: 1.02 }}
                className="relative flex flex-col items-center group cursor-pointer"
              >
                {/* Watercolor Background Blob */}
                <div 
                  className="absolute inset-0 w-full h-full watercolor-blob opacity-40 -z-10 scale-125"
                  style={{ backgroundColor: member.color }}
                />
                
                {/* Character Frame */}
                <div className="chibi-frame w-20 h-20 mb-3 group-hover:rotate-3 transition-transform duration-500 bg-gradient-to-br from-white to-gray-50">
                  <div className="absolute inset-0 flex items-center justify-center p-1">
                    <img 
                      src={member.avatar} 
                      alt={member.name}
                      className="w-full h-full object-contain filter drop-shadow-md group-hover:scale-110 transition-transform"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
                
                <div className="text-center">
                  <p className="text-[13px] font-black text-gray-800 tracking-tight mb-1">{member.name}</p>
                  <p 
                    className="text-[8px] font-black px-2 py-0.5 rounded-full uppercase tracking-tighter opacity-80"
                    style={{ backgroundColor: member.color + '88', color: '#FFF' }}
                  >
                    {member.role.split(' / ')[0]}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 3. Quick Info - Combined & Compact */}
        <section className="px-5 py-4 grid grid-cols-2 gap-4 bg-white relative overflow-hidden">
          <div className="bg-[#FFF9F2] p-3 rounded-3xl border border-orange-50 shadow-inner relative group">
            <div className="absolute right-2 top-2 text-macaron-orange/20 rotate-12 pointer-events-none group-hover:rotate-0 transition-transform">
              <Plane className="w-10 h-10" />
            </div>
            <h4 className="text-[9px] font-black mb-2 text-macaron-orange-dark uppercase tracking-widest flex items-center gap-1 relative z-10">
              ✈️ 航班划重点
            </h4>
            <div className="space-y-2 relative z-10">
              {FLIGHTS.map((f, i) => (
                <div key={i} className="border-l-2 border-orange-100 pl-2">
                  <p className="text-[9px] font-black leading-tight text-gray-700">{f.no}</p>
                  <p className="text-[8px] font-bold text-gray-400 truncate tracking-tighter">
                    {f.route.split(/->|→/).slice(-1)} 落地
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-[#F2F9FF] p-3 rounded-3xl border border-blue-50 shadow-inner relative group">
            <div className="absolute right-2 top-2 text-macaron-blue/20 rotate-12 pointer-events-none group-hover:rotate-0 transition-transform">
              <MapPin className="w-10 h-10" />
            </div>
            <h4 className="text-[9px] font-black mb-2 text-macaron-blue-dark uppercase tracking-widest flex items-center gap-1 relative z-10">
              🏨 住宿懒人包
            </h4>
            <div className="space-y-1.5 relative z-10">
              {HOTELS.map((h, i) => (
                <a 
                  key={i}
                  href={h.mapUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[9px] font-black leading-tight text-gray-600 block border-b border-dashed border-blue-100/50 pb-1 last:border-0 truncate hover:text-macaron-blue-dark"
                >
                  📍 {h.name.split(':')[0]}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Daily Itinerary Section - Tighter & More Visual */}
        <motion.section 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="px-4 py-6 space-y-8 bg-white"
        >
          {ITINERARY.map((item, index) => {
            const isEven = index % 2 === 0;
            const themeColor = item.day <= 3 ? 'macaron-pink' : (item.day <= 5 ? 'macaron-orange' : 'macaron-green');
            const themeColorDark = item.day <= 3 ? 'macaron-pink-dark' : (item.day <= 5 ? 'macaron-orange-dark' : 'macaron-green-dark');

            return (
              <div key={index} className="relative">
                {/* Decorative Connecting Line */}
                {index < ITINERARY.length - 1 && (
                  <div className="absolute left-8 top-32 bottom-0 w-0.5 border-l-2 border-dashed border-gray-200 -z-10" />
                )}
                
                <motion.div 
                  variants={itemVariants}
                  className="relative bg-white rounded-[28px] overflow-hidden shadow-xl border border-gray-100 flex flex-col"
                >
                {/* Card Header with Image Integration */}
                <div className="relative h-32 shrink-0 group">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${item.bgImage})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-white" />
                  
                  {/* Decorative Washi Tape */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-5 bg-white/40 backdrop-blur-sm rotate-2 z-30 shadow-sm border border-white/20" />
                  
                  {/* Floating Day Tag */}
                  <div 
                    className="absolute top-4 left-4 px-3 py-1 text-white text-[10px] rounded-lg font-black z-20 shadow-xl transform -rotate-3 border border-white/20"
                    style={{ backgroundColor: `var(--color-${themeColorDark})` }}
                  >
                    DAY {item.day} • {item.city}
                  </div>
                </div>

                <div className="px-5 pb-5 pt-3 flex flex-col gap-3 relative z-10">
                  {/* Title Area */}
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex-1">
                      <h2 className="text-base font-black text-gray-900 leading-tight mb-0.5 serif italic relative inline-block">
                        {item.title}
                        <div className="absolute -bottom-1 left-0 w-full h-1.5 bg-yellow-400/10 -z-10 rounded-full" />
                      </h2>
                      <div className="flex items-center text-[9px] text-gray-400 font-bold tracking-wide">
                         <Cloudy className="w-2.5 h-2.5 mr-1" /> {item.weather}
                      </div>
                    </div>
                  </div>

                  {/* Route & Guide - More Compact */}
                  <div className="bg-gray-50/70 p-3 rounded-2xl border border-gray-100 shadow-sm">
                    <p className="text-[8px] font-black uppercase tracking-[0.2em] mb-2 flex items-center gap-1.5" style={{ color: `var(--color-${themeColorDark})` }}>
                      <Navigation className="w-2.5 h-2.5" /> 行程攻略亮点
                    </p>
                    <div className="space-y-1.5">
                       {item.details.map((detail, idx) => {
                         const parts = detail.split(/->|→/);
                         return (
                           <div key={idx} className="flex items-start gap-1.5 text-[10.5px] leading-snug text-gray-700 font-bold border-b border-gray-100/50 pb-1.5 last:border-0 last:pb-0">
                              <span className="mt-1 w-1 h-1 rounded-full bg-gray-300 flex-shrink-0" />
                              <div className="flex-1">
                                {parts.map((p, pIdx) => (
                                  <span key={pIdx} className="inline-flex items-center">
                                    <MapLink place={p.trim().replace(/[✈️🛬🏨🍝🏛🏰⛲🌅🛍🚄🍹🏷🚆]/gu, '').replace(/\(.*?\)/g, '').trim()}>{p.trim()}</MapLink>
                                    {pIdx < parts.length - 1 && <span className="text-gray-300 mx-0.5 font-normal">→</span>}
                                  </span>
                                ))}
                              </div>
                           </div>
                         );
                       })}
                    </div>
                  </div>

                  {/* Attractions Section - New Rich Content */}
                  {item.attractions && item.attractions.length > 0 && (
                    <div className="space-y-4 pt-2">
                       {item.attractions.map((attr, aIdx) => (
                         <div key={aIdx} className="bg-white rounded-2xl border border-gray-100 p-4 shadow-sm relative group overflow-hidden">
                            {/* Decorative number */}
                            <div className="absolute -right-2 -top-2 text-4xl font-black text-gray-50 group-hover:text-gray-100 transition-colors -z-10">0{aIdx + 1}</div>
                            
                            <h3 className="text-[13px] font-black text-gray-800 mb-2 flex items-center gap-2">
                              <div className="w-1.5 h-4 rounded-full" style={{ backgroundColor: `var(--color-${themeColorDark})` }} />
                              {attr.name}
                            </h3>
                            
                            <p className="text-[10px] text-gray-500 font-medium leading-relaxed mb-3">
                              {attr.intro}
                            </p>
                            
                            <div className="flex flex-col gap-2">
                               <div className="flex items-start gap-2">
                                  <div className="bg-blue-50 text-blue-600 p-1 rounded-md shrink-0">
                                    <Navigation className="w-2.5 h-2.5" />
                                  </div>
                                  <div className="flex-1">
                                    <p className="text-[8px] font-black text-blue-400 uppercase tracking-widest">WHAT TO PLAY</p>
                                    <p className="text-[10px] font-bold text-gray-700">{attr.play}</p>
                                  </div>
                               </div>
                               <div className="flex items-start gap-2">
                                  <div className="bg-purple-50 text-purple-600 p-1 rounded-md shrink-0">
                                    <Camera className="w-2.5 h-2.5" />
                                  </div>
                                  <div className="flex-1">
                                    <p className="text-[8px] font-black text-purple-400 uppercase tracking-widest">UNIQUE FEATURE</p>
                                    <p className="text-[10px] font-bold text-gray-700">{attr.feature}</p>
                                  </div>
                               </div>
                            </div>
                         </div>
                       ))}
                    </div>
                  )}

                  {/* Special Grid for Food & Tips */}
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-orange-50/50 p-2.5 rounded-xl border border-orange-100/30">
                       <p className="text-[7.5px] font-black uppercase mb-1 text-macaron-orange-dark flex items-center gap-1">
                         <Utensils className="w-2 h-2" /> 必吃
                       </p>
                       <div className="space-y-0.5 min-h-[24px]">
                         {item.food.main?.slice(0, 1).map((f, i) => (
                           <div key={i} className="text-[9.5px] font-bold text-gray-700 truncate leading-tight">
                             {f.split(':')[0]}
                           </div>
                         ))}
                       </div>
                    </div>
                    <div className="bg-pink-50/50 p-2.5 rounded-xl border border-pink-100/30">
                       <p className="text-[7.5px] font-black uppercase mb-1 text-macaron-pink-dark flex items-center gap-1">
                         <Camera className="w-2 h-2" /> 推荐机位
                       </p>
                       <div className="text-[9.5px] font-bold text-gray-700 leading-tight min-h-[24px]">
                          {item.attractions && item.attractions.length > 0 ? (
                            <span className="italic">"{item.attractions[0].feature.substring(0, 15)}..."</span>
                          ) : (
                            <span className="italic">"随手一拍都是大片"</span>
                          )}
                       </div>
                    </div>
                  </div>

                  {/* Member Comment Bubble - Post-it Style */}
                  <div 
                    className="rounded-xl p-3 text-[10.5px] flex items-center gap-3 relative shadow-md border border-white mt-4 transform -rotate-1 hover:rotate-0 transition-transform cursor-pointer"
                    style={{ backgroundColor: `var(--color-${themeColor})`, backgroundImage: 'linear-gradient(to bottom right, rgba(255,255,255,0.2), transparent)' }}
                  >
                    {/* Decorative Tape Sticker */}
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-3 bg-white/40 backdrop-blur-[1px] rotate-1 z-20 border border-white/20 shadow-sm" />
                    
                    {/* Shadow effect for post-it */}
                    <div className="absolute inset-0 bg-black/5 -z-10 translate-x-1 translate-y-1 rounded-xl blur-[2px]" />
                    
                    <div className="w-10 h-10 bg-white/90 rounded-lg flex items-center justify-center shrink-0 shadow-sm border border-white overflow-hidden p-0.5">
                      <img 
                        src={MEMBERS.find(m => m.name === item.memberComment.member)?.avatar} 
                        alt="avatar"
                        className="w-full h-full object-contain"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="font-black text-[7px] text-gray-500/60 mb-0.5 uppercase tracking-widest flex items-center gap-1">
                         <MessageCircle className="w-2.5 h-2.5" /> {item.memberComment.member} 碎碎念
                      </p>
                      <span className="text-gray-800 font-bold leading-tight block">“{item.memberComment.text}”</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          );
        })}
        </motion.section>
      </div>

      {/* 5. Footer - Fixed at bottom */}
      <footer className="px-6 py-8 text-center bg-white border-t border-gray-50 flex flex-col items-center shrink-0">
        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           className="space-y-3"
        >
          <div className="text-2xl">🇮🇹</div>
          <h3 className="handwritten text-2xl text-gray-800 font-black italic">Arrivederci!</h3>
          <p className="text-[9px] text-gray-400 tracking-[0.3em] uppercase font-black">Wish you a happy journey ✨</p>
          <div className="flex justify-center gap-4 pt-2 text-gray-200">
             <Camera className="w-4 h-4 transition-colors hover:text-macaron-blue" />
             <Navigation className="w-4 h-4 transition-colors hover:text-macaron-orange" />
             <Heart className="w-4 h-4 text-macaron-pink-dark/20 fill-current hover:text-macaron-pink transition-colors" />
          </div>
        </motion.div>
      </footer>

      {/* Static Visual Overlays */}
      <div className="absolute top-20 -right-20 w-64 h-64 bg-macaron-pink/10 blur-[100px] rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-40 -left-20 w-80 h-80 bg-macaron-blue/10 blur-[120px] rounded-full pointer-events-none z-0" />
    </div>
  );
}

