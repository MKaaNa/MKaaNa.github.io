const languages = {
  tr: {
    // Navigation
    nav: {
      home: "Ana Sayfa",
      about: "Hakkımda", 
      skills: "Yetenekler",
      blog: "Yazılar",
      projects: "Projeler",
      contact: "İletişim"
    },
    
    // Header
    header: {
      lookingForWork: "🟢 İş Arıyorum",
      darkTheme: "Koyu Temaya Geç", 
      lightTheme: "Açık Temaya Geç"
    },
    
    // Hero Section
    hero: {
      greeting: "Merhaba, Ben",
      name: "Musa Kaan Altın",
      title: "Junior Software Developer & Backend Developer",
      description: "Modern teknolojilerle kullanıcı deneyimini odak alan, ölçeklenebilir yazılım çözümleri geliştiriyorum.",
      viewProjects: "Projelerimi Gör",
      contactMe: "Benimle İletişime Geç"
    },
    
    // About Section
    about: {
      title: "Hakkımda",
      subtitle: "",
      jobTitle: "Junior Backend & Mobile Developer",
      intro1: "Merhaba, ben Kaan. Bilgisayar mühendisliği alanında akademik eğitimimi yeni tamamlamış bir yazılım geliştiricisiyim. Backend, mobil ve gömülü sistem projelerinde çalışıyorum ve şu anda yeni fırsatlar arıyorum.",
      intro2: "Ziraat Teknoloji, STM, Karel, Mobiliz ve Crypttech gibi firmalarda yaptığım sekiz farklı staj sayesinde yaklaşık 15 ay sektör tecrübesi edindim. Bu süreçte finans teknolojileri, savunma sanayi ve IoT gibi farklı alanlarda uygulamalı deneyim kazandım.",
      intro3: "Yazılım geliştirme sürecinin her aşaması benim için önemlidir: problem tanımı, çözüm geliştirme, test ve deploy. Gerçek dünya problemlerine çözümler üretmekten keyif alıyorum.",
      
      approach: {
        title: "Geliştirme Yaklaşımım",
        description: "Temiz ve sürdürülebilir kod, kullanıcı odaklı yaklaşımlar ve sistem bütünlüğüne dikkat ederim."
      },
      
      goal: {
        title: "Bir Sonraki Hedefim", 
        description: "Backend ve mobil teknolojileri entegre ederek kullanıcıya değer sunan projeler geliştirmek."
      }
    },
    
    // Skills Section
    skills: {
      title: "Teknoloji Stack'im",
      subtitle: "Projelerimde aktif olarak kullandığım teknolojiler",
      stats: {
        projects: "Tamamlanan Proje",
        experience: "Ay Staj Deneyimi", 
        internships: "Staj Deneyimi"
      }
    },
    
    // Blog Section
    blog: {
      title: "Blog & Yazılarım",
      subtitle: "Teknik konularda yazdığım makaleler ve deneyimlerim",
      stats: {
        views: "Toplam Görüntüleme",
        reads: "Toplam Okuma",
        articles: "Yayınlanan Makale"
      },
      badges: {
        mostRead: "En Çok Okunan",
        popular: "Popüler"
      },
      readCount: "Okunma",
      readArticle: "Makaleyi Oku", 
      allArticles: "Tüm Yazılarım"
    },
    
    // Projects Section
    projects: {
      title: "Projelerim",
      subtitle: "Son zamanlarda üzerinde çalıştığım öne çıkan projeler",
      featured: "Öne Çıkan",
      mobile: "Mobil",
      webApp: "Web App",
      liveDemo: "Canlı Demo",
      moreProjects: "Daha Fazla Proje",
      
      hotel: {
        title: "Hotel Reservation System",
        description: "Spring Boot ve Angular ile geliştirilmiş kapsamlı rezervasyon sistemi. JWT authentication, Stripe ödeme entegrasyonu ve PDF raporlama özellikleri.",
        feature1: "Gerçek zamanlı rezervasyon",
        feature2: "Güvenli ödeme sistemi",
        feature3: "PDF rapor oluşturma"
      },
      
      puzzle: {
        title: "Flutter Puzzle Game",
        description: "Firebase destekli, power-up özellikli eğlenceli mobil puzzle oyunu. Kullanıcı skorları ve sosyal özellikler.",
        feature1: "Cross-platform",
        feature2: "Gerçek zamanlı skor"
      },
      
      banking: {
        title: "Banking Web App", 
        description: "JWT authentication ve PostgreSQL ile güvenli finans yönetim platformu. Express.js backend ile RESTful API.",
        feature1: "Güvenli authentication",
        feature2: "RESTful API"
      }
    },
    
    // Contact Section
    contact: {
      title: "İletişime Geçelim",
      subtitle: "Yeni fırsatları konuşmak için buradayım",
      heading: "Birlikte çalışalım!",
      description: "Yeni projeler, iş fırsatları veya teknoloji hakkında sohbet etmek istiyorsanız, benimle iletişime geçmekten çekinmeyin.",
      
      methods: {
        email: "Email",
        location: "Lokasyon",
        availability: "Müsaitlik"
      },
      
      values: {
        location: "Türkiye",
        availability: "İş fırsatları arıyorum"
      },
      
      form: {
        name: "İsim",
        namePlaceholder: "Adınız",
        email: "E-posta", 
        emailPlaceholder: "email@example.com",
        subject: "Konu",
        subjectPlaceholder: "Mesajınızın konusu",
        message: "Mesaj",
        messagePlaceholder: "Mesajınızı buraya yazın...",
        submit: "Mesaj Gönder",
        sending: "Gönderiliyor...",
        success: "✅ Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağım.",
        error: "❌ Bir hata oluştu. Lütfen doğrudan mkaanaltin@gmail.com adresine e-posta gönderin."
      }
    },
    
    // Footer
    footer: {
      copyright: "&copy; 2024 Musa Kaan Altın. Tüm hakları saklıdır."
    },
    
    // Admin Panel
    admin: {
      title: "Site İstatistikleri",
      stats: {
        totalVisitors: "Toplam Ziyaretçi",
        pageViews: "Sayfa Görüntüleme",
        today: "Bugün",
        thisMonth: "Bu Ay"
      },
      deviceStats: "Cihaz Dağılımı"
    },

    // Loading Screen
    loading: {
      title: "Yükleniyor...",
      description: "Lütfen bekleyin, sayfa yükleniyor."
    },

    // Theme Toggle
    themeToggle: {
      dark: "Koyu Temaya Geç",
      light: "Açık Temaya Geç"
    }
  },
  
  en: {
    // Navigation
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills", 
      blog: "Blog",
      projects: "Projects",
      contact: "Contact"
    },
    
    // Header
    header: {
      lookingForWork: "🟢 Looking for Work",
      darkTheme: "Dark Mode", 
      lightTheme: "Light Mode"
    },
    
    // Hero Section
    hero: {
      greeting: "Hello, I'm",
      name: "Musa Kaan Altın",
      title: "Junior Software Developer & Backend Developer", 
      description: "I develop scalable software solutions focusing on user experience with modern technologies.",
      viewProjects: "View My Projects",
      contactMe: "Get In Touch"
    },
    
    // About Section
    about: {
      title: "About Me",
      subtitle: "",
      jobTitle: "Junior Backend & Mobile Developer",
      intro1: "Hello, I'm Kaan. I'm a software developer who recently completed my academic education in computer engineering. I work on backend, mobile and embedded system projects and I'm currently looking for new opportunities.",
      intro2: "Through eight different internships at companies like Ziraat Technology, STM, Karel, Mobiliz and Crypttech, I gained approximately 15 months of industry experience. During this process, I gained hands-on experience in different fields such as financial technologies, defense industry and IoT.",
      intro3: "Every stage of the software development process is important to me: problem definition, solution development, testing and deployment. I enjoy producing solutions to real-world problems.",
      
      approach: {
        title: "My Development Approach",
        description: "I pay attention to clean and sustainable code, user-focused approaches and system integrity."
      },
      
      goal: {
        title: "My Next Goal",
        description: "To develop projects that provide value to users by integrating backend and mobile technologies."
      }
    },
    
    // Skills Section
    skills: {
      title: "My Technology Stack",
      subtitle: "Technologies I actively use in my projects", 
      stats: {
        projects: "Completed Projects",
        experience: "Months Internship Experience",
        internships: "Internship Experience"
      }
    },
    
    // Blog Section
    blog: {
      title: "Blog & Articles",
      subtitle: "Articles and experiences I wrote on technical topics",
      stats: {
        views: "Total Views",
        reads: "Total Reads", 
        articles: "Published Articles"
      },
      badges: {
        mostRead: "Most Read",
        popular: "Popular"
      },
      readCount: "Reads",
      readArticle: "Read Article",
      allArticles: "All My Articles"
    },
    
    // Projects Section
    projects: {
      title: "My Projects",
      subtitle: "Featured projects I've been working on recently",
      featured: "Featured",
      mobile: "Mobile",
      webApp: "Web App", 
      liveDemo: "Live Demo",
      moreProjects: "More Projects",
      
      hotel: {
        title: "Hotel Reservation System",
        description: "Comprehensive reservation system developed with Spring Boot and Angular. JWT authentication, Stripe payment integration and PDF reporting features.",
        feature1: "Real-time reservation",
        feature2: "Secure payment system",
        feature3: "PDF report generation"
      },
      
      puzzle: {
        title: "Flutter Puzzle Game", 
        description: "Fun mobile puzzle game with Firebase support and power-up features. User scores and social features.",
        feature1: "Cross-platform",
        feature2: "Real-time scoring"
      },
      
      banking: {
        title: "Banking Web App",
        description: "Secure financial management platform with JWT authentication and PostgreSQL. RESTful API with Express.js backend.",
        feature1: "Secure authentication", 
        feature2: "RESTful API"
      }
    },
    
    // Contact Section
    contact: {
      title: "Let's Get In Touch",
      subtitle: "I'm here to discuss new opportunities",
      heading: "Let's work together!",
      description: "If you want to chat about new projects, job opportunities or technology, don't hesitate to contact me.",
      
      methods: {
        email: "Email",
        location: "Location",
        availability: "Availability"
      },
      
      values: {
        location: "Turkey",
        availability: "Looking for job opportunities"
      },
      
      form: {
        name: "Name", 
        namePlaceholder: "Your Name",
        email: "Email",
        emailPlaceholder: "email@example.com",
        subject: "Subject",
        subjectPlaceholder: "Subject of your message",
        message: "Message",
        messagePlaceholder: "Write your message here...",
        submit: "Send Message",
        sending: "Sending...",
        success: "✅ Your message has been sent successfully! I will get back to you as soon as possible.",
        error: "❌ An error occurred. Please send an email directly to mkaanaltin@gmail.com."
      }
    },
    
    // Footer
    footer: {
      copyright: "&copy; 2024 Musa Kaan Altın. All rights reserved."
    },
    
    // Admin Panel
    admin: {
      title: "Site Statistics",
      stats: {
        totalVisitors: "Total Visitors",
        pageViews: "Page Views",
        today: "Today",
        thisMonth: "This Month"
      },
      deviceStats: "Device Distribution"
    },

    // Loading Screen
    loading: {
      title: "Loading...",
      description: "Please wait, page is loading."
    },

    // Theme Toggle
    themeToggle: {
      dark: "Dark Mode",
      light: "Light Mode"
    }
  }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = languages;
} 