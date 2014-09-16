Karma does not reconnect browsers
=================================

Tested on OS X 10.9.

Run:

    npm install
    ./node_modules/karma/bin/karma start

Connect a few browsers to http://localhost:9876/.

In a new terminal, run:

    ./node_modules/karma/bin/karma run

This should succeed. Now restart the Karma server in the first terminal using Ctrl-C and re-running the start command. I'd expect the browsers to get reconnected automatically (as seen in http://www.letscodejavascript.com/v3/episodes/espresso/134), but they don't reconnect.
