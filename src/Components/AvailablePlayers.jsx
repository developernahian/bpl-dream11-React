import { useEffect, useState } from "react";
import Player from "./Player";


const AvailablePlayers = () => {

    const [players, setPlayers] = useState([]);
    useEffect(() => {
        fetch('./src/assets/players.json')
            .then(res => res.json())
            .then(data => setPlayers(data))
    }, [])
    // console.log(players.length);//output: 15
    
    return (
        <div>
            <h1>Available Players</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4">
            {
                players.map(player => <Player key={player.playerId} player={player} ></Player>)
            }
            </div>

            {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    players.map(player => <Player
                        key={player.playerId}
                        player={player}
                    ></Player>)
                }
            </div> */}
        </div>
    );
};

export default AvailablePlayers;