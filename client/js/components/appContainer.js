import React, {Component} from 'react'
import {GridList, GridTile} from 'material-ui/GridList'
import IconButton from 'material-ui/IconButton'
import Subheader from 'material-ui/Subheader'
import StarBorder from 'material-ui/svg-icons/toggle/star-border'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table'

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: '100%',
    overflowY: 'auto',
  },
}

const tilesData = [
  {
    img: 'http://www.mavikadin.com/images/ckfiles/images/bebeklere-cilek-ne-zaman-verilir-1.jpg',
    title: 'strawberry',
    price: 11,
  },
  {
    img: 'http://www.greatgrubclub.com/domains/greatgrubclub.com/local/media/images/medium/4_1_1_apple.jpg',
    title: 'apple',
    price: 110,
  },
  {
    img: 'https://sciencebob.com/wp-content/uploads/2015/04/tomato_small.png',
    title: 'tomato',
    price: 120,
  },
  {
    img: 'https://i1.wp.com/invorma.com/wp-content/uploads/2015/06/Crenshaw-Melon.jpg',
    title: 'papaya',
    price: 220,
  },
  {
    img: 'https://s-media-cache-ak0.pinimg.com/originals/da/e2/2c/dae22c646f8c6e1f27ee742c2474bb27.jpg',
    title: 'cherry',
    price: 61,
  },
  {
    img: 'http://wallpapersdsc.net/wp-content/uploads/2016/09/Fruit-HD.jpg',
    title: 'kiwi fruit',
    price: 30,
  },
  {
    img: 'http://pslainc.com/wp-content/uploads/2015/09/dragon-fruit-pitaya.jpg',
    title: 'dragon fruit',
    price: 88,
  },
  {
    img: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQp98vXKu9NkuL5r64tGBK_HaPIhE5BjSHJO0eupzuGIijlBoLb',
    title: 'avocado',
    price: 130,
  },
]

 export default class AppContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      price: 0,
      count: 0,
      open: false,
      selected: []
    }
  }

  _handleClose(){
    this.setState({open: false})
  }

  _handleButtonClick(item) {
    var selected = this.state.selected
    var found = false
    selected.map((i) => {
      if(i.title == item.title) {
        found = true
        i.count = i.count + 1
      }
    })
    if(!found) {
      item.count = 1
      selected.push(item)
    }

    this.setState({
      count: this.state.count + 1,
      price: this.state.price + item.price,
      selected: selected,
    })
  }

  render() {
    const muiTheme = getMuiTheme({
      userAgent: this.props.userAgent,
    })

   return (
    <MuiThemeProvider muiTheme={muiTheme}>
      <div style={{height: '100%'}}>
        <AppBar
          style={{position: 'fixed'}}
          title={"Count: "+ this.state.count + " | Price: " + this.state.price}
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onLeftIconButtonTouchTap={() => this.setState({open: true})}
        />
        <div style={{height: '80px', width: '100%'}}></div>
        <div style={styles.root}>
          <GridList
            cellHeight={180}
            style={styles.gridList}
            >
              {tilesData.map((item) => (
                <GridTile
                  key={item.img}
                  title={item.title}
                  subtitle={<span>{'$ '}<b>{item.price}</b></span>}
                  actionIcon={<IconButton onClick={this._handleButtonClick.bind(this, item)}><StarBorder color="white" /></IconButton>}
                  >
                    <img src={item.img} />
                </GridTile>
              ))}
          </GridList>
        </div>
        <Drawer
          docked={false}
          width={250}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          <Card>
            <CardMedia
              overlay={<CardTitle title="Welcome" />}
            >
              <img src="http://www.hotel-r.net/im/hotel/es/nice-view-16.jpg" />
            </CardMedia>
          </Card>
          <Table
            fixedHeader={true}
            fixedFooter={false}
            selectable={false}
            multiSelectable={false}
          >
            <TableBody
              displayRowCheckbox={false}
              deselectOnClickaway={false}
              showRowHover={false}
              stripedRows={false}
            >
              <TableRow key={'header'}>
                <TableRowColumn style={{width: '60%'}}>Fruit</TableRowColumn>
                <TableRowColumn style={{width: '40%'}}>Count</TableRowColumn>
              </TableRow>
              {this.state.selected.map((item) => (
                <TableRow key={item.img}>
                  <TableRowColumn style={{width: '60%'}}>{item.title}</TableRowColumn>
                  <TableRowColumn style={{width: '40%'}}>{item.count}</TableRowColumn>
                </TableRow>
              ))}
            </TableBody>
          </Table>

        </Drawer>
      </div>
    </MuiThemeProvider>

   )
  }
}
