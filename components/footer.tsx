"use client"

export function Footer() {
  return (
    <footer className="border-t border-line bg-paper py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-5 text-sm text-graphite sm:flex-row sm:px-6">
        <p>© {new Date().getFullYear()} Sara Maciel</p>
        <p>Belo Horizonte, Brazil</p>
      </div>
    </footer>
  )
}
