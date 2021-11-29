import React from 'react';
import '../styles/ConceptGrid.scss';

type Props = {
    isMain: boolean;
}

const ConceptGrid: React.FC<Props> = (props) =>{
    return (
        <div className="conceptGrid">
            {props.isMain && <div className="buttons">
                <button>{"< back"}</button>
            </div>}
            <div className="concepts">

            </div>
        </div>
    );
}

export default ConceptGrid;