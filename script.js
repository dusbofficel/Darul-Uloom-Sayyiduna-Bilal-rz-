// -----------------------------
// Translations and UI updates
// -----------------------------
const translations = {
  ur: {
    bismillah: "بِسْمِ اللّٰہِ الرَّحْمٰنِ الرَّحِيْمِ",
    intro_title: "تعارف",
    intro_text: "مدرسے کا اجمالی خاکہ:<br>● طلبہ کی تعداد: 950<br>● اساتذہ و ملازمین: 75<br>● کل فارغین شعبہ تحفیظ القرآن الكريم: 45",
    slider_labels: ["سلائیڈر 1","سلائیڈر 2","سلائیڈر 3"],
    address: "مقام: ناک نول، تحصیل تجارہ، ضلع خیر، راجستھان — پن کوڈ: ۳۰۱۷۰۷",
    name: "دارالعلوم سیدنا بلال رضی اللہ عنہ"
  },
  hi: {
    bismillah: "बिस्मिल्लाह हिर रहमान हिर रहीम",
    intro_title: "परिचय",
    intro_text: "संस्थान का संक्षेप विवरण:<br>● छात्र संख्या: 950<br>● शिक्षक व कर्मचारी: 75<br>● हिफ़्ज़ विभाग के स्नातक: 45",
    slider_labels: ["स्लाइडर 1","स्लाइडर 2","स्लाइडर 3"],
    address: "स्थान: नकनोल, तहसील तिजारा, जिला अलवर, राजस्थान — पिन: 301707",
    name: "दारुल उलूम सैय्यिदुना बिलाल (रज.)"
  },
  en: {
    bismillah: "In the Name of Allah, the Most Merciful, the Most Compassionate",
    intro_title: "Introduction",
    intro_text: "Institute summary:<br>● Students: 950<br>● Teachers & staff: 75<br>● Hifz graduates: 45",
    slider_labels: ["Slider 1","Slider 2","Slider 3"],
    address: "Location: Nakhnol, Teh. Tijara, Dist. Alwar, Rajasthan — Pincode: 301707",
    name: "Darul Uloom Sayyiduna Bilal (RZ)"
  }
};

function applyTranslation(code){
  const t = translations[code] || translations.ur;
  const b = document.getElementById('bismillah');
  const introTitle = document.getElementById('intro-title');
  const introText = document.getElementById('intro-text');
  const schoolName = document.getElementById('school-name');
  const schoolAddress = document.getElementById('school-address');
  const sBtns = document.querySelectorAll('.sbtn');

  if(b) b.innerHTML = t.bismillah;
  if(introTitle) introTitle.innerHTML = t.intro_title;
  if(introText) introText.innerHTML = t.intro_text;
  if(schoolName) schoolName.innerHTML = t.name;
  if(schoolAddress) schoolAddress.innerHTML = t.address;
  sBtns.forEach((btn,i)=> btn.innerText = t.slider_labels[i] || (`Slider ${i+1}`));

  // direction
  if(code === 'en') document.documentElement.setAttribute('dir','ltr');
  else document.documentElement.setAttribute('dir','rtl');
}

// language dropdown
document.addEventListener('DOMContentLoaded', () => {
  const sel = document.getElementById('lang');
  if(sel){
    sel.value = 'اردو';
    applyTranslation('ur');
    sel.addEventListener('change', function(){
      if(this.value === 'اردو') applyTranslation('ur');
      if(this.value === 'हिंदी') applyTranslation('hi');
      if(this.value === 'English') applyTranslation('en');
    });
  }

  // initialize year in footer
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = new Date().getFullYear();

  // setup slider controls
  const slider = document.getElementById('slider');
  const sBtns = document.querySelectorAll('.sbtn');
  let sliderIndex = 0;

  function showSlide(i){
    if(!slider) return;
    sliderIndex = i;
    slider.style.transform = `translateX(-${i * 100}%)`;
    sBtns.forEach(btn => btn.classList.remove('active'));
    if(sBtns[i]) sBtns[i].classList.add('active');
  }

  sBtns.forEach(btn=>{
    btn.addEventListener('click', ()=> showSlide(Number(btn.dataset.index)));
  });

  // autoplay
  setInterval(()=> {
    sliderIndex = (sliderIndex + 1) % 3;
    showSlide(sliderIndex);
  }, 3500);
});

// -----------------------------
// Date display: Gregorian + Hijri (approx) + weekday
// -----------------------------
function gregorianToJDN(y,m,d){
  if(m <= 2){ y -= 1; m += 12; }
  const A = Math.floor(y/100);
  const B = 2 - A + Math.floor(A/4);
  const jd = Math.floor(365.25*(y+4716)) + Math.floor(30.6001*(m+1)) + d + B - 1524;
  return jd;
}

function jdnToIslamic(jd){
  const l = jd - 1948440 + 10632;
  const n = Math.floor((l - 1) / 10631);
  let l1 = l - 10631 * n + 354;
  const j = (Math.floor((10985 - l1)/5316)) * (Math.floor((50*l1)/17719)) + (Math.floor(l1/5670)) * (Math.floor((43*l1)/15238));
  l1 = l1 - (Math.floor((30 - j)/15)) * (Math.floor((17719*j)/50)) - (Math.floor(j/16)) * (Math.floor((15238*j)/43)) + 29;
  const m = Math.floor((24 * l1)/709);
  const d = l1 - Math.floor((709*m)/24);
  const y = 30 * n + j - 30;
  return {iy: y, im: m, id: d};
}

function updateDateDisplay(){
  const now = new Date();
  const gy = now.getFullYear(), gm = now.getMonth()+1, gd = now.getDate();
  const daysUr = ['اتوار','پیر','منگل','بدھ','جمعرات','جمعہ','ہفتہ'];
  const daysHi = ['रविवार','सोमवार','मंगलवार','बुधवार','गुरूवार','शुक्रवार','शनिवार'];
  const daysEn = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

  const jd = gregorianToJDN(gy,gm,gd);
  const hij = jdnToIslamic(jd);
  const weekdayIndex = now.getDay();

  const sel = document.getElementById('lang');
  let weekdayStr = daysUr[weekdayIndex];
  if(sel && sel.value === 'हिंदी') weekdayStr = daysHi[weekdayIndex];
  if(sel && sel.value === 'English') weekdayStr = daysEn[weekdayIndex];

  const gStr = `${gy}-${String(gm).padStart(2,'0')}-${String(gd).padStart(2,'0')}`;
  const hStr = `${hij.iy} / ${String(hij.im).padStart(2,'0')} / ${String(hij.id).padStart(2,'0')}`;

  const out = `${weekdayStr} | عیسوی: ${gStr} | قمری: ${hStr}`;
  const el = document.getElementById('date-area');
  if(el) el.innerHTML = out;
}

updateDateDisplay();
setInterval(updateDateDisplay, 60*1000);
