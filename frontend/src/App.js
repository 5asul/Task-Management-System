// App.js (example)
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import TasksPage from './pages/TasksPage'
import NewTaskPage from './pages/NewTaskPage'
import Home from './pages/Home'

function App() {
  return (
    <BrowserRouter>
      <div style={{ display: 'flex' }}>
        <Navbar />
        <div style={{ flex: 1, padding: '20px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tasks" element={<TasksPage />} />
            <Route path="/new" element={<NewTaskPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
















// import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Home from './pages/Home';
// import Navbar from './components/Navbar';

// function App() {
//   return (
//     <div className="App">
//       <BrowserRouter>
//       <Navbar />
//         <Routes>
//           <Route path="/" element={<Home/>} />
        
//         </Routes>
//       </BrowserRouter>
 
//     </div>
//   );
// }

// export default App;
