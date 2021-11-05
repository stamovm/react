import ItemList from './ItemList'

const Content = ({ items, name, handleName, handleCheck, handleDelete }) => {
  return (
    <main>
      <p onDoubleClick={handleName}>Hello {name}</p>
      {items.length ? (
        <ItemList
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ) : (
        <p style={{ marginTop: '2rem', marginBottom: '2rem' }}>
          The list is empty.
        </p>
      )}
    </main>
  )
}

export default Content
