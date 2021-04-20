import PartCard from './../../components/part_card'
import Link from 'next/link'

const Parts = [
  {id: 1, name: 'Pi Pico', image: '/Pi_Pico.png', description: 'Base microcontroller' },
  {id: 2, name: 'Pi Touch Screen', image: '/Touch_Display.png', description: '1" monitor display' },
  {id: 3, name: 'Piff Case', image: '/Piff_Case.jpg', description: 'Symfaba brand built container' },
]

export default function product_parts_breakdown(props) {  
  return (
    <div>
      <h1>Product Parts Breakdown</h1>

      
      {Parts.map(part =>
        <div key={part.id} >
          {/* <Link href="/store_pages/store_part"> */}
            <div style={{"border": "3px black solid", "height": "250px", "width": "500px", "margin": "40px"}}>
              <div className="partCardContainer">
                <PartCard key={part.id} name={part.name} description={part.description} image={part.image} />
                {/* Be sure to show parts as a grid going forward */}
              </div>
            </div>
          {/* </Link> */}
        </div>
      )}
    </div>
  )
}
