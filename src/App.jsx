import { Kanban } from './components/Kanban'
import { Nav } from './components/Nav'
function App() {

  return (
    <>
   <div className="fixed top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#1f1f1f_1px)] bg-[size:20px_20px]"> </div>
      <Nav/>
  
      <Kanban/>

   
    </>
  )
}

export default App
