-- Namuna ayollar mahsulotlari. Ixtiyoriy — dev/demo uchun.
-- schema.sql dan keyin ishga tushiring.

insert into public.products
  (id, category, brand, name_uz, name_ru, price, old_price, sizes, available_sizes, colors, composition_uz, composition_ru, description_uz, description_ru, images)
values
  ('a01','dresses','Anisa','Kuz oqshom ko''ylagi','Осеннее вечернее платье',549000,690000,
   array['XS','S','M','L','XL'], array['S','M','L'], array['black','red','navy'],
   '95% polyester, 5% elastan','95% полиэстер, 5% эластан',
   'Nafis midi ko''ylak — oqshom va rasmiy tadbirlar uchun mos.',
   'Изящное миди-платье для вечерних и официальных мероприятий.',
   array['https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=80']),
  ('a03','blouses','Mango','Ipak bluzka','Шёлковая блузка',329000,419000,
   array['XS','S','M','L','XL'], array['XS','S','M','L'], array['white','pink','beige'],
   '100% ipak','100% шёлк',
   'Yumshoq va nafis ipak bluzka.','Мягкая и изящная шёлковая блузка.',
   array['https://images.unsplash.com/photo-1551048632-24e444b48a3e?auto=format&fit=crop&w=800&q=80']),
  ('a09','jackets','Zara','Uzun jun palto','Длинное шерстяное пальто',1290000,null,
   array['XS','S','M','L'], array['S','M'], array['beige','black','pink'],
   '85% jun, 15% kashemir','85% шерсть, 15% кашемир',
   'Sifatli va issiq palto.','Качественное и тёплое пальто.',
   array['https://images.unsplash.com/photo-1544022613-e87ca75a784a?auto=format&fit=crop&w=800&q=80'])
on conflict (id) do nothing;
