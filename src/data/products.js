// Namuna ayollar mahsulotlari. Firebase/Supabase konfiguratsiya qilinsa,
// DB'dagi `products` kolleksiyasi shu tuzilishga mos bo'lishi kerak.
//
// Rasmlar — SVG placeholder (kiyim ikonasi + nom + brend). Admin panelda
// yangi mahsulot qo'shishda haqiqiy rasmlar Supabase Storage'ga yuklanadi
// va bu placeholderlar o'rniga chiroyli photolar chiqadi.

const CATEGORY_ICON = {
  dresses: 'M75 40h30l-8 15 25 130h-64l25-130-8-15zM75 40l-12 12M105 40l12 12',
  blouses: 'M60 40h60l-8 20-10 100h-24l-10-100-8-20zM70 40l-15-8 20-12h50l20 12-15 8',
  skirts: 'M60 60h60l-15 100h-30zM70 60c0-10 5-20 20-20s20 10 20 20',
  pants: 'M65 40h50l5 130h-25l-8-70-8 70h-24z',
  suits: 'M55 40h70v20l-15 90h-40l-15-90zM90 40v70',
  jackets: 'M50 45h80v100h-80zM90 45v100M50 45l-10 15v70l10 5M130 45l10 15v70l-10 5',
  knitwear: 'M50 55h80l-5 90h-70zM60 55v-8a10 10 0 0 1 20 0M100 55v-8a10 10 0 0 1 20 0',
  shoes: 'M40 120c0-10 10-20 25-25l30-15 25 5c15 5 30 15 30 25v10H40zM40 130h120',
  accessories: 'M55 60c0-15 15-25 35-25s35 10 35 25v15h-70zM45 75h90l5 55h-100z'
}

function catIcon(cat) {
  return CATEGORY_ICON[cat] || CATEGORY_ICON.dresses
}

