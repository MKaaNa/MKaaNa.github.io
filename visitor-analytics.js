/**
 * Advanced Visitor Analytics for Portfolio Site
 * Tracks visitors, page views, session duration, and more
 */

class PortfolioAnalytics {
  constructor() {
    this.storageKey = 'portfolioAnalytics';
    this.sessionKey = 'portfolioSession';
    this.currentSession = this.initSession();
    this.analytics = this.loadAnalytics();
    this.startTime = Date.now();
    
    this.init();
  }

  init() {
    this.trackPageView();
    this.trackVisitor();
    this.setupEventListeners();
    this.updateDisplay();
    
    // Update session duration every 30 seconds
    setInterval(() => this.updateSessionDuration(), 30000);
    
    // Save analytics every minute
    setInterval(() => this.saveAnalytics(), 60000);
    
    // Save before page unload
    window.addEventListener('beforeunload', () => this.onPageUnload());
  }

  initSession() {
    const existingSession = sessionStorage.getItem(this.sessionKey);
    if (existingSession) {
      return JSON.parse(existingSession);
    }

    const newSession = {
      id: this.generateSessionId(),
      startTime: Date.now(),
      pageViews: 0,
      events: []
    };
    
    sessionStorage.setItem(this.sessionKey, JSON.stringify(newSession));
    return newSession;
  }

  loadAnalytics() {
    const stored = localStorage.getItem(this.storageKey);
    if (stored) {
      return JSON.parse(stored);
    }

    return {
      totalVisitors: 0,
      totalPageViews: 0,
      totalSessions: 0,
      dailyStats: {},
      monthlyStats: {},
      referrers: {},
      devices: {},
      browsers: {},
      countries: {},
      lastVisit: null,
      firstVisit: Date.now()
    };
  }

