import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroCookies from '@/assets/hero-cookies.jpg';

const HeroSection = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroCookies})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-overlay" />
      
      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full">
            {/* Left side - Brand */}
            <div className="text-left">
              <div className="text-text-inverse font-black text-6xl md:text-7xl lg:text-8xl leading-none tracking-tighter">
                THE<br />
                DESIGN<br />
                SNACK<br />
                <span className="text-primary">.COM</span>
              </div>
            </div>
            
            {/* Right side - Featured Article */}
            <div className="bg-surface-dark/95 backdrop-blur-sm p-8 lg:p-12 rounded-lg max-w-lg">
              <h2 className="text-3xl lg:text-4xl font-bold text-text-inverse mb-6 leading-tight">
                How to create grunge texture on design using Figma
              </h2>
              <Button variant="outline" size="lg" className="bg-transparent border-text-inverse text-text-inverse hover:bg-text-inverse hover:text-surface-dark">
                READ MORE <ArrowRight className="ml-2" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;