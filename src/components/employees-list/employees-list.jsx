import './employees-list.css';
import EmployeesListItem from "../employees-list-item/employees-list-item";

const EmployeesList = ({data, onDelete, onToggleProp}) => {
  return (
    <ul className='app-list list-group'>
      {data.map(({id, ...itemProps}) =>
        <EmployeesListItem
          key={id}
          {...itemProps}
          onDelete={() => onDelete(id)}
          onToggleProp={(e) => onToggleProp(id, e.currentTarget.dataset.toggle)}
        />
      )}
    </ul>
  );
};

export default EmployeesList;