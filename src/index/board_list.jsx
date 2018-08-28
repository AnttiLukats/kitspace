'use strict'
const React = require('react')

const BoardCard = require('./board_card')
const Intro = require('./intro')

const OptIn = require('../opt_in')

var BoardList = React.createClass({
  propTypes: {
    data: React.PropTypes.array,
    searching: React.PropTypes.bool
  },
  render() {
    const intro = this.props.searching ? null : <Intro />
    if (this.props.data.length === 0) {
      return (
        <div>
          <div style={{height: '40vh'}} />
          <div style={{width: '100%', textAlign: 'center'}}>
            Sorry, no results.
          </div>
        </div>
      )
    }
    const cardNodes = this.props.data.map(function(data, index) {
      return <BoardCard data={data} key={data.id + index} lazyLoad={true} />
    })
    return (
      <div>
        {intro}
        <div className="boardListContainer">
          <div className="boardList">{cardNodes}</div>
        </div>
        <OptIn />
      </div>
    )
  }
})

module.exports = BoardList
