import { placeholderFor } from '../utils/placeholder'

export function SmartImg({ src, product, fallback, alt = '', className = '', ...p }) {
  const fb = fallback || (product ? placeholderFor(product) : PLAIN_FALLBACK)
  return (
    <img
      src={src || fb}
      alt={alt}
      loading="lazy"
      onError={(e) => {
        if (e.currentTarget.src !== fb) {
          e.currentTarget.src = fb
          e.currentTarget.onerror = null
        }
      }}
      className={className}
      {...p}
    />
  )
}

const PLAIN_FALLBACK = 'data:image/svg+xml;utf8,' + encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 800"><rect width="600" height="800" fill="#FCE7F3"/><text x="300" y="410" text-anchor="middle" fill="#DB2777" font-family="Inter,sans-serif" font-weight="700" font-size="20">Rasm</text></svg>`
)
