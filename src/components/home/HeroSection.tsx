
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="min-h-[100vh] flex items-center bg-gradient-to-b from-purple-50 via-white to-white overflow-hidden relative">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-40 -left-20 w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 right-40 w-80 h-80 bg-yellow-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 bg-purple-100 rounded-full text-purple-700 text-sm font-medium mb-2"
            >
              <Sparkles className="h-3.5 w-3.5" /> New AI Template Creator
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            >
              Design Beautiful
              <span className="block bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                Custom Invitations
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-gray-600 max-w-xl mx-auto lg:mx-0"
            >
              Create stunning invitations for any occasion with our easy-to-use design tools and professionally crafted templates.
            </motion.p>
            
            {/* Feature list */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5, delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left mt-6"
            >
              {[
                'AI-Powered Design Assistance',
                'Customizable Templates',
                'Print or Digital Options',
                'QR Code Integration'
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle className="text-green-500 h-5 w-5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">{feature}</span>
                </div>
              ))}
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4"
            >
              <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 shadow-md group">
                <Link to="/create" className="flex items-center">
                  Start Creating
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-purple-200 hover:border-purple-300 hover:bg-purple-50">
                <Link to="/contact">
                  Contact Us
                </Link>
              </Button>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6 perspective"
          >
            <div className="relative">
              {/* Main card */}
              <div className="w-3/4 mx-auto aspect-[5/7] bg-white rounded-xl shadow-2xl border-8 border-white transform transition-all duration-500 hover:-rotate-y-2 hover:rotate-x-2 hover:shadow-purple-200/30 overflow-hidden group">
                <div className="h-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center p-8 text-white transition-all duration-500 group-hover:scale-105 group-hover:from-purple-600 group-hover:to-pink-600">
                  <div className="text-center space-y-4">
                    <h3 className="font-heading text-2xl font-bold">You're Invited!</h3>
                    <p className="font-serif">Join us for an evening of celebration</p>
                    <div className="h-px w-16 bg-white/50 mx-auto"></div>
                    <p className="font-heading text-lg">June 15, 2025</p>
                  </div>
                </div>
              </div>
              
              {/* Decorative cards */}
              <div className="absolute -bottom-8 -left-12 w-2/3 aspect-[5/7] rounded-xl shadow-xl border-8 border-white transform -rotate-12 bg-gradient-to-r from-blue-400 to-cyan-300 z-[-1] transition-all duration-500 group-hover:-rotate-16 group-hover:-translate-x-4"></div>
              <div className="absolute -top-8 -right-12 w-2/3 aspect-[5/7] rounded-xl shadow-xl border-8 border-white transform rotate-12 bg-gradient-to-r from-amber-300 to-yellow-200 z-[-1] transition-all duration-500 group-hover:rotate-16 group-hover:translate-x-4"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
