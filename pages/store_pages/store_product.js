// import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/Home.module.scss'
import ProductCard from '../../components/product_parts_breakdown'

export default function StoreProduct(props) {
  return (
    <div className={styles.container}>
      
      <products className={styles.products}>
        <h1>Store Product</h1>
          {/* <ProductCard name={props.name} image={props.image} description={props.description} /> */}







          <Link href="/product_parts_breakdown">
            Product Parts
          </Link>
      </products>

    </div>
  )
}
