import React,{Component} from 'react'
import Grid from '@material-ui/core/Grid'
import './assets/css/Table.css'
import Image from 'material-ui-image'

import goat from './assets/image/animal-baby-goat2.jpg';
import cat from './assets/image/animal-black-cat-blep.jpg';
import dog from './assets/image/animal-corgi-dog.jpg';
import dolphin from './assets/image/animal-dolphin-smile.jpg';
import fox from './assets/image/animal-fox.jpg';
import goose from './assets/image/animal-goose-family.jpg';
import hamster from './assets/image/animal-hamster-cucumber.jpg';
import kitty from './assets/image/animal-kittybook.jpg';
import bear from './assets/image/animal-polar-bear.jpg';
import panda from './assets/image/animal-red-panda.jpg';
import turtle from './assets/image/animal-turtle.jpg';
import duck from './assets/image/animals-duck.jpg';

const address=[goat,cat,dog,dolphin,fox,goose,hamster,kitty,bear,panda,turtle,duck]
class Table extends Component{
    state={
        order:[0,1,2,3,4,5,6,7,8,9,10,11]
    }
    assess=event=>{
        for (let i=0;i<11;i++)
        {
            let newOrder=this.state.order
            let temp=newOrder[i]
            let j=Math.floor(Math.random()*11)
            newOrder[i]=newOrder[j]
            newOrder[j]=temp
            this.setState({order:newOrder})
        }
    }
    render(){
        return(
            <>
            <Grid container className="totalTable">
                {   this.state.order.map((element) => {
                    return(
                        <>
                    
                     <Grid item xs={3} onClick={this.assess}>
                     <img src={address[element]} alt={address[element]} className="imageStyle" resizeMode='contain'
                     boxShadow={2} />
                     </Grid>
                    </>
                    )
                   })
                }
           </Grid>
           </>
        )
    }
}
export default Table