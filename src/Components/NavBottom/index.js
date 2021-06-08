import { useState } from 'react';
import { ContainerButton, ButtonSelect, Icon, Name } from './styles';

export default function NavBottom({ options, functions, action }) {
  const [menuItem, setMenuItem] = useState({
    activeItem: options[0],
    item: options,
  });

  function toggleActiveItem(index) {
    setMenuItem({ ...menuItem, activeItem: menuItem.item[index] });
  }

  function toggleActiveItemSelected(index) {
    if (menuItem.item[index] === menuItem.activeItem) {
      return 'ativo';
    }
    return '';
  }

  return (
    <ContainerButton>
      {options.map((elements, index) => (
        <ButtonSelect
          key={index}
          className={toggleActiveItemSelected(index)}
          onClick={() => {
            toggleActiveItem(index);
            action(functions[index]);
          }}
        >
          <Icon>{elements.icon}</Icon>
          <Name>{elements.name}</Name>
        </ButtonSelect>
      ))}
    </ContainerButton>
  );
}
