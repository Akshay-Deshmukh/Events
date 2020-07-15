import React, { Component } from 'react'
import { List, Image } from 'semantic-ui-react'

export default class EventListAttendes extends Component {
    render() {
        const {attendees} = this.props;
        return (
          <List.Item>
              <Image as='a' size='mini' circular src={attendees.photoURL}/>
          </List.Item>
        )
    }
}
