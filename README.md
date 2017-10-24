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

* [/experiments/](http://localhost:3001/experiments)
* [/experiments/[experiment-id]](http://localhost:3001/experiments/1/)
* [/metrics/[metric-id]](http://localhost:3001/metrics/1/)

# Generating random sample data

[This mockaroo](https://www.mockaroo.com/schemas/82378) can help generate random
metric objects. Mockaroo doesn't support nested objects, so you'll need to
generate the "populations" object some other way.
