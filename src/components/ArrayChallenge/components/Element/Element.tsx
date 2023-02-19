import "./Element.sass"

function Element(props: { id: number, onAdd: Function }) {
  const { id, onAdd } = props

  const handleChange = (value: string) => {
    console.log(value)
  }

  return <div className="element">
    <div className="content">
      <input value={id} onChange={e => handleChange(e.currentTarget.value)} style={{ width: `${id.toString.length + 2}ch`, height: "4ch" }} />
    </div>
    <div className="click-area" onClick={() => onAdd(id)} >+</div>
  </div>
}
export default Element


