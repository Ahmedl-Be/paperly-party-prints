
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, FileText, Sparkles, Calendar, Image, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-to-b from-indigo-50 via-purple-50 to-white overflow-hidden py-20 px-6 sm:px-8 lg:px-12">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 left-10 w-72 h-72 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animation-delay-4000"></div>
        <div className="absolute top-0 right-20 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-20 left-20 w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animation-delay-2000"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 bg-purple-100 rounded-full text-purple-700 text-sm font-medium mb-4"
            >
              <Sparkles className="h-3.5 w-3.5" /> New Smart Templates
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              Create Stunning 
              <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent mt-2">
                Digital Stationery
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-gray-600 max-w-xl mb-8"
            >
              CardCrafter makes it easy to design beautiful invitations, cards, and digital stationery for any occasion with professionally crafted templates and intuitive tools.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5, delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2 mb-10"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-green-500 h-5 w-5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Smart AI Design Assistant</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-green-500 h-5 w-5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Premium Templates</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-green-500 h-5 w-5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Digital & Print Options</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-green-500 h-5 w-5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Interactive Elements</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-green-500 h-5 w-5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Shareable Links</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-green-500 h-5 w-5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Custom Branding</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-5 pt-2"
            >
              <Button asChild size="lg" className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-md group">
                <Link to="/templates" className="flex items-center">
                  Get Started Free
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-purple-200 hover:border-purple-300 hover:bg-purple-50">
                <Link to="/templates" className="flex items-center">
                  Browse Templates
                </Link>
              </Button>
            </motion.div>
          </div>
          
          <div className="order-1 lg:order-2 perspective">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative h-full flex items-center justify-center"
            >
              {/* Main grid of cards */}
              <div className="grid grid-cols-2 gap-6 max-w-lg">
                {/* Card 1 - Birthday */}
                <div className="transform transition-all duration-700 hover:scale-105 hover:rotate-2 hover:shadow-xl rounded-xl overflow-hidden shadow-lg border-8 border-white bg-white group">
                  <div className="bg-gradient-to-br from-pink-500 to-rose-500 h-48 flex items-center justify-center p-4 text-white">
                    <div className="text-center space-y-2 transition-all duration-500 group-hover:scale-110">
                      <Calendar className="h-10 w-10 mx-auto mb-3" />
                      <h3 className="font-heading text-lg font-bold">Birthday</h3>
                      <p className="text-xs text-white/80">Celebration Cards</p>
                    </div>
                  </div>
                </div>
                
                {/* Card 2 - Wedding */}
                <div className="transform transition-all duration-700 hover:scale-105 hover:rotate-2 hover:shadow-xl rounded-xl overflow-hidden shadow-lg border-8 border-white bg-white group">
                  <div className="bg-gradient-to-br from-purple-500 to-indigo-500 h-40 flex items-center justify-center p-4 text-white">
                    <div className="text-center space-y-2 transition-all duration-500 group-hover:scale-110">
                      <Image className="h-10 w-10 mx-auto mb-3" />
                      <h3 className="font-heading text-lg font-bold">Wedding</h3>
                      <p className="text-xs text-white/80">Invitations</p>
                    </div>
                  </div>
                </div>
                
                {/* Card 3 - Business */}
                <div className="transform transition-all duration-700 hover:scale-105 hover:rotate-2 hover:shadow-xl rounded-xl overflow-hidden shadow-lg border-8 border-white bg-white group">
                  <div className="bg-gradient-to-br from-blue-500 to-cyan-500 h-40 flex items-center justify-center p-4 text-white">
                    <div className="text-center space-y-2 transition-all duration-500 group-hover:scale-110">
                      <FileText className="h-10 w-10 mx-auto mb-3" />
                      <h3 className="font-heading text-lg font-bold">Business</h3>
                      <p className="text-xs text-white/80">Documents</p>
                    </div>
                  </div>
                </div>
                
                {/* Card 4 - Fast Track */}
                <div className="transform transition-all duration-700 hover:scale-105 hover:-rotate-2 hover:shadow-xl rounded-xl overflow-hidden shadow-lg border-8 border-white bg-white group">
                  <div className="bg-gradient-to-br from-amber-500 to-orange-500 h-48 flex items-center justify-center p-4 text-white">
                    <div className="text-center space-y-2 transition-all duration-500 group-hover:scale-110">
                      <Zap className="h-10 w-10 mx-auto mb-3" />
                      <h3 className="font-heading text-lg font-bold">Fast Track</h3>
                      <p className="text-xs text-white/80">AI Templates</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-indigo-100 rounded-full z-[-1] animate-pulse-slow"></div>
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-pink-100 rounded-full z-[-1] animate-pulse-slow animation-delay-2000"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
