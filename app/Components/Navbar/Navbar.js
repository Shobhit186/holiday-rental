'use client';
import Container from '../Container'
import Logo from './Logo'
import Search from './Search'
import UserMenus from './UserMenus'
import Categories from './Categories';

const Navbar = ({currentUser}) => {
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
        <div className='py-4 border-b-[1px] border-gray-200'>
            <Container>
                <div className='flex flex-row items-center justify-between gap-3 md:gap-0'>
                     <Logo />
                     <Search />
                     <UserMenus currentUser = {currentUser} />
                </div>
            </Container>
            <Categories />
        </div>
    </div>
  )
}

export default Navbar