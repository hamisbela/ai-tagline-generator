import { Card } from "@/components/ui/card";
import { Heart, Lightbulb, Target, Users } from 'lucide-react';

export default function About() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-red-500 text-transparent bg-clip-text">
            About Us ✨
          </h1>
          <p className="text-xl text-gray-600">
            Empowering brands with AI-driven tagline creation
          </p>
        </div>
        
        <div className="gradient-border mb-16">
          <div className="p-8 text-center">
            <p className="text-xl leading-relaxed text-gray-700">
              Welcome to AI Tagline Generator, where creativity meets artificial intelligence to help
              brands craft memorable and impactful taglines. Our platform leverages cutting-edge
              AI technology to generate unique, engaging phrases that capture the essence of your
              brand. ✨
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="p-8 hover:shadow-lg transition-all duration-300 border-2 hover:border-orange-200">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-orange-100 rounded-full flex items-center justify-center">
                <Target className="h-8 w-8 text-orange-500" />
              </div>
              <h2 className="text-2xl font-semibold">Our Mission 🎯</h2>
              <p className="text-gray-600">
                Making professional tagline creation accessible to everyone, from startups
                to established brands.
              </p>
            </div>
          </Card>

          <Card className="p-8 hover:shadow-lg transition-all duration-300 border-2 hover:border-orange-200">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-orange-100 rounded-full flex items-center justify-center">
                <Heart className="h-8 w-8 text-orange-500" />
              </div>
              <h2 className="text-2xl font-semibold">Our Values ❤️</h2>
              <p className="text-gray-600">
                We believe in innovation, creativity, and making powerful branding tools accessible
                to brands of all sizes.
              </p>
            </div>
          </Card>
        </div>

        <div className="space-y-12 mb-16">
          <section className="text-center">
            <div className="w-16 h-16 mx-auto bg-orange-100 rounded-full flex items-center justify-center mb-6">
              <Lightbulb className="h-8 w-8 text-orange-500" />
            </div>
            <h2 className="text-3xl font-semibold mb-4">How It Works ⚡</h2>
            <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Our AI-powered platform uses advanced natural language processing to understand your
              brand description and generate relevant, creative taglines. We combine linguistic
              patterns from successful taglines with your specific context to create
              phrases that resonate with your target audience.
            </p>
          </section>

          <section className="text-center">
            <div className="w-16 h-16 mx-auto bg-orange-100 rounded-full flex items-center justify-center mb-6">
              <Users className="h-8 w-8 text-orange-500" />
            </div>
            <h2 className="text-3xl font-semibold mb-4">Our Commitment 🤝</h2>
            <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
              We're committed to providing a reliable, user-friendly tool that helps brands
              find their perfect tagline. We continuously improve our AI models and user
              experience based on feedback from our community.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}