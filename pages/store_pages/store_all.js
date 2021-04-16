import Link from 'next/link'
export default function store_all() {
  return (
    <div>
      <h1>Store (all) </h1>

      <Link href="/store_pages/store_products"><h2>Products</h2></Link>
        <Link href="/store_pages/store_product"><h3>Product 1</h3></Link>
        <h3>Product 2 </h3>
        <h3>Product 3 </h3>
        <h3>Product 4 </h3>
          
      <Link href="/store_pages/store_parts"><h2>Parts</h2></Link>
        <Link href="/store_pages/store_part"><h3>Part 1</h3></Link>
        <h3>Part 2</h3>
        <h3>Part 3</h3>
        <h3>Part 4</h3>
        <h3>Part 5</h3>
    </div>
  )
}
