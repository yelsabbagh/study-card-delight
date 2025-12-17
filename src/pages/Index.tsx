import MCQIllustration from '@/components/MCQIllustration';
import MCQIllustrationV2 from '@/components/MCQIllustrationV2';
import ProgressIllustration from '@/components/ProgressIllustration';
import StatsPanel from '@/components/StatsPanel';
import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen, Brain, Trophy, BarChart3, Target, Zap } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
              <Brain className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-display font-bold text-lg text-foreground">MedQuiz Pro</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Features</a>
            <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
            <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</a>
          </nav>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" className="text-muted-foreground">
              Sign In
            </Button>
            <Button size="sm" className="gradient-primary text-primary-foreground shadow-glow">
              Get Started
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
                <Trophy className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-accent">Trusted by 50,000+ Medical Students</span>
              </div>
              
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Master Medical Exams with
                <span className="text-gradient"> Confidence</span>
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                Practice with thousands of board-style MCQs, track your progress with detailed analytics, 
                and build lasting knowledge with smart explanations.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="gradient-primary text-primary-foreground shadow-card hover:shadow-hover transition-shadow group">
                  Start Free Trial
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" className="border-border hover:bg-muted">
                  <BookOpen className="w-4 h-4 mr-2" />
                  View Question Bank
                </Button>
              </div>

              {/* Stats */}
              <div className="flex gap-8 pt-4">
                <div>
                  <p className="text-3xl font-bold text-foreground">15K+</p>
                  <p className="text-sm text-muted-foreground">Questions</p>
                </div>
                <div className="w-px bg-border" />
                <div>
                  <p className="text-3xl font-bold text-foreground">92%</p>
                  <p className="text-sm text-muted-foreground">Pass Rate</p>
                </div>
                <div className="w-px bg-border" />
                <div>
                  <p className="text-3xl font-bold text-foreground">4.9★</p>
                  <p className="text-sm text-muted-foreground">Rating</p>
                </div>
              </div>
            </div>

            {/* Right - Illustration */}
            <div className="relative animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-success/10 rounded-3xl blur-3xl" />
              <MCQIllustration className="w-full h-auto relative z-10 drop-shadow-xl" animated />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our platform combines cutting-edge learning science with intuitive design 
              to help you study smarter, not harder.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <BookOpen className="w-6 h-6" />,
                title: 'Comprehensive Question Bank',
                description: 'Access 15,000+ board-style questions across all major medical specialties.',
                color: 'accent'
              },
              {
                icon: <Brain className="w-6 h-6" />,
                title: 'Smart Explanations',
                description: 'Learn from detailed explanations that break down complex concepts.',
                color: 'success'
              },
              {
                icon: <Trophy className="w-6 h-6" />,
                title: 'Progress Tracking',
                description: 'Monitor your performance with detailed analytics and streak tracking.',
                color: 'destructive'
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="group p-8 rounded-2xl bg-card border border-border shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                <div className={`w-12 h-12 rounded-xl mb-6 flex items-center justify-center ${
                  feature.color === 'accent' ? 'bg-accent/10 text-accent' :
                  feature.color === 'success' ? 'bg-success/10 text-success' :
                  'bg-destructive/10 text-destructive'
                }`}>
                  {feature.icon}
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MCQ Demo Section */}
      <section id="mcq-demo" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Learn From Every Question
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Detailed explanations for both correct and incorrect answers help you 
              understand the reasoning behind each choice.
            </p>
          </div>
          
          <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-success/5 rounded-3xl blur-2xl" />
            <MCQIllustrationV2 className="w-full max-w-4xl mx-auto h-auto relative z-10" animated />
          </div>
        </div>
      </section>

      {/* Track Your Progress Section */}
      <section id="progress" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Illustration */}
            <div className="relative order-2 lg:order-1 animate-fade-in">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-success/5 rounded-3xl blur-2xl" />
              <ProgressIllustration className="w-full h-auto relative z-10" animated />
            </div>

            {/* Content */}
            <div className="space-y-8 order-1 lg:order-2 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-success/10 border border-success/20">
                <BarChart3 className="w-4 h-4 text-success" />
                <span className="text-sm font-medium text-success">Analytics & Insights</span>
              </div>

              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Track Your Progress,
                <span className="text-gradient"> Master Your Weak Spots</span>
              </h2>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Our intelligent analytics dashboard shows you exactly where you stand. 
                Identify weak areas, monitor your streaks, and watch your scores improve over time.
              </p>

              <div className="space-y-4">
                {[
                  {
                    icon: <Target className="w-5 h-5" />,
                    title: 'Accuracy Tracking',
                    desc: 'See your real-time accuracy across all topics and question types.'
                  },
                  {
                    icon: <BarChart3 className="w-5 h-5" />,
                    title: 'Topic Breakdown',
                    desc: 'Visual breakdown of your performance by medical specialty.'
                  },
                  {
                    icon: <Zap className="w-5 h-5" />,
                    title: 'Streak Motivation',
                    desc: 'Build daily habits with streak tracking and milestone rewards.'
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border hover:shadow-card transition-shadow">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Button size="lg" className="gradient-primary text-primary-foreground shadow-card hover:shadow-hover transition-shadow group">
                View Sample Dashboard
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="relative overflow-hidden rounded-3xl gradient-primary p-12 md:p-16">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iNCIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />
            
            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="text-center md:text-left">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                  Ready to Ace Your Exams?
                </h2>
                <p className="text-primary-foreground/80 max-w-xl mb-8">
                  Join thousands of medical students who've improved their scores with MedQuiz Pro.
                </p>
                <Button size="lg" variant="secondary" className="shadow-lg hover:shadow-xl transition-shadow">
                  Start Your Free Trial
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
              
              {/* Right - Stats Panel */}
              <div className="flex justify-center md:justify-end">
                <StatsPanel className="w-full max-w-[280px] h-auto drop-shadow-2xl" animated />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
                <Brain className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-display font-bold text-foreground">MedQuiz Pro</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 MedQuiz Pro. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Terms</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
