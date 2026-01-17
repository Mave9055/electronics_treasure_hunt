import { Users, BookOpen, Zap, MessageCircle, Heart, Share2 } from "lucide-react";

const stories = [
  {
    author: "Alex Chen",
    title: "From Zero to DIY Microphone",
    excerpt: "Built my first working microphone in 3 weeks. Here's how I did it.",
    likes: 342,
    comments: 28,
    color: "cyan",
  },
  {
    author: "Jordan Smith",
    title: "Debugging My First Arduino Project",
    excerpt: "Spent 6 hours finding a single wire connection issue. Lessons learned.",
    likes: 289,
    comments: 45,
    color: "magenta",
  },
  {
    author: "Morgan Lee",
    title: "E-Waste Scavenging Tips & Tricks",
    excerpt: "Found 50+ components from old electronics. Here's what's worth keeping.",
    likes: 567,
    comments: 92,
    color: "purple",
  },
];

const resources = [
  {
    title: "Arduino Official Documentation",
    type: "DOCS",
    link: "#",
    color: "cyan",
  },
  {
    title: "Electronics Fundamentals Guide",
    type: "PDF",
    link: "#",
    color: "magenta",
  },
  {
    title: "Component Datasheets Database",
    type: "DATABASE",
    link: "#",
    color: "purple",
  },
  {
    title: "DIY Projects Showcase",
    type: "GALLERY",
    link: "#",
    color: "green",
  },
];

export default function CyberpunkCommunity() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0e27] via-[#1a1f3a] to-[#0a0e27] relative overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/20 via-transparent to-magenta-500/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="mb-16 animate-fade-in">
          <div className="flex items-center gap-3 mb-4">
            <Users className="w-8 h-8 text-cyan-400" />
            <h1 className="text-5xl font-orbitron font-black">
              <span className="text-cyan-400">COMMUNITY</span> <span className="text-magenta-400">&</span> <span className="text-purple-400">RESOURCES</span>
            </h1>
          </div>
          <p className="text-xl text-cyan-300/70">Join 12,500+ learners and share your journey</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-16">
          {[
            { label: "Members", value: "12.5K", color: "cyan" },
            { label: "Stories", value: "2.3K", color: "magenta" },
            { label: "Projects", value: "5.8K", color: "purple" },
            { label: "Resources", value: "340+", color: "green" },
          ].map((stat, i) => (
            <div key={i} className="glass-card cyan-accent">
              <p className="text-xs text-cyan-300/50 uppercase tracking-wider mb-2">{stat.label}</p>
              <p className={`text-3xl font-orbitron font-black text-${stat.color}-400`}>{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Stories Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-orbitron text-cyan-400 mb-8 uppercase tracking-wider">MEMBER STORIES</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stories.map((story, i) => (
              <div key={i} className={`glass-card border-2 border-${story.color}-500/50 animate-fade-in`} style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="mb-4">
                  <div className="w-10 h-10 rounded-full bg-black/30 mb-3"></div>
                  <p className={`font-orbitron font-bold text-${story.color}-400`}>{story.author}</p>
                </div>
                <h3 className="text-lg font-orbitron text-white mb-3">{story.title}</h3>
                <p className="text-cyan-300/70 text-sm mb-6 line-clamp-3">{story.excerpt}</p>
                <div className="flex items-center justify-between pt-4 border-t border-cyan-500/20">
                  <div className="flex gap-4 text-sm text-cyan-300/50">
                    <button className="flex items-center gap-1 hover:text-cyan-400 transition">
                      <Heart className="w-4 h-4" /> {story.likes}
                    </button>
                    <button className="flex items-center gap-1 hover:text-cyan-400 transition">
                      <MessageCircle className="w-4 h-4" /> {story.comments}
                    </button>
                  </div>
                  <button className="text-cyan-400 hover:text-cyan-300 transition">
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Resources Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-orbitron text-magenta-400 mb-8 uppercase tracking-wider">LEARNING RESOURCES</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resources.map((resource, i) => (
              <a
                key={i}
                href={resource.link}
                className="glass-card border-2 border-magenta-500/50 hover:border-magenta-500 hover:bg-magenta-500/5 transition-all cursor-pointer group"
              >
                <div className="flex items-start justify-between mb-4">
                  <BookOpen className="w-6 h-6 text-magenta-400 group-hover:text-magenta-300 transition" />
                  <span className="px-3 py-1 bg-black/30 rounded text-xs font-mono text-magenta-300/70 group-hover:text-magenta-300 transition">
                    {resource.type}
                  </span>
                </div>
                <h3 className="text-lg font-orbitron text-white group-hover:text-magenta-300 transition mb-2">{resource.title}</h3>
                <div className="text-magenta-400 group-hover:text-magenta-300 transition">→</div>
              </a>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="glass-card cyan-accent text-center space-y-6">
          <h2 className="text-3xl font-orbitron">
            <span className="text-cyan-400">SHARE</span> <span className="text-magenta-400">YOUR</span> <span className="text-purple-400">STORY</span>
          </h2>
          <p className="text-cyan-300/70 max-w-2xl mx-auto">
            Have you built something cool? Solved a tricky problem? Share your experience with the community and help others learn.
          </p>
          <button className="px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-black font-orbitron font-bold rounded transition-all shadow-lg">
            SUBMIT YOUR STORY
          </button>
        </div>
      </div>
    </div>
  );
}
