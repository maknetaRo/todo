import React from 'react';
import { useTodoContext } from '../../contexts/TodoContextProvider';
import { ToggleButton } from '../Button';
import { StyledHeader, StyledHeaderRow, Heading } from './styles';
import EditItemForm from '../Form/EditItemForm';
import AddItemForm from '../Form/AddItemForm';

const Header = ({ toggleTheme, icon }) => {
  const { isEditing } = useTodoContext();
  return (
    <StyledHeader>
      <StyledHeaderRow>
        <Heading>TODO</Heading>
        <ToggleButton onClick={toggleTheme}>{icon}</ToggleButton>
      </StyledHeaderRow>
      {isEditing ? <EditItemForm /> : <AddItemForm />}
    </StyledHeader>
  );
};

export default Header;
