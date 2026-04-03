import React, { useState, useEffect } from 'react';
import { 
  Newspaper, 
  GraduationCap, 
  Calendar, 
  School, 
  Languages, 
  BookOpen, 
  ChevronLeft, 
  ChevronRight, 
  ExternalLink, 
  Download, 
  Bell, 
  Image as ImageIcon, 
  Loader2, 
  AlertCircle,
  ArrowRight,
  Search,
  Trophy,
  Globe,
  MapPin,
  Clock,
  Sparkles
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- MOCK DATA ---
const MOCK_DATA = {
  news: [
    { 
      id: 1, 
      region: 'Assam', 
      title: 'Assam HSLC Results 2026: State Board to Announce Scores on April 10', 
      summary: 'The Secondary Education Board of Assam (SEBA) has finalized the evaluation process. Chief Minister Himanta Biswa Sarma confirmed the date, highlighting a significant improvement in the state\'s pass percentage.', 
      date: 'APRIL 2, 2026', 
      source: 'SEBA ONLINE', 
      img: 'https://images.unsplash.com/photo-1523050335102-c32509087440?auto=format&fit=crop&q=80&w=1200', 
      readTime: '4 MIN READ' 
    },
    { 
      id: 2, 
      region: 'Assam', 
      title: 'New Academic Framework: AHSEC Introduces Objective-Based Assessment', 
      summary: 'In a move to align with national competitive standards, the Assam Higher Secondary Education Council is restructuring its examination pattern for the 2026-27 session.', 
      date: 'APRIL 1, 2026', 
      source: 'AHSEC GOV', 
      img: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=1200', 
      readTime: '3 MIN READ' 
    },
    { 
      id: 3, 
      region: 'India', 
      title: 'National Education Policy 2026: Phased Rollout of Vocational Integration Begins', 
      summary: 'The Ministry of Education has released comprehensive guidelines for states to integrate skill-based learning into the core curriculum, starting from the secondary level.', 
      date: 'APRIL 1, 2026', 
      source: 'MINISTRY OF ED', 
      img: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=1200', 
      readTime: '6 MIN READ' 
    },
    { 
      id: 4, 
      region: 'Global', 
      title: 'UNESCO Report Highlights Growing Digital Literacy Gap in Developing Regions', 
      summary: 'A new global study warns that without immediate intervention, the divide in AI-readiness could leave millions of students behind in the future workforce.', 
      date: 'MARCH 30, 2026', 
      source: 'UNESCO', 
      img: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=1200', 
      readTime: '5 MIN READ' 
    },
    { 
      id: 5, 
      region: 'India', 
      title: 'JEE Main 2026: Session 2 Admit Cards Now Available for Download', 
      summary: 'The National Testing Agency has opened the portal for candidates to download their hall tickets for the upcoming April examinations.', 
      date: 'MARCH 31, 2026', 
      source: 'NTA INDIA', 
      img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1200', 
      readTime: '2 MIN READ' 
    },
    { 
      id: 6, 
      region: 'Assam', 
      title: 'Cotton University Celebrates 125 Years of Academic Excellence', 
      summary: 'The historic institution marks its quasquicentennial anniversary with a series of lectures and the inauguration of a new research wing.', 
      date: 'MARCH 25, 2026', 
      source: 'COTTON UNIV', 
      img: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1200', 
      readTime: '4 MIN READ' 
    },
  ],
  scholarships: [
    { id: 1, title: 'Ishan Uday Scholarship 2026', deadline: '2026-05-15', provider: 'UGC', amount: '₹48,000/year', urgent: false, eligibility: 'North-East students for technical education' },
    { id: 2, title: 'NSP Central Sector Scheme', deadline: '2026-06-30', provider: 'Govt of India', amount: '₹20,000/year', urgent: false, eligibility: 'Merit-based for college students' },
    { id: 3, title: 'Assam Aikyashree Program', deadline: '2026-04-30', provider: 'Assam Govt', amount: '₹15,000/year', urgent: true, eligibility: 'Girls pursuing higher education in Assam' },
  ],
  exams: [
    { id: 1, name: 'HSLC Board Exams', date: 'APR 10, 2026', region: 'Assam', countdown: 7 },
    { id: 2, name: 'JEE Main Session 2', date: 'APR 20, 2026', region: 'India', countdown: 17 },
    { id: 3, name: 'AHSEC Finals', date: 'APR 15, 2026', region: 'Assam', countdown: 12 },
    { id: 4, name: 'NEET UG 2026', date: 'MAY 5, 2026', region: 'India', countdown: 32 },
  ],
  institutes: [
    { name: 'IIT Guwahati', location: 'Guwahati, Assam', rank: '#7 Engineering', country: 'India' },
    { name: 'IISc Bangalore', location: 'Bengaluru, Karnataka', rank: '#1 Research', country: 'India' },
    { name: 'University of Oxford', location: 'Oxford, UK', rank: '#2 Global', country: 'UK' },
    { name: 'MIT', location: 'Cambridge, USA', rank: '#1 Engineering', country: 'USA' },
    { name: 'Gauhati University', location: 'Guwahati, Assam', rank: 'State University', country: 'India' },
    { name: 'Stanford University', location: 'Stanford, USA', rank: '#3 Global', country: 'USA' },
  ]
};

const TRANSLATIONS = {
  English: {
    title: 'Global Education Hub',
    tagline: 'Your comprehensive portal for educational opportunities',
    news: 'Latest News',
    scholarships: 'Scholarships',
    exams: 'Exam Tracker',
    institutes: 'Top Institutes',
    eink: 'Reader Mode',
    standard: 'Standard',
    apply: 'Apply Now',
    remind: 'Set Reminder',
    download: 'Download E-Paper',
    aiGen: 'AI Concept Visualizer',
    genPrompt: 'Describe an educational concept to visualize...',
    generate: 'Generate Visual',
    daysLeft: 'days left',
    urgent: 'Urgent',
    featured: 'Featured Stories',
    readMore: 'Read Article',
    filter: 'Filter by Region',
    all: 'All Regions'
  },
  Assamese: {
    title: 'গোলকীয় শিক্ষা কেন্দ্ৰ',
    tagline: 'শৈক্ষিক সুযোগৰ বাবে আপোনাৰ সম্পূৰ্ণ প্ৰৱেশদ্বাৰ',
    news: 'শেহতীয়া সংবাদ',
    scholarships: 'বৃত্তি',
    exams: 'পৰীক্ষা ট্ৰেকাৰ',
    institutes: 'শীৰ্ষ প্ৰতিষ্ঠান',
    eink: 'পাঠক ম\'ড',
    standard: 'মানক',
    apply: 'আবেদন কৰক',
    remind: 'ৰিমাইণ্ডাৰ সংহতি',
    download: 'ই-পেপাৰ ডাউনলোড',
    aiGen: 'AI ধাৰণা চিত্ৰকৰ',
    genPrompt: 'এটা শৈক্ষিক ধাৰণা বৰ্ণনা কৰক...',
    generate: 'দৃশ্য প্ৰস্তুত কৰক',
    daysLeft: 'দিন বাকী',
    urgent: 'জৰুৰী',
    featured: 'বিশেষ কাহিনী',
    readMore: 'প্ৰবন্ধ পঢ়ক',
    filter: 'অঞ্চল অনুসৰি ফিল্টাৰ',
    all: 'সকলো অঞ্চল'
  }
};

const getDaysRemaining = (deadline: string) => {
  const today = new Date();
  const deadlineDate = new Date(deadline);
  const diff = Math.ceil((deadlineDate.getTime() - today.getTime()) / (1000 * 3600 * 24));
  return diff > 0 ? diff : 0;
};

export default function App() {
  const [language, setLanguage] = useState<'English' | 'Assamese'>('English');
  const [isEink, setIsEink] = useState(() => localStorage.getItem('mode') === 'eink');
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const t = TRANSLATIONS[language];

  useEffect(() => {
    localStorage.setItem('mode', isEink ? 'eink' : 'default');
  }, [isEink]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const carouselSlides = [
    { 
      region: 'Assam', 
      title: 'Assam Education Updates', 
      img: 'https://images.unsplash.com/photo-1523050335102-c32509087440?auto=format&fit=crop&q=80&w=1600',
      bullets: ['HSLC Results on April 10', 'New AHSEC Exam Pattern', 'Pragyan Scholarship Launch']
    },
    { 
      region: 'India', 
      title: 'National Education Scene', 
      img: 'https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&q=80&w=1600',
      bullets: ['NEP 2026 Rollout Guidelines', 'JEE Main Session 2 Admit Cards', 'CBSE Open Book Pilot']
    },
    { 
      region: 'Global', 
      title: 'Global Learning Trends', 
      img: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&q=80&w=1600',
      bullets: ['UNESCO Digital Literacy Report', 'QS World Rankings 2027', 'AI Integration in Classrooms']
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % carouselSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [carouselSlides.length]);

  const filteredNews = selectedRegion === 'All' 
    ? MOCK_DATA.news 
    : MOCK_DATA.news.filter(n => n.region === selectedRegion);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isEink ? 'eink-mode' : 'bg-white'}`}>
      {/* Header */}
      <header className={`glass-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="apple-container py-4 md:py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${isEink ? 'bg-[#8B0000]' : 'bg-gradient-to-br from-[#007AFF] to-[#5856D6]'}`}>
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-lg md:text-xl font-display font-bold tracking-tight">{t.title}</h1>
                <p className="text-xs text-[#8E8E93] hidden md:block">{t.tagline}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 md:gap-6">
              {/* Language Toggle */}
              <button 
                onClick={() => setLanguage(language === 'English' ? 'Assamese' : 'English')}
                className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-[#F2F2F7] transition-colors"
                aria-label="Toggle language"
              >
                <Languages className="w-4 h-4 text-[#007AFF]" />
                <span className="text-sm font-medium hidden md:inline">{language === 'English' ? 'অসমীয়া' : 'English'}</span>
              </button>

              {/* Reader Mode Toggle */}
              <button 
                onClick={() => setIsEink(!isEink)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                  isEink 
                    ? 'bg-[#8B0000] text-white' 
                    : 'bg-[#F2F2F7] text-[#007AFF] hover:bg-[#E5E5EA]'
                }`}
                aria-label="Toggle reader mode"
              >
                <BookOpen className="w-4 h-4 md:hidden" />
                <span className="hidden md:inline">{isEink ? t.standard : t.eink}</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="apple-container space-y-16 md:space-y-24 py-8 md:py-16">
        
        {/* Hero Carousel */}
        <section className="relative h-[400px] md:h-[500px] -mx-6 md:mx-0 rounded-none md:rounded-3xl overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={carouselIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7 }}
              className="absolute inset-0"
            >
              <img 
                src={carouselSlides[carouselIndex].img} 
                alt={carouselSlides[carouselIndex].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 text-white">
                <div className="flex items-center gap-2 mb-4">
                  <div className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${isEink ? 'bg-[#8B0000]' : 'bg-[#007AFF]'}`}>
                    {carouselSlides[carouselIndex].region}
                  </div>
                  <div className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/20 backdrop-blur-sm">
                    {t.featured}
                  </div>
                </div>
                <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 max-w-3xl leading-tight">
                  {carouselSlides[carouselIndex].title}
                </h2>
                <ul className="space-y-2 mb-6 max-w-2xl">
                  {carouselSlides[carouselIndex].bullets.map((bullet, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm md:text-base">
                      <div className={`w-1.5 h-1.5 rounded-full ${isEink ? 'bg-[#8B0000]' : 'bg-[#007AFF]'}`} />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Carousel Controls */}
          <div className="absolute bottom-6 right-6 flex gap-2">
            <button 
              onClick={() => setCarouselIndex((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length)}
              className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-white/30 transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>
            <button 
              onClick={() => setCarouselIndex((prev) => (prev + 1) % carouselSlides.length)}
              className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-white/30 transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          </div>

          {/* Carousel Indicators */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            {carouselSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCarouselIndex(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === carouselIndex 
                    ? `${isEink ? 'bg-[#8B0000]' : 'bg-[#007AFF]'} w-8` 
                    : 'bg-white/50 w-1.5'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </section>

        {/* News Section */}
        <section className="space-y-8 md:space-y-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Newspaper className={`w-7 h-7 ${isEink ? 'text-[#8B0000]' : 'text-[#007AFF]'}`} />
              <h3 className="text-3xl md:text-4xl font-display font-bold tracking-tight">{t.news}</h3>
            </div>

            {/* Region Filter */}
            <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
              {['All', 'Assam', 'India', 'Global'].map((region) => (
                <button
                  key={region}
                  onClick={() => setSelectedRegion(region)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all ${
                    selectedRegion === region
                      ? `${isEink ? 'bg-[#8B0000] text-white' : 'bg-[#007AFF] text-white'}`
                      : 'bg-[#F2F2F7] text-[#6B6B6B] hover:bg-[#E5E5EA]'
                  }`}
                >
                  {region === 'All' ? t.all : region}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-0">
            {filteredNews.map((article) => (
              <motion.article 
                key={article.id}
                whileHover={{ backgroundColor: isEink ? 'transparent' : '#FAFAFA' }}
                className="group py-8 border-b border-[#E5E5EA] last:border-b-0 flex flex-col md:flex-row gap-6 cursor-pointer transition-colors"
              >
                <div className="w-full md:w-48 h-48 md:h-32 shrink-0 overflow-hidden rounded-2xl">
                  <img 
                    src={article.img} 
                    alt={article.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                
                <div className="flex-1 space-y-3">
                  <div className="flex flex-wrap items-center gap-2 md:gap-3 text-xs font-semibold text-[#8E8E93] uppercase tracking-wider">
                    <span className={`px-2 py-1 rounded ${isEink ? 'bg-[#E3DCD2]' : 'bg-[#F2F2F7]'}`}>{article.region}</span>
                    <span className="hidden md:inline">•</span>
                    <span>{article.date}</span>
                    <span className="hidden md:inline">•</span>
                    <span className="hidden md:inline">{article.source}</span>
                  </div>
                  
                  <h4 className={`text-xl md:text-2xl font-display font-bold leading-tight group-hover:${isEink ? 'text-[#8B0000]' : 'text-[#007AFF]'} transition-colors line-clamp-2`}>
                    {article.title}
                  </h4>
                  
                  <p className="text-[15px] md:text-base text-[#6B6B6B] leading-relaxed line-clamp-2">
                    {article.summary}
                  </p>
                  
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-xs text-[#8E8E93] font-medium flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {article.readTime}
                    </span>
                    <button className={`flex items-center gap-1 text-sm font-semibold ${isEink ? 'text-[#8B0000]' : 'text-[#007AFF]'} group-hover:gap-2 transition-all`}>
                      {t.readMore} <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Scholarships & Exams Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-16">
          
          {/* Scholarships */}
          <section className="lg:col-span-3 space-y-8">
            <div className="flex items-center gap-3">
              <Trophy className={`w-7 h-7 ${isEink ? 'text-[#8B0000]' : 'text-[#007AFF]'}`} />
              <h3 className="text-3xl md:text-4xl font-display font-bold tracking-tight">{t.scholarships}</h3>
            </div>
            
            <div className="space-y-6">
              {MOCK_DATA.scholarships.map((s) => {
                const daysLeft = getDaysRemaining(s.deadline);
                return (
                  <motion.div 
                    key={s.id}
                    whileHover={{ x: 4 }}
                    className={`border-l-4 ${s.urgent ? 'border-red-500' : (isEink ? 'border-[#8B0000]' : 'border-[#007AFF]')} pl-6 py-4 ${isEink ? 'bg-[#FDFBF7]' : 'bg-[#F9FAFB]'} rounded-r-xl`}
                  >
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                      <div className="space-y-2 flex-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h4 className="text-lg md:text-xl font-bold">{s.title}</h4>
                          {s.urgent && (
                            <span className="px-2 py-0.5 bg-red-500 text-white text-xs font-bold rounded uppercase">
                              {t.urgent}
                            </span>
                          )}
                        </div>
                        
                        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 text-sm">
                          <span className="text-[#6B6B6B] font-medium">{s.provider}</span>
                          <span className="hidden md:inline text-[#E5E5EA]">•</span>
                          <span className={`font-bold ${isEink ? 'text-[#8B0000]' : 'text-[#007AFF]'}`}>{s.amount}</span>
                        </div>
                        
                        <p className="text-sm text-[#6B6B6B] leading-relaxed">{s.eligibility}</p>
                        
                        <div className={`inline-flex items-center gap-2 text-xs font-semibold ${daysLeft < 15 ? 'text-red-500' : 'text-[#8E8E93]'}`}>
                          <Calendar className="w-3.5 h-3.5" />
                          Deadline: {s.deadline} ({daysLeft} {t.daysLeft})
                        </div>
                      </div>
                      
                      <button className={`px-6 py-3 rounded-xl font-semibold text-sm whitespace-nowrap transition-all ${
                        isEink 
                          ? 'bg-[#8B0000] text-white hover:bg-[#6B0000]' 
                          : 'bg-[#007AFF] text-white hover:bg-[#0062CC]'
                      }`}>
                        {t.apply} →
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </section>

          {/* Exam Tracker */}
          <section className="lg:col-span-2 space-y-8">
            <div className="flex items-center gap-3">
              <Calendar className={`w-7 h-7 ${isEink ? 'text-[#8B0000]' : 'text-[#007AFF]'}`} />
              <h3 className="text-3xl md:text-4xl font-display font-bold tracking-tight">{t.exams}</h3>
            </div>
            
            <div className="space-y-4">
              {MOCK_DATA.exams.map((e) => (
                <div 
                  key={e.id}
                  className={`p-5 rounded-xl ${isEink ? 'bg-[#FDFBF7] border border-[#E3DCD2]' : 'bg-[#F9FAFB] border border-[#E5E5EA]'} hover:shadow-md transition-shadow`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1 space-y-2">
                      <h4 className="text-base md:text-lg font-bold leading-tight">{e.name}</h4>
                      <div className="flex flex-col gap-1 text-xs text-[#6B6B6B]">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {e.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {e.region}
                        </span>
                      </div>
                      <div className={`inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-bold ${
                        e.countdown < 10 
                          ? 'bg-red-100 text-red-600' 
                          : isEink ? 'bg-[#E3DCD2] text-[#8B0000]' : 'bg-blue-100 text-[#007AFF]'
                      }`}>
                        {e.countdown} days to go
                      </div>
                    </div>
                    
                    <button 
                      className={`p-2.5 rounded-lg ${isEink ? 'hover:bg-[#E3DCD2]' : 'hover:bg-[#E5E5EA]'} transition-colors`}
                      aria-label="Set reminder"
                    >
                      <Bell className={`w-5 h-5 ${isEink ? 'text-[#8B0000]' : 'text-[#007AFF]'}`} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Top Institutes */}
        <section className="space-y-8">
          <div className="flex items-center gap-3">
            <School className={`w-7 h-7 ${isEink ? 'text-[#8B0000]' : 'text-[#007AFF]'}`} />
            <h3 className="text-3xl md:text-4xl font-display font-bold tracking-tight">{t.institutes}</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MOCK_DATA.institutes.map((inst, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -4 }}
                className={`group p-6 rounded-2xl ${isEink ? 'bg-[#FDFBF7] border border-[#E3DCD2]' : 'bg-[#F9FAFB] border border-[#E5E5EA]'} hover:shadow-xl transition-all cursor-pointer`}
              >
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-xl ${isEink ? 'bg-[#8B0000]' : 'bg-gradient-to-br from-[#007AFF] to-[#5856D6]'} flex items-center justify-center shrink-0`}>
                    <School className="w-6 h-6 text-white" />
                  </div>
                  <ArrowRight className={`w-5 h-5 ${isEink ? 'text-[#8B0000]' : 'text-[#007AFF]'} opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all`} />
                </div>
                
                <h4 className={`text-lg font-bold mb-2 ${isEink ? 'group-hover:text-[#8B0000]' : 'group-hover:text-[#007AFF]'} transition-colors`}>
                  {inst.name}
                </h4>
                
                <div className="space-y-1 text-sm text-[#6B6B6B]">
                  <p className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {inst.location}
                  </p>
                  <p className="flex items-center gap-1">
                    <Globe className="w-3.5 h-3.5" />
                    {inst.country}
                  </p>
                </div>
                
                <div className={`mt-3 pt-3 border-t ${isEink ? 'border-[#E3DCD2]' : 'border-[#E5E5EA]'}`}>
                  <span className={`text-xs font-bold ${isEink ? 'text-[#8B0000]' : 'text-[#007AFF]'}`}>
                    {inst.rank}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className={`border-t ${isEink ? 'border-[#E3DCD2]' : 'border-[#E5E5EA]'} py-12 md:py-16 mt-16`}>
        <div className="apple-container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left space-y-3">
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${isEink ? 'bg-[#8B0000]' : 'bg-gradient-to-br from-[#007AFF] to-[#5856D6]'}`}>
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-xl font-display font-bold">Global Education Hub</h2>
              </div>
              <p className="text-sm text-[#8E8E93] max-w-md">
                {t.tagline}
              </p>
              <p className="text-xs text-[#8E8E93]">
                © 2026 Global Education Hub. All rights reserved.
              </p>
            </div>
            
            <div className="flex flex-col items-center gap-6">
              <button className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${
                isEink 
                  ? 'bg-[#8B0000] text-white hover:bg-[#6B0000]' 
                  : 'bg-[#007AFF] text-white hover:bg-[#0062CC]'
              }`}>
                <Download className="w-4 h-4" /> {t.download}
              </button>
              
              <div className="flex gap-6">
                <button className="text-[#6B6B6B] hover:text-[#111111] transition-colors" aria-label="External links">
                  <ExternalLink className="w-5 h-5" />
                </button>
                <button className="text-[#6B6B6B] hover:text-[#111111] transition-colors" aria-label="Search">
                  <Search className="w-5 h-5" />
                </button>
                <button className="text-[#6B6B6B] hover:text-[#111111] transition-colors" aria-label="Notifications">
                  <Bell className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
