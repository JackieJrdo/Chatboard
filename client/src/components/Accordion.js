import React, { Component } from 'react'
import { Accordion, Icon } from 'semantic-ui-react'

export default class AccordionExampleFluid extends Component {
  state = { activeIndex: 0 }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state
    const headingStyle = {
        color: '#9A4444',
        fontSize: '18px',
        fontFamily: 'Fantasy'
    }

    return (
        <div style={{ paddingBottom: '20px', paddingTop: '20px', color: "#CD5C08"}}>    
        <Accordion fluid styled>
            <Accordion.Title style={headingStyle}
            active={activeIndex === 0}
            index={0}
            onClick={this.handleClick}
            >
            <Icon name='dropdown' color='red' />
            <em>Website Information</em>
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 0}>
            <p><em>
                This example website is built using MongoDB, Express, React, Node, and Graphql! You are able to register or login to an account where you can post, like, and comment, as well as see what everyone else is up to! 
            </em></p>
            </Accordion.Content>

            <Accordion.Title style={headingStyle}
            active={activeIndex === 1}
            index={1}
            onClick={this.handleClick}
            >
            <Icon name='dropdown' />
            <em>Features</em>
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 1}>
            <p><em>
                The main features of this website rely on Semantic UI's ~prestyled~ components. The posts you and others make are displayed using cards, while this feature you are on uses the accordion component -flexed so it fits-. This feature is useful when wanting to bring forward or collapse relevant information!
            </em></p>
            </Accordion.Content>

            <Accordion.Title style={headingStyle}
            active={activeIndex === 2}
            index={2}
            onClick={this.handleClick}
            >
            <Icon name='dropdown' />
            <em>Community & Support</em>
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 2}>
            <p><em>
                Find us @shpeuf on Instagram, SHPEUF on Facebook or our very own site at shpeuf.com!
            </em></p>
            <p><em>
                You can reach out specifically to the SHPE tech cabinet on our discord to reveal solutions to any technical issues you may be having.
            </em></p>
            </Accordion.Content>
        </Accordion>
        
        </div>    
    )}

}