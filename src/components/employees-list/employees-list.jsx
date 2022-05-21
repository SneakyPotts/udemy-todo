import './employees-list.css';
import EmployeesListItem from "../employees-list-item/employees-list-item";

const EmployeesList = ({data, onDelete, onToggleIncrease, onToggleLike}) => {
  return (
    <ul className='app-list list-group'>
      {data.map(({id, ...itemProps}) =>
        <EmployeesListItem
          key={id}
          {...itemProps}
          onDelete={() => onDelete(id)}
          onToggleIncrease={() => onToggleIncrease(id)}
          onToggleLike={() => onToggleLike(id)}
        />
      )}
    </ul>
  );
};

export default EmployeesList;