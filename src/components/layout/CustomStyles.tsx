
import React from 'react';

const CustomStyles = () => {
  return (
    <style jsx global>{`
      @keyframes float {
        0% {
          transform: translateY(0px);
        }
        50% {
          transform: translateY(-20px);
        }
        100% {
          transform: translateY(0px);
        }
      }

      @keyframes blob {
        0% {
          transform: translate(0px, 0px) scale(1);
        }
        33% {
          transform: translate(30px, -50px) scale(1.1);
        }
        66% {
          transform: translate(-20px, 20px) scale(0.9);
        }
        100% {
          transform: translate(0px, 0px) scale(1);
        }
      }

      .animate-blob {
        animation: blob 7s infinite;
      }

      .animation-delay-2000 {
        animation-delay: 2s;
      }

      .animation-delay-4000 {
        animation-delay: 4s;
      }

      .card-hover-effect {
        transition: all 0.3s ease;
      }

      .card-hover-effect:hover {
        transform: translateY(-5px);
      }

      /* Perspective property for 3D card effect */
      .perspective {
        perspective: 2000px;
      }
    `}</style>
  );
};

export default CustomStyles;
