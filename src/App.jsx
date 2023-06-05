import Card from "./components/Card";

function App(){

  let cards = []

  for (let index = 0; index < 5; index++) {
      cards.push(
        <Card detail={{ 
          title:'reza',
          imgUrl: 'https://picsum.photos/600/200',
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex voluptates, perspiciatis amet repudiandae dolor, est ratione vitae hic sed a facere. Sunt dicta explicabo aliquid a, ducimus laborum quam itaque.'
          }}/>
      )
  }
  
  return (
    <div>
      <div className="wrapper mt-10">
        <div className="grid grid-cols-2 gap-4">
          {cards}
        </div>
      </div>
    </div>
  )
}

export default App;