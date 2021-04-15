

const Parts = [
  {id: 1, name: 'Pi Pico', image: 'Pi_Pico.png', description: 'Base microcontroller' },
  {id: 2, name: 'Pi Touch Screen', image: 'Touch_Screen.jpg', description: '1" monitor display' },
  {id: 3, name: 'Piff Case', image: 'Piff_Case.jpg', description: 'Symfaba brand built container' },
]

export default function product_parts_breakdown(props) {  
  return (
    <div>
      <h1>Product Parts Breakdown</h1>

      
      {/* {Parts.map(post =>
      <div key={post.id} >
        <Link href="/store_pages/store_product">
          <div style={{"border": "3px black solid", "height": "200px", "width": "500px", "margin": "10px"}}>
          <PartCard key={post.id} name={post.name} description={post.description} image={post.image} />
          </div>
        </Link>
      </div>
      )} */}
    </div>
  )
}
