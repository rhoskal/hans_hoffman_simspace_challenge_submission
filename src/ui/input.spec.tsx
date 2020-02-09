import React from "react";
import { fireEvent, render } from "@testing-library/react";

import { Input } from "./input";

describe("[Component]: Input", function() {
  // eslint-disable-next-line no-undef
  let onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  beforeEach(function() {
    onChange = jest.fn();
  });

  it("should handle onChange", function() {
    const name = "test-input";
    const { getByPlaceholderText } = render(<Input onChange={onChange} name={name} value="" />);

    const inputNode = getByPlaceholderText("Search");
    fireEvent.change(inputNode, { target: { value: "asdf" } });

    expect(onChange).toHaveBeenCalled();
  });

  it("should match snapshot", function() {
    const { container } = render(<Input name="test-input" />);

    expect(container).toMatchSnapshot();
  });
});
