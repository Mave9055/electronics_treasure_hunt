import { Star, Heart, MessageCircle } from "lucide-react";
import { Link } from "wouter";

export default function Community() {
  const successStories = [
    {
      name: "James Chen",
      role: "Software Engineer",
      story: "Built a WiFi-enabled temperature monitor for my garage. Now I can track conditions remotely!",
      project: "Smart Garage Monitor",
      image: "👨‍💼",
      likes: 234,
      comments: 18
    },
    {
      name: "Sarah Martinez",
      role: "Career Changer",
      story: "Came from marketing background. Now I'm building IoT solutions for my company. This masterclass was the foundation!",
      project: "Industrial Sensor Network",
      image: "👩‍💼",
      likes: 456,
      comments: 42
    },
    {
      name: "Michael Park",
      role: "Hobbyist",
      story: "Always wanted to understand how electronics work. Built my first project in 2 weeks. Feeling confident now!",
      project: "Home Automation Hub",
      image: "👨‍🔧",
      likes: 189,
      comments: 24
    },
    {
      name: "Lisa Johnson",
      role: "Teacher",
      story: "Using the masterclass content to teach my high school students. They're actually excited about electronics!",
      project: "Educational Curriculum",
      image: "👩‍🏫",
      likes: 567,
      comments: 89
    },
    {
      name: "David Kumar",
      role: "Entrepreneur",
      story: "Started a side business selling custom sensor modules. The fundamentals section was crucial!",
      project: "Sensor Module Business",
      image: "👨‍💻",
      likes: 345,
      comments: 31
    },
    {
      name: "Emma Wilson",
      role: "Maker",
      story: "Completed my first Arduino project. It's a plant watering system that actually works perfectly!",
      project: "Smart Plant Watering",
      image: "👩‍🎨",
      likes: 278,
      comments: 52
    }
  ];

  const testimonials = [
    {
      text: "Finally, someone explained electronics in a way that makes sense. No unnecessary jargon, just practical knowledge.",
      author: "Robert T.",
      role: "Retired Engineer"
    },
    {
      text: "I was intimidated by electronics. This masterclass broke it down into digestible pieces. Now I'm confident building projects!",
      author: "Amanda L.",
      role: "Designer"
    },
    {
      text: "The interactive tools are game-changers. I can actually test my understanding instead of just reading theory.",
      author: "Marcus G.",
      role: "Student"
    },
    {
      text: "Best investment in my learning. The resources library alone is worth it. Datasheets, code examples, everything!",
      author: "Patricia M.",
      role: "Freelancer"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700">
        <div className="container flex items-center justify-between py-4">
          <Link href="/">
            <a className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white font-bold">
                👥
              </div>
              <h1 className="text-xl font-bold text-white">Community</h1>
            </a>
          </Link>
          <div className="text-sm text-slate-400">Success Stories & Testimonials</div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container py-12">
        {/* Hero Section */}
        <div className="mb-16 text-center">
          <h2 className="text-5xl font-bold text-white mb-4">
            Join Our <span className="text-orange-400">Community</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Thousands of people have learned electronics through this masterclass. See what they've built and be inspired to create your own projects.
          </p>
        </div>

        {/* Success Stories Grid */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-8">🚀 Success Stories</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {successStories.map((story, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl p-6 border border-slate-600 hover:border-orange-500 transition-all hover:shadow-lg hover:shadow-orange-500/20"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="text-4xl">{story.image}</div>
                    <div>
                      <p className="font-bold text-white">{story.name}</p>
                      <p className="text-sm text-slate-400">{story.role}</p>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                </div>

                {/* Story */}
                <p className="text-slate-300 mb-4 italic">"{story.story}"</p>

                {/* Project */}
                <div className="bg-slate-900/50 rounded-lg p-3 mb-4">
                  <p className="text-xs text-slate-400 uppercase tracking-wider">Project</p>
                  <p className="font-bold text-orange-400">{story.project}</p>
                </div>

                {/* Engagement */}
                <div className="flex items-center gap-4 text-slate-400 text-sm">
                  <div className="flex items-center gap-1">
                    <Heart className="w-4 h-4" />
                    <span>{story.likes}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageCircle className="w-4 h-4" />
                    <span>{story.comments}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-8">💬 What People Say</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-orange-900/20 to-amber-900/20 rounded-xl p-8 border border-orange-500/30"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-lg text-white mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-bold text-orange-400">{testimonial.author}</p>
                  <p className="text-sm text-slate-400">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl p-12 border border-slate-600 mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">📊 By The Numbers</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-5xl font-bold text-orange-400 mb-2">12,500+</p>
              <p className="text-slate-300">Active Learners</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold text-orange-400 mb-2">3,200+</p>
              <p className="text-slate-300">Projects Built</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold text-orange-400 mb-2">98%</p>
              <p className="text-slate-300">Satisfaction Rate</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold text-orange-400 mb-2">47</p>
              <p className="text-slate-300">Countries</p>
            </div>
          </div>
        </div>

        {/* Community Features */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-8">🌟 Community Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl p-8 border border-slate-600">
              <p className="text-3xl mb-4">💡</p>
              <h4 className="text-xl font-bold text-white mb-2">Project Showcase</h4>
              <p className="text-slate-300">Share your projects and get feedback from experienced makers</p>
            </div>
            <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl p-8 border border-slate-600">
              <p className="text-3xl mb-4">🤝</p>
              <h4 className="text-xl font-bold text-white mb-2">Mentorship</h4>
              <p className="text-slate-300">Connect with experienced electronics experts for guidance</p>
            </div>
            <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl p-8 border border-slate-600">
              <p className="text-3xl mb-4">💬</p>
              <h4 className="text-xl font-bold text-white mb-2">Discussion Forum</h4>
              <p className="text-slate-300">Ask questions and help others solve problems</p>
            </div>
            <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl p-8 border border-slate-600">
              <p className="text-3xl mb-4">🏆</p>
              <h4 className="text-xl font-bold text-white mb-2">Challenges</h4>
              <p className="text-slate-300">Monthly challenges with prizes for creative solutions</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-orange-900/20 to-amber-900/20 rounded-2xl p-12 border border-orange-500/30">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Join?</h3>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            Start learning, build amazing projects, and connect with thousands of makers around the world.
          </p>
          <Link href="/getting-started">
            <a className="inline-block px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-lg transition-colors">
              Get Started Now →
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
