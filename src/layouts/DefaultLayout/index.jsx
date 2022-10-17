import { Outlet } from 'react-router-dom'
import { Header } from "../../components/Header/index";
import { LayoutContainer } from './styles';

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header countCoffee={'5'} />
      <Outlet />
    </LayoutContainer>
  )
}