import React, { Component } from 'react';
import axios from "axios";
import { Heading, Paragraph, Text, Pane } from "evergreen-ui"

export default class Home extends Component {

state = {
    incidentsList: []
}

getDataFromDB = () => {
    axios
    .get("https://bikewise.org:443/api/v2/incidents?page=1&proximity_square=100&proximity=Berlin")
    .then(response => {
        console.log("response", response.data.incidents)
        this.setState({ incidentsList: response.data.incidents})
    })
}

componentDidMount () {
    this.getDataFromDB()
}

    render() {

        const incidents = this.state.incidentsList
        // console.log(incidents)

        return (
            <>
            <p>TOTAL: {incidents.length}</p>
                {incidents.map(incident => {
                    return (
                    <Pane key={incident.id}
                        height="100%"
                        width="100%"
                        border="default"
                        display="flex"
                        // alignItems="center"
                        justifyContent="start"
                        border="default"
                    >
                        <Pane>
                            {(incident.media.image_url_thumb) == null ? "no image to display" : <img src={incident.media.image_url_thumb} alt={incident.title} width="150"/>}
                        </Pane>

                        <Pane>
                        <Heading size={700}>{incident.title}</Heading>
                    
                        <Text size={500}>{incident.description}</Text>

                        <Heading size={400}>Date of the theft</Heading>
                        <Text size={500}>{incident.ocurred_at}</Text>

                        <Heading size={400}>Date of when the case was reported</Heading>
                        <Text size={500}>{incident.updated_at}</Text>

                        <Heading size={400}>Location of the theft</Heading>
                        <Text size={500}>{incident.address}</Text>

                        </Pane>
                    </Pane>
                    )}            
                )}
            </>
        )
    }
}
