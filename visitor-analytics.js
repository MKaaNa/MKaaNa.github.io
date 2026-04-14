/**
 * Advanced Visitor Analytics for Portfolio Site
 * Tracks visitors, page views, session duration, and more
 */

function portfolioGa4Enabled() {
  const id = (typeof window !== 'undefined' && window.GA4_MEASUREMENT_ID)
    ? String(window.GA4_MEASUREMENT_ID).trim()
    : '';
  return /^G-[A-Z0-9]+$/i.test(id);
}

function portfolioGa4Event(eventName, params) {
  if (!portfolioGa4Enabled() || typeof window.gtag !== 'function') return;
  try {
    window.gtag('event', eventName, params && typeof params === 'object' ? params : {});
  } catch (e) {}
}

function truncateAnalyticsValue(value, maxLength) {
  if (typeof value !== 'string') return '';
  return value.substring(0, maxLength);
}

function getTrafficSourceLabel(trafficType) {
  if (trafficType === 'linkedin_job') return 'LinkedIn Job Post';
  if (trafficType === 'referrer') return 'Referral Website';
  return 'Direct Visit';
}

class PortfolioAnalytics {
  constructor() {
    this.storageKey = 'portfolioAnalytics';
    this.sessionKey = 'portfolioSession';
    this.currentSession = this.initSession();
    this.analytics = this.loadAnalytics();
    this.startTime = Date.now();
    this.ga4ScrollSent = Object.create(null);
    this.sectionVisibility = Object.create(null);
    this.sectionSeen = Object.create(null);
    this.activeSectionId = '';
    this.activeSectionStartedAt = 0;
    this.sectionObserver = null;
    
    this.init();
  }

