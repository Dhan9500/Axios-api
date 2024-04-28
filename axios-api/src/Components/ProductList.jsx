export default function ProductList({ data }) {
  return (
    <div className="w-[50%] max-h-96 overflow-auto">
      <table className="table-auto">
        {data.map((item, index) => {
          return (
            <tbody>
              <tr className="bg-violet-400 border-b-4">
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>
                  <div className=" bg-red-200 w-24 h-24 rounded overflow-hidden">
                    <img className="object-cover" src={item.image} alt="" />
                  </div>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}
