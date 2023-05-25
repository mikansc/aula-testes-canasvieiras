import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./Button";

/*
 * [M3S03] EX01 - Criar um componente 'Botão' que receba uma label utilizando TDD
 */

describe("Testando o componente Button", () => {
  test("Renderizando o botão na tela", () => {
    render(<Button />);
    const buttonHtmlElement = screen.getByRole("button");
    expect(buttonHtmlElement).toBeInTheDocument();
  });

  test(`Exibindo label 'Meu botão' no componente <Button/>`, () => {
    render(<Button label="Meu botão" />);

    const labelText = screen.queryByText("Meu botão");
    expect(labelText).toBeInTheDocument();
  });

  test("Chama a função passada como prop 'aoClicar' quando clicado", async () => {
    // ARRANGE
    const user = userEvent.setup();
    const darLikeMock = jest.fn();
    render(<Button label="Botão" aoClicar={darLikeMock} />);
    const button = screen.getByRole("button");

    // ACT
    await user.click(button);

    // ASSERT
    expect(darLikeMock).toBeCalled();
  });
});
