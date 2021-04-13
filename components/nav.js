import Link from 'next/link'

export default function Nav() {
  return (
    <div >
      <nav >
        <Link href="/product"><a>Product</a></Link>
        <Link href="/accessory_pages/articles"><a>Articles</a></Link>
        <Link href="/accessory_pages/about"><a>About</a></Link>
        <Link href="/accessory_pages/blog"><a>Blog</a></Link>
      </nav>
    </div>
  )
}
