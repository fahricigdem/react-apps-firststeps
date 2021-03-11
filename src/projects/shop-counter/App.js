import React, { Component } from 'react';
import NavBar from './components/navbar';
import Counters from './components/counters';

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0, titel: "shoe" },
      { id: 2, value: 0, titel: "hose" },
      { id: 3, value: 3, titel: "pencil" },
      { id: 4, value: 1, titel: "book" },
      { id: 5, value: 4, titel: "bag" }
    ],
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters]
    const index = counters.indexOf(counter)
    counters[index] = { ...counter }
    counters[index].value++
    this.setState({ counters })
  }

  handleDecrement = (counter) => {
    const counters = [...this.state.counters]
    const index = counters.indexOf(counter)
    counters[index] = { ...counter }
	if (counters[index].value !== 0){
			    counters[index].value--
	}
    this.setState({ counters })
  }

  handleReset = () => {
    const counters = this.state.counters.map(c => { c.value = 0; return c });
	//const counters = [...this.state.counters]
	//for (var i in counters){counters[i].value = 0;};
	//or
	//counters.map(c=>{c.value=0;return c})
    this.setState({ counters })
  }

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };
  
    handleDeleteAll = () => {
    const counters = this.state.counters.filter((c) => c.value === -1);
    this.setState({ counters });
  };
  
    handleClear = () => {
    const counters = this.state.counters.filter((c) => c.value !== 0);
    this.setState({ counters });
  };
  
  render() {
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter(c => c.value !== 0).length}
        />
        <main className="container">
          <Counters
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
			onDecrement={this.handleDecrement}
            onReset={this.handleReset}
			onClear={this.handleClear}
			onDeleteAll={this.handleDeleteAll}
            counters={this.state.counters}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
