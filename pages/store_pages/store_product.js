// import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/Home.module.scss'
import ProductCard from './product_parts_breakdown'

export default function StoreProduct(props) {
  return (
    <div className={styles.container}>
      
      <products className={styles.products}>
        <h1>Store Product</h1>
          {/* <ProductCard name={props.name} image={props.image} description={props.description} /> */}

        <img style={{"height":"200px"}} src="/Piff.png"></img>


          <Link href="/store_pages/product_parts_breakdown">
            <a>
            Product Parts
            </a>
          </Link>
      </products>

    </div>
  )
}
