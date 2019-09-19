```Kachnar```


[![npm version](https://badge.fury.io/js/kachnar.svg)](https://badge.fury.io/js/kachnar)

Kachnar is library of reusable component, that can be used in React 16.8

This is in under development version 1.0.0 will be available soon.

Find Example: https://sachin32.github.io/kachnar/

``` npm install --save kachnar```

### Components

##### Button

###### Es 5
``` 
const Kachnar = require('kachnar');
const Button = Kachnar.Button; 
```

###### Es 6
```
import { Button } from 'kachnar';
```

###### Example
```
<Button {...props}>
    Submit
</Button>
```

###### Props

| Props | Default Value | Description |
|-------|---------------|------------|
| primary | false       | Show button in blue color|
| success | false       | Show button in success color green|
| error  | false        | Show button in error color red|
| warn   | false        | Show button in warn color yellow|
| info  |  false        | show button in info color blue |
| micro | false       | Font size 10px |
| mini | false       | Font size 12px |
| small  | false        | Font size 14px |
| big   | false        | Font size 16px |
| xbig  |  false        | Font size 18px |

