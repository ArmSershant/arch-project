import React from 'react';
import Game from '../../Utilities/About/Game';
import Breadcrumb from "../../Utilities/Breadcrumb/Breadcrumb";
/*import Team from '../../Utilities/Team/Team';
import UpComingGameTwo from '../../Utilities/UpComingGameTwo/UpComingGameTwo';*/

const Games = () => {
    return (

        <React.Fragment>
            
            {/* Breadcrumb component */}
            <Breadcrumb pageTitle={'Game Creation'} currentPage={'Game Creation'} />
            {/* About component */}
            <Game/>
            {/* Team component 
            <Team/>*/}
            {/* Up coming game component 
            <UpComingGameTwo/>*/}

        </React.Fragment>

    );
}

export default Games;