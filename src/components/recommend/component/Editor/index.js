import React from 'react'
require('./index.scss')
export default class Editor extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isStart:false,
      isFocus:false
    }
  }
  // 监听键盘弹起事件
  handleOnKeyUp = (e) => {
    let content = document.querySelector('.input-content').innerText
    console.log(e.keyCode, 'e.keyCode')
    if(e.keyCode === 8){
      content = content.substring(0,content.length-1);
    }
    this.setState({
      isStart: content
    })
  }
  // 监听聚焦事件
  handleOnFocus = () => {
    this.setState({
      isFocus: true
    })
  }
  // 监听失焦事件
  handleOnBlur = () => {
    this.setState({
      isFocus: false
    })
  }
  render() {
    return (
      <div className={`comments-editor ${this.state.isFocus ? 'isActive' : ''}`}>
        <div className="editor-inputWrap">
          <div className="editor-input">
            { !this.state.isStart ? <div className="placeholder">写下你的评论...</div> : null }
            <div
              onKeyUp={this.handleOnKeyUp}
              onFocus={this.handleOnFocus}
              onBlur={this.handleOnBlur}
              className="input-content"
              contentEditable="true"
              suppressContentEditableWarning="true"
            >
            </div>
          </div>
          <div className="editor-upload"></div>
        </div>
        <button className="editor-button">发布</button>
      </div>
    )
  }
}