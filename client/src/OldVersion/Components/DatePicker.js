import React, { useState } from "react";
import DateFnsUtils from "@date-io/date-fns";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";

const DatePickerComponent = (props) => {
  const { filterByDate, label, view, format, filterByMonth } = props;
  const [selectedDate, handleDateChange] = useState(new Date());

  function byDate(event) {
    handleDateChange(event);
    const pickedDate = new Date(event).toLocaleDateString();
    filterByDate(pickedDate);
  }

  function byMonth(event) {
    handleDateChange(event);
    const pickedMonth = new Date(event).getMonth();
    filterByMonth(pickedMonth);
  }

  return (
    <div className="container m-3">
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        {view === "month" ? (
          <DatePicker
            autoOk
            views={[view]}
            label={label}
            format={format}
            disableFuture
            value={selectedDate}
            onChange={(e) => byMonth(e)}
          />
        ) : (
          <DatePicker
            autoOk
            label={label}
            format={format}
            disableFuture
            value={selectedDate}
            onChange={(e) => byDate(e)}
          />
        )}
      </MuiPickersUtilsProvider>
    </div>
  );
};

export default DatePickerComponent;
