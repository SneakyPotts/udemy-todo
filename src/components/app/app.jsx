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
      ]
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

  onToggleIncrease = (id) => {
    this.setState(({data}) => ({
      data: data.map(item => {
        if (item.id === id) {
          return {...item, increase: !item.increase}
        }
        return item;
      })
    }))
  }
  onToggleLike = (id) => {
    console.log(`Like ${id}`)
  }

  render() {
    return (
      <div className='app'>
        <AppInfo/>

        <div className="search-panel">
          <SearchPanel/>
          <AppFilter/>
        </div>

        <EmployeesList
          data={this.state.data}
          onDelete={this.deleteItem}
          onToggleIncrease={this.onToggleIncrease}
          onToggleLike={this.onToggleLike}
        />

        <EmployeesAddForm
          addItem={this.addItem}
        />
      </div>
    );
  }
}

export default App;