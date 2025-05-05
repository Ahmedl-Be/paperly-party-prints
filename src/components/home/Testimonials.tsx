
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sophia Martinez',
    role: 'Wedding Planner',
    content: 'CardCrafter helped me create unique invitations for my clients. The templates are beautiful and extremely customizable!',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop',
    rating: 5
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Event Coordinator',
    content: 'I use CardCrafter for all my corporate events. The professional templates and ease of use save me hours of work.',
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
    <section className="py-16 bg-gradient-to-b from-white to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-heading font-bold mb-4">What Our Customers Say</h2>
          <p className="text-gray-600">Thousands of people use CardCrafter to create stunning invitations for their special occasions</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow border border-purple-100 relative card-hover-effect"
            >
              {/* Quote mark decoration */}
              <div className="absolute -top-4 -left-2 text-6xl text-purple-100 font-serif pointer-events-none">"</div>
              
              <div className="flex items-center mb-4">
                <Avatar className="h-12 w-12 border-2 border-purple-100">
                  <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                  <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="ml-4">
                  <h4 className="font-medium text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-4 w-4 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
              
              <p className="text-gray-600 relative z-10">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
