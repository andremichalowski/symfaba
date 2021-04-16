import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.scss'
import ProductCard from '../components/product_card'
import axios from 'axios'

const Products = [
  {
    id: 1, 
    name: 'Piff', 
    image: 'Piff.png', 
    description: 'Insert Piff info here',
    parts: [
      {id: 1, name: 'Pi Pico', image: 'Pi_Pico.png', description: 'Base microcontroller' },
      {id: 2, name: 'Pi Touch Screen', image: 'Touch_Screen.jpg', description: '1" monitor display' },
      {id: 3, name: 'Piff Case', image: 'Piff_Case.jpg', description: 'Symfaba brand built container' },
    ],
  },
  {id: 2, name: 'Pi Camera', image: 'Pi_Camera.png', description: 'Insert Pi Camera info here'},
  {id: 3, name: 'Audio Explorer', image: 'Audio_Explorer.png', description: 'Insert Audio Explorer info here'},
]

const HomeProducts = () => {
  // const [homeProductsData, setHomeProductsData] = setState([]);

  // useEffect(() => {
  //   axios
  //     .get('https://localhost:3000')
  //     .then(res => {
  //       console.log(res.data.results);
  //       // setHomeProductsData(res.data.results);
  //     })
  //     .catch(err => {
  //       console.log('404 HomeProducts Error', err);
  //     })
  // }, [])

  return (
    
    <div >

     {/* <Head>
       <title>Create Next App</title>
       <link rel="icon" href="/favicon.ico" />
     </Head> */}

     {/* <products className={styles.products}>
       <h1> Home Products (Apple Display)</h1>
     </products> */}
        

        {Products.map(products =>
          <div key={products.id} >
            <Link href="/store_pages/store_product" >
              <div style={{"height": "300px", "width": "800px", "margin": "10px", "padding": "0px 3rem"}}>
                <ProductCard key={products.id} name={products.name} description={products.description} image={products.image} />
              </div>
            </Link>
          </div>
        )}

    
    </div>
  )
}

export default HomeProducts;