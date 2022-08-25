import * as React from "react"
import EmployeeCard from "../components/about/EmployeeCard"

const components = {
  // eslint-disable-next-line react/display-name
  EmployeeCard: ({ link, title, bg, children, ...props }) => (
    <EmployeeCard {...props} link={link} title={title} bg={bg}>
      {children}
    </EmployeeCard>
  ),
}

export default components
