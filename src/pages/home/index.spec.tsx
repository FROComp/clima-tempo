import { render, screen } from "@testing-library/react";
import { HomeView } from "./view";
import { describe, expect, it, vitest } from "vitest";
import { fullWeatherMock } from "services/GetWeatherServiceMock";

describe("App", () => {
  it("renders the App component", () => {
    render(
      <HomeView
        loading={false}
        city={"Oliveira"}
        data={fullWeatherMock}
        handleGetWeatherInfo={vitest.fn()}
        handleChangeCity={vitest.fn()}
      />
    );

    const text = screen.getByText("Informe sua cidade");

    expect(text).toBeInTheDocument();
  });
});
