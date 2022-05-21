import './search-panel.css';
import {Component} from "react";

class SearchPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }
  }

  onUpdateSearchInPanel = (e) => {
    const term = e.target.value;
    this.setState({term});
    this.props.onUpdateSearch(term);
  }

  render() {
    return (
      <input
        type="text"
        className="form-control"
        placeholder="Найти сотрудника"
        value={this.state.term}
        onChange={this.onUpdateSearchInPanel}
      />
    );
  }
}

export default SearchPanel;