This is a mock API for use with the [Firefox Test Tube](https://github.com/openjck/firefox-test-tube)
project.

# Usage instructions

## Install

1. Install yarn
2. Run `yarn`

## Run

Run `yarn start`

# Example API output

The mock API provides the following endpoints. After starting the server, follow
the links to see some example output.

* [/experiments/](http://localhost:3001/experiments/)
* [/experiments/[experiment-id]/](http://localhost:3001/experiments/1/)
* [/experiments/[experiment-id]/metrics/[metric-id]/](http://localhost:3001/experiments/1/metrics/1/)
    * NOTE: In the real world, changing the value of *experiment-id* in this
      last URL would have an effect. The data that is returned would be unique
      to that combination of *experiment-id* and *metric-id*. In this mock API,
      for the sake of simplicity, *experiment-id* has no effect in this last
      URL. In other words, in the real world, */experiments/4/metric/15* and
      */experiments/92/metric/15* would return different data. In this mock API,
      they don't. It's a long story, but it was a lot easier to write this way.

# Generating random sample data

[This mockaroo](https://www.mockaroo.com/schemas/82378) can help generate random
metric objects. Mockaroo doesn't support nested objects, so you'll need to
generate the "populations" object some other way.
