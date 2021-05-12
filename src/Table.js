import './Table.css';


const Table = ({calories,Fat,Saturated,Cholestrol,Sodium,CH,fiber,protein,VitaD,Calcium,Iron,Pottasium,
    a_Fat,a_Saturated,a_transFat,a_Cholestrol,a_Sodium,a_CH,a_fiber,a_sugars,a_protein,a_VitaD,a_Calcium,a_Iron,a_Pottasium}) => {
    return(
        <div className="col-sm-6">
            <section className="box"> 
                <div style={{display:"-webkit-inline-flex"}}>
                    <h1 style={{borderBottom:"10px solid black"}}>Nutrition Facts</h1>
                </div>
                <table style={{marginBottom:"20px"}}>
                    <thead>
                        <tr >
                            <th>Amount per serving</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style={{borderBottom:"10px solid black"}}>
                            <th colSpan="2" id="size" >
                                <b>Calories</b>
                            </th>
                            <td>{calories}</td>
                        </tr>
                        <tr style={{borderBottom:"1px solid black",textAlign:'end'}}>
                            <td>% Daily Value*</td>
                        </tr>
                        <tr style={{borderBottom:"1px solid black"}}>
                            <td colSpan="2">
                                <b>Total Fat</b> {a_Fat}
                            </td>
                            <td>{Fat} %</td>
                        </tr>
                        <tr style={{borderBottom:"1px solid black"}}>
                            <td colSpan="2">&nbsp; Staurated Fat {a_Saturated}</td>
                            <td>{Saturated} %</td>
                        </tr>
                        <tr style={{borderBottom:"1px solid black"}}>
                            <td colSpan="2">&nbsp; Trans Fat {a_transFat}</td>
                                <td></td>
                            </tr>
                        <tr style={{borderBottom:"1px solid black"}}>
                            <td colSpan="2">
                                <b>Cholestrol</b> {a_Cholestrol}
                            </td>
                            <td>{Cholestrol} %</td>
                        </tr>
                        <tr style={{borderBottom:"1px solid black"}}>
                            <td colSpan="2">
                                    <b>Sodium</b> {a_Sodium}
                                </td>
                                <td>{Sodium} %</td>
                        </tr>
                        <tr style={{borderBottom:"1px solid black"}}>
                                <td colSpan="2">
                                    <b>Total Carbohydrate</b> {a_CH}
                                </td>
                                <td>{CH} %</td>
                        </tr>
                        <tr style={{borderBottom:"1px solid black"}}>
                            <td colSpan="2">&nbsp; Dietary Fiber {a_fiber}</td>
                            <td>{fiber} %</td>
                        </tr>
                        <tr style={{borderBottom:"1px solid black"}}>
                            <td colSpan="2">&nbsp; Total Sugars {a_sugars}</td>
                            <td></td>
                        </tr>
                        <tr style={{borderBottom:"1px solid black"}}>
                            <td colSpan="2">&nbsp; Includes - Added Sugars</td>
                            <td></td>
                        </tr>
                        <tr style={{borderBottom:"1px solid black"}}>
                                <td colSpan="2">
                                    <b>Protein</b> {a_protein}
                                </td>
                                <td>{protein} %</td>
                        </tr>
                        <tr style={{borderBottom:"1px solid black"}}>
                            <td colSpan="2">Vitamin D {a_VitaD}</td>
                            <td>{VitaD} %</td>
                        </tr>
                        <tr style={{borderBottom:"1px solid black"}}>
                            <td colSpan="2">Calcium {a_Calcium}</td>
                            <td>{Calcium} %</td>
                        </tr>
                        <tr style={{borderBottom:"1px solid black"}}>
                            <td colSpan="2">Iron {a_Iron}</td>
                            <td>{Iron} %</td>
                        </tr>
                        <tr >
                            <td colSpan="2">Potassium {a_Pottasium}</td>
                            <td>{Pottasium} %</td>
                        </tr>

                    </tbody>
                </table>
                <div>*Percent Daily Values are based on a 2000 calorie diet</div>
            </section>
        </div>
    )
}

export default Table;