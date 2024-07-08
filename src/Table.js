export default function Table({ expenses }) {
  const total = expenses.reduce((acc, curr) => acc + curr.value, 0);

  return (
    <>
      <table
        style={{
          borderWidth: "2px",
          borderStyle: "solid",
          borderColor: "black",
        }}
      >
        <thead>
          <tr>
            <th
              style={{
                borderWidth: "2px",
                borderStyle: "solid",
                borderColor: "black",
                textAlign: "center",
              }}
            >
              Expense Name
            </th>
            <th
              style={{
                borderWidth: "2px",
                borderStyle: "solid",
                borderColor: "black",
                textAlign: "center",
              }}
            >
              Expense Value
            </th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense, index) => (
            <tr key={index}>
              <td
                style={{
                  borderWidth: "2px",
                  borderStyle: "solid",
                  borderColor: "black",
                  textAlign: "center",
                }}
              >
                {expense.name}
              </td>
              <td
                style={{
                  borderWidth: "2px",
                  borderStyle: "solid",
                  borderColor: "black",
                  textAlign: "center",
                }}
              >
                {expense.value}
              </td>
            </tr>
          ))}
          {
            <tr>
              <td
                style={{
                  borderWidth: "2px",
                  borderStyle: "solid",
                  borderColor: "black",
                  textAlign: "center",
                }}
              >
                Total
              </td>
              <td
                style={{
                  borderWidth: "2px",
                  borderStyle: "solid",
                  borderColor: "black",
                  textAlign: "center",
                }}
              >
                {total}
              </td>
            </tr>
          }
        </tbody>
      </table>
    </>
  );
}
