import React, { Component } from "react"
import { Form, Segment, Button } from "semantic-ui-react"

export default class EventForm extends Component {
  state = {
    title: "",
    date: "",
    city: "",
    venue: "",
    hostedBy: "",
  }

  componentDidMount() {
    if (this.props.selectedEvent !== null) {
      this.setState({
        ...this.props.selectedEvent,
      })
    }
  }
  handleInputValueChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    })
  }

  handleFormSubmit = (event) => {
    event.preventDefault()
    if (this.state.id) {
      this.props.updateEvent(this.state)
    } else {
      this.props.createNewEvent(this.state)
    }
  }

  render() {
    const { cancelFormOpen } = this.props
    const { title, date, city, venue, hostedBy } = this.state

    return (
      <Segment>
        <Form onSubmit={this.handleFormSubmit}>
          <Form.Field>
            <label>Event Title</label>
            <input
              name='title'
              value={title}
              onChange={this.handleInputValueChange}
              placeholder='Title'
            />
          </Form.Field>
          <Form.Field>
            <label>Event Date</label>
            <input
              name='date'
              value={date}
              onChange={this.handleInputValueChange}
              type='date'
              placeholder='Event Date'
            />
          </Form.Field>
          <Form.Field>
            <label>City</label>
            <input
              name='city'
              value={city}
              onChange={this.handleInputValueChange}
              placeholder='City event is taking place'
            />
          </Form.Field>
          <Form.Field>
            <label>Venue</label>
            <input
              name='venue'
              value={venue}
              onChange={this.handleInputValueChange}
              placeholder='Enter the Venue of the event'
            />
          </Form.Field>
          <Form.Field>
            <label>Hosted By</label>
            <input
              name='hostedBy'
              value={hostedBy}
              onChange={this.handleInputValueChange}
              placeholder='Enter the name of person hosting'
            />
          </Form.Field>
          <Button positive type='submit'>
            Submit
          </Button>
          <Button type='button' onClick={cancelFormOpen}>
            Cancel
          </Button>
        </Form>
      </Segment>
    )
  }
}
