import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <h1>dkjflskjdfljsfjlskjflksdjlfkjsldkfjlksdjflsjklfsldk
        lkfmlskflsdlfklsdkflskflksdlfklsdkflsdkflsdkflsl
      </h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi voluptas adipisci expedita! Nisi alias distinctio dolorum eum quis quaerat sequi, sint obcaecati sit. Cupiditate fugit iure temporibus aperiam, maiores consequatur.
      Maiores nihil ex unde quam corporis eum facere vitae laudantium, placeat vel qui magnam optio architecto quaerat recusandae eius blanditiis ipsum vero, earum, ad alias officiis? Amet at consectetur eaque!
      Impedit labore mollitia vero, corrupti nisi perferendis voluptatem aperiam, eligendi facilis modi nemo ex rem eveniet aliquam inventore, praesentium tempore dolore nobis! Ullam distinctio aliquam illum, sequi quidem sed rerum?
      Atque perferendis illum laudantium sequi quidem eaque amet odit ab vero architecto officia accusantium impedit sunt quibusdam temporibus, porro aut quia dolorum. Tempore tempora distinctio soluta at maxime a esse.
      Doloribus, esse odit. Consequuntur temporibus exercitationem sint labore voluptate quasi omnis! Laboriosam suscipit, quasi harum natus optio porro pariatur possimus fugit nobis in aut veniam voluptatum asperiores. Fuga, laudantium quae?</p>
    </>
  )
}

export default App
