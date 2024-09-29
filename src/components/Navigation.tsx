import Link from 'next/link'

export function Navigation() {
  return (
    <nav>
      <Link href="/" className="nav-link">
        主页
      </Link>
      <Link href="/about" className="nav-link">
        关于
      </Link>
    </nav>
  )
}
