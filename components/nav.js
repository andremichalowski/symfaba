import Link from 'next/link'

export default function Nav() {
  return (
    <div >
      <nav >
        <Link href="product"><a>Product</a></Link>
        <Link href="articles"><a>Articles</a></Link>
        <Link href="about"><a>About</a></Link>
        <Link href="blog"><a>Blog</a></Link>
      </nav>
    </div>
  )
}
