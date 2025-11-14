// Basic multilingual switcher (English, Hindi, Urdu) and RTL support
const translations = {
  en: {
    title: "Darul Uloom — University Style",
    est: "Established 1866",
    nav_home: "Home",
    nav_about: "About",
    nav_departments: "Departments",
    nav_admissions: "Admissions",
    nav_news: "News",
    nav_contact: "Contact",
    hero_title: "Tradition & Excellence in Islamic Education",
    hero_sub: "A modern university-style campus with timeless values — academic rigor, character development, and community outreach.",
    apply: "Apply Now",
    learn: "Learn More",
    stat_faculty: "Faculty",
    stat_students: "Students",
    stat_depts: "Departments",
    stat_years: "Years",
    about_title: "About Us",
    about_text: "We are a centre of traditional Islamic learning combined with modern scholarship — providing rigorous programs and community service.",
    departments_title: "Departments & Programs",
    view_all: "View all",
    dept_quran: "Quranic Studies",
    dept_quran_desc: "Hifz and Tajweed programs with qualified instructors and modern pedagogy.",
    dept_hadith: "Hadith & Sunnah",
    dept_hadith_desc: "In-depth study of Hadith sciences and methodologies.",
    dept_arabic: "Arabic Language",
    dept_arabic_desc: "Classical and modern Arabic for comprehension, composition and communication.",
    dept_outreach: "Social Outreach",
    dept_outreach_desc: "Community programs, seminars and public service initiatives.",
    admissions_title: "Admissions Open for 2026",
    admissions_text: "Registration for the new academic year is open. Apply online or visit the admissions office for guidance.",
    label_name: "Name",
    label_email: "Email",
    label_program: "Program",
    news_title: "Latest News & Announcements",
    news1: "Annual Convocation 2025 Announced",
    news2: "New Research Center on Islamic Studies",
    news3: "Scholarship Applications Open",
    contact_title: "Contact Us",
    contact_text: "Office: +91 12345 67890\nEmail: info@example.com\nAddress: Darul Uloom Campus, Deoband, India",
    send: "Send Message",
    quick_links: "Quick Links",
    footer_about: "A centre of traditional learning and modern scholarship.",
    copyright: "© {year} Darul Uloom — All rights reserved."
  },
  hi: {
    title: "दारुल उलूम — यूनिवर्सिटी स्टाइल",
    est: "स्थापित 1866",
    nav_home: "होम",
    nav_about: "हमारे बारे में",
    nav_departments: "विभाग",
    nav_admissions: "प्रवेश",
    nav_news: "समाचार",
    nav_contact: "संपर्क",
    hero_title: "पारंपरिकता और उत्कृष्टता इस्लामी शिक्षा में",
    hero_sub: "आधुनिक विश्वविद्यालय-शैली का कैंपस और सदाबहार मूल्य — शैक्षिक कड़ा परिश्रम, चरित्र निर्माण और सामुदायिक सेवा।",
    apply: "अभी आवेदन करें",
    learn: "और पढ़ें",
    stat_faculty: "शिक्षक",
    stat_students: "छात्र",
    stat_depts: "विभाग",
    stat_years: "साल",
    about_title: "हमारे बारे में",
    about_text: "हम पारंपरिक इस्लामी शिक्षा और आधुनिक शोध को मिलाकर कठोर कार्यक्रम और सामुदायिक सेवा فراہم करते हैं।",
    departments_title: "विभाग और कार्यक्रम",
    view_all: "सारे देखें",
    dept_quran: "कुरआन अध्ययन",
    dept_quran_desc: "हिफ़ज़ और तजवीद कार्यक्रम योग्य प्रशिक्षकों के साथ।",
    dept_hadith: "हदीस और सुन्नत",
    dept_hadith_desc: "हदीस विज्ञान का गहरा अध्ययन।",
    dept_arabic: "अरबी भाषा",
    dept_arabic_desc: "क्लासिकल और आधुनिक अरबी।",
    dept_outreach: "सामाजिक पहुँच",
    dept_outreach_desc: "समुदाय कार्यक्रम और सार्वजनिक पहलें।",
    admissions_title: "2026 के लिए प्रवेश खुले हैं",
    admissions_text: "नए शैक्षणिक वर्ष के लिए पंजीकरण खुला है। ऑनलाइन आवेदन करें या प्रवेश कार्यालय से मार्गदर्शन लें।",
    label_name: "नाम",
    label_email: "ईमेल",
    label_program: "प्रोग्राम",
    news_title: "नवीनतम समाचार और घोषणाएं",
    news1: "वार्षिक समारोहन 2025 घोषित",
    news2: "इस्लामी अध्ययन पर नया अनुसंधान केंद्र",
    news3: "छात्रवृत्ति आवेदन खुले",
    contact_title: "संपर्क करें",
    contact_text: "कार्यालय: +91 12345 67890\nईमेल: info@example.com\nपता: दारुल उलूम कैंपस, देओबन्द, भारत",
    send: "संदेश भेजें",
    quick_links: "त्वरित लिंक",
    footer_about: "पारंपरिक शिक्षा और आधुनिक विद्वता का केंद्र।",
    copyright: "© {year} दारुल उलूम — सर्वाधिकार सुरक्षित."
  },
  ur: {
    title: "دارالعلوم — یونیورسٹی اسٹائل",
    est: "قیام 1866",
    nav_home: "ہوم",
    nav_about: "ہمارے بارے میں",
    nav_departments: "شعبے",
    nav_admissions: "داخلہ",
    nav_news: "خبریں",
    nav_contact: "رابطہ",
    hero_title: "روایات اور علمی برتری",
    hero_sub: "جدید یونیورسٹی-اسٹائل کیمپس، غیر فانی اقدار — علمی سختی، کردار سازی، اور کمیونٹی سروس۔",
    apply: "ابھی داخلہ لیں",
    learn: "مزید جانیں",
    stat_faculty: "فیکلٹی",
    stat_students: "طلبہ",
    stat_depts: "شعبے",
    stat_years: "سال",
    about_title: "ہمارے بارے میں",
    about_text: "ہم روایتی اسلامی تعلیم اور جدید تحقیق کو ملاتے ہوئے سخت پروگرام اور کمیونٹی سروس فراہم کرتے ہیں۔",
    departments_title: "شعبہ جات اور پروگرام",
    view_all: "تمام دیکھیں",
    dept_quran: "قرآنی تعلیم",
    dept_quran_desc: "حفظ اور تجوید کے پروگرام موزوں اساتذہ کے ساتھ۔",
    dept_hadith: "حدیث و سنت",
    dept_hadith_desc: "حدیث کے علوم کا عمیق مطالعہ۔",
    dept_arabic: "عربی زبان",
    dept_arabic_desc: "کلاسیکی اور جدید عربی۔",
    dept_outreach: "سماجی خدمات",
    dept_outreach_desc: "کمیونٹی پروگرام اور عوامی اقدامات۔",
    admissions_title: "2026 کے لئے داخلے جاری ہیں",
    admissions_text: "نئے تعلیمی سال کے لیے رجسٹریشن شروع ہے۔ آن لائن درخواست دیں یا داخلہ دفتر سے رہنمائی حاصل کریں۔",
    label_name: "نام",
    label_email: "ای میل",
    label_program: "پروگرام",
    news_title: "تازہ ترین خبریں اور اعلانات",
    news1: "سالانہ کنووکیشن 2025 کا اعلان",
    news2: "اسلامی مطالعات کے لیے نیا تحقیقی مرکز",
    news3: "اسکالرشپ کے لیے درخواستیں کھل گئیں",
    contact_title: "ہم سے رابطہ کریں",
    contact_text: "دفتر: +91 12345 67890\nای میل: info@example.com\nپتہ: دارالعلوم کیمپس، دیوبند، بھارت",
    send: "پیغام بھیجیں",
    quick_links: "فوری لنکس",
    footer_about: "روایتی تعلیم اور جدید علم کا مرکز۔",
    copyright: "© {year} دارالعلوم — جملہ حقوق محفوظ ہیں."
  }
};

function setText(lang){
  document.documentElement.lang = (lang === 'hi') ? 'hi' : (lang === 'ur') ? 'ur' : 'en';
  document.documentElement.dir = (lang === 'ur') ? 'rtl' : 'ltr';
  // Replace text in elements marked data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.getAttribute('data-i18n');
    if(translations[lang] && translations[lang][key]){
      el.textContent = translations[lang][key];
    }
  });
  // special: replace multiline contact text if present
  const contact = translations[lang].contact_text || '';
  document.querySelectorAll('[data-i18n="contact_text"]').forEach(el=>{
    el.innerHTML = contact.replace(/\n/g,'<br/>');
  });

  // footer year
  const yearSpan = document.getElementById('year');
  if(yearSpan) yearSpan.textContent = new Date().getFullYear();

  // store preference
  try{ localStorage.setItem('site_lang', lang) }catch(e){}
}

document.addEventListener('DOMContentLoaded', ()=>{
  const select = document.getElementById('lang');
  const saved = localStorage.getItem('site_lang') || 'en';
  select.value = saved;
  setText(saved);
  select.addEventListener('change', (e)=> setText(e.target.value));
});
