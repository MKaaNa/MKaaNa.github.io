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
      contactMe: "Benimle İletişime Geç",
      downloadCV: "CV İndir"
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
    
    // Career Section
    career: {
      title: "Kariyerim",
      subtitle: "15 ay staj deneyimi ile 6 farklı şirkette kazandığım profesyonel tecrübelerim",
      
      stats: {
        companies: "Farklı Şirket",
        months: "Ay Deneyim",
        sectors: "Farklı Sektör"
      },
      
      ziraat1: {
        company: "Ziraat Teknoloji",
        date: "01/2025 – 06/2025",
        position: "Full-Stack Developer Intern",
        description: "Bu uzun dönem stajımda iki farklı projede görev aldım. Flutter ile mobil bulmaca oyunu ve Spring Boot & Angular ile otel rezervasyon sistemi geliştirdim. Her iki projede de full-stack yaklaşım benimseyerek yazılım yaşam döngüsünün tüm aşamalarına katkı sundum."
      },
      
      ziraat2: {
        company: "Ziraat Teknoloji", 
        date: "07/2024 – 08/2024",
        position: "Full-Stack Developer Intern",
        description: "React ve Express.js teknolojilerini kullanarak güvenli bir bankacılık web uygulaması geliştirdim. JWT authentication ve RESTful API mimarisi ile güvenli kullanıcı deneyimi sağladım."
      },
      
      stm: {
        company: "STM",
        date: "01/2024 – 02/2024", 
        position: "Embedded Software Intern",
        description: "Gerçek zamanlı gömülü sistemler üzerine çalıştım. Tiva C TM4C1294XL donanımında firmware optimizasyonu yaparak UART protokolleri ile veri analizi sistemleri geliştirdim."
      },
      
      mobiliz: {
        company: "Mobiliz",
        date: "06/2023 – 07/2023",
        position: "iOS Developer Intern", 
        description: "Doğal afet görüntülerinin konum bazlı paylaşımına olanak tanıyan iOS uygulaması geliştirdim. Google Maps API ve Firebase entegrasyonu ile güvenli ve gerçek zamanlı veri yönetimi sağladım."
      },
      
      crypttech: {
        company: "Crypttech",
        date: "01/2023 – 02/2023",
        position: "Machine Learning & AI Engineer Intern",
        description: "Makine öğrenmesi modelleri eğitme ve değerlendirme süreçlerinde çalıştım. Scikit-learn ve TensorFlow ile sınıflandırma ve tahmin modelleri oluşturarak veri bilimi tecrübesi kazandım."
      },
      
      karel: {
        company: "Karel",
        date: "06/2022 – 08/2022",
        position: "Embedded Software Intern",
        description: "Çevresel veri toplama amaçlı gömülü sistem projesi geliştirdim. STM32 Nucleo kartı üzerinde çoklu sensör entegrasyonu yaparak gerçek zamanlı hava kalitesi analiz sistemi oluşturdum."
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
      downloadCV: "CV İndir",
      
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
      career: "Career",
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
      contactMe: "Get In Touch",
      downloadCV: "Download CV"
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
    
    // Career Section
    career: {
      title: "My Career",
      subtitle: "15 months of professional experience gained through 6 different companies",
      
      stats: {
        companies: "Different Companies",
        months: "Months Experience",
        sectors: "Different Sectors"
      },
      
      ziraat1: {
        company: "Ziraat Technology",
        date: "01/2025 – 06/2025",
        position: "Full-Stack Developer Intern",
        description: "During this long-term internship, I worked on two different projects. I developed a Flutter mobile puzzle game and a hotel reservation system with Spring Boot & Angular. In both projects, I adopted a full-stack approach, contributing to all stages of the software development lifecycle."
      },
      
      ziraat2: {
        company: "Ziraat Technology", 
        date: "07/2024 – 08/2024",
        position: "Full-Stack Developer Intern",
        description: "I developed a secure banking web application using React and Express.js. I provided a secure user experience with JWT authentication and RESTful API architecture."
      },
      
      stm: {
        company: "STM",
        date: "01/2024 – 02/2024", 
        position: "Embedded Software Intern",
        description: "I worked on real-time embedded systems. I developed data analysis systems using UART protocols on the Tiva C TM4C1294XL hardware by optimizing firmware."
      },
      
      mobiliz: {
        company: "Mobiliz",
        date: "06/2023 – 07/2023",
        position: "iOS Developer Intern", 
        description: "I developed an iOS application that enables sharing of natural disaster images based on location. I provided secure and real-time data management with Google Maps API and Firebase integration."
      },
      
      crypttech: {
        company: "Crypttech",
        date: "01/2023 – 02/2023",
        position: "Machine Learning & AI Engineer Intern",
        description: "I worked on training and evaluating machine learning models. I gained data science experience by creating classification and prediction models using Scikit-learn and TensorFlow."
      },
      
      karel: {
        company: "Karel",
        date: "06/2022 – 08/2022",
        position: "Embedded Software Intern",
        description: "I developed an embedded system project for environmental data collection. I created a real-time air quality analysis system with multiple sensor integration on the STM32 Nucleo board."
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
      downloadCV: "Download CV",
      
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