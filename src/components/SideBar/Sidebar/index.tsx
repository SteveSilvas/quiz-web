import React from 'react';
import NavRow from '../NavRow';
import { FaHeart, FaListAlt, FaPlusSquare } from 'react-icons/fa';
import Separator from '../../Separator';
import { IconFaHomeStyled, SidebarStyled } from './styles';
import NavHeader from '../NavHeader';

interface ISideBarProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}
const SideBar: React.FC<ISideBarProps> = ({
  isOpen,
  setIsOpen
}) => {

  return (
    <SidebarStyled $width={isOpen ? '10rem' : '4rem'}>
      <NavHeader isOpen={isOpen} setIsOpen={setIsOpen} />
      
      <NavRow
        leftIcon={
          <IconFaHomeStyled />
        }
        href='/'
        text='Home'
        open={isOpen} />

      <NavRow
        leftIcon={<FaListAlt className='menu-icon' />}
        href='/meus-quiz'
        text='Meus Quizes'
        open={isOpen} />

      <Separator width='100%' />

      <NavRow
        leftIcon={<FaPlusSquare className='menu-icon' />}
        href='/adicionar'
        text='Adicionar'
        open={isOpen} />

      <Separator width='100%' />

      <NavRow
        leftIcon={<FaHeart className='menu-icon' />}
        href='/favoritos'
        text='Favoritos'
        open={isOpen} />

    </SidebarStyled>
  );
};

export default SideBar;
