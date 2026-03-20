const languages = {
  tr: {
    // Navigation
    nav: {
      home: "Ana Sayfa",
      about: "Hakkımda", 
      career: "Kariyerim",
      skills: "Yetenekler",
      blog: "Yazılar",
      projects: "Projeler",
      contact: "İletişim"
    },
    
    // Header
    header: {
      lookingForWork: "Yeni fırsatlara açığım",
      darkTheme: "Koyu Temaya Geç", 
      lightTheme: "Açık Temaya Geç"
    },
    
    // Hero Section
    hero: {
      greeting: "Merhaba, Ben",
      name: "Musa Kaan Altın",
      title: "Java Backend Developer",
      description: "Güvenli mikroservisler ve FinTech sistemleri geliştiriyorum. Spring Boot, Spring Security, JWT ve REST API ile ölçeklenebilir kurumsal çözümler üretiyorum.",
      viewProjects: "Projelerimi Gör",
      contactMe: "Benimle İletişime Geç",
      downloadCV: "CV İndir"
    },
    
    // About Section
    about: {
      title: "Hakkımda",
      subtitle: "",
      jobTitle: "Java Backend Developer",
      intro1: "Merhaba, ben Kaan. OSTIM Teknik Üniversitesi Bilgisayar Mühendisliği mezunuyum (2021–2025). Java tabanlı kurumsal sistemlerde, üretim ortamında deneyim kazanmış bir Full Stack geliştiriciyim. Şu anda Başarı Mobile'da Yazılım Geliştirme Uzman Yardımcısı — Backend Geliştirici olarak çalışıyorum; aynı zamanda yeni fırsatlara açığım.",
      intro2: "Güvenli backend servisleri, veri tutarlılığı, JWT tabanlı kimlik doğrulama ve yetkilendirme ile işlemsel sistemler üzerine çalıştım. Ziraat Teknoloji, FDN Soft, STM, Karel, Mobiliz ve Crypttech gibi firmalarda staj ve tam zamanlı deneyim edindim. FinTech, savunma sanayi ve IoT alanlarında uygulamalı tecrübe kazandım.",
      intro3: "Analitik düşünen, veriye dayalı problem çözmeyi benimseyen ve ekip içinde iş birliğiyle çalışmaya uyum sağlayan bir yapıya sahibim. Mikroservis mimarileri, FinTech çözümleri ve ölçeklenebilir kritik iş uygulamalarında sorumluluk alarak gelişmeyi hedefliyorum.",
      
      approach: {
        title: "Geliştirme Yaklaşımım",
        description: "Temiz kod, tasarım desenleri, katmanlı mimari ve güvenli servis iletişimine dikkat ederim."
      },
      
      goal: {
        title: "Bir Sonraki Hedefim", 
        description: "Mikroservis mimarileri, FinTech çözümleri ve ölçeklenebilir kritik iş uygulamalarında sorumluluk almak."
      }
    },
    
    // Career Section
    career: {
      title: "Kariyerim",
      subtitle: "Staj ve tam zamanlı deneyimle 8 farklı şirkette kazandığım profesyonel tecrübelerim",
      
      stats: {
        companies: "Farklı Şirket",
        months: "Ay+ Deneyim",
        sectors: "Farklı Sektör"
      },
      
      basari: {
        company: "Başarı Mobile",
        date: "08/2025 – Devam",
        position: "Yazılım Geliştirme Uzman Yardımcısı — Backend Geliştirici",
        description: "Java, Spring Boot ve mikroservis mimarisi kullanarak kurumsal platformlar için 2 adet backend modül geliştirdim. Spring Security altyapısı ile JWT tabanlı kimlik doğrulama ve yetkilendirme içeren 6 adet güvenli REST API sundum. Canlıda kullanılan sistemlerde özellik geliştirme, hata düzeltme ve sistem kararlılığını artırmaya yönelik çalışmalara katkı sağladım."
      },
      
      fdn: {
        company: "FDN Soft",
        date: "06/2025 – 07/2025",
        position: "Java Backend Geliştirici",
        description: "Yetkilendirme yapıları ve güvenli servis iletişimi içeren 1 adet Spring Boot mikroservisinde backend geliştirme süreçlerine katkı sağladım. Mevcut Java kodlarının düzenlenmesi, okunabilirliğinin artırılması ve sürdürülebilirliğinin iyileştirilmesi üzerine çalıştım."
      },
      
      ziraat1: {
        company: "Ziraat Teknoloji",
        date: "01/2025 – 06/2025",
        position: "Full Stack Geliştirici Stajyeri",
        description: "Yönetim ve analiz modülleri için Angular tabanlı arayüzleri Spring Boot REST servisleri ile entegre ettim. JWT kimlik doğrulama, Stripe ödeme altyapısı ve PDF fatura üretimi içeren satın alma akışını geliştirerek FinTech senaryolarında işlemsel güvenilirliği artırdım. Firebase altyapısı kullanarak 30 seviyeden oluşan Flutter tabanlı bir mobil uygulama geliştirdim ve 10 kullanıcı ile test süreçlerini yürüttüm."
      },
      
      ziraat2: {
        company: "Ziraat Teknoloji", 
        date: "07/2024 – 08/2024",
        position: "Full Stack Geliştirici Stajyeri",
        description: "Angular ve Node.js/Express.js kullanarak rol bazlı yetkilendirme içeren dijital bankacılık arayüzleri geliştirdim. Simüle edilmiş bankacılık işlemlerinde PostgreSQL üzerinde veri tutarlılığı ve doğrulama süreçlerini sağladım."
      },
      
      stm: {
        company: "STM",
        date: "01/2024 – 02/2024", 
        position: "Gömülü Yazılım Stajyeri",
        description: "TM4C1294XL mikrodenetleyici üzerinde, 1 adet donanım sensörü ile çalışan C/C++ tabanlı gömülü yazılımlar geliştirdim; zamanlayıcılar, kesmeler ve GPIO kullanarak gerçek zamanlı kısıtlar altında çalıştım. Düşük seviyeli mikrodenetleyici çevre birimlerini kullanarak birim seviyesinde doğrulama ve testler gerçekleştirdim."
      },
      
      mobiliz: {
        company: "Mobiliz",
        date: "06/2023 – 07/2023",
        position: "iOS Geliştirici Stajyeri", 
        description: "Swift, Firebase Authentication, Firestore ve Google Maps API kullanarak 3 adet dahili iOS uygulaması için konum bazlı özellikler geliştirdim."
      },
      
      crypttech: {
        company: "Crypttech",
        date: "01/2023 – 02/2023",
        position: "Makine Öğrenmesi & Yapay Zeka Stajyeri",
        description: "Python ve Scikit-learn kullanarak tahminleme ve karşılaştırma amaçlı makine öğrenmesi modelleri ve veri işleme akışları tasarladım."
      },
      
      karel: {
        company: "Karel",
        date: "06/2022 – 08/2022",
        position: "Gömülü Yazılım Stajyeri",
        description: "STM32 tabanlı sistemlerde 2 adet çevresel sensör entegre ederek veri toplama ve seri haberleşme özelliklerine sahip gömülü yazılımlar geliştirdim."
      },
      
      sectors: {
        title: "Sektör Deneyimlerim",
        fintech: {
          title: "Fintech & Banking",
          description: "Güvenli bankacılık sistemleri ve ödeme altyapıları"
        },
        defense: {
          title: "Defense & Security", 
          description: "Kritik sistemler ve gerçek zamanlı uygulamalar"
        },
        iot: {
          title: "IoT & Embedded",
          description: "Gömülü sistemler ve sensör teknolojileri"
        }
      }
    },
    
    // Skills Section
    skills: {
      title: "Teknoloji Stack'im",
      subtitle: "Projelerimde aktif olarak kullandığım teknolojiler",
      stats: {
        projects: "Tamamlanan Proje",
        experience: "Ay Deneyim", 
        internships: "Şirket Deneyimi"
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
        description: "Spring Boot ve Angular ile geliştirilmiş, 4 adet REST API, JWT kimlik doğrulama, Stripe tabanlı ödeme ve PDF fatura üretimi içeren otel rezervasyon uygulaması.",
        feature1: "Gerçek zamanlı rezervasyon",
        feature2: "Güvenli ödeme sistemi",
        feature3: "PDF fatura üretimi"
      },
      
      puzzle: {
        title: "Flutter Puzzle Game",
        description: "Firebase destekli, power-up özellikli eğlenceli mobil puzzle oyunu. Kullanıcı skorları ve sosyal özellikler.",
        feature1: "Cross-platform",
        feature2: "Gerçek zamanlı skor"
      },
      
      banking: {
        title: "Banking Web App", 
        description: "React ve Express.js ile geliştirilmiş, 5 adet rol bazlı yetkilendirme içeren ve PostgreSQL üzerinde işlemsel veri tutarlılığı sağlayan güvenli bankacılık platformu.",
        feature1: "5 rol bazlı yetkilendirme",
        feature2: "İşlemsel veri tutarlılığı"
      },
      
      aiDisease: {
        title: "Yapay Zeka Tabanlı Hastalık Risk Tahmini",
        description: "Yaklaşık 200.000 örnekten oluşan veri seti üzerinde Python ve Scikit-learn kullanılarak risk tahmini yapan modeller geliştirildi ve Streamlit ile görselleştirildi.",
        feature1: "~200K örnek veri seti",
        feature2: "Risk tahmini modelleri"
      },
      
      dataScience: "Veri Bilimi"
    },
    
    // Contact Section
    contact: {
      title: "İletişime Geçelim",
      subtitle: "Yeni fırsatları konuşmak için buradayım",
      heading: "Birlikte çalışalım!",
      description: "Yeni projeler, iş fırsatları veya teknoloji hakkında sohbet etmek istiyorsanız, benimle iletişime geçmekten çekinmeyin.",
      downloadCV: "CV İndir",
      
      methods: {
        email: "Email",
        phone: "Telefon",
        location: "Lokasyon",
        availability: "Müsaitlik"
      },
      
      values: {
        location: "Ankara, Türkiye",
        availability: "Yeni fırsatlara açığım"
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
      copyright: "&copy; 2025 Musa Kaan Altın. Tüm hakları saklıdır."
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
      career: "Career",
      skills: "Skills", 
      blog: "Blog",
      projects: "Projects",
      contact: "Contact"
    },
    
    // Header
    header: {
      lookingForWork: "Open to new opportunities",
      darkTheme: "Dark Mode", 
      lightTheme: "Light Mode"
    },
    
    // Hero Section
    hero: {
      greeting: "Hello, I'm",
      name: "Musa Kaan Altın",
      title: "Java Backend Developer", 
      description: "Building secure microservices and FinTech systems. I build scalable enterprise solutions with Spring Boot, Spring Security, JWT and REST APIs.",
      viewProjects: "View My Projects",
      contactMe: "Get In Touch",
      downloadCV: "Download CV"
    },
    
    // About Section
    about: {
      title: "About Me",
      subtitle: "",
      jobTitle: "Java Backend Developer",
      intro1: "Hello, I'm Kaan. I'm a Computer Engineering graduate from OSTIM Technical University (2021–2025). I'm a Full Stack developer with production experience in Java-based enterprise systems. I currently work as Software Development Specialist Assistant — Backend Developer at Başarı Mobile, and I'm open to new opportunities.",
      intro2: "I've worked on secure backend services, data consistency, JWT-based authentication and authorization, and transactional systems. I've gained internship and full-time experience at companies like Ziraat Technology, FDN Soft, STM, Karel, Mobiliz and Crypttech. I have hands-on experience in FinTech, defense and IoT.",
      intro3: "I'm analytical, data-driven in problem solving and collaborative in teams. I aim to take on responsibility in microservice architectures, FinTech solutions and scalable critical business applications.",
      
      approach: {
        title: "My Development Approach",
        description: "I pay attention to clean code, design patterns, layered architecture and secure service communication."
      },
      
      goal: {
        title: "My Next Goal",
        description: "To take on responsibility in microservice architectures, FinTech solutions and scalable critical business applications."
      }
    },
    
    // Career Section
    career: {
      title: "My Career",
      subtitle: "Professional experience gained at 8 different companies through internships and full-time roles",
      
      stats: {
        companies: "Different Companies",
        months: "Months+ Experience",
        sectors: "Different Sectors"
      },
      
      basari: {
        company: "Başarı Mobile",
        date: "08/2025 – Present",
        position: "Software Development Specialist Assistant — Backend Developer",
        description: "I developed 2 backend modules for enterprise platforms using Java, Spring Boot and microservice architecture. I delivered 6 secure REST APIs with JWT-based authentication and authorization via Spring Security. I contributed to feature development, bug fixes and system stability in production systems."
      },
      
      fdn: {
        company: "FDN Soft",
        date: "06/2025 – 07/2025",
        position: "Java Backend Developer",
        description: "I contributed to backend development on one Spring Boot microservice with authorization and secure service communication. I worked on refactoring existing Java code to improve readability and maintainability."
      },
      
      ziraat1: {
        company: "Ziraat Technology",
        date: "01/2025 – 06/2025",
        position: "Full Stack Developer Intern",
        description: "I integrated Angular-based UIs with Spring Boot REST services for management and analytics modules. I developed a purchase flow with JWT authentication, Stripe payment and PDF invoice generation to improve transactional reliability in FinTech scenarios. I built a 30-level Flutter mobile app using Firebase and ran testing with 10 users."
      },
      
      ziraat2: {
        company: "Ziraat Technology", 
        date: "07/2024 – 08/2024",
        position: "Full Stack Developer Intern",
        description: "I developed digital banking interfaces with role-based authorization using Angular and Node.js/Express.js. I ensured data consistency and validation on PostgreSQL for simulated banking operations."
      },
      
      stm: {
        company: "STM",
        date: "01/2024 – 02/2024", 
        position: "Embedded Software Intern",
        description: "I developed C/C++ embedded software with one hardware sensor on the TM4C1294XL microcontroller; I worked under real-time constraints using timers, interrupts and GPIO. I performed unit-level verification and testing using low-level microcontroller peripherals."
      },
      
      mobiliz: {
        company: "Mobiliz",
        date: "06/2023 – 07/2023",
        position: "iOS Developer Intern", 
        description: "I developed location-based features for 3 internal iOS applications using Swift, Firebase Authentication, Firestore and Google Maps API."
      },
      
      crypttech: {
        company: "Crypttech",
        date: "01/2023 – 02/2023",
        position: "Machine Learning & AI Intern",
        description: "I designed prediction and comparison-oriented machine learning models and data processing pipelines using Python and Scikit-learn."
      },
      
      karel: {
        company: "Karel",
        date: "06/2022 – 08/2022",
        position: "Embedded Software Intern",
        description: "I developed embedded software with data collection and serial communication by integrating 2 environmental sensors in STM32-based systems."
      },
      
      sectors: {
        title: "My Industry Experience",
        fintech: {
          title: "Fintech & Banking",
          description: "Secure banking systems and payment infrastructure"
        },
        defense: {
          title: "Defense & Security", 
          description: "Critical systems and real-time applications"
        },
        iot: {
          title: "IoT & Embedded",
          description: "Embedded systems and sensor technologies"
        }
      }
    },
    
    // Skills Section
    skills: {
      title: "My Technology Stack",
      subtitle: "Technologies I actively use in my projects", 
      stats: {
        projects: "Completed Projects",
        experience: "Months Experience",
        internships: "Companies"
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
        description: "Hotel reservation application with 4 REST APIs, JWT authentication, Stripe-based payment and PDF invoice generation, built with Spring Boot and Angular.",
        feature1: "Real-time reservation",
        feature2: "Secure payment system",
        feature3: "PDF invoice generation"
      },
      
      puzzle: {
        title: "Flutter Puzzle Game", 
        description: "Fun mobile puzzle game with Firebase support and power-up features. User scores and social features.",
        feature1: "Cross-platform",
        feature2: "Real-time scoring"
      },
      
      banking: {
        title: "Banking Web App",
        description: "Secure banking platform built with React and Express.js, with 5 role-based authorization levels and transactional data consistency on PostgreSQL.",
        feature1: "5 role-based authorization levels", 
        feature2: "Transactional data consistency"
      },
      
      aiDisease: {
        title: "AI-Based Disease Risk Prediction",
        description: "Risk prediction models developed on a dataset of ~200,000 samples using Python and Scikit-learn, visualised with Streamlit.",
        feature1: "~200K sample dataset",
        feature2: "Risk prediction models"
      },
      
      dataScience: "Data Science"
    },
    
    // Contact Section
    contact: {
      title: "Let's Get In Touch",
      subtitle: "I'm here to discuss new opportunities",
      heading: "Let's work together!",
      description: "If you want to chat about new projects, job opportunities or technology, don't hesitate to contact me.",
      downloadCV: "Download CV",
      
      methods: {
        email: "Email",
        phone: "Phone",
        location: "Location",
        availability: "Availability"
      },
      
      values: {
        location: "Ankara, Turkey",
        availability: "Open to new opportunities"
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
      copyright: "&copy; 2025 Musa Kaan Altın. All rights reserved."
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