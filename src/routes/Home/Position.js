import React, { Component } from 'react'
import { classNames, dealInterval } from '@utils'
import { Table, Mixin } from '@components'
import ScrollPannel from './components/ScrollPanel'
import styles from './index.less'


export default class View extends Component {
  startInit = () => {
    // this.getPosition()
  }

  getPosition = () => {
    const { dispatch, modelName } = this.props
    dispatch({
      type: `${modelName}/getPosition`
    }).then(() => {
      dealInterval(() => {
        this.getPosition()
      })
    })
  }

  render() {
    const { model: { positionList = [] } } = this.props
    const head = [
      {
        name: '合约',
        dataIndex: 'market',
        // className: styles.red
        //width: '30%',
      },
      {
        name: '当前价格',
        dataIndex: 'no',
        //width: 200,
      },
      {
        name: '当前合理价格',
        dataIndex: 'averagePrice',
        //width: 400,
      },
      {
        name: '杠杆倍数',
        dataIndex: 'leverage',
        //width: '30%',
      },
      {
        name: '数量(张)',
        dataIndex: 'amount',
        //width: '30%',
      },
      {
        name: '开仓均价',
        dataIndex: 'averagePrice',
        //width: '30%',
      },
      {
        name: '持续占用保证金',
        dataIndex: 'positionMoney',
        //width: '30%',
      },
      {
        name: '维持保证金',
        dataIndex: 'keepMoney',
        //width: '30%',
      },
      {
        name: '强平价格',
        dataIndex: 'overPrice',
        //width: '30%',
      },
      {
        name: '浮动盈亏(收益率)',
        dataIndex: 'floatProfit',
        //width: '30%',
      },
      {
        name: '操作',
        dataIndex: 'work',
      },

    ]
    let data = positionList
    data = data.length > 4 ? data : data.concat((new Array(4 - data.length)).fill({}))
    const tableProp = {
      head, data
    }
    return (
      <Mixin.Child that={this} >
        <div
          className={
            classNames(
              {
                view: true
              },
              styles.position
            )
          }
        >
          <ScrollPannel
            scroller={false}
            header={
              <div >当前持仓</div >
            }
          >
            <Table className={styles.table} {...tableProp}>等等</Table >

          </ScrollPannel >
        </div >
      </Mixin.Child >
    )
  }
}

