export function Logo({ size = 28 }) {
  return (
    <div className="flex items-center gap-2 select-none">
      <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
        <path
          d="M13 14h14l-1.5 16h-11L13 14zm3-2v-1a4 4 0 0 1 8 0v1"
          stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
        />
        <circle cx="17" cy="18" r="1.3" fill="currentColor" />
      </svg>
      <span className="text-xl font-extrabold tracking-tight">Anisa Shop</span>
    </div>
  )
}
