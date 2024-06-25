import './App.css'
import UserList from './Pages/UserList'
import store from './Redux/Store'

function App() {

  return (
    <>
    <Provider store={store}>
      <UserList />
      </Provider>
    </>
  )
}

export default App
