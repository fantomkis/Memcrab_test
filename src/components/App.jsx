export const App = () => {
  state = {
    board: [
      [0, 2, 3, 0],
      [2, 2, 1, 0],
      [0, 0, 0, 0],
    ],
  };
  // return (
  //   <div
  //     style={{
  //       height: '100vh',
  //       display: 'flex',
  //       justifyContent: 'center',
  //       alignItems: 'center',
  //       fontSize: 40,
  //       color: '#010101'
  //     }}
  //   >

  const { board } = this.state;

  return (
    <div>
      {board.map((row, i) => (
        <div key={i}>
          {row.map((col, j) => (
            <span key={j}>{col}</span>
          ))}
        </div>
      ))}
    </div>
  );
};
