import { render, screen, fireEvent, prettyDOM } from "@testing-library/react";
import { Coin } from "../../model/Coin";
import { coins } from "../../model/Coin.mock";
import { Autocomplete, AutocompleteProps } from "./Autocomplete";

let onChange: () => void;

beforeEach(() => {
  onChange = jest.fn();
});

const renderComponent = (partialProps: Partial<AutocompleteProps<Coin>>) => {
  return render(
    <Autocomplete
      textFieldProps={{
        label: "Label",
        placeholder: "Placeholder",
      }}
      disabled={false}
      getOptionLabel={(c) => c.name}
      onChange={onChange}
      options={coins}
      values={[]}
      {...partialProps}
    />
  );
};

test("should render properly", () => {
  const { container } = renderComponent({});
  expect(container).toMatchSnapshot();
});

test("should render with selected values", () => {
  const { container } = renderComponent({
    values: [coins[0]],
  });
  expect(container).toMatchSnapshot();
});

test("should open selector on open icon click", () => {
  renderComponent({});

  const openBtn = screen.getAllByTitle("Open");
  expect(openBtn).toBeDefined();

  fireEvent.click(openBtn[0]);
  const closeBtn = screen.getAllByTitle("Close");
  expect(closeBtn).toBeDefined();
});

test("should call onChange event on clear options click", () => {
  renderComponent({
    values: [coins[0]],
  });

  const clearBtn = screen.getByTitle("Clear");
  expect(clearBtn).toBeDefined();
  expect(onChange).toBeCalledTimes(0);

  fireEvent.click(clearBtn);
  expect(onChange).toBeCalledTimes(1);
});
