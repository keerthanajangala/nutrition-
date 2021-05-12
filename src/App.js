import React, { Component } from 'react';
import Table from './Table';
import Text from './Text';
import './App.css';




class App extends Component{
    str;
    url;
    constructor(){
        super();
        this.state={
            textarea: '',
            clicked: false,
            calories:'',
            Fat:'',
            Saturated:'',
            Cholestrol:'',
            Sodium:'',
            CH:'',
            fiber:'',
            protein:'',
            VitaD:'',
            Calcium:'',
            Iron:'',
            Pottasium:'',

            a_Fat:'',
            a_Saturated:'',
            a_Cholestrol:'',
            a_Sodium:'',
            a_CH:'',
            a_fiber:'',
            a_protein:'',
            a_VitaD:'',
            a_Calcium:'',
            a_Iron:'',
            a_Pottasium:'',
 

        }
         }
         input = (e) => {
            this.setState({textarea :e.target.value});
            
            }
            analyze = () => {
                this.setState({reset:true});
                let api = "https://api.edamam.com/api/nutrition-data?app_id=66aa462e&app_key=013316e63dab26a9ef534ab047776e79&ingr=";
                this.str= this.state.textarea; 
                this.url=api+this.str;
                this.url=this.url.replace(/ /g, '%20');
                this.getData();


            }
            onReset = () => {
                this.setState({reset:false});
              }
            getData(){
               
                fetch(this.url)
              .then(resolve =>{
                return resolve.json()
              })
              .then(data2 =>{
                this.setState({calories:data2.totalNutrientsKCal.ENERC_KCAL.quantity});
                this.setState({carbs:Math.round(data2.totalDaily.CHOCDF.quantity)});
                this.setState({Cholestrol:Math.round(data2.totalDaily.CHOLE.quantity)});
                this.setState({d_Saturated:Math.round(data2.totalDaily.FASAT.quantity)});
                this.setState({Fat:Math.round(data2.totalDaily.FAT.quantity)});
                this.setState({Iron:Math.round(data2.totalDaily.FE.quantity)});
                this.setState({Sodium:Math.round(data2.totalDaily.NA.quantity)});
                this.setState({VitaD:Math.round(data2.totalDaily.VITD.quantity)});
                this.setState({Calcium:Math.round(data2.totalDaily.CA.quantity)});
                this.setState({protein:Math.round(data2.totalDaily.PROCNT.quantity)});
                this.setState({Pottasium:Math.round(data2.totalDaily.K.quantity)});
            
                this.setState({a_carbs:Math.round(data2.totalNutrients.CHOCDF.quantity)});
                this.setState({a_Cholestrol:Math.round(data2.totalNutrients.CHOLE.quantity)});
                this.setState({a_Saturated:Math.round(data2.totalNutrients.FASAT.quantity)});
                this.setState({a_Fat:Math.round(data2.totalNutrients.FAT.quantity)});
                this.setState({a_Iron:Math.round(data2.totalNutrients.FE.quantity)});
                this.setState({a_Sodium:Math.round(data2.totalNutrients.NA.quantity)});
                this.setState({a_VitaD:Math.round(data2.totalNutrients.VITD.quantity)});
                this.setState({a_Calcium:Math.round(data2.totalNutrients.CA.quantity)});
                this.setState({a_protein:Math.round(data2.totalNutrients.PROCNT.quantity)});
                this.setState({a_Pottasium:Math.round(data2.totalNutrients.K.quantity)});
            })
        }
        render(){
            return (
                <div>
          
                  <h1 id="h1" style={{textAlign:'center'}}>Nutritional Analysis</h1>
           
                <p id="para"style={{textAlign:'center'}}>Enter an ingredient list list for what you are cooking, like "1 cup rice, 10 oz chickpeas", etc.
                    Enter each ingredient on a new line.</p>
              <div className="col-md-12">
              <div style={{display:'flex'}}>
                  <Text input={this.input} analyze={this.analyze} reset={this.onReset} removebtn={this.state.reset}/>
                  {this.state.reset?
                  <Table 
                  calories={this.state.calories}
                  Fat={this.state.Fat}
                  Saturated={this.state.Saturated}
                  Cholestrol={this.state.Cholestrol}
                  Sodium={this.state.Sodium}
                  CH={this.state.CH}
                  fiber={this.state.fiber}
                  protein={this.state.protein}
                  VitaD={this.state.VitaD}
                  Calcium={this.state.Calcium}
                  Iron={this.state.Iron}
                  Pottasium={this.state.Pottasium}
        
                  a_Fat={this.state.a_Fat}
                  a_Saturated={this.state.a_Saturated}
                  a_transFat={this.state.a_transFat}
                  a_Cholestrol={this.state.a_Cholestrol}
                  a_Sodium={this.state.a_Sodium}
                  a_CH={this.state.a_CH}
                  a_fiber={this.state.a_fiber}
                  a_sugars={this.state.a_sugars}
                  a_protein={this.state.a_protein}
                  a_VitaD={this.state.a_VitaD}
                  a_Calcium={this.state.a_Calcium}
                  a_Iron={this.state.a_Iron}
                  a_Pottasium={this.state.a_Pottasium}
                  />:''}
              </div>
              </div>
        
              </div>
              
            )
          }
    
         
}
export default App;