function esc(s = '') {
  return String(s).replace(/[<>&"']/g, c => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;', "'": '&apos;' }[c]))
}

function trunc(s, n) { return s.length > n ? s.slice(0, n - 1) + '…' : s }

function img(product, variant = 0) {
  const grads = [
    ['#BE185D', '#EC4899'],
    ['#9D174D', '#F472B6'],
    ['#831843', '#DB2777']
  ]
  const [c1, c2] = grads[variant % 3]
  const name = trunc(product.name.uz, 26)
  const icon = catIcon(product.category)

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 800" preserveAspectRatio="xMidYMid slice">
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="${c1}"/>
        <stop offset="100%" stop-color="${c2}"/>
      </linearGradient>
      <radialGradient id="r" cx="0.7" cy="0.3" r="0.8">
        <stop offset="0%" stop-color="#ffffff" stop-opacity="0.2"/>
        <stop offset="100%" stop-color="#ffffff" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="600" height="800" fill="url(#g)"/>
    <rect width="600" height="800" fill="url(#r)"/>
    <g transform="translate(210 250) scale(2.2)" fill="none" stroke="#ffffff" stroke-opacity="0.6" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
      <path d="${icon}"/>
    </g>
    <text x="300" y="640" text-anchor="middle" fill="#ffffff" font-family="Inter, system-ui, sans-serif" font-weight="800" font-size="34" opacity="0.98">${esc(name)}</text>
    <text x="300" y="680" text-anchor="middle" fill="#ffffff" font-family="Inter, system-ui, sans-serif" font-weight="500" font-size="20" opacity="0.75">${esc(product.brand)}</text>
    <text x="300" y="760" text-anchor="middle" fill="#ffffff" font-family="Inter, system-ui, sans-serif" font-weight="800" font-size="14" letter-spacing="6" opacity="0.9">ANISA SHOP</text>
  </svg>`
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`
}

function withImages(p) {
  return { ...p, images: [img(p, 0), img(p, 1), img(p, 2)] }
}

export const CATEGORIES = [
  { id: 'all', key: 'all' },
  { id: 'dresses', key: 'dresses' },
  { id: 'blouses', key: 'blouses' },
  { id: 'skirts', key: 'skirts' },
  { id: 'pants', key: 'pants' },
  { id: 'suits', key: 'suits' },
  { id: 'jackets', key: 'jackets' },
  { id: 'knitwear', key: 'knitwear' },
  { id: 'shoes', key: 'shoes' },
  { id: 'accessories', key: 'accessories' }
]

export const BRANDS = ['Anisa', 'Zara', 'Mango', 'H&M', 'Bershka', 'Massimo Dutti']

export const COLORS = [
  { id: 'black', name: { uz: 'Qora', ru: 'Чёрный' }, hex: '#111827' },
  { id: 'white', name: { uz: 'Oq', ru: 'Белый' }, hex: '#F8FAFC' },
  { id: 'pink',  name: { uz: 'Pushti', ru: 'Розовый' }, hex: '#EC4899' },
  { id: 'red',   name: { uz: 'Qizil', ru: 'Красный' }, hex: '#DC2626' },
  { id: 'beige', name: { uz: 'Bej', ru: 'Бежевый' }, hex: '#D6C7A6' },
  { id: 'brown', name: { uz: 'Jigarrang', ru: 'Коричневый' }, hex: '#78350F' },
  { id: 'navy',  name: { uz: 'Ko\'k', ru: 'Синий' }, hex: '#1E3A8A' },
  { id: 'gray',  name: { uz: 'Kulrang', ru: 'Серый' }, hex: '#6B7280' },
  { id: 'green', name: { uz: 'Yashil', ru: 'Зелёный' }, hex: '#059669' }
]

export const PRODUCTS = [
  { id: 'a01', category: 'dresses', brand: 'Anisa',
    name: { uz: 'Kuz oqshom ko\'ylagi', ru: 'Осеннее вечернее платье' },
    price: 549000, oldPrice: 690000,
    sizes: ['XS', 'S', 'M', 'L', 'XL'], availableSizes: ['S', 'M', 'L'],
    colors: ['black', 'red', 'navy'],
    composition: { uz: '95% polyester, 5% elastan', ru: '95% полиэстер, 5% эластан' },
    description: {
      uz: 'Nafis midi ko\'ylak — oqshom va rasmiy tadbirlar uchun mos.',
      ru: 'Изящное миди-платье для вечерних и официальных мероприятий.'
    } },
  { id: 'a02', category: 'dresses', brand: 'Zara',
    name: { uz: 'Yozgi gulli ko\'ylak', ru: 'Летнее платье с цветочным принтом' },
    price: 389000,
    sizes: ['XS', 'S', 'M', 'L'], availableSizes: ['S', 'M', 'L'],
    colors: ['pink', 'white'],
    composition: { uz: '100% viskoza', ru: '100% вискоза' },
    description: {
      uz: 'Yengil va shinam yozgi ko\'ylak, gulli chizmalar bilan.',
      ru: 'Лёгкое и удобное летнее платье с цветочным узором.'
    } },
  { id: 'a03', category: 'blouses', brand: 'Mango',
    name: { uz: 'Ipak bluzka', ru: 'Шёлковая блузка' },
    price: 329000, oldPrice: 419000,
    sizes: ['XS', 'S', 'M', 'L', 'XL'], availableSizes: ['XS', 'S', 'M', 'L'],
    colors: ['white', 'pink', 'beige'],
    composition: { uz: '100% ipak', ru: '100% шёлк' },
    description: {
      uz: 'Yumshoq va nafis ipak bluzka. Ofis va kunlik uslub uchun.',
      ru: 'Мягкая и изящная шёлковая блузка. Для офиса и повседневного стиля.'
    } },
  { id: 'a04', category: 'blouses', brand: 'H&M',
    name: { uz: 'Klassik oq ko\'ylak', ru: 'Классическая белая рубашка' },
    price: 259000,
    sizes: ['XS', 'S', 'M', 'L', 'XL'], availableSizes: ['S', 'M', 'L', 'XL'],
    colors: ['white', 'navy'],
    composition: { uz: '100% paxta', ru: '100% хлопок' },
    description: {
      uz: 'Har qanday uslubga mos, klassik oq ko\'ylak.',
      ru: 'Классическая белая рубашка, подходит к любому стилю.'
    } },
  { id: 'a05', category: 'skirts', brand: 'Bershka',
    name: { uz: 'Midi yubka, plisirovka', ru: 'Плиссированная миди-юбка' },
    price: 279000,
    sizes: ['XS', 'S', 'M', 'L'], availableSizes: ['S', 'M'],
    colors: ['black', 'beige', 'pink'],
    composition: { uz: '100% polyester', ru: '100% полиэстер' },
    description: {
      uz: 'Yengil va nafis plisirovka yubka.',
      ru: 'Лёгкая и изящная плиссированная юбка.'
    } },
  { id: 'a06', category: 'skirts', brand: 'Zara',
    name: { uz: 'Charm mini yubka', ru: 'Кожаная мини-юбка' },
    price: 449000,
    sizes: ['XS', 'S', 'M', 'L'], availableSizes: ['XS', 'S', 'M'],
    colors: ['black', 'brown'],
    composition: { uz: 'Sun\'iy charm', ru: 'Искусственная кожа' },
    description: {
      uz: 'Zamonaviy uslub uchun charm yubka.',
      ru: 'Кожаная юбка для современного стиля.'
    } },
  { id: 'a07', category: 'pants', brand: 'Massimo Dutti',
    name: { uz: 'Yuqori bel shim', ru: 'Брюки с высокой посадкой' },
    price: 429000, oldPrice: 549000,
    sizes: ['XS', 'S', 'M', 'L', 'XL'], availableSizes: ['S', 'M', 'L'],
    colors: ['beige', 'black', 'navy'],
    composition: { uz: '70% jun, 30% polyester', ru: '70% шерсть, 30% полиэстер' },
    description: {
      uz: 'Yuqori belli klassik shim. Kunlik va rasmiy uslub uchun.',
      ru: 'Классические брюки с высокой посадкой.'
    } },
  { id: 'a08', category: 'pants', brand: 'Mango',
    name: { uz: 'Keng oyoq jinsi', ru: 'Джинсы широкого кроя' },
    price: 359000,
    sizes: ['XS', 'S', 'M', 'L', 'XL'], availableSizes: ['S', 'M', 'L', 'XL'],
    colors: ['navy', 'black'],
    composition: { uz: '98% paxta, 2% elastan', ru: '98% хлопок, 2% эластан' },
    description: {
      uz: 'Zamonaviy keng oyoq jinsi shim.',
      ru: 'Современные джинсы широкого кроя.'
    } },
  { id: 'a09', category: 'jackets', brand: 'Zara',
    name: { uz: 'Uzun jun palto', ru: 'Длинное шерстяное пальто' },
    price: 1290000,
    sizes: ['XS', 'S', 'M', 'L'], availableSizes: ['S', 'M'],
    colors: ['beige', 'black', 'pink'],
    composition: { uz: '85% jun, 15% kashemir', ru: '85% шерсть, 15% кашемир' },
    description: {
      uz: 'Sifatli va issiq palto. Kuz-qish uchun.',
      ru: 'Качественное и тёплое пальто. Для осени и зимы.'
    } },
  { id: 'a10', category: 'jackets', brand: 'Bershka',
    name: { uz: 'Charm kurtka', ru: 'Кожаная куртка' },
    price: 890000, oldPrice: 1090000,
    sizes: ['XS', 'S', 'M', 'L', 'XL'], availableSizes: ['S', 'M', 'L'],
    colors: ['black', 'brown'],
    composition: { uz: 'Sun\'iy charm', ru: 'Искусственная кожа' },
    description: {
      uz: 'Zamonaviy klassik charm kurtka.',
      ru: 'Современная классическая кожаная куртка.'
    } },
  { id: 'a11', category: 'knitwear', brand: 'H&M',
    name: { uz: 'Merinos svitari', ru: 'Свитер из мериноса' },
    price: 389000,
    sizes: ['XS', 'S', 'M', 'L', 'XL'], availableSizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['pink', 'beige', 'gray', 'white'],
    composition: { uz: '100% merinos juni', ru: '100% шерсть мериноса' },
    description: {
      uz: 'Yumshoq va issiq oversize svitar.',
      ru: 'Мягкий и тёплый oversize свитер.'
    } },
  { id: 'a12', category: 'knitwear', brand: 'Mango',
    name: { uz: 'Uzun kardigan', ru: 'Длинный кардиган' },
    price: 449000,
    sizes: ['XS', 'S', 'M', 'L'], availableSizes: ['S', 'M'],
    colors: ['beige', 'pink', 'gray'],
    composition: { uz: '70% paxta, 30% akril', ru: '70% хлопок, 30% акрил' },
    description: {
      uz: 'Yumshoq va nafis kardigan.',
      ru: 'Мягкий и изящный кардиган.'
    } },
  { id: 'a13', category: 'shoes', brand: 'Zara',
    name: { uz: 'Klassik pashniyalar', ru: 'Классические лодочки' },
    price: 690000,
    sizes: ['36', '37', '38', '39', '40'], availableSizes: ['37', '38', '39'],
    colors: ['black', 'red', 'beige'],
    composition: { uz: 'Tabiiy charm', ru: 'Натуральная кожа' },
    description: {
      uz: 'Rasmiy tadbirlar uchun klassik pashniyalar.',
      ru: 'Классические лодочки для официальных случаев.'
    } },
  { id: 'a14', category: 'shoes', brand: 'H&M',
    name: { uz: 'Oq krossovkalar', ru: 'Белые кроссовки' },
    price: 549000, oldPrice: 649000,
    sizes: ['36', '37', '38', '39', '40'], availableSizes: ['36', '37', '38', '39', '40'],
    colors: ['white', 'pink'],
    composition: { uz: 'Sun\'iy charm', ru: 'Искусственная кожа' },
    description: {
      uz: 'Har kuni kiyish uchun qulay krossovkalar.',
      ru: 'Удобные кроссовки на каждый день.'
    } },
  { id: 'a15', category: 'accessories', brand: 'Anisa',
    name: { uz: 'Ipak sharf', ru: 'Шёлковый платок' },
    price: 189000,
    sizes: ['One'], availableSizes: ['One'],
    colors: ['pink', 'red', 'beige', 'navy'],
    composition: { uz: '100% ipak', ru: '100% шёлк' },
    description: {
      uz: 'Nafis va yengil ipak sharf.',
      ru: 'Изящный и лёгкий шёлковый платок.'
    } },
  { id: 'a16', category: 'accessories', brand: 'Zara',
    name: { uz: 'Charm sumka', ru: 'Кожаная сумка' },
    price: 549000, oldPrice: 690000,
    sizes: ['One'], availableSizes: ['One'],
    colors: ['black', 'beige', 'brown', 'pink'],
    composition: { uz: 'Tabiiy charm', ru: 'Натуральная кожа' },
    description: {
      uz: 'Sifatli va zamonaviy charm sumka.',
      ru: 'Качественная и современная кожаная сумка.'
    } }
].map(withImages)