  init() {
    this.trackPageView();
    this.trackVisitor();
    this.setupEventListeners();
    this.setupSectionTracking();
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
      events: [],
      duration: 0,
      maxScrollPercent: 0,
      cvDownloads: 0,
      counted: false,
      sectionEngagement: {}
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
      cvDownloads: 0,
      dailyStats: {},
      monthlyStats: {},
      referrers: {},
      attributions: {},
      scrollDepth: { sessions: 0, totalMaxScroll: 0, maxScroll: 0 },
      dwellTime: { sessions: 0, totalDurationMs: 0, maxDurationMs: 0 },
      clickTargets: { sections: {}, hrefs: {} },
      devices: {},
      browsers: {},
      countries: {},
      sectionEngagement: {},
      lastVisit: null,
      firstVisit: Date.now()
    };
  }

  saveAnalytics() {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(this.analytics));
      sessionStorage.setItem(this.sessionKey, JSON.stringify(this.currentSession));
    } catch (e) {
      // Handle quota exceeded or other storage errors
      console.warn('Analytics storage failed:', e);
    }
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
    this.trackAttribution();
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

  getUtmParams() {
    if (typeof window !== 'undefined' && window.GA4_TRAFFIC_CONTEXT) {
      return {
        utm_source: window.GA4_TRAFFIC_CONTEXT.utm_source || '',
        utm_medium: window.GA4_TRAFFIC_CONTEXT.utm_medium || '',
        utm_campaign: window.GA4_TRAFFIC_CONTEXT.utm_campaign || '',
        utm_term: window.GA4_TRAFFIC_CONTEXT.utm_term || '',
        utm_content: window.GA4_TRAFFIC_CONTEXT.utm_content || ''
      };
    }

    try {
      const params = new URLSearchParams(window.location.search);
      const keys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
      const utm = {};
      keys.forEach((k) => {
        const v = params.get(k);
        if (v) utm[k] = v;
      });
      return utm;
    } catch (e) {
      return {};
    }
  }

  extractLinkedInJobId(referrerUrl) {
    try {
      const url = new URL(referrerUrl);
      if (!url.hostname || !url.hostname.includes('linkedin.com')) return null;

      const queryJobId = url.searchParams.get('jk');
      if (queryJobId) return queryJobId;

      const match = url.pathname.match(/\/jobs\/view\/([^\/?#]+)/i);
      if (match && match[1]) return match[1];
    } catch (e) {}

    return null;
  }

  trackAttribution() {
    const utm = this.getUtmParams();
    const sharedTrafficContext = (typeof window !== 'undefined' && window.GA4_TRAFFIC_CONTEXT)
      ? window.GA4_TRAFFIC_CONTEXT
      : null;

    let referrerHost = sharedTrafficContext && sharedTrafficContext.referrerHost
      ? sharedTrafficContext.referrerHost
      : '';
    if (!referrerHost && document.referrer && !document.referrer.includes(window.location.hostname)) {
      try {
        referrerHost = new URL(document.referrer).hostname;
      } catch (e) {
        referrerHost = '';
      }
    }

    const linkedInJobId = sharedTrafficContext && sharedTrafficContext.linkedInJobId
      ? sharedTrafficContext.linkedInJobId
      : this.extractLinkedInJobId(document.referrer);

    const keyParts = [];
    if (utm.utm_source) keyParts.push(`source:${utm.utm_source}`);
    if (utm.utm_medium) keyParts.push(`medium:${utm.utm_medium}`);
    if (utm.utm_campaign) keyParts.push(`campaign:${utm.utm_campaign}`);
    if (referrerHost) keyParts.push(`referrer:${referrerHost}`);
    if (linkedInJobId) keyParts.push(`linkedin_job:${linkedInJobId}`);

    const attributionKey = keyParts.length ? keyParts.join('|') : 'direct';
    this.analytics.attributions[attributionKey] = (this.analytics.attributions[attributionKey] || 0) + 1;

    this.currentSession.attribution = {
      utm,
      referrerHost,
      linkedInJobId
    };

    this.sendGa4TrafficContext();
  }

  sendGa4TrafficContext() {
    try {
      if (sessionStorage.getItem('ga4_portfolio_traffic_sent')) return;
      const a = this.currentSession.attribution || {};
      const trafficType = a.linkedInJobId ? 'linkedin_job' : (a.referrerHost ? 'referrer' : 'direct');
      const userProperties = {
        traffic_type: trafficType,
        traffic_source_label: getTrafficSourceLabel(trafficType),
        initial_referrer_host: a.referrerHost || '(direct)',
        referrer_domain: a.referrerHost || '(direct)',
        linkedin_job_id: truncateAnalyticsValue(a.linkedInJobId || '', 64),
        linkedin_job_post_id: truncateAnalyticsValue(a.linkedInJobId || '', 64),
        initial_utm_source: truncateAnalyticsValue((a.utm || {}).utm_source || '(not set)', 100),
        initial_utm_medium: truncateAnalyticsValue((a.utm || {}).utm_medium || '(not set)', 100),
        initial_utm_campaign: truncateAnalyticsValue((a.utm || {}).utm_campaign || '(not set)', 100),
        first_source: truncateAnalyticsValue((a.utm || {}).utm_source || '(direct)', 100),
        first_medium: truncateAnalyticsValue((a.utm || {}).utm_medium || '(none)', 100),
        first_campaign: truncateAnalyticsValue((a.utm || {}).utm_campaign || '(not set)', 100)
      };
      window.gtag('set', 'user_properties', userProperties);

      const params = {
        traffic_type: userProperties.traffic_type,
        traffic_source_label: userProperties.traffic_source_label
      };
      if (a.referrerHost) {
        params.page_referrer_host = truncateAnalyticsValue(String(a.referrerHost), 100);
        params.referrer_domain = truncateAnalyticsValue(String(a.referrerHost), 100);
      }
      if (a.linkedInJobId) {
        params.linkedin_job_id = truncateAnalyticsValue(String(a.linkedInJobId), 64);
        params.linkedin_job_post_id = truncateAnalyticsValue(String(a.linkedInJobId), 64);
      }
      const utm = a.utm || {};
      if (utm.utm_source) params.utm_source = truncateAnalyticsValue(String(utm.utm_source), 100);
      if (utm.utm_medium) params.utm_medium = truncateAnalyticsValue(String(utm.utm_medium), 100);
      if (utm.utm_campaign) params.utm_campaign = truncateAnalyticsValue(String(utm.utm_campaign), 100);
      if (utm.utm_term) params.utm_term = truncateAnalyticsValue(String(utm.utm_term), 100);
      if (utm.utm_content) params.utm_content = truncateAnalyticsValue(String(utm.utm_content), 100);
      portfolioGa4Event('portfolio_traffic', params);
      sessionStorage.setItem('ga4_portfolio_traffic_sent', '1');
    } catch (e) {}
  }

  setupEventListeners() {
    // Track scroll depth - throttled
    let maxScroll = 0;
    let scrollTimeout;
    const handleScroll = () => {
      if (scrollTimeout) return;
      scrollTimeout = requestAnimationFrame(() => {
        const denom = Math.max(document.body.scrollHeight - window.innerHeight, 1);
        const scrollPercent = Math.round((window.scrollY / denom) * 100);
        if (scrollPercent > maxScroll) {
          maxScroll = scrollPercent;
          this.currentSession.maxScrollPercent = maxScroll;
          const milestones = [25, 50, 75, 100];
          for (let i = 0; i < milestones.length; i++) {
            const m = milestones[i];
            if (maxScroll >= m && !this.ga4ScrollSent[m]) {
              this.ga4ScrollSent[m] = true;
              portfolioGa4Event('scroll_depth', { percent_scrolled: m });
            }
          }
        }
        scrollTimeout = null;
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Track clicks on important elements - throttled
    let clickTimeout;
    document.addEventListener('click', (e) => {
      if (clickTimeout) return;
      clickTimeout = setTimeout(() => {
        const target = e.target.closest('a, button, .btn');
        if (target) {
          const hrefAttr = target.getAttribute ? target.getAttribute('href') : null;
          const href = target.href || '';
          const section = hrefAttr && hrefAttr.startsWith('#') ? hrefAttr.substring(1) : '';
          const isCvDownload = typeof href === 'string' && href.includes('/assets/docs/CV_Musa_Kaan_Altin.pdf');

          if (isCvDownload) {
            this.currentSession.cvDownloads = (this.currentSession.cvDownloads || 0) + 1;
            this.analytics.cvDownloads = (this.analytics.cvDownloads || 0) + 1;
            portfolioGa4Event('cv_download', {
              file: 'CV_Musa_Kaan_Altin.pdf'
            });
          }

          if (section) {
            this.analytics.clickTargets.sections[section] = (this.analytics.clickTargets.sections[section] || 0) + 1;
            portfolioGa4Event('nav_section_click', {
              section_id: String(section).substring(0, 64)
            });
          }

          if (href && (isCvDownload || (hrefAttr && hrefAttr.startsWith('#')))) {
            this.analytics.clickTargets.hrefs[href] = (this.analytics.clickTargets.hrefs[href] || 0) + 1;
          }

          this.trackEvent('click', {
            element: target.tagName,
            text: target.textContent?.trim()?.substring(0, 50),
            href: hrefAttr || href,
            section: section || undefined,
            isCvDownload
          });
        }
        clickTimeout = null;
      }, 100);
    }, { passive: true });

    // Track form submissions
    document.addEventListener('submit', (e) => {
      this.trackEvent('form_submit', {
        form: e.target.action || 'contact_form'
      });
      const form = e.target;
      if (form && form.id === 'contact-form') {
        portfolioGa4Event('contact_form_submit', { form_id: 'contact' });
      }
    });

    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'hidden') {
        this.pauseSectionTracking('tab_hidden');
        return;
      }
      this.resumeSectionTracking();
    });
  }

  setupSectionTracking() {
    const sections = Array.from(document.querySelectorAll('section[id]'));
    if (!sections.length || typeof IntersectionObserver !== 'function') return;

    sections.forEach((section) => {
      const sectionId = String(section.id || '').trim();
      if (!sectionId) return;
      this.sectionVisibility[sectionId] = 0;
      if (!this.analytics.sectionEngagement[sectionId]) {
        this.analytics.sectionEngagement[sectionId] = { totalDurationMs: 0, views: 0 };
      }
    });

    this.sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const sectionId = entry.target && entry.target.id ? String(entry.target.id) : '';
        if (!sectionId) return;
        this.sectionVisibility[sectionId] = entry.isIntersecting ? entry.intersectionRatio : 0;

        if (entry.isIntersecting && entry.intersectionRatio >= 0.35 && !this.sectionSeen[sectionId]) {
          this.sectionSeen[sectionId] = true;
          if (!this.analytics.sectionEngagement[sectionId]) {
            this.analytics.sectionEngagement[sectionId] = { totalDurationMs: 0, views: 0 };
          }
          this.analytics.sectionEngagement[sectionId].views++;
          portfolioGa4Event('section_view', {
            section_id: sectionId.substring(0, 64)
          });
        }
      });

      this.refreshActiveSection();
    }, {
      threshold: [0, 0.2, 0.35, 0.5, 0.75]
    });

    sections.forEach((section) => this.sectionObserver.observe(section));
    this.refreshActiveSection();
  }

  refreshActiveSection() {
    if (document.visibilityState === 'hidden') {
      this.pauseSectionTracking('tab_hidden');
      return;
    }

    let nextSectionId = '';
    let bestRatio = 0;
    Object.keys(this.sectionVisibility).forEach((sectionId) => {
      const ratio = this.sectionVisibility[sectionId] || 0;
      if (ratio >= 0.35 && ratio > bestRatio) {
        bestRatio = ratio;
        nextSectionId = sectionId;
      }
    });

    this.setActiveSection(nextSectionId, bestRatio ? 'section_change' : 'out_of_view');
  }

  setActiveSection(nextSectionId, reason) {
    const now = Date.now();
    if (this.activeSectionId && this.activeSectionStartedAt) {
      this.recordSectionTime(this.activeSectionId, now - this.activeSectionStartedAt, reason || 'section_change');
    }

    this.activeSectionId = nextSectionId || '';
    this.activeSectionStartedAt = this.activeSectionId ? now : 0;
  }

  pauseSectionTracking(reason) {
    if (!this.activeSectionId || !this.activeSectionStartedAt) return;
    const now = Date.now();
    this.recordSectionTime(this.activeSectionId, now - this.activeSectionStartedAt, reason || 'pause');
    this.activeSectionStartedAt = 0;
  }

  resumeSectionTracking() {
    if (!this.activeSectionId) {
      this.refreshActiveSection();
      return;
    }
    if (!this.activeSectionStartedAt) {
      this.activeSectionStartedAt = Date.now();
    }
  }

  recordSectionTime(sectionId, durationMs, reason) {
    if (!sectionId || !durationMs || durationMs < 250) return;

    if (!this.currentSession.sectionEngagement[sectionId]) {
      this.currentSession.sectionEngagement[sectionId] = { totalDurationMs: 0 };
    }
    this.currentSession.sectionEngagement[sectionId].totalDurationMs += durationMs;

    if (!this.analytics.sectionEngagement[sectionId]) {
      this.analytics.sectionEngagement[sectionId] = { totalDurationMs: 0, views: 0 };
    }
    this.analytics.sectionEngagement[sectionId].totalDurationMs += durationMs;

    if (durationMs >= 3000) {
      portfolioGa4Event('section_engagement', {
        section_id: String(sectionId).substring(0, 64),
        seconds_spent: Math.round(durationMs / 1000),
        exit_reason: String(reason || 'section_change').substring(0, 32)
      });
    }
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
    this.pauseSectionTracking('page_unload');
    this.updateSessionDuration();
    if (!this.currentSession.counted) {
      this.currentSession.counted = true;
      this.analytics.totalSessions++;

      const maxScroll = this.currentSession.maxScrollPercent || 0;
      this.analytics.scrollDepth.sessions++;
      this.analytics.scrollDepth.totalMaxScroll += maxScroll;
      this.analytics.scrollDepth.maxScroll = Math.max(this.analytics.scrollDepth.maxScroll || 0, maxScroll);

      const durationMs = this.currentSession.duration || 0;
      this.analytics.dwellTime.sessions++;
      this.analytics.dwellTime.totalDurationMs += durationMs;
      this.analytics.dwellTime.maxDurationMs = Math.max(this.analytics.dwellTime.maxDurationMs || 0, durationMs);

      const sectionEntries = Object.entries(this.currentSession.sectionEngagement || {});
      let topSectionId = '';
      let topSectionDurationMs = 0;
      sectionEntries.forEach(([sectionId, data]) => {
        const totalDurationMs = data && data.totalDurationMs ? data.totalDurationMs : 0;
        if (totalDurationMs > topSectionDurationMs) {
          topSectionId = sectionId;
          topSectionDurationMs = totalDurationMs;
        }
      });

      portfolioGa4Event('portfolio_session_end', {
        max_scroll_percent: maxScroll,
        duration_seconds: Math.round(durationMs / 1000),
        top_section_id: topSectionId || undefined,
        top_section_seconds: topSectionDurationMs ? Math.round(topSectionDurationMs / 1000) : undefined
      });
    }
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
    
    // Update admin panel stats if elements exist
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
    const avgMaxScroll = this.analytics.scrollDepth.sessions
      ? Math.round(this.analytics.scrollDepth.totalMaxScroll / this.analytics.scrollDepth.sessions)
      : 0;

    const avgDwellSec = this.analytics.dwellTime.sessions
      ? Math.round((this.analytics.dwellTime.totalDurationMs / this.analytics.dwellTime.sessions) / 1000)
      : 0;

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
      referrers: this.analytics.referrers,
      attributions: this.analytics.attributions,
      cvDownloads: this.analytics.cvDownloads || 0,
      clickTargets: this.analytics.clickTargets,
      sectionEngagement: this.analytics.sectionEngagement,
      engagement: {
        avgMaxScrollPercent: avgMaxScroll,
        maxMaxScrollPercent: this.analytics.scrollDepth.maxScroll || 0,
        avgDwellTimeSec: avgDwellSec,
        maxDwellTimeSec: this.analytics.dwellTime.maxDurationMs
          ? Math.round(this.analytics.dwellTime.maxDurationMs / 1000)
          : 0
      }
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
