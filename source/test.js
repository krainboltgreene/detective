/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type */
import {test} from "tap"

import something from "./"

test(({same, end}) => {
  same(
    something(),
    true
  )

  end()
})
