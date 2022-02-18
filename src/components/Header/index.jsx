import React from 'react';
import { ToggleButton } from '../Button';
import { StyledHeader, StyledHeaderRow, Heading } from './styles';
import EditItemForm from '../Form/EditItemForm';
import AddItemForm from '../Form/AddItemForm';

const Header = ({
  toggleTheme,
  icon,
  currentTodo,
  updateTodo,
  setIsEditing,
  addTodo,
  isEditing,
}) => {
  return (
    <StyledHeader>
      <StyledHeaderRow>
        <Heading>TODO</Heading>
        <ToggleButton onClick={toggleTheme}>{icon}</ToggleButton>
      </StyledHeaderRow>
      {isEditing ? (
        <EditItemForm
          currentTodo={currentTodo}
          updateTodo={updateTodo}
          setIsEditing={setIsEditing}
        />
      ) : (
        <AddItemForm addTodo={addTodo} />
      )}
    </StyledHeader>
  );
};

export default Header;
