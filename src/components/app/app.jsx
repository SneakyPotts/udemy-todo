import './app.css'
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add.form";
import {Component} from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {name: 'Alexey Sheptura', salary: 800, increase: false, like: true, id: 1},
        {name: 'Oleh Frolow', salary: 600, increase: false, like: false, id: 2},
        {name: 'Vitaliy Hoyda', salary: 1200, increase: true, like: false, id: 3},
      ],
      term: ''
    };
    this.maxId = 4;
  }

  deleteItem = (id) => {
    this.setState(({data}) => {
      return {
        data: data.filter(item => item.id !== id)
      }
    })
  }

  addItem = (name, salary) => {
    const newItem = {
      name,
      salary,
      increase: false,
      like: false,
      id: this.maxId++
    }

    this.setState(({data}) => {
      return {
        data: [...data, newItem]
      }
    })
  }

  onToggleProp = (id, prop) => {
    this.setState(({data}) => ({
      data: data.map(item => {
        if (item.id === id) {
          return {...item, [prop]: !item[prop]}
        }
        return item;
      })
    }))
  }

  searchEmployee = (items, term) => {
    if (term.length === 0)
      return items;

    return items.filter(item => item.name.indexOf(term) > -1);
  }

  onUpdateSearch = (term) => {
    this.setState({term});
  }

  render() {
    const {data, term} = this.state;
    const employees = this.state.data.length;
    const increased = this.state.data.filter(item => item.increase === true).length;

    const visibleData = this.searchEmployee(data, term);

    return (
      <div className='app'>
        <AppInfo
          employees={employees}
          encreased={increased}
        />

        <div className="search-panel">
          <SearchPanel
            onUpdateSearch={this.onUpdateSearch}
          />
          <AppFilter/>
        </div>

        <EmployeesList
          data={visibleData}
          onDelete={this.deleteItem}
          onToggleProp={this.onToggleProp}
        />

        <EmployeesAddForm
          addItem={this.addItem}
        />
      </div>
    );
  }
}

export default App;