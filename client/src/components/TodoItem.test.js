import { render, cleanup } from "@testing-library/react";
import TodoItem from "./TodoItem";

afterEach(cleanup);

test("todo item renders correctly", () => {
  const { getByTestId } = render(
    <TodoItem
      item={{ status: true, task: "todo 1", _id: "123" }}
      onCheck={() => {
        return null;
      }}
      onRemove={() => {
        return null;
      }}
      onUndo={() => {
        return null;
      }}
    />
  );
  expect(getByTestId("todo-item")).toHaveTextContent("todo 1");
});
