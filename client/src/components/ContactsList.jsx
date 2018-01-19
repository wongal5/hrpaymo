import React from 'react';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
import ChatWindow from './ChatWindow.jsx';

import { connect } from 'redux';

class ContactsList extends React.Component {

    render() {
        return (
            <div>
                <List>
                <Subheader>Friends</Subheader>
                {
                    this.props.friends && this.props.friends.length &&
                    this.props.friends.map((friend, i) => {
                        return <ChatWindow key={i} friend={friend} uiAvatar={this.props.uiAvatar}/>;
                    })
                }
                </List>
            </div>
        );
    }
};


const mapStateToProps = state => {
    friends: state.friends
}

export default connect(mapStateToProps)(ContactsList);