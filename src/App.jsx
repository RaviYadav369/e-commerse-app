import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Layout from './components/Layout'
import Login from './page/Login'
import Home from './page/Home'
import Cart from './page/Cart'
import { Provider } from 'react-redux'
import {store} from "./store"


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='/cart' index element={<Cart />} />
      <Route path='/login' index element={<Login />} />
    </Route>
  )
)

function App() {

  return (
    <Provider store={store}>
      <RouterProvider router={router} />

    </Provider>
  )
}

export default App
