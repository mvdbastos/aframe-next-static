import React from 'react';
import Head from 'next/head'
import { Entity, Scene } from 'aframe-react';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appRendered: false,
      color: 'red'
    };
  }

  componentDidMount() {
    if (typeof window !== 'undefined') {
      require('aframe')
      require('aframe-particle-system-component')
      this.setState({ appRendered: true })
    }
  }

  changeColor() {
    const colors = ['red', 'orange', 'yellow', 'green', 'blue'];
    this.setState({
      color: colors[Math.floor(Math.random() * colors.length)]
    });
  }

  render() {
    return (
      <div style={{ height: '100%', width: '100%' }}>
        <Head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>A-Frame React Boilerplate</title>
        </Head>

        {this.state.appRendered &&
          <a-scene>
            <a-box color="#689f38"
              width="8"
              height="4.5"
              depth="0.2"
              position="0 3 -7">
              <a-circle color="#333333"
                side="double"
                position="2 0 0.11">
              </a-circle>
            </a-box>
            <a-circle color="#ffc107"
              side="double"
              position="-2 3 -6.89">
            </a-circle>
            <a-cylinder color="#616161"
              height="2"
              radius="2"
              segments-radial="6"
              open-ended="true"
              side="double">
            </a-cylinder>
          </a-scene>
        }
      </div>
    )
  }
}
