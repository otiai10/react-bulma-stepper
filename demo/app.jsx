import React from 'react';
import ReactDOM from 'react-dom';

import 'bulma';

// import {Stepper, Step} from 'react-bulma-stepper';
import {Stepper, Step} from '../lib';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
    };
  }
  render() {
    return (
      <div>
        <section className="hero is-primary">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">react-bulma-stepper</h1>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="columns">
              <div className="column">
                <Stepper step={this.state.step}>
                  <Step step={1} title="Do something first" />
                  <Step step={2} title="Do something second"/>
                  <Step step={3} title="Do something third"/>
                  <Step step={4} title="Do something last"/>
                </Stepper>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="columns">
              <div className="column">
                <code>step: {this.state.step}</code>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="columns">
              <div className="column">
                <div className="block">
                  <a
                    className="button is-outlined"
                    onClick={() => this.setState({step: this.state.step - 1})}
                  >Back</a> <a
                    className="button is-outlined is-primary"
                    onClick={() => this.setState({step: this.state.step + 1})}
                  >Next</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('main'));
