import { StyleSheet, Text, View , TouchableOpacity} from 'react-native'
import React , {useState}from 'react'
import theme from '../../constants/theme';

export default function Shop() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  // const handleClick = (index) => {
  //   const newBoard = [...board];
  //   if (newBoard[index] || calculateWinner(newBoard)) return;

  //   newBoard[index] = isXNext ? 'X' : 'O';
  //   setBoard(newBoard);
  //   setIsXNext(!isXNext);
  // };
  const handleClick = (index) => {
    if (calculateWinner(board) || board[index]) return;

    const newBoard = [...board];
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);

    if (!calculateWinner(newBoard)) {
      makeAIMove(newBoard);
    }
  };
  const makeAIMove = (currentBoard) => {
    const availableMoves = [];
    for (let i = 0; i < currentBoard.length; i++) {
      if (!currentBoard[i]) {
        availableMoves.push(i);
      }
    }

    if (availableMoves.length > 0) {
      const randomIndex = Math.floor(Math.random() * availableMoves.length);
      const aiMove = availableMoves[randomIndex];

      const newBoard = [...currentBoard];
      newBoard[aiMove] = 'O';

      setBoard(newBoard);
      setIsXNext(true);
    }
  };
  const handleRestart = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
  };

  const renderSquare = (index) => (
    <TouchableOpacity style={styles.square} onPress={() => handleClick(index)}>
      <Text style={styles.squareText}>{board[index]}</Text>
    </TouchableOpacity>
  );

  const winner = calculateWinner(board);
  const status = winner
    ? `Winner: ${winner}`
    : `Next player: ${isXNext ? 'X' : 'O'}`;

  return (
    <View style={styles.container}>
    <Text style={styles.status}>{status}</Text>
    <View style={styles.board}>
      <View style={styles.row}>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </View>
      <View style={styles.row}>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </View>
      <View style={styles.row}>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </View>
    </View>
    <TouchableOpacity style={styles.button} onPress={handleRestart}>
        <Text style={styles.buttonText}>Restart</Text>
      </TouchableOpacity>
  </View>
);
};

const calculateWinner = (squares) => {
const lines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

for (let i = 0; i < lines.length; i++) {
  const [a, b, c] = lines[i];
  if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
    return squares[a];
  }
}

return null;
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
backgroundColor:'white',
  },
  button: {
    padding: 10,
    backgroundColor: theme.backgroundColor.fillingBlue,
    borderRadius: 5,
    margin: 15,
  },
  buttonText: {
    color: 'black',
  },
  status: {
    marginBottom: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black'
  },
  board: {
    borderWidth: 1,
    borderColor: 'black',
  },
  row: {
    flexDirection: 'row',
    color: 'black'
  },
  square: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
  },
  squareText: {
    fontSize: 24,
    color: 'black'
  },
});
