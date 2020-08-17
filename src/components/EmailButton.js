import React, { Component } from 'react';
import classnames from 'classnames';
import Clipboard from 'react-clipboard.js';

class EmailButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clipboardCaption: false,
        };
        this.onClipboardSuccess = this.onClipboardSuccess.bind(this);
        this.showClipboardCaption = this.showClipboardCaption.bind(this);
        this.hideClipboardCaption = this.hideClipboardCaption.bind(this);
        this.linkOverride = this.linkOverride.bind(this);
    }

    onClipboardSuccess = (e) => {
        if (this.state.clipboardCaption) {
            return false;
        }
        this.showClipboardCaption();
    }

    showClipboardCaption = () => {
        this.setState({
            clipboardCaption: true
        })
        setTimeout(() => this.hideClipboardCaption(), 2000);
    }

    hideClipboardCaption = () => {
        this.setState({
            clipboardCaption: false
        })
    }

    linkOverride = (e) => {
        e.stopPropagation();
        return false;
    }

    render() {
        return (
            <Clipboard
                data-clipboard-text="christina.hohng@gmail.com"
                className="clipboard-button"
                onSuccess={this.onClipboardSuccess}
            >
                {this.props.children}
                <div className={classnames(
                    'clipboard-caption',
                    { 'clipboard-caption-active': this.state.clipboardCaption }
                )}><h6 className="email">My email has been copied to your clipboard!</h6></div>
            </Clipboard>
        );
    }
}

export default EmailButton;
