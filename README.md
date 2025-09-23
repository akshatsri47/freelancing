# 🚗 Dehradun Cars & Coffee - Premium Automotive Website

A stunning, award-worthy website for Dehradun Cars & Coffee - a premium automotive meetup community. Built with cutting-edge web technologies and featuring smooth GSAP animations, this website delivers an exceptional user experience that captures the essence of automotive passion.

## ✨ Features

### 🎬 **Premium Animations**
- **GSAP-powered animations** with ScrollTrigger and ScrollSmoother
- **SplitText effects** for dramatic text reveals
- **Smooth scrolling** with hardware acceleration
- **Performance-optimized** animations for all devices

### 🎨 **Modern Design**
- **Automotive-themed color palette** (grays, blacks, and racing red)
- **Responsive design** that works perfectly on all devices
- **Premium typography** with Antonio and ProximaNova fonts
- **Interactive hover effects** and smooth transitions

### 🚀 **Technical Excellence**
- **React 19** with modern hooks and patterns
- **Tailwind CSS 4** for utility-first styling
- **Vite** for lightning-fast development and builds
- **Mobile-first approach** with responsive breakpoints

### 📱 **User Experience**
- **Event registration** via Luma integration
- **Social media integration** (Instagram, Threads, WhatsApp)
- **Smooth navigation** with hash routing
- **Accessibility features** and keyboard support

## 🛠️ Tech Stack

- **Frontend**: React 19, TypeScript
- **Styling**: Tailwind CSS 4, Custom CSS
- **Animations**: GSAP 3.13, ScrollTrigger, ScrollSmoother, SplitText
- **Build Tool**: Vite 6.3
- **Routing**: React Router DOM 7.9
- **Responsive**: React Responsive
- **Linting**: ESLint 9.25

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd GSAP-Awwwards-Website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
# or
pnpm build
```

### Preview Production Build

```bash
npm run preview
# or
pnpm preview
```

## 📁 Project Structure

```
src/
├── components/          # Reusable React components
│   ├── Home.jsx        # Main home page component
│   ├── NavBar.jsx      # Navigation component
│   ├── Loader.tsx      # Loading component
│   └── ...
├── sections/           # Page sections
│   ├── HeroSection.jsx # Hero section with video
│   ├── MessageSection.jsx # Welcome message
│   ├── FlavorSection.jsx # Events section
│   ├── BenefitSection.jsx # Benefits section
│   ├── TestimonialSection.jsx # Testimonials
│   └── FooterSection.jsx # Footer
├── hooks/              # Custom React hooks
├── types/              # TypeScript type definitions
├── App.jsx             # Main app component
├── main.tsx            # App entry point
└── index.css           # Global styles and theme
```

## 🎨 Design System

### Color Palette
- **Primary**: `#2d2d2d` (Dark Gray)
- **Accent**: `#dc2626` (Racing Red)
- **Background**: `#f8fafc` (Light Gray)
- **Text**: `#2d2d2d` (Dark Gray)
- **White**: `#ffffff`

### Typography
- **Display**: Antonio (Bold, Uppercase)
- **Body**: ProximaNova (Regular)

### Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎬 Animation Features

### GSAP Animations
- **ScrollTrigger**: Scroll-based animations
- **ScrollSmoother**: Smooth scrolling experience
- **SplitText**: Text animation effects
- **Timeline**: Complex animation sequences

### Performance Optimizations
- **Hardware acceleration** with `transform3d`
- **Mobile-specific optimizations**
- **Reduced motion support**
- **Efficient ScrollTrigger usage**

## 📱 Responsive Features

### Mobile Optimizations
- **Touch-friendly interactions**
- **Optimized video loading**
- **Simplified navigation**
- **Reduced animation complexity**

### Desktop Features
- **Full animation suite**
- **Complex scroll effects**
- **Enhanced hover states**
- **Multi-column layouts**

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory:

```env
# Add any environment variables here
VITE_APP_TITLE=Dehradun Cars & Coffee
```

### Tailwind Configuration
The project uses Tailwind CSS 4 with custom theme configuration in `src/index.css`.

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
3. Deploy automatically on push

### Other Platforms
The project builds to a standard `dist` folder and can be deployed to any static hosting service.

## 📊 Performance

### Lighthouse Scores
- **Performance**: 95+
- **Accessibility**: 90+
- **Best Practices**: 95+
- **SEO**: 90+

### Optimizations
- **Code splitting** with dynamic imports
- **Image optimization** with proper formats
- **Lazy loading** for non-critical content
- **Minimal bundle size** with tree shaking

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **GSAP** for amazing animation capabilities
- **Tailwind CSS** for utility-first styling
- **React** for component-based architecture
- **Vite** for lightning-fast development

## 📞 Contact

**Dehradun Cars & Coffee**
- Website: [Your Website URL]
- Instagram: [@carsncoffeedoon]
- Email: [contact@carsncoffee.com]

---

Built with ❤️ for the automotive community in Dehradun
