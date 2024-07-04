import './app.css'
// import Router from './routes/Router'
import Router from 'preact-router';
import Homeview from './views/Homeview';
import DetailPage from './views/DetailPage.jsx';
export function App() {
  return (
    <main>
      <Homeview />
      {/* <Router>
        <Homeview path="/" />
        <DetailPage path="/:id" />
      </Router> */}
    </main>
  )
}
