import React from 'react';
import './styles.css';
import MenuRow from './MenuRow';
import { FaAngleLeft, FaAngleRight, FaHeart, FaHome, FaListAlt, FaPlusSquare } from 'react-icons/fa';
import Separator from '../Separator';

interface ISideBarProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}
const SideBar: React.FC<ISideBarProps> = ({
  isOpen,
  setIsOpen
}) => {

  const OpenButton = () => {
    return (
      <button
        className='open-button'
        onClick={() => {
          setIsOpen(true);
        }}
      >
        <FaAngleRight />
      </button>
    );
  }

  const CloseButton = () => {
    return (
      <button
        className='open-button'
        onClick={() => {
          setIsOpen(false);
        }}
      >
        <FaAngleLeft />
      </button>
    );
  }

  const MenuHeader = () => {
    const homeLink = (
      <MenuRow
        leftIcon={
          <FaHome className='menu-icon' style={{ padding: '0px' }} />
        }
        href='/'
        text='Home'
        open={isOpen} />
    )
    return (
      <>
        <header className='menu-header'>
          {isOpen && homeLink}
          {isOpen ? <CloseButton /> : <OpenButton />}
        </header>
        <Separator width='100%' />
      </>
    );
  }

  return (
    <div className='menu-container' style={{ width: isOpen ? '10rem' : '' }}>
      <MenuHeader />

      <nav className='menu-nav'>
        <MenuRow
          leftIcon={<FaListAlt className='menu-icon' />}
          href='/meus-quiz'
          text='Meus Quizes'
          open={isOpen} />

        <Separator width='100%' />

        <MenuRow
          leftIcon={<FaPlusSquare className='menu-icon' />}
          href='/adicionar'
          text='Adicionar'
          open={isOpen} />

        <Separator width='100%' />

        <MenuRow
          leftIcon={<FaHeart className='menu-icon' />}
          href='/favoritos'
          text='Favoritos'
          open={isOpen} />
      </nav>
    </div>
  );
};

export default SideBar;
