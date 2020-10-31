export const HelloMessage = (props: { readonly name: string }): JSX.Element => {
  return <div>Hello {props.name}</div>
}
