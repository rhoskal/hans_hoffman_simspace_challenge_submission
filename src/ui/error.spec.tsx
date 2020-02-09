import React from "react";
import { render } from "@testing-library/react";

import { Error } from "./error";

describe("[Component]: Error", function() {
  it("should allow custom error message", function() {
    const msg: string = "No breeds were found.";
    const { getByText } = render(<Error message={msg} />);

    getByText(msg);
  });

  it("should match snapshot", function() {
    const { container } = render(<Error />);

    expect(container).toMatchSnapshot();
  });
});
