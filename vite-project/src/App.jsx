import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ItemCard from './Components/ItemCard';
import ProgRess from './Components/ProgRess';
import Cards from './Components/Cards';
import Practice from './Components/Practice';

function App() {

  return (
    <>
    <ProgRess />
    <Practice />
     <ItemCard />
     <div className='container'>
      <div className="row">
     <Cards src="https://cdn2.unrealengine.com/egs-rocketleague-psyonixllc-g1a-00-1920x1080-acc5246faf36.jpg?h=270&quality=medium&resize=1&w=480" title="ROCKET LEAGUE" description="Rocket League | Download & Play Rocket League for Free on PC" click="Play now"/>
     <Cards src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi50iXLT0LBxu9bMuaNkUIMOWNUaUKnTtDDg&usqp=CAU" title="UNDAWN" description="Undawn | Download & Play Undawn for Free on PC" click="Play now"/>
     <Cards src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLXo8IIa-5OGx77W64oURfgOIm5A32_VK-iw&usqp=CAU" title="MINE CRAFT" description="Mine Craft | Download & Play Mine Craft for Free on PC" click="Play now"/>
     <Cards src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTjegl0ao1NfFpktOAhgTUuxz-Rz2AcGRkzA&usqp=CAU" title="BATTLE FIELD" description="Battle Field | Download & Play Battle Field for Free on PC" click="Play now"/>
     <Cards src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0DdVQFI3IdOkhMXxrEeVNRdE2cF_aK5IpuWPqDbchUAzND0AWbeA4bhV1VR88yJEgjk8&usqp=CAU" title="2FA" description="2FA | Download & Play 2FA for Free on PC" click="Play now"/>
     <Cards src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1bJ4cba45lWLwzIEOwXsAs8-OUPXwRXfWWyalFGG6usHAW0Ky26KBbnIB6ykwL9ZseuM&usqp=CAU" title="STREET FIGHTER" description="Street Fighter | Download & Street Fighter League for Free on PC" click="Play now"/>
     </div>
     </div>
    </>
  )
}

export default App
