# Electronics Treasure Hunt - Interactive Learning Masterclass

A comprehensive, gamified electronics learning platform designed for adults who want to master practical electronics skills through hands-on projects, interactive tools, and real-world applications.

## 🎯 Why This Project?

Electronics education is often gatekept behind expensive courses and complex jargon. **Electronics Treasure Hunt** democratizes learning by:

- **Lowering the barrier to entry** - Start with salvaged e-waste (free materials)
- **Gamifying the learning process** - Earn badges, certificates, and compete on leaderboards
- **Making it practical** - Learn by doing, not just reading
- **Keeping it simple** - Layman's explanations, no unnecessary jargon
- **Building community** - Share projects, get help, celebrate wins

## 🚀 Tech Stack

| Layer | Technology |
|-------|-----------|
| **Frontend Framework** | React 19 with TypeScript |
| **Build Tool** | Vite 7 |
| **Styling** | Tailwind CSS 4 + Custom CSS |
| **UI Components** | shadcn/ui + Radix UI |
| **Routing** | Wouter (lightweight router) |
| **State Management** | React Hooks + localStorage |
| **Animations** | Framer Motion + CSS animations |
| **Icons** | Lucide React |
| **Hosting** | GitHub Pages (free) + Manus (optional) |

## 📦 Features

### Learning Content
- 📚 **15+ Lessons** - From fundamentals to advanced projects
- 🔧 **4 Phase Quests** - UART logging, I²C monitoring, power supplies, I²C control
- 📖 **Resource Library** - Datasheets, code examples, video tutorials
- 🎤 **DIY Microphone Guides** - Salvage and build recording equipment

### Interactive Tools
- ⚡ **Circuit Simulator** - Visualize electricity flow
- 🔍 **Chip Identifier** - Learn about 8+ common components
- 📊 **Multimeter Simulator** - Practice voltage/current measurements
- 🔌 **Breadboard Designer** - Plan circuits visually
- 🧮 **Component Calculators** - Resistor codes, capacitor values
- ✅ **Parts Compatibility Checker** - Verify components work together

### Gamification
- 🏆 **10+ Quizzes** - Test knowledge across all topics
- 🎖️ **20+ Achievement Badges** - Unlock through progress
- ⭐ **Daily Challenges** - Build learning streaks
- 🎁 **Referral System** - Invite friends, earn rewards
- 📜 **Certificates** - Downloadable proof of completion
- 🏅 **Leaderboards** - Compete with community

### Reference & Support
- 🔧 **Troubleshooting Guide** - 6 diagnostic flowcharts
- ❌ **Error Code Reference** - Arduino errors explained
- ⚠️ **Safety Checklist** - Best practices for beginners
- 📋 **Project Templates** - 6 ready-to-build projects
- 🎵 **Recording Templates** - Audacity & GarageBand presets

## 🛠️ Local Setup

### Prerequisites
- Node.js 18+ and npm/pnpm
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/Mave9055/electronics_treasure_hunt.git
cd electronics_treasure_hunt

# Install dependencies
pnpm install

# Start development server
pnpm dev

# Open http://localhost:3000 in your browser
```

### Build for Production

```bash
# Build static site
pnpm build

# Preview production build
pnpm preview

# Deploy to GitHub Pages
# Files are automatically deployed from /docs folder
```

## 📁 Project Structure

```
electronics_treasure_hunt/
├── client/
│   ├── public/              # Static assets
│   │   └── images/          # Component photos, diagrams
│   ├── src/
│   │   ├── pages/           # Page components (Home, Lessons, Tools)
│   │   ├── components/      # Reusable UI components
│   │   ├── lib/             # Utility functions (quizUtils.ts)
│   │   ├── App.tsx          # Main app with routing
│   │   └── index.css        # Global styles & themes
│   └── index.html           # HTML entry point
├── vite.config.ts           # Vite configuration
├── tailwind.config.js       # Tailwind CSS config
└── package.json             # Dependencies
```

## 🎨 Design Philosophy

**For Adults, By Adults:**
- Professional photography (no cartoons)
- Dark mode support for late-night learning
- Minimal jargon, maximum clarity
- Practical examples over theory
- Community-driven content

## 🤝 Contributing

We welcome contributions! Here's how to help:

### Report Issues
Found a bug or have a feature request? [Open an issue](https://github.com/Mave9055/electronics_treasure_hunt/issues)

### Add Content
Want to create a new lesson or project template?
1. Fork the repository
2. Create a new branch: `git checkout -b feature/new-lesson`
3. Add your content following the existing structure
4. Submit a pull request

### Improve Code
Help us improve the codebase:
- Fix bugs
- Optimize performance
- Improve accessibility
- Enhance UI/UX

## 📝 Roadmap

**Q1 2026:**
- [ ] Mobile app wrapper (PWA)
- [ ] Community forum
- [ ] Video tutorial integrations
- [ ] Advanced analytics dashboard

**Q2 2026:**
- [ ] Live instructor sessions
- [ ] Peer code review system
- [ ] Hardware kit partnerships
- [ ] Certification blockchain integration

## 📄 License

MIT License - Feel free to use this project for learning, teaching, or commercial purposes.

## 🙋 Support

- **Questions?** Check the [Troubleshooting Guide](https://mave9055.github.io/electronics_treasure_hunt/#/troubleshooting)
- **Stuck?** Try the [Error Code Reference](https://mave9055.github.io/electronics_treasure_hunt/#/error-codes)
- **Want to help?** [Contribute on GitHub](https://github.com/Mave9055/electronics_treasure_hunt)

---

**Made with ❤️ for electronics enthusiasts everywhere**

[🚀 Start Learning Now](https://mave9055.github.io/electronics_treasure_hunt/)