  saveAnalytics() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.analytics));
    sessionStorage.setItem(this.sessionKey, JSON.stringify(this.currentSession));
  }

  generateSessionId() {
    return 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
  }

  trackVisitor() {
    const today = this.getDateString();
    const month = today.substring(0, 7); // YYYY-MM
    
    // Check if this is a new visitor (new session or last visit was yesterday)
    const lastVisit = this.analytics.lastVisit;
    const isNewVisitor = !lastVisit || this.getDateString(lastVisit) !== today;
    
    if (isNewVisitor) {
      this.analytics.totalVisitors++;
      
      // Daily stats
      if (!this.analytics.dailyStats[today]) {
        this.analytics.dailyStats[today] = { visitors: 0, pageViews: 0, sessions: 0 };
      }
      this.analytics.dailyStats[today].visitors++;
      
      // Monthly stats
      if (!this.analytics.monthlyStats[month]) {
        this.analytics.monthlyStats[month] = { visitors: 0, pageViews: 0, sessions: 0 };
      }
      this.analytics.monthlyStats[month].visitors++;
    }
    
    this.analytics.lastVisit = Date.now();
    this.trackDevice();
    this.trackBrowser();
    this.trackReferrer();
  }

  trackPageView() {
    const today = this.getDateString();
    const month = today.substring(0, 7);
    
    this.analytics.totalPageViews++;
    this.currentSession.pageViews++;
    
    // Update daily stats
    if (!this.analytics.dailyStats[today]) {
      this.analytics.dailyStats[today] = { visitors: 0, pageViews: 0, sessions: 0 };
    }
    this.analytics.dailyStats[today].pageViews++;
    
    // Update monthly stats
    if (!this.analytics.monthlyStats[month]) {
      this.analytics.monthlyStats[month] = { visitors: 0, pageViews: 0, sessions: 0 };
    }
    this.analytics.monthlyStats[month].pageViews++;
  }

  trackDevice() {
    const device = this.getDeviceType();
    this.analytics.devices[device] = (this.analytics.devices[device] || 0) + 1;
  }

  trackBrowser() {
    const browser = this.getBrowserName();
    this.analytics.browsers[browser] = (this.analytics.browsers[browser] || 0) + 1;
  }

  trackReferrer() {
    const referrer = document.referrer;
    if (referrer && !referrer.includes(window.location.hostname)) {
      const domain = new URL(referrer).hostname;
      this.analytics.referrers[domain] = (this.analytics.referrers[domain] || 0) + 1;
    }
  }

  setupEventListeners() {
    // Track scroll depth
    let maxScroll = 0;
    window.addEventListener('scroll', () => {
      const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
      if (scrollPercent > maxScroll) {
        maxScroll = scrollPercent;
      }
    });

    // Track clicks on important elements
    document.addEventListener('click', (e) => {
      const target = e.target.closest('a, button, .btn');
      if (target) {
        this.trackEvent('click', {
          element: target.tagName,
          text: target.textContent?.trim()?.substring(0, 50),
          href: target.href
        });
      }
    });

    // Track form submissions
    document.addEventListener('submit', (e) => {
      this.trackEvent('form_submit', {
        form: e.target.action || 'contact_form'
      });
    });
  }

  trackEvent(event, data = {}) {
    this.currentSession.events.push({
      event,
      data,
      timestamp: Date.now()
    });
  }

  updateSessionDuration() {
    this.currentSession.duration = Date.now() - this.currentSession.startTime;
  }

  onPageUnload() {
    this.updateSessionDuration();
    this.saveAnalytics();
  }

  getDateString(timestamp = Date.now()) {
    return new Date(timestamp).toISOString().split('T')[0];
  }

  getDeviceType() {
    const ua = navigator.userAgent;
    if (/tablet|ipad|playbook|silk/i.test(ua)) return 'Tablet';
    if (/mobile|iphone|ipod|android|blackberry|opera|mini|windows\sce|palm|smartphone|iemobile/i.test(ua)) return 'Mobile';
    return 'Desktop';
  }

  getBrowserName() {
    const ua = navigator.userAgent;
    if (ua.includes('Firefox')) return 'Firefox';
    if (ua.includes('Chrome')) return 'Chrome';
    if (ua.includes('Safari')) return 'Safari';
    if (ua.includes('Edge')) return 'Edge';
    if (ua.includes('Opera')) return 'Opera';
    return 'Other';
  }

  updateDisplay() {
    const today = this.getDateString();
    const month = today.substring(0, 7);
    
    const todayStats = this.analytics.dailyStats[today] || { visitors: 0, pageViews: 0 };
    const monthStats = this.analytics.monthlyStats[month] || { visitors: 0, pageViews: 0 };
    
    // Update visitor counter in footer
    const counterElement = document.getElementById('visitor-counter');
    if (counterElement) {
      counterElement.textContent = `${this.analytics.totalVisitors} ziyaretçi`;
    }

    // Update stats if elements exist
    this.updateElementText('daily-visitors', todayStats.visitors);
    this.updateElementText('monthly-visitors', monthStats.visitors);
    this.updateElementText('total-visitors', this.analytics.totalVisitors);
    this.updateElementText('total-pageviews', this.analytics.totalPageViews);
  }

  updateElementText(id, value) {
    const element = document.getElementById(id);
    if (element) {
      element.textContent = value;
    }
  }

  // Public methods for getting statistics
  getStats() {
    return {
      total: {
        visitors: this.analytics.totalVisitors,
        pageViews: this.analytics.totalPageViews,
        sessions: this.analytics.totalSessions
      },
      today: this.analytics.dailyStats[this.getDateString()] || { visitors: 0, pageViews: 0 },
      thisMonth: this.analytics.monthlyStats[this.getDateString().substring(0, 7)] || { visitors: 0, pageViews: 0 },
      devices: this.analytics.devices,
      browsers: this.analytics.browsers,
      referrers: this.analytics.referrers
    };
  }

  // Export data for backup
  exportData() {
    return {
      analytics: this.analytics,
      session: this.currentSession,
      exportDate: new Date().toISOString()
    };
  }

  // Reset all data (for testing)
  reset() {
    localStorage.removeItem(this.storageKey);
    sessionStorage.removeItem(this.sessionKey);
    location.reload();
  }
}

// Initialize analytics when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  window.portfolioAnalytics = new PortfolioAnalytics();
  
  // Make stats available in console for debugging
  console.log('Portfolio Analytics initialized. Use window.portfolioAnalytics.getStats() to view stats.');
});

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = PortfolioAnalytics;
} 