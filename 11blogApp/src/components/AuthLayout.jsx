/* eslint-disable react/prop-types */
function Authenticate({children, Authentication = true}) {
  return (
    <div>{children}</div>
  )
}

export default Authenticate;