import React from "react";
import { render } from "@testing-library/react";

import { Loading } from "./loading";

describe("[Component]: Loading", function() {
  it("should match snapshot", function() {
    const { container } = render(<Loading />);

    expect(container).toMatchSnapshot();
  });
});
