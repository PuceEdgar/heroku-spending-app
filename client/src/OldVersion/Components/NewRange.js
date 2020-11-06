import * as React from "react";
import TextField from "@material-ui/core/TextField";
import {
  DatePicker,
  DateRangeDelimiter,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";

import { DateRangePicker } from "materialui-daterange-picker";

export default function BasicDateRangePicker() {
  const [value, setValue] = React.useState([null, null]);

  return (
    <DateRangePicker
      startText="Check-in"
      endText="Check-out"
      value={value}
      onChange={(newValue) => setValue(newValue)}
      renderInput={(startProps, endProps) => (
        <React.Fragment>
          <TextField {...startProps} />
          <DateRangeDelimiter> to </DateRangeDelimiter>
          <TextField {...endProps} />
        </React.Fragment>
      )}
    />
  );
}
