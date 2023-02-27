import { render } from "@testing-library/react"
import AdminUIPanel from "../admin-ui"

test('Should render Admin UI component on page load', () => {
    const { getByTestId } = render(<AdminUIPanel />)
    const element = getByTestId('adminUI-panel');
    expect(element).toBeInTheDocument();
})