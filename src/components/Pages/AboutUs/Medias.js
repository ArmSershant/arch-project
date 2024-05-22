import React from 'react';
import Media from '../../Utilities/About/Medias';
import Breadcrumb from "../../Utilities/Breadcrumb/Breadcrumb";
/*import Team from '../../Utilities/Team/Team';
import UpComingGameTwo from '../../Utilities/UpComingGameTwo/UpComingGameTwo';*/

const Medias = () => {
    return (

        <React.Fragment>
            
            {/* Breadcrumb component */}
            <Breadcrumb pageTitle={'Media'} currentPage={'Media'} />
            {/* About component */}
            <Media/>
            {/* Team component 
            <Team/>*/}
            {/* Up coming game component 
            <UpComingGameTwo/>*/}

        </React.Fragment>

    );
}

export default Medias;