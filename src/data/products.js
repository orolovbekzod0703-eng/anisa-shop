// Namuna ayollar mahsulotlari. Firebase/Supabase konfiguratsiya qilinsa,
// DB'dagi `products` kolleksiyasi shu tuzilishga mos bo'lishi kerak.
//
// Har mahsulotning rasmi loremflickr'dan (Flickr'ning tag'lari bo'yicha
// haqiqiy fashion fotolar). Yuklanmasa, SmartImg komponent avtomatik
// brendli SVG placeholderga o'tadi.

const flickr = (tags, seed) =>
  `https://loremflickr.com/800/1000/${encodeURIComponent(tags)}?lock=${seed}`

// Har toifa uchun eng maqbul kalit so'zlar
const TAG_MAP = {
  dresses:     'dress,women,fashion',
  blouses:     'blouse,women,fashion',
  skirts:      'skirt,women,fashion',
  pants:       'trousers,women,fashion',
  suits:       'suit,women,fashion',
  jackets:     'jacket,women,fashion',
  knitwear:    'sweater,women,fashion',
  shoes:       'shoes,women,fashion',
  accessories: 'accessories,women,fashion'
}

function imgs(category, seedBase) {
  const tag = TAG_MAP[category] || 'women,fashion'
  return [
    flickr(tag, seedBase),
    flickr(tag, seedBase + 1000),
    flickr(tag, seedBase + 2000)
  ]
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
    },
    images: [flickr('evening-dress,women', 201), flickr('evening-dress,women', 1201), flickr('evening-dress,women', 2201)] },
  { id: 'a02', category: 'dresses', brand: 'Zara',
    name: { uz: 'Yozgi gulli ko\'ylak', ru: 'Летнее платье с цветочным принтом' },
    price: 389000,
    sizes: ['XS', 'S', 'M', 'L'], availableSizes: ['S', 'M', 'L'],
    colors: ['pink', 'white'],
    composition: { uz: '100% viskoza', ru: '100% вискоза' },
    description: {
      uz: 'Yengil va shinam yozgi ko\'ylak, gulli chizmalar bilan.',
      ru: 'Лёгкое летнее платье с цветочным узором.'
    },
    images: [flickr('summer-dress,floral,women', 202), flickr('summer-dress,floral,women', 1202), flickr('summer-dress,floral,women', 2202)] },
  { id: 'a03', category: 'blouses', brand: 'Mango',
    name: { uz: 'Ipak bluzka', ru: 'Шёлковая блузка' },
    price: 329000, oldPrice: 419000,
    sizes: ['XS', 'S', 'M', 'L', 'XL'], availableSizes: ['XS', 'S', 'M', 'L'],
    colors: ['white', 'pink', 'beige'],
    composition: { uz: '100% ipak', ru: '100% шёлк' },
    description: {
      uz: 'Yumshoq va nafis ipak bluzka. Ofis va kunlik uslub uchun.',
      ru: 'Мягкая и изящная шёлковая блузка.'
    },
    images: [flickr('silk-blouse,women', 203), flickr('silk-blouse,women', 1203), flickr('silk-blouse,women', 2203)] },
  { id: 'a04', category: 'blouses', brand: 'H&M',
    name: { uz: 'Klassik oq ko\'ylak', ru: 'Классическая белая рубашка' },
    price: 259000,
    sizes: ['XS', 'S', 'M', 'L', 'XL'], availableSizes: ['S', 'M', 'L', 'XL'],
    colors: ['white', 'navy'],
    composition: { uz: '100% paxta', ru: '100% хлопок' },
    description: {
      uz: 'Har qanday uslubga mos, klassik oq ko\'ylak.',
      ru: 'Классическая белая рубашка.'
    },
    images: [flickr('white-shirt,women,office', 204), flickr('white-shirt,women,office', 1204), flickr('white-shirt,women,office', 2204)] },
  { id: 'a05', category: 'skirts', brand: 'Bershka',
    name: { uz: 'Midi yubka, plisirovka', ru: 'Плиссированная миди-юбка' },
    price: 279000,
    sizes: ['XS', 'S', 'M', 'L'], availableSizes: ['S', 'M'],
    colors: ['black', 'beige', 'pink'],
    composition: { uz: '100% polyester', ru: '100% полиэстер' },
    description: {
      uz: 'Yengil va nafis plisirovka yubka.',
      ru: 'Лёгкая и изящная плиссированная юбка.'
    },
    images: [flickr('pleated-skirt,women', 205), flickr('pleated-skirt,women', 1205), flickr('pleated-skirt,women', 2205)] },
  { id: 'a06', category: 'skirts', brand: 'Zara',
    name: { uz: 'Charm mini yubka', ru: 'Кожаная мини-юбка' },
    price: 449000,
    sizes: ['XS', 'S', 'M', 'L'], availableSizes: ['XS', 'S', 'M'],
    colors: ['black', 'brown'],
    composition: { uz: 'Sun\'iy charm', ru: 'Искусственная кожа' },
    description: {
      uz: 'Zamonaviy uslub uchun charm yubka.',
      ru: 'Кожаная юбка для современного стиля.'
    },
    images: [flickr('leather-skirt,women', 206), flickr('leather-skirt,women', 1206), flickr('leather-skirt,women', 2206)] },
  { id: 'a07', category: 'pants', brand: 'Massimo Dutti',
    name: { uz: 'Yuqori bel shim', ru: 'Брюки с высокой посадкой' },
    price: 429000, oldPrice: 549000,
    sizes: ['XS', 'S', 'M', 'L', 'XL'], availableSizes: ['S', 'M', 'L'],
    colors: ['beige', 'black', 'navy'],
    composition: { uz: '70% jun, 30% polyester', ru: '70% шерсть, 30% полиэстер' },
    description: {
      uz: 'Yuqori belli klassik shim.',
      ru: 'Классические брюки с высокой посадкой.'
    },
    images: imgs('pants', 207) },
  { id: 'a08', category: 'pants', brand: 'Mango',
    name: { uz: 'Keng oyoq jinsi', ru: 'Джинсы широкого кроя' },
    price: 359000,
    sizes: ['XS', 'S', 'M', 'L', 'XL'], availableSizes: ['S', 'M', 'L', 'XL'],
    colors: ['navy', 'black'],
    composition: { uz: '98% paxta, 2% elastan', ru: '98% хлопок, 2% эластан' },
    description: {
      uz: 'Zamonaviy keng oyoq jinsi shim.',
      ru: 'Современные джинсы широкого кроя.'
    },
    images: [flickr('jeans,women,wideleg', 208), flickr('jeans,women,wideleg', 1208), flickr('jeans,women,wideleg', 2208)] },
  { id: 'a09', category: 'jackets', brand: 'Zara',
    name: { uz: 'Uzun jun palto', ru: 'Длинное шерстяное пальто' },
    price: 1290000,
    sizes: ['XS', 'S', 'M', 'L'], availableSizes: ['S', 'M'],
    colors: ['beige', 'black', 'pink'],
    composition: { uz: '85% jun, 15% kashemir', ru: '85% шерсть, 15% кашемир' },
    description: {
      uz: 'Sifatli va issiq palto. Kuz-qish uchun.',
      ru: 'Качественное и тёплое пальто.'
    },
    images: [flickr('wool-coat,women', 209), flickr('wool-coat,women', 1209), flickr('wool-coat,women', 2209)] },
  { id: 'a10', category: 'jackets', brand: 'Bershka',
    name: { uz: 'Charm kurtka', ru: 'Кожаная куртка' },
    price: 890000, oldPrice: 1090000,
    sizes: ['XS', 'S', 'M', 'L', 'XL'], availableSizes: ['S', 'M', 'L'],
    colors: ['black', 'brown'],
    composition: { uz: 'Sun\'iy charm', ru: 'Искусственная кожа' },
    description: {
      uz: 'Zamonaviy klassik charm kurtka.',
      ru: 'Современная классическая кожаная куртка.'
    },
    images: [flickr('leather-jacket,women', 210), flickr('leather-jacket,women', 1210), flickr('leather-jacket,women', 2210)] },
  { id: 'a11', category: 'knitwear', brand: 'H&M',
    name: { uz: 'Merinos svitari', ru: 'Свитер из мериноса' },
    price: 389000,
    sizes: ['XS', 'S', 'M', 'L', 'XL'], availableSizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['pink', 'beige', 'gray', 'white'],
    composition: { uz: '100% merinos juni', ru: '100% шерсть мериноса' },
    description: {
      uz: 'Yumshoq va issiq oversize svitar.',
      ru: 'Мягкий и тёплый oversize свитер.'
    },
    images: imgs('knitwear', 211) },
  { id: 'a12', category: 'knitwear', brand: 'Mango',
    name: { uz: 'Uzun kardigan', ru: 'Длинный кардиган' },
    price: 449000,
    sizes: ['XS', 'S', 'M', 'L'], availableSizes: ['S', 'M'],
    colors: ['beige', 'pink', 'gray'],
    composition: { uz: '70% paxta, 30% akril', ru: '70% хлопок, 30% акрил' },
    description: {
      uz: 'Yumshoq va nafis kardigan.',
      ru: 'Мягкий и изящный кардиган.'
    },
    images: [flickr('cardigan,women', 212), flickr('cardigan,women', 1212), flickr('cardigan,women', 2212)] },
  { id: 'a13', category: 'shoes', brand: 'Zara',
    name: { uz: 'Klassik pashniyalar', ru: 'Классические лодочки' },
    price: 690000,
    sizes: ['36', '37', '38', '39', '40'], availableSizes: ['37', '38', '39'],
    colors: ['black', 'red', 'beige'],
    composition: { uz: 'Tabiiy charm', ru: 'Натуральная кожа' },
    description: {
      uz: 'Rasmiy tadbirlar uchun klassik pashniyalar.',
      ru: 'Классические лодочки.'
    },
    images: [flickr('high-heels,shoes,women', 213), flickr('high-heels,shoes,women', 1213), flickr('high-heels,shoes,women', 2213)] },
  { id: 'a14', category: 'shoes', brand: 'H&M',
    name: { uz: 'Oq krossovkalar', ru: 'Белые кроссовки' },
    price: 549000, oldPrice: 649000,
    sizes: ['36', '37', '38', '39', '40'], availableSizes: ['36', '37', '38', '39', '40'],
    colors: ['white', 'pink'],
    composition: { uz: 'Sun\'iy charm', ru: 'Искусственная кожа' },
    description: {
      uz: 'Har kuni kiyish uchun qulay krossovkalar.',
      ru: 'Удобные кроссовки на каждый день.'
    },
    images: [flickr('sneakers,white,women', 214), flickr('sneakers,white,women', 1214), flickr('sneakers,white,women', 2214)] },
  { id: 'a15', category: 'accessories', brand: 'Anisa',
    name: { uz: 'Ipak sharf', ru: 'Шёлковый платок' },
    price: 189000,
    sizes: ['One'], availableSizes: ['One'],
    colors: ['pink', 'red', 'beige', 'navy'],
    composition: { uz: '100% ipak', ru: '100% шёлк' },
    description: {
      uz: 'Nafis va yengil ipak sharf.',
      ru: 'Изящный и лёгкий шёлковый платок.'
    },
    images: [flickr('silk-scarf,women', 215), flickr('silk-scarf,women', 1215), flickr('silk-scarf,women', 2215)] },
  { id: 'a16', category: 'accessories', brand: 'Zara',
    name: { uz: 'Charm sumka', ru: 'Кожаная сумка' },
    price: 549000, oldPrice: 690000,
    sizes: ['One'], availableSizes: ['One'],
    colors: ['black', 'beige', 'brown', 'pink'],
    composition: { uz: 'Tabiiy charm', ru: 'Натуральная кожа' },
    description: {
      uz: 'Sifatli va zamonaviy charm sumka.',
      ru: 'Качественная и современная кожаная сумка.'
    },
    images: [flickr('handbag,leather,women', 216), flickr('handbag,leather,women', 1216), flickr('handbag,leather,women', 2216)] }
]
