import * as React from "react"
import Logo from "../../compositions/logo/logo"
import renderer from "react-test-renderer"

it("renders Logo correctly", () => {
  const tree = renderer.create(<Logo />).toJSON()
  expect(tree).toMatchSnapshot()
})
