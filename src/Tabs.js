import React, {Component, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import Tab from './Tab';
import {store} from "./redux/store";
import Main from "./components/Main";

// Не понял почему табы на классах, тогда как остальные компоненты функциональные.
// Классы в реакте считаются legacy, поэтому лучше все делать на функциональных.
class Tabs extends Component {


    static propTypes = {
        children: PropTypes.instanceOf(Array).isRequired,

    }

    constructor(props) {
        super(props);
        this.state = {
            activeTab: this.props.children[0].props.label,
        };
    }
    onClickTabItem = (tab) => {


        this.setState({activeTab: tab});
    }

    render() {
        const {
            onClickTabItem,
            props: {
                children,
            },
            state: {
                activeTab,
            }
        } = this;

        return (
            <div className="tabs">
                <ol className="tab-list">
                    {children.map((child) => {
                        const {label} = child.props;

                        return (
                            <Tab
                                activeTab={activeTab}
                                key={label}
                                label={label}
                                onClick={onClickTabItem}
                            />
                        );
                    })}
                </ol>
                <div className="tab-content">
	                {/* Тут бы больше подошел метод find */}
                    {children.map((child) => {
                        if (child.props.label !== activeTab) return undefined;
                        return child.props.children;
                    })}
                </div>
            </div>
        );
    }
}

export default Tabs;
