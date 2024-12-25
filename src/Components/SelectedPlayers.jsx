import PropTypes from 'prop-types';
import SelectPlayer from './SelectPlayer';

const SelectedPlayers = ({ selectPlayer, handleDeletePlayer, handleClickActiveTab }) => {
    // PROBLEM:
    // console.log(selectPlayer) ;

    return (
        <div>

            {/* start */}
            {
                selectPlayer.length === 0 ? <h1 className='text-2xl font-semibold text-center'>No players selected yet...</h1> : ''
            }
            {/* end */}

            

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
            {/* Available Players Button */}
            <div className="mb-4">
                
                <button
                    onClick={() => handleClickActiveTab('available')}
                    className=" bg-[#E7FE29] hover:bg-yellow-300 font-bold py-3 px-4 rounded-xl border-2 border-[#E7FE29] hover:border-yellow-500"
                >
                    Add More Player
                </button>
            </div>
            {/*  **************** */}

        </div>
    );
};


SelectedPlayers.propTypes = {

    selectPlayer: PropTypes.array.isRequired,
    handleDeletePlayer: PropTypes.func.isRequired,

    handleClickActiveTab: PropTypes.func.isRequired



}



export default SelectedPlayers;