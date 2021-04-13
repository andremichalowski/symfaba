import Link from 'next/link'

export default function Nav() {
  return (
    <div >
      <nav style={{"margin": "20px"}}>
        <div class="image_container">
          <img src="/logo1.jpg" alt="symfaba_logo" style={{"width": "100px"}} />
        </div>
        <br/>
        <Link href="/store_pages/store_products"><a>Products</a></Link>
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
