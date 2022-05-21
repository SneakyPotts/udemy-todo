import './app-filter.css';


const AppFilter = ({onFilterSelect, filter}) => {
  const buttonsData = [
    {name: 'Все сотрудники', filter: 'all', id: 1},
    {name: 'На повышение', filter: 'like', id: 2},
    {name: 'З/П больше 1000$', filter: '1000', id: 3},
  ];

  const updateFilter = (e) => {
    onFilterSelect(e.target.dataset.filter);
  }

  const buttons = buttonsData.map(item => {
    const clazz = filter === item.filter ? "btn-light" : "btn-outline-light";

    return (
      <button
        className={`btn ${clazz}`}
        type='button'
        data-filter={item.filter}
        onClick={updateFilter}
        key={item.id}
      >{item.name}
      </button>
    )
  });

  return (
    <div className='btn-group'>
      {buttons}
    </div>
  );
}

export default AppFilter;