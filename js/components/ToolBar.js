import React from 'react';

var ToolBar = React.createClass({
    displayName: 'ToolBar',

    render() {
        return (
            <div className="row">
                <div className="col-sm-12">
                    <div className="toolbar">
                        <button className="btn btn-default" onClick={this.props.sorted}>
                            <i className="icon fa fa-sort-alpha-asc"></i>
                            <span> Sort by name</span>
                        </button>

                        <button className="btn btn-default" onClick={this.props.sorted}>
                            <i className="icon fa fa-sort-numeric-desc"></i>
                            <span> Sort by age</span>
                        </button>
                    </div>
                </div>
            </div>
        );
    },
});

export default ToolBar;
