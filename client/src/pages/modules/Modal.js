import React from "react";
import { Input, Modal } from "antd";
import Draggable from "react-draggable";

export class ModalWindow extends React.Component {
  state = {
    visible: false,
    disabled: false,
    data: null,
    callback: null,
    bounds: { left: 0, top: 0, bottom: 0, right: 0 },
  };

  input = React.createRef();
  draggleRef = React.createRef();

  showModal = (callback) => {
    this.setState({
      callback: callback,
      visible: true,
    });
  };

  handleOk = (e) => {
    this.setState(
      {
        visible: false,
        data: this.input.current.state.value,
      },
      () => {
        const { callback, data } = this.state;
        callback(data);
      }
    );
  };

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  onStart = (event, uiData) => {
    const { clientWidth, clientHeight } = window.document.documentElement;
    const targetRect = this.draggleRef.current?.getBoundingClientRect();
    // this.input.current.state.value = "";
    if (!targetRect) {
      return;
    }
    this.setState({
      data: null,
      bounds: {
        left: -targetRect.left + uiData.x,
        right: clientWidth - (targetRect.right - uiData.x),
        top: -targetRect.top + uiData.y,
        bottom: clientHeight - (targetRect.bottom - uiData.y),
      },
    });
  };

  render() {
    const { bounds, disabled, visible } = this.state;

    return (
      <>
        <Modal
          title={
            <div
              style={{
                width: "100%",
                cursor: "move",
              }}
              onMouseOver={() => {
                if (disabled) {
                  this.setState({
                    disabled: false,
                  });
                }
              }}
              onMouseOut={() => {
                this.setState({
                  disabled: true,
                });
              }}
              onFocus={() => {}}
              onBlur={() => {}}
            >
              Put your text
            </div>
          }
          visible={visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          modalRender={(modal) => (
            <Draggable
              disabled={disabled}
              bounds={bounds}
              onStart={(event, uiData) => this.onStart(event, uiData)}
            >
              <div ref={this.draggleRef}>{modal}</div>
            </Draggable>
          )}
        >
          <Input ref={this.input} size="large" placeholder="Your text" />
        </Modal>
      </>
    );
  }
}
