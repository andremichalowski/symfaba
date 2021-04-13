import Link from 'next/link'
import logo1 from '../wireframes_and_images/logo1.jpg'

export default function Nav() {
  return (
    <div >
      <nav >
        <img src={logo1} />
        <br/>
        <Link href="/product"><a>Product</a></Link>
        <br/>
        <Link href="/accessory_pages/articles"><a>Articles</a></Link>
        <br/>
        <Link href="/accessory_pages/about"><a>About</a></Link>
        <br/>
        <Link href="/accessory_pages/blog"><a>Blog</a></Link>
      </nav>
    </div>
  )
}
