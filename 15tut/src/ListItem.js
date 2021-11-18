const ListItem = ({ item }) => {
  return (
    <tr>
      {Object.keys(item).map((key) => (
        <td>{JSON.stringify(item[key])}</td>
      ))}
    </tr>
  )
}

export default ListItem
