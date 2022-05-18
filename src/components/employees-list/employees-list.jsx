import './employees-list.css';
import EmployeesListItem from "../employees-list-item/employees-list-item";

const EmployeesList = () => {
  return (
    <ul className='app-list list-group'>
      <EmployeesListItem name="Alexey Sheptura" salary={800}/>
      <EmployeesListItem name="Oleh Frolow" salary={600}/>
      <EmployeesListItem name="Vitaliy Hoida" salary={1200}/>
    </ul>
  );
};

export default EmployeesList;