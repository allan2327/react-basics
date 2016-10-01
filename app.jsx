var PLAYERS = [
  {
    name: "James Cool",
    score: 33,
    id: 1,
  },
  {
    name: "John Stamos",
    score: 666,
    id: 2,
  },
  {
    name: "Madonna",
    score: 40,
    id: 3,
  },
  {
    name: "Feminist Loser",
    score: 0,
    id: 4,
  },
]



function Header(props) {
  return (
    <div className="header">
      <h1>{props.title}</h1>
    </div>
  );
}
Header.propTypes = {
  title: React.PropTypes.string.isRequired,
};


// the Counter Stateless Functional Component has been converted into a Component Class...this allows us to add state to the component
// Any Stateless Functional Component can be written as a Component Class, but the former is typically preferable unless state is needed
var Counter = React.createClass({
  propTypes: {},
  getInitialState: function() {
    return {
      score: 0,
    }
  },
  render: function() {
    return (
      <div className="counter">
        <button className="counter-action decrement"> - </button>
        <div className="counter-score"> {this.state.score} </div>
        <button className="counter-action increment"> + </button>
      </div>
    );
  }
});



function Player(props) {
  return (
    <div className="player">
      <div className="player-name">
        {props.name}
      </div>
      <div className="player-score">
        <Counter />
      </div>
    </div>
  );
}
Player.propTypes = {
  name: React.PropTypes.string.isRequired,
  score: React.PropTypes.number.isRequired,
}



// components start with a capital letter
function Application(props) {
  return (
    <div className="scoreboard">
      <Header title={props.title} />

      <div className="players">
        {props.players.map(function(player) {
          return <Player name={player.name} score={player.score} key={player.id}/>
        })}
      </div>
    </div>
  );
}
// optional: .isRequired as a chained method after .string or .number
Application.propTypes = {
  title: React.PropTypes.string,
  players: React.PropTypes.arrayOf(React.PropTypes.shape({
    name: React.PropTypes.string.isRequired,
    score: React.PropTypes.number.isRequired,
    id: React.PropTypes.number.isRequired,
  })).isRequired,
};
Application.defaultProps = {
  title: "Scoreboard",
}
ReactDOM.render(<Application players={PLAYERS}/>, document.getElementById('container'));
