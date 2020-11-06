import React from "react";
import { DateRangePicker } from "materialui-daterange-picker";

const RangePicker = (props) => {
  const { filterByPeriod } = props;
  const [open, setOpen] = React.useState(false);
  const [dateRange, setDateRange] = React.useState({});

  const toggle = () => {
    setOpen(!open);
  };

  function Selected(ev) {
    console.log("selected: " + Object.entries(ev));

    let from;
    let to;

    if (
      Object.values(ev)[0] === "This Month" ||
      Object.values(ev)[0] === "Last Month"
    ) {
      from = new Date(Object.values(ev)[1]).toLocaleDateString();
      to = new Date(Object.values(ev)[2]).toLocaleDateString();
    } else {
      from = new Date(Object.values(ev)[0]).toLocaleDateString();
      to = new Date(Object.values(ev)[1]).toLocaleDateString();
    }

    // console.log("from: " + typeof from);
    // console.log("to: " + typeof to);
    let range = {
      from: from,
      to: to,
    };
    filterByPeriod(range);
    setDateRange(ev);
  }
  return (
    <div className="container m-3">
      <button className="btn btn-outline-info" onClick={() => toggle()}>
        Open calendar
      </button>
      <DateRangePicker
        open={open}
        toggle={toggle}
        onChange={(range) => Selected(range)}
      />
    </div>
  );
};

export default RangePicker;
