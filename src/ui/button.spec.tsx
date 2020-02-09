import React from "react";
import { fireEvent, render } from "@testing-library/react";

import { Button } from "./button";

describe("[Component]: Button", function() {
  let onClick: () => void;
  beforeEach(function() {
    onClick = jest.fn();
  });

  it("should disabled onClick", function() {
    const text: string = "pitbull";
    const { getByText } = render(<Button isActive onClick={onClick} text={text} />);

    const btn = getByText(text);

    fireEvent.click(btn);

    expect(onClick).not.toHaveBeenCalled();

    // https://github.com/styled-components/jest-styled-components/issues/298
    // expect(btn).toHaveStyleRule("color", "white");
  });

  it("should handle onClick", function() {
    const text: string = "pitbull";
    const { getByText } = render(<Button onClick={onClick} text={text} />);

    fireEvent.click(getByText(text));

    expect(onClick).toHaveBeenCalled();
  });

  it("should match snapshot", function() {
    const { container } = render(<Button />);

    expect(container).toMatchSnapshot();
  });
});
