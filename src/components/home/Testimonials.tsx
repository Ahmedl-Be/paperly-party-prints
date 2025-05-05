
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sophia Martinez',
    role: 'Wedding Planner',
    content: "CardCrafter helped me create unique invitations for my clients. The templates are beautiful and extremely customizable!",
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop',
    rating: 5
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Event Coordinator',
    content: "I use CardCrafter for all my corporate events. The professional templates and ease of use save me hours of work.",
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop',
    rating: 5
  },
  {
    id: 3,
    name: 'Emma Wilson',
    role: 'Mother of Three',
    content: "The birthday invitations I made with CardCrafter were a hit! My kids loved them and their friends' parents asked where I got them.",
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop',
    rating: 4
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-3 px-4 py-1 bg-purple-100 rounded-full text-purple-700 text-sm font-medium">
            Trusted by Thousands
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
            What Our Customers Say
          </h2>
          <p className="text-gray-600">
            Join thousands of satisfied customers who use CardCrafter to create stunning invitations
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 
                        border border-purple-100 relative card-hover-effect transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Quote mark decoration */}
              <div className="absolute -top-4 -left-2 text-6xl text-purple-100 font-serif pointer-events-none opacity-80">"</div>
              <div className="absolute -bottom-4 -right-2 text-6xl text-purple-100 font-serif pointer-events-none opacity-50 rotate-180">"</div>
              
              <div className="flex items-center mb-5">
                <Avatar className="h-14 w-14 border-2 border-purple-200 shadow-md">
                  <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                  <AvatarFallback className="bg-gradient-to-r from-purple-400 to-pink-400 text-white">
                    {testimonial.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div className="ml-4">
                  <h4 className="font-heading font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-purple-600">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-4 w-4 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-200'}`} 
                  />
                ))}
              </div>
              
              <p className="text-gray-600 relative z-10 font-medium italic">
                "{testimonial.content}"
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-purple-600 font-medium">
            4.9/5 average rating from over 2,400 customers
          </p>
          <div className="flex justify-center mt-4 gap-4">
            <img src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=150&h=40&fit=crop&auto=format" 
                 alt="Trust badge" className="h-10 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all" />
            <img src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=150&h=40&fit=crop&auto=format" 
                 alt="Trust badge" className="h-10 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all" />
            <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=150&h=40&fit=crop&auto=format" 
                 alt="Trust badge" className="h-10 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
