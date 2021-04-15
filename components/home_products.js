import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.scss'
import ProductCard from '../components/product_card'

const Projects = [
  {id: 1, name: 'Piff', image: 'Piff.png', description: 'Insert Piff info here'},
  {id: 2, name: 'Pi Camera', image: 'Pi_Camera.png', description: 'Insert Pi Camera info here'},
  {id: 3, name: 'Audio Explorer', image: 'Audio_Explorer.png', description: 'Insert Audio Explorer info here'},
]

const HomeProducts = () => {
  // const [homeProductsData, setHomeProductsData] = setState([]);

  // useEffect(() => {
  //   axios
  //     .get('https://...')
  //     .then(res => {
  //       // console.log(res.data.results);
  //       setHomeProductsData(res.data.results);
  //     })
  //     .catch(err => {
  //       console.log('404 HomeProducts Error', err);
  //     })
  // }, [])

  return (
    
    <div className={styles.container}>

     <Head>
       <title>Create Next App</title>
       <link rel="icon" href="/favicon.ico" />
     </Head>

     <products className={styles.products}>
       <h1> Home Products (Apple Display)</h1>
     </products>
        
        {/* {Projects.map((name, id) => {
          return (
            <ProductCard key={id} name={name} />
            // <h1>Test</h1>
          );
        })} */}

        {Projects.map(post =>
          <div key={post.id} >
            <Link href="/store_pages/store_product">
              <div style={{"border": "3px black solid", "height": "200px", "width": "500px", "margin": "10px"}}>
              <ProductCard key={post.id} name={post.name} description={post.description} image={post.image} />
              </div>
            </Link>

          </div>
        )}

    
    </div>
  )
}

export default HomeProducts;