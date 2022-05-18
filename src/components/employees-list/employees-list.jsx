import './employees-list.css';
import EmployeesListItem from "../employees-list-item/employees-list-item";

const EmployeesList = ({data}) => {
  return (
    <ul className='app-list list-group'>
      {data.map(({id, ...itemProps}) =>
        <EmployeesListItem key={id} {...itemProps}/>
      )}
    </ul>
  );
};

export default EmployeesList;