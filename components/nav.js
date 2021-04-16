import Link from 'next/link'

export default function Nav() {
  return (
    <div >
      <nav style={{"margin": "20px"}}>
        <div class="image_container">
          <Link href="/">
            <img src="/logo1.jpg" alt="symfaba_logo" style={{"width": "10rem"}} />
          </Link>
        </div>
        <br/>
        <Link href="/store_pages/store_all"><a>store</a></Link>
        <br/>
        <Link href="/accessory_pages/articles"><a>articles</a></Link>
        <br/>
        <Link href="/accessory_pages/about"><a>about</a></Link>
        <br/>
        <Link href="/accessory_pages/blog"><a>blog</a></Link>
      </nav>
    </div>  
  )
}
