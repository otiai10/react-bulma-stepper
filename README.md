[![Latest Stable Version](https://img.shields.io/npm/v/react-bulma-stepper.svg)](https://www.npmjs.com/package/react-bulma-stepper)

```js
import React from 'react';
import 'bulma';

import {Stepper, Step} from 'react-bulma-stepper';

export default class MyStepper extends React.Component {
  render() {
    return (
      <Stepper step={this.props.currentStep}>
        <Step step={1} title="At first"    />
        <Step step={2} title="At second"   />
        <Step step={3} title="At the last" />
      </Stepper>
    )
  }
}
```
