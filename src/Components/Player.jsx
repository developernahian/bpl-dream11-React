import PropTypes from 'prop-types';

const Player = ({ player }) => {
    console.log(player);


    return (
        <div>




            <div className="card bg-base-100  shadow-xl">
                <figure>
                    <img
                        src={player.image}
                        alt={`Image of ${player.name}`} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>



        </div>
    );
};


Player.propTypes = {

    player: PropTypes.object.isRequired,


}

export default Player;