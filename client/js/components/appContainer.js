import React, {Component} from 'react'
import {GridList, GridTile} from 'material-ui/GridList'
import IconButton from 'material-ui/IconButton'
import Subheader from 'material-ui/Subheader'
import StarBorder from 'material-ui/svg-icons/toggle/star-border'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: '100%',
    height: '100%',
    overflowY: 'auto',
  },
}

const tilesData = [
  {
    img: 'http://www.mavikadin.com/images/ckfiles/images/bebeklere-cilek-ne-zaman-verilir-1.jpg',
    title: 'Breakfast',
    author: '$11.24',
  },
  {
    img: 'http://www.greatgrubclub.com/domains/greatgrubclub.com/local/media/images/medium/4_1_1_apple.jpg',
    title: 'Tasty burger',
    author: '$14.24',
  },
  {
    img: 'https://sciencebob.com/wp-content/uploads/2015/04/tomato_small.png',
    title: 'Camera',
    author: '$11.00',
  },
  {
    img: 'https://i1.wp.com/invorma.com/wp-content/uploads/2015/06/Crenshaw-Melon.jpg',
    title: 'Morning',
    author: '$131.00',
  },
  {
    img: 'https://s-media-cache-ak0.pinimg.com/originals/da/e2/2c/dae22c646f8c6e1f27ee742c2474bb27.jpg',
    title: 'Hats',
    author: '$11.00',
  },
  {
    img: 'http://wallpapersdsc.net/wp-content/uploads/2016/09/Fruit-HD.jpg',
    title: 'Honey',
    author: '$11.00',
  },
  {
    img: 'http://pslainc.com/wp-content/uploads/2015/09/dragon-fruit-pitaya.jpg',
    title: 'Vegetables',
    author: '$11.00',
  },
  {
    img: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQp98vXKu9NkuL5r64tGBK_HaPIhE5BjSHJO0eupzuGIijlBoLb',
    title: 'Water plant',
    author: '$311.00',
  },
]

 export default class AppContainer extends Component {
   constructor(props) {
     super(props)
   }

  render() {

    const muiTheme = getMuiTheme({
      userAgent: this.props.userAgent,
    })

   return (
     <MuiThemeProvider muiTheme={muiTheme}>
       <div style={styles.root}>
         <GridList
           cellHeight={180}
           style={styles.gridList}
         >
           <Subheader>December</Subheader>
           {tilesData.map((tile) => (
             <GridTile
               key={tile.img}
               title={tile.title}
               subtitle={<span><b>{tile.author}</b></span>}
               actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
             >
               <img src={tile.img} />
             </GridTile>
           ))}
         </GridList>
       </div>
     </MuiThemeProvider>

   )
  }
}
