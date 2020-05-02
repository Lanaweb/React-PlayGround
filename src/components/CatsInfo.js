import React from 'react';


class CatsInfo extends React.Component {



    render() {
        let cats = [
            { name: 'Lucky', breed: 'flame-point', favFood: 'shrimp' },
            { name: 'Masea', favFood: 'eggs', color: 'grey' },
            { name: 'Pusok', favFood: 'fish' },
        ]

        return (
            <>
                {cats.map((cat, i) =>
                    <div className="tableCats">
                        <div key={i} className="oneCat">
                            {Object.entries(cat).map(([key, value]) =>
                                <p> {key} : {value} </p>
                            )}
                        </div>
                        <div className="orderNr">
                            {i + 1}
                        </div>
                    </div>


                )}
            </>
        )

    }
}

export default CatsInfo;