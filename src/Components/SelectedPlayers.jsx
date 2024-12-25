import PropTypes from 'prop-types';
import SelectPlayer from './SelectPlayer';

const SelectedPlayers = ({ selectPlayer, handleDeletePlayer }) => {
    // PROBLEM:
    // console.log(selectPlayer) ;

    return (
        <div>
            
            <p>{selectPlayer.length}</p>

            <div className='flex flex-col gap-3'>
                {
                    selectPlayer.map(selectPlayer => <SelectPlayer key={selectPlayer.playerId} selectPlayer={selectPlayer} handleDeletePlayer={handleDeletePlayer}></SelectPlayer>)
                }
            </div>

            {/* {
                selectPlayer.map((player, index) => <section key={index} className='bg-red-100'>

                    <div className='bg-green-100'>
                        {player.image}
                        {player.name}
                    </div>

                </section>)
            } */}



                {/* ********************** */}

                {/*  **************** */}

        </div>
    );
};


SelectedPlayers.propTypes = {

    selectPlayer: PropTypes.array.isRequired,
    handleDeletePlayer: PropTypes.func.isRequired,



}



export default SelectedPlayers;