import Link from 'next/link'
import Image from 'next/image'
import logo1 from '../public/logo1.jpg'

export default function Nav() {
  return (
    <div >
      <nav style={{"margin": "20px"}}>
        <div class="image_container">
          <Image 
            src={logo1}
            alt="Picture of the author"
            width={100}
            height={150}
          />
        </div>
        <br/>
        <Link href="/store_pages/product"><a>Products</a></Link>
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
