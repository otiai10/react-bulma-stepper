import React, {Component,PropTypes} from 'react';

const DONE = 0;
const NOW  = 1;
const YET  = 2;

class Pathway extends Component {
  render() {
    const styles = {
      outline: {
        flex:              1,
        display:      'flex',
        alignItems: 'center',
      },
      line: {
        display: 'inline-block',
        height:           '1px',
        flex:                 1,
        margin:        '0 16px',
      }
    };
    return (
      <div style={styles.outline}>
        <hr style={styles.line} />
      </div>
    );
  }
}

export class Stepper extends Component {
  decorateStep(step) {
    return React.cloneElement(step, {
      status: this.getStepStatus(step),
    });
  }
  getStepStatus(step) {
    if (step.props.step < this.props.step) return DONE;
    if (step.props.step > this.props.step) return YET;
    return NOW;
  }
  getChildren() {
    if (!Array.isArray(this.props.children)) return this.props.children;
    if (typeof this.props.children.map != 'function') return this.props.children;
    const len = this.props.children.length;
    return this.props.children
    .map((n, i) => (i == len - 1) ? [this.decorateStep(n)] : [this.decorateStep(n), <Pathway />])
    .reduce((self, node) => self.concat(node))
    .map((node, i) => React.cloneElement(node, {key: i}));
  }
  render() {
    const styles = {
      outline: {
        display:    'flex',
        alignItems: 'center',
      }
    };
    return (
      <div style={styles.outline}>
        {this.getChildren()}
      </div>
    );
  }
  static propTypes = {
    children: PropTypes.node.isRequired,
    step:     PropTypes.number.isRequired,
  }
}

export class Step extends Component {
  getLabelClassName() {
    switch(this.props.status){
    case DONE: return 'tag is-primary';
    case NOW:  return 'tag is-primary';
    default:   return 'tag is-light';
    }
  }
  getLabelText() {
    if (this.props.status == DONE) return '✔︎';
    return this.props.step;
  }
  getLabel() {
    const styles = {
      base: {
        width:  '20px',
        height: '20px',
        marginRight: 8,
        transition: 'all 0.4s',
      },
    };
    return <span className={this.getLabelClassName()} style={styles.base}>{this.getLabelText()}</span>;
  }
  render() {
    const styles = {
      outline: {
        display:      'flex',
        alignItems: 'center',
      },
      title: {
        // fontWeight: (this.props.status == NOW) ? 'bold' : 'normal',
        textDecoration: (this.props.status == NOW) ? 'underline' : 'none',
      }
    };
    return (
      <div style={styles.outline}>
        {this.getLabel()}
        <span style={styles.title}>{this.props.title}</span>
      </div>
    );
  }
  static propTypes = {
    step:  PropTypes.number.isRequired,
    label: PropTypes.string,
    title: PropTypes.string.isRequired,
    status: PropTypes.oneOf([DONE,NOW,YET]),
  }
}
