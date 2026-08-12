// Namuna ayollar mahsulotlari. Firebase/Supabase konfiguratsiya qilinsa,
// DB'dagi `products` kolleksiyasi shu tuzilishga mos bo'lishi kerak.
//
// Rasmlar — brendli SVG placeholder (kategoriya ikonasi + nom + brend + logo).
// Admin panel orqali haqiqiy fotolar yuklansa, ular placeholder o'rniga chiqadi.

import { placeholderFor } from '../utils/placeholder'

const withImages = (p) => ({
  ...p,
  images: [placeholderFor(p, 0), placeholderFor(p, 1), placeholderFor(p, 2)]
})

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
      ru: 'Лёгкое летнее платье с цветочным узором.'
    } },
  { id: 'a03', category: 'blouses', brand: 'Mango',
    name: { uz: 'Ipak bluzka', ru: 'Шёлковая блузка' },
    price: 329000, oldPrice: 419000,
    sizes: ['XS', 'S', 'M', 'L', 'XL'], availableSizes: ['XS', 'S', 'M', 'L'],
    colors: ['white', 'pink', 'beige'],
    composition: { uz: '100% ipak', ru: '100% шёлк' },
    description: {
      uz: 'Yumshoq va nafis ipak bluzka.',
      ru: 'Мягкая и изящная шёлковая блузка.'
    } },
  { id: 'a04', category: 'blouses', brand: 'H&M',
    name: { uz: 'Klassik oq ko\'ylak', ru: 'Классическая белая рубашка' },
    price: 259000,
    sizes: ['XS', 'S', 'M', 'L', 'XL'], availableSizes: ['S', 'M', 'L', 'XL'],
    colors: ['white', 'navy'],
    composition: { uz: '100% paxta', ru: '100% хлопок' },
    description: {
      uz: 'Har qanday uslubga mos, klassik oq ko\'ylak.',
      ru: 'Классическая белая рубашка.'
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
      uz: 'Yuqori belli klassik shim.',
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
      ru: 'Качественное и тёплое пальто.'
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
      ru: 'Классические лодочки.'
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
