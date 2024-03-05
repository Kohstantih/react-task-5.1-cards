import image from './assets/react.svg'
import Card from './components/Card'
import './App.css'

function App() {
  const firstTitle = 'First Title'
  const firstText = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde, aliquid exercitationem.'
  
  const secondTitle = 'Second Title'
  const secondText = 'Ipsa hic soluta aliquid ipsum, sequi sapiente voluptatibus velit facere perferendis.'
  
  return (
    <>
      <Card
        children={<img src={image} className="card-img-top" alt="Изображение"/>}
        title={firstTitle}
        text={firstText}
      />
      <Card
        title={secondTitle}
        text={secondText}
      />
    </>
  )
}

export default App
