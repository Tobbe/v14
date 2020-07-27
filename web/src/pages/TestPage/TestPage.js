import { Link } from '@redwoodjs/router'
import TestLayout from 'src/layouts/TestLayout'

const TestPage = () => {
  return (
    <TestLayout>
      <h1>TestPage</h1>
      <p>Find me in "./web/src/pages/TestPage/TestPage.js"</p>
      <p>
        My default route is named "test", link to me with `
        <Link to="test">routes.test()</Link>`
      </p>
    </TestLayout>
  )
}

export default TestPage
