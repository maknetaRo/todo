import React from 'react';
import { ToggleButton } from '../atoms/Buttons';
import { StyledHeader, StyledHeaderRow, Heading } from '../atoms/StyledHeader';
import EditItemForm from '../../EditItemForm';
import AddItemForm from '../../AddItemForm';

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
