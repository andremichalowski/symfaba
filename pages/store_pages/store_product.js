// import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/Home.module.scss'

export default function StoreProduct() {
  return (
    <div className={styles.container}>
      
      <products className={styles.products}>
        <h1>Store Product</h1>

        <Link href="/store_pages/product_parts_breakdown"><h3>Product Parts Breakdown</h3></Link>
      </products>

    </div>
  )
}
