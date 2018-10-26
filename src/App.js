import React, { Component } from 'react';
import './main.scss';

const Tab = ({title, tabClick, selected = false}) => {
    return (
      <div className={`menu-tab ${selected && 'selected'}`} onClick={tabClick}>
        <div className="tab-title">
          {title}
        </div>
      </div>
    );
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabIndex: null
    }
  }

  handleClick(index) {
    let newIndex = null;
    if (this.state.tabIndex !== index) {
      newIndex = index;
    }

    this.setState({
      tabIndex: newIndex
    }); 
  }

  renderTabs() {
    const { tabIndex } = this.state;
    const tabs = [
      {title: 'tab 1'},
      {title: 'tab 2'},
      {title: 'tab 3'}
    ];

    return tabs.map((tab, index) => {
      return (
        <Tab 
          key={index}
          tabClick={() => {this.handleClick(index)}}
          title={tab.title} 
          selected = {index === tabIndex ? 'selected' : false}
        />
      );
    });
  }

  renderTabMenu() {
    const { tabIndex } = this.state;
    if (tabIndex === null) {
      return null;
    }

    return (
      <div className={`tab-menu position-${tabIndex}`} />
    );
  }

  render() {
    return (
      <div className="status-menu rtl">
        {this.renderTabMenu()}
        <div className="pop-menu-tabs">
          {this.renderTabs()}
        </div>
        <div className="status-info">
          <div className="info-item">info item</div>
        </div>
      </div>
    );
  }
}

export default App;